
<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $payload): void {

  http_response_code($status);

  echo json_encode($payload, JSON_UNESCAPED_SLASHES);

  exit;

}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

  respond(405, ['ok' => false, 'error' => 'Method not allowed']);

}

$raw = file_get_contents('php://input');

$data = json_decode($raw ?: '', true);

if (!is_array($data)) {

  respond(400, ['ok' => false, 'error' => 'Invalid JSON']);

}

// Honeypot

if (trim((string)($data['company'] ?? '')) !== '') {

  respond(200, ['ok' => true]);

}

$name  = trim((string)($data['name'] ?? ''));

$email = trim((string)($data['email'] ?? ''));

$url   = trim((string)($data['url'] ?? ''));

$notes = trim((string)($data['notes'] ?? ''));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {

  respond(400, ['ok' => false, 'error' => 'Invalid input']);

}

// Backup log so no enquiry is lost

$logFile = __DIR__ . '/contact_submissions.log';

$entry = [

  'time' => gmdate('c'),

  'name' => $name,

  'email' => $email,

  'url' => $url,

  'notes' => $notes,

  'ip' => $_SERVER['REMOTE_ADDR'] ?? '',

];

@file_put_contents(

  $logFile,

  json_encode($entry, JSON_UNESCAPED_SLASHES) . PHP_EOL,

  FILE_APPEND | LOCK_EX

);

$apiKey = getenv('RESEND_API_KEY');

if (!$apiKey) {

  error_log('Ecommony contact form error: missing RESEND_API_KEY');

  respond(500, ['ok' => false, 'error' => 'Email service is not configured']);

}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');

$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

$safeUrl = htmlspecialchars($url, ENT_QUOTES, 'UTF-8');

$safeNotes = nl2br(htmlspecialchars($notes, ENT_QUOTES, 'UTF-8'));

$html = "

  <h2>New Ecommony contact enquiry</h2>

  <p><strong>Name:</strong> {$safeName}</p>

  <p><strong>Email:</strong> {$safeEmail}</p>

  <p><strong>Website:</strong> {$safeUrl}</p>

  <p><strong>Message:</strong><br>{$safeNotes}</p>

";

$payload = [

  'from' => 'Ecommony <nigel@ecommony.com>',

  'to' => ['nigelabramow@gmail.com'],

  'reply_to' => $email,

  'subject' => 'New Ecommony contact enquiry',

  'html' => $html,

];

$ch = curl_init('https://api.resend.com/emails');

if ($ch === false) {

  error_log('Ecommony contact form error: curl_init failed');

  respond(500, ['ok' => false, 'error' => 'Email send failed']);

}

curl_setopt_array($ch, [

  CURLOPT_POST => true,

  CURLOPT_HTTPHEADER => [

    'Authorization: Bearer ' . $apiKey,

    'Content-Type: application/json',

  ],

  CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_SLASHES),

  CURLOPT_RETURNTRANSFER => true,

  CURLOPT_TIMEOUT => 20,

]);

$responseBody = curl_exec($ch);

$curlError = curl_error($ch);

$statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {

  error_log('Ecommony contact form Resend error: status=' . $statusCode . ' curl=' . $curlError . ' body=' . (string)$responseBody);

  respond(500, ['ok' => false, 'error' => 'Email send failed']);

}

$response = json_decode((string)$responseBody, true);

respond(200, [

  'ok' => true,

  'id' => $response['id'] ?? null,

]);

