const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const OpenAI = require('openai');

if (!process.env.OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY environment variable');
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const categories = ['tracking', 'shopify', 'seo', 'magento', 'wordpress', 'speed'];
const requestedCategory = process.argv[2];
const category = categories.includes(requestedCategory)
  ? requestedCategory
  : categories[Math.floor(Math.random() * categories.length)];
const count = Number.parseInt(process.argv[3] || '1', 10);

if (!Number.isInteger(count) || count < 1) {
  console.error(`Invalid count: ${process.argv[3]}`);
  process.exit(1);
}

function yamlEscape(value) {
  return String(value ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, ' ');
}

function normalizeWhitespace(value) {
  return String(value ?? '')
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function parseJsonArray(text) {
  const trimmed = String(text || '').trim();

  try {
    const parsed = JSON.parse(trimmed);
    return Array.isArray(parsed) ? parsed : [];
  } catch {}

  const match = trimmed.match(/\[[\s\S]*\]/);
  if (!match) return [];

  try {
    const parsed = JSON.parse(match[0]);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function validateReferences(references) {
  const valid = [];

  for (const ref of Array.isArray(references) ? references : []) {
    if (!ref || typeof ref !== 'object') continue;
    if (typeof ref.label !== 'string' || typeof ref.url !== 'string') continue;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(ref.url, {
        method: 'HEAD',
        redirect: 'follow',
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (res.ok) {
        valid.push({
          label: ref.label.trim(),
          url: ref.url.trim(),
        });
      }
    } catch {
      // skip broken links
    }
  }

  return valid;
}

function buildTitlePrompt(category) {
  return `
Generate 5 high-quality blog post titles for an ecommerce technical blog.

CATEGORY: ${category}

Requirements:
- Focus on real-world ecommerce problems
- Include recent or emerging themes where relevant (e.g. Google updates, tracking changes, performance trends, GEO)
- Avoid generic topics
- Avoid repeating common phrasing like "slow down over time"
- Titles should feel like expert observations, not clickbait
- Each title must be unique
- Here are some examples  "Why GA4 revenue doesn’t match your ecommerce platform",
    "Why conversion tracking breaks after a redesign",
    "How consent mode affects ecommerce data accuracy"
    "Why Shopify sites slow down over time",
    "Common Shopify mistakes that hurt conversion",
    "Why apps quietly damage performance"
    "Why technical SEO issues go unnoticed",
    "How crawl inefficiencies waste ranking potential",
    "Why page structure matters more than keywords"
        "Why Magento sites slow down over time",
    "Common Magento performance mistakes",
    "Why Magento category pages become sluggish"
       "Why WordPress sites slow down over time",
    "Common WordPress performance mistakes",
    "Why plugin sprawl hurts WordPress performance"
        "Why site speed slips as websites evolve",
    "What actually makes ecommerce sites feel slow",
    "Why mobile performance breaks first"

Return ONLY a JSON array of strings.
`;
}

function buildArticlePrompt(title, category) {
  return `
You are writing a high-quality technical article for the Ecommony blog.

OBJECTIVE
Write an article that answers a real search question for , ecommerce operators, marketers, technical web professionals, founders and ecommerce managers using Shopify,  Magento or WordPress. The article should help the reader understand what is happening, why it matters, and what to look at first. It should feel useful, intelligent and commercially aware.

CRITICAL STANDARD
This must not read like generic AI content.
Do not use dramatic, inflated or abstract phrases.
Do not use empty consultancy language.
Do not use repetitive sentence openings or repeated phrasing patterns.
Do not rely on stacked short sentences for emphasis.
Do not abruptly jump into bullet lists without first setting context.

TONE
Write like a well-informed technical feature in the style of New Scientist or the Financial Times, but for ecommerce performance.
The tone should be:
- calm
- observant
- specific
- commercially aware
- readable
- authoritative without sounding performative

VOICE RULES
1. Start from something concrete, not abstract.
Bad:
- "At some point, something feels off."
- "In many cases..."
- "Typically..."
Better:
- "After a while, something starts to feel off with your site."
- "Over time, the setup becomes harder to manage."
- "Quite often, the checkout sits on a different domain."
- "As more tools are added, the site begins to carry more weight than it used to."

2. Explain first, list second.
Every section should begin with a short explanatory paragraph that sets context in natural prose.
Only then use bullets if they genuinely help.
Do not open a section with a list unless unavoidable.

3. Vary sentence openings and transitions naturally.
Avoid repeating patterns such as:
- "As the site grows..."
- "As the store grows..."
- "In many cases..."
- "Over time..."
too often in close proximity.
Use natural variation where appropriate, for example:
- "After a while..."
- "As the setup evolves..."
- "Themes rarely stay in their original state..."
- "With analytics, ad platforms and testing tools in place..."
- "At a certain point..."
- "Quite often..."
Do not force synonyms if they sound unnatural.

4. Avoid AI-sounding phrasing.
Never write lines like:
- "The result is not just difference — it is systematic distortion."
- "quietly suppress revenue"
- "technical debt is destroying growth"
- "hidden bottlenecks are silently killing performance"
Avoid rhetorical overstatement.
Prefer plain, grounded explanation.

5. Use everyday language where possible.
Avoid jargon unless it is necessary.
If a technical term is needed, explain it in plain English.

6. Maintain rhythm and readability.
Do not overuse one-line paragraphs.
Do not make the prose feel like bullet points broken into sentences.
Aim for natural paragraph flow.

7. Make it commercially relevant.
Without sounding salesy, connect technical issues to things that matter:
- conversion
- budget efficiency
- decision-making
- search visibility
- user confidence
- wasted acquisition spend

8. Make the article feel authored.
It should sound like someone thinking clearly on the page, not filling a template.

ARTICLE FORMAT
Use this structure unless the topic strongly requires a variation:

# Title

Intro
- 2–3 paragraphs
- grounded opening
- establish the real-world problem
- no hype

## The problem

## Why it happens
- 3 to 5 subsections
- each subsection should start with a short explanatory paragraph
- then bullets only if helpful

## What it means commercially

## What to check first

## Final thought

## CTA

## REFERENCES

Return references as structured data.

Important - this must be done After the article body, output:

OUTPUT REQUIREMENTS
- Return clean markdown only
- No preamble
- No explanation of your approach
- No notes to the editor
- No placeholders
- No emojis

Bad example:
"Why apps quietly damage performance"

Good example:
"Why Shopify apps slow down your store, impact Core Web Vitals and raise CAC — plus what to audit and fix first."

5. Keep CTA in voice
CTA should feel like a natural extension of the article.
Avoid switching into “sales tone”.
It should feel like:
- continuation of diagnosis
- not a pitch

6. Maintain narrative continuity
The article should feel like a single train of thought, not sections stitched together.
Transitions matter more than structure.

LIST FORMATTING RULES

- Every bullet point must be a single idea only
- Never allow a sentence to continue onto the next line inside a bullet
- Always insert a blank line after a bullet list
- Never merge prose into the final bullet item

CTA RULES

- Do NOT use a heading like "CTA"
- The call to action should be a short closing section in natural prose
- It should feel like a continuation of the article, not a labelled block

FINAL OUTPUT REQUIREMENT (CRITICAL)

After the article body, you MUST output a JSON block exactly in this format:

REFERENCES:
[
  {
    "label": "Example source title",
    "url": "https://example.com"
  }
]

Rules:
- This MUST be the final output
- It MUST be valid JSON
- No trailing commas
- No comments
- No explanation before or after
- No markdown formatting around it
- It must start immediately after "REFERENCES:"
- The article body must end BEFORE this block
- References should be output as in text hyperlinks not just URLs.
- Need to check the

If this block is missing or invalid, the output is incorrect.

OUTPUT RULES

- Do NOT include a top-level # title in the markdown body
- The title is handled separately in the layout
- Start content from the introduction paragraph

FINAL OUTPUT BOUNDARY (CRITICAL)

The article must end with the final paragraph of the CTA.

Do NOT append:
- summaries
- meta descriptions
- alternative titles
- closing taglines

The output must end naturally as an article.

If any additional line appears after the final paragraph, the output is

ADDITIONAL WRITING RULES (CRITICAL)

1. Always bridge into technical explanation
Do not jump straight into technical breakdowns.
Before explaining a system, add a short grounding sentence.

Bad:
"Consent Mode isn’t a single switch. It’s a set of signals..."

Better:
"It’s tempting to think of Consent Mode as a single switch. In practice, it’s a set of signals..."

2. Control bullet density
Avoid long consecutive bullet lists.
After 3–5 bullets, return to prose before continuing.
The article should feel like reading, not documentation.

3. Prefer direct phrasing over formal phrasing
Avoid:
- "The visible effect is..."
- "The outcome is..."
- "This results in..."

Prefer:
- "What you see is..."
- "In practice..."
- "This shows up as..."

4. Avoid “constructed” conclusions
Do not end sections or the article with polished, abstract summary lines.

Avoid:
- "X is not just Y — it is Z"
- "X is fundamentally a Y problem"

Prefer:
- grounded, practical closing observations
- what someone should realistically take away

5. Maintain human rhythm
Ensure variation between:
- sentence length
- paragraph structure
- transitions

Avoid patterns that feel templated.

6. Keep the article feeling authored, not generated
At all times, it should feel like:
- someone thinking clearly
- explaining from experience
- not filling a structure

If any section feels like documentation or checklist-heavy, rebalance toward explanation.

FINAL EDITORIAL RULES

1. Smooth section transitions
Each section must begin with a natural transition sentence.
Avoid abrupt openings.
The reader should feel guided, not jumped between sections.

2. Prevent checklist drift
Do not allow multiple checklist-style sections to run back-to-back.
Each checklist must:
- start with explanation
- include bullets only where useful
- return to prose before the next section

3. Formatting discipline
Ensure:
- clear spacing between headings and paragraphs
- no merged sentences
- bullets properly separated
- no run-on instruction blocks

4. Prefer confident but grounded language
Avoid neutral phrasing like:
- "usually comes from"
- "can result in"
Prefer:
- "almost always comes from"
- "this shows up as"

But do not exaggerate.

TOPIC
${title}

CATEGORY
${category}

BRAND CONTEXT
Ecommony is an ecommerce technical consultancy focused on improving site speed, conversion, SEO and tracking confidence for Shopify, Magento and WordPress sites.

FINAL CHECK BEFORE WRITING
Before you write, ensure the article:
- starts concretely
- explains before listing
- varies language naturally
- avoids AI cadence
- avoids jargon unless needed
- reads like an article, not a content template
- connects technical issues to commercial impact
- feels authored, not generated
- does not use dramatic or inflated language
- does not use empty consultancy language
- does not repeat sentence openings or phrasing patterns
- does not rely on stacked short sentences for emphasis
- does not abruptly jump into bullet lists without first setting context
--uses the specified structure unless the topic strongly requires a variation
- returns clean markdown only, with no preamble, explanation, notes, placeholders or emojis
- answers the specified topic in a way that would be genuinely useful and interesting to the target audience of ecommerce operators, marketers, technical web professionals, founders and ecommerce managers using Shopify, Magento or WordPress.
- references real-world issues and scenarios that these readers would recognize, rather than abstract or hypothetical situations.
-the refences json must be output at the end, after the article body, and must be valid and parseable. The article must not include any explanatory text before or after the JSON.
`;
}

function buildImagePrompt(title, category) {
  return `
A premium editorial hero image for a serious ecommerce performance article.

Style:
- Minimal, clean, high-end
- Photography or abstract editorial illustration
- Inspired by Financial Times, Monocle, or Apple marketing visuals
- Strong composition with depth and lighting
- Subtle gradients or natural textures
- No clipart, no icons, no UI elements

Style anchor:
- Consistent visual system across all images
- Soft neutral background (light brown,light grey, ,off-white or muted gradient)
- One dominant focal element, centred or slightly offset right
- Subtle depth of field and lighting
- Minimal colour palette (light brown, blues, greys, soft greens, )

Subject:
- Conceptual representation of "${title}"
- Related to ${category} ecommerce performance, speed, or optimisation
- Avoid literal or obvious visuals (no dashboards, no graphs, no charts)

Constraints:
- No text
- No logos
- No icons
- No cartoon style
- No flat illustration

Mood:
- intelligent
- calm
- technical
- premium
- trustworthy

Output should feel like a high-end magazine feature image.
`;
}

function buildMetaDescriptionPrompt(title, category) {
  return `
Write a high-quality SEO meta description.

TITLE: ${title}
CATEGORY: ${category}

Requirements:
- 140–160 characters
- Expand the title (do NOT repeat it)
- Include platform if relevant (Shopify, Magento, WordPress)
- Include 1–2 key concepts (e.g. Core Web Vitals, conversion rate, tracking accuracy (remember these are examples, not requirements and should not be repeated verbatim unless relevant or forced in ))
- Commercially aware but not salesy
- Written like a sharp editorial subheading
- Must feel compelling in Google search results
- Must include a forward-looking hook (e.g. "what to fix", "what to check", "how to improve")

Bad example:
"Why apps quietly damage performance"

Good example:
"Why Shopify apps slow down your store, impact Core Web Vitals and raise CAC — plus what to audit and fix first."

Return ONLY the description text.
`;
}

async function generateMetaDescription(title, category) {
  const res = await client.responses.create({
    model: 'gpt-5',
    input: buildMetaDescriptionPrompt(title, category),
  });

  return normalizeWhitespace(res.output_text || '');
}

async function generate() {
  try {
    const titleResponse = await client.responses.create({
      model: 'gpt-5',
      input: buildTitlePrompt(category),
    });

    const generatedTitles = parseJsonArray(titleResponse.output_text);

    if (generatedTitles.length === 0) {
      throw new Error('No titles generated');
    }

    const title = String(
      generatedTitles[Math.floor(Math.random() * generatedTitles.length)]
    ).trim();

    if (!title) {
      throw new Error('Generated title was empty');
    }

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

    if (!slug) {
      throw new Error('Could not derive slug from title');
    }

    const today = new Date().toISOString().slice(0, 10);

    const articleResponse = await client.responses.create({
      model: 'gpt-5',
      input: buildArticlePrompt(title, category),
    });

    console.log('Starting image generation...');

    const imageResponse = await client.images.generate({
      model: 'gpt-image-1',
      prompt: buildImagePrompt(title, category),
      size: '1024x1024',
    });

    console.log('Image created');

    const imageBase64 = imageResponse?.data?.[0]?.b64_json;
    if (!imageBase64) {
      throw new Error('Image response did not include base64 data');
    }

    const buffer = Buffer.from(imageBase64, 'base64');

    const imagesDir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    const maxLength = 60;
    const trimmedSlug = slug.length > maxLength
      ? slug.slice(0, maxLength).replace(/-$/, '')
      : slug;

    const imageFilename = `blog-${trimmedSlug}.jpg`;
    const imagePath = path.join(imagesDir, imageFilename);

    await sharp(buffer)
      .resize(1200)
      .jpeg({ quality: 70 })
      .toFile(imagePath);

    console.log('Image saved:', imageFilename);

    const rawText = String(articleResponse.output_text || '');
    const parts = rawText.split('REFERENCES:');
    const body = normalizeWhitespace(parts[0]);

    let cleanBody = body
    .replace(/\n##\s*$/g, '')        // remove trailing ##
    .replace(/\n#+\s*$/g, '')        // remove any hanging headings
    .replace(/\n{3,}/g, '\n\n')      // tidy spacing
    .trim();

    if (!body) {
      throw new Error('Generated article body was empty');
    }

    let references = [];
    if (parts[1]) {
      references = parseJsonArray(parts[1]);
    }

    references = await validateReferences(references);

  

    const metaDescription = await generateMetaDescription(title, category);
    const excerpt = metaDescription;

    const content = `---
title: "${yamlEscape(title)}"
description: "${yamlEscape(metaDescription)}"
image: "/images/${yamlEscape(imageFilename)}"
excerpt: "${yamlEscape(excerpt)}"
category: "${yamlEscape(category)}"
date: ${today}
author: "Nigel Abramow"
references: ${JSON.stringify(references, null, 2)}
---




${cleanBody}
`;

    const outDir = path.join(process.cwd(), 'src', 'content', 'blog', category);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    let outFile = path.join(outDir, `${slug}.md`);
    let counter = 2;

    while (fs.existsSync(outFile)) {
      outFile = path.join(outDir, `${slug}-${counter}.md`);
      counter += 1;
    }

    fs.writeFileSync(outFile, content, 'utf8');
    console.log(`AI draft created: ${outFile}`);
  } catch (error) {
    console.error('Generation failed:', error && error.message ? error.message : error);
    process.exit(1);
  }
}

(async () => {
  for (let i = 0; i < count; i += 1) {
    await generate();
  }
})();