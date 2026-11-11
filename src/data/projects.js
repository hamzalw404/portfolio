export const projects = [
  {
    id: 'neeting',
    title: 'Neeting',
    subtitle: 'AI-Powered Meeting Assistant',
    description:
      'Real-time meeting assistant with voice commands, automated live transcription, and intelligent action item extraction.',
    problem:
      'Manual meeting notes are slow, distracting, and often miss key technical decisions and action items.',
    solution:
      'Engineered an automated web client with real-time audio streaming, speech-to-text processing, and semantic summarization.',
    tags: ['React', 'Node.js', 'WebSockets', 'Web Speech API', 'OpenAI'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/hamzalawayeb/neeting',
    highlights: [
      'Voice-command triggered action items',
      'Real-time transcription and speaker diarization',
      'Instant markdown export and team sync',
    ],
    featured: true,
  },
  {
    id: 'portfolio-v1',
    title: 'Developer Portfolio',
    subtitle: 'Modern personal showcase & project hub',
    description:
      'Fast, accessible, and responsive portfolio designed to present projects, technical skills, and experience with zero bloat.',
    problem:
      'Portfolios are often over-engineered with heavy bundles and distracting animations that hurt load time and readability.',
    solution:
      'Built a lightweight, clean single-page application using React and Vite with optimized asset delivery and semantic markup.',
    tags: ['React', 'Vite', 'CSS', 'Responsive Design'],
    liveDemo: '#',
    github: 'https://github.com/hamzalawayeb/portfolio',
    featured: false,
  },
];
