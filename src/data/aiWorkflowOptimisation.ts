import type { IntentPage } from './intentPages';

export const aiWorkflowOptimisationPage = {
  section: 'services',
  slug: 'ai-workflow-optimisation',
  eyebrow: 'AI Workflow & Process Optimisation',
  title: 'AI Workflow Optimisation | Find Where Your Business Can Save Time',
  description:
    'Identify where AI can remove repetitive work, improve processes and save valuable team time. Ecommony audits workflows and creates a practical AI optimisation roadmap.',
  intentSummary:
    'Most businesses know AI could help. The problem is knowing where. Ecommony identifies where AI can remove operational friction, improve decision-making and create a practical roadmap for implementation.',
  symptoms: [
    'Teams spend hours every week creating reports manually.',
    'Important knowledge exists in people’s heads rather than accessible systems.',
    'Employees repeat the same research, analysis or administration tasks.',
    'Customer questions require manual responses.',
    'Marketing teams spend too much time producing content and not enough time improving performance.',
    'Data exists across multiple systems but insights are slow to produce.',
    'Different teams are experimenting with AI but there is no shared approach.',
    'Leadership knows AI matters but does not know where the biggest opportunities are.'
  ],
  commercialImpact: [
    'Small inefficiencies multiply into hundreds or thousands of lost hours across a team each year.',
    'Skilled people spend less time on customers, strategy and growth.',
    'Information and decisions take longer to reach the people who need them.',
    'Disconnected AI experiments add tools without improving the underlying process.'
  ],
  whatToFixFirst: [
    'Map how work is actually being done today.',
    'Identify processes where AI can reduce time, improve quality or increase consistency.',
    'Prioritise opportunities by time saved, revenue impact, customer experience, decision speed and operational improvement.',
    'Create an implementation roadmap covering tools, process changes, human judgement and measures of success.'
  ],
  howEcommonyHelps: [
    'Audits workflows across marketing, sales, operations, customer experience and ecommerce.',
    'Identifies high-value AI and automation opportunities before selecting tools.',
    'Prioritises opportunities by measurable commercial and operational value.',
    'Creates a practical AI optimisation roadmap for implementation.'
  ],
  contentSections: [
    {
      intro: [
        'Most businesses know AI could help.',
        'The problem is knowing where.',
        'Teams are experimenting with tools, creating prompts, testing automation and adding AI features — but many businesses still have no clear view of which processes are genuinely worth changing.',
        'The result is wasted time, duplicated effort and teams spending hours on work that could be faster, simpler or automated.',
        'Ecommony helps businesses identify where AI can remove operational friction, improve decision-making and create a practical roadmap for implementation.'
      ]
    },
    {
      title: 'What is usually happening',
      intro: [
        'AI adoption often starts from the wrong place.',
        'Someone finds a useful tool. A team experiments with ChatGPT. A few people create their own workflows.',
        'But without understanding the underlying business process, AI becomes another tool added to an already complicated system.',
        'The biggest opportunities are usually not obvious.',
        'They are hidden inside everyday work:'
      ],
      items: [
        'Manual reporting',
        'Repetitive research',
        'Customer queries',
        'Internal documentation',
        'Data analysis',
        'Content workflows',
        'Marketing operations',
        'Sales administration',
        'Knowledge sharing'
      ],
      outro: [
        'The opportunity is not simply using AI.',
        'The opportunity is redesigning how work gets done.'
      ]
    },
    {
      title: 'Common symptoms',
      items: [
        'Teams spend hours every week creating reports manually.',
        'Important knowledge exists in people’s heads rather than accessible systems.',
        'Employees repeat the same research, analysis or administration tasks.',
        'Customer questions require manual responses.',
        'Marketing teams spend too much time producing content and not enough time improving performance.',
        'Data exists across multiple systems but insights are slow to produce.',
        'Different teams are experimenting with AI but there is no shared approach.',
        'Leadership knows AI matters but does not know where the biggest opportunities are.'
      ]
    },
    {
      title: 'Why it matters commercially',
      intro: [
        'Small inefficiencies multiply.',
        'A process that takes one person two hours every week becomes more than 100 hours a year.',
        'Across a team, the opportunity becomes significant.',
        'For example, a 10-person team saving three hours per week each creates approximately:'
      ],
      items: [
        '1,500+ hours of recovered capacity per year',
        'More time focused on customers, strategy and growth',
        'Faster access to information and decisions'
      ],
      outro: [
        'The aim is not simply reducing headcount.',
        'The aim is allowing skilled people to spend more time on valuable work.'
      ]
    },
    {
      title: 'What to fix first',
      intro: [
        'The biggest mistake businesses make is starting with tools.',
        'The better approach is:'
      ],
      items: [
        '1. Map the current workflow — understand how work is actually being done today.',
        '2. Identify high-value opportunities — find processes where AI can reduce time, improve quality or increase consistency.',
        '3. Prioritise by commercial impact — focus on time saved, revenue impact, customer experience, decision speed and operational improvement.',
        '4. Build a practical implementation roadmap — identify which tools are needed, which processes should change, where human judgement remains essential and how success will be measured.'
      ]
    },
    {
      title: 'How Ecommony helps',
      intro: [
        'Ecommony combines commercial experience, technology understanding and practical AI implementation.',
        'We help businesses identify where AI can create value across:'
      ],
      items: [
        'Marketing — content workflows, SEO research, campaign analysis, competitor intelligence and customer insights.',
        'Sales — lead research, proposal creation, CRM workflows and follow-up processes.',
        'Operations — reporting automation, internal documentation, knowledge management and process improvement.',
        'Customer experience — support workflows, customer insight analysis, FAQ and knowledge systems.',
        'Ecommerce — trading analysis, product optimisation, customer segmentation, CRO opportunities and performance reporting.'
      ],
      outro: [
        'The outcome is not another AI strategy document.',
        'It is a practical roadmap showing where AI can save time, improve decisions and create measurable business value.'
      ]
    }
  ],
  faqs: [
    {
      question: 'How do I know where AI can help my business?',
      answer:
        'The starting point is not choosing an AI tool. It is understanding your existing processes, identifying inefficiencies and finding where AI can create the biggest improvement.'
    },
    {
      question: 'Will AI replace employees?',
      answer:
        'The biggest opportunities usually come from improving how people work rather than replacing them. AI is most valuable when it removes repetitive work and allows teams to focus on higher-value activities.'
    },
    {
      question: 'Do we need expensive AI software?',
      answer:
        'Not necessarily. Many opportunities can come from improving existing workflows and using tools businesses already have more effectively.'
    },
    {
      question: 'How much time can AI save?',
      answer:
        'It depends on the process. The biggest opportunities usually come from repetitive, manual workflows where teams spend significant time researching, reporting, analysing or producing content.'
    },
    {
      question: 'Can this work outside ecommerce?',
      answer:
        'Yes. Ecommerce is one area where Ecommony has deep experience, but the principles apply across marketing, sales, operations and customer experience.'
    }
  ]
} satisfies IntentPage;
