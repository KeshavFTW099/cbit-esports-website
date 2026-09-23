// Structured real event data for CBIT Esports
// Sourced directly from official CBIT Esports Club records and confirmed activations

export const UPCOMING_EVENTS = [];

export const PAST_EVENTS_BY_YEAR = {
  '2026': [
    {
      id: 'ff-jjk-2026',
      year: '2026',
      shortDate: '17 FEB',
      fullDate: '17th February 2026',
      title: 'Free Fire × Jujutsu Kaisen Event',
      shortTitle: 'FF × JJK',
      category: 'Themed Gaming Activation',
      description: 'A Free Fire × Jujutsu Kaisen themed activation that combined gaming with pop-culture engagement. The event used the Jujutsu Kaisen theme to create a more engaging experience for students and gaming enthusiasts, bringing together competitive gameplay, entertainment and community interaction.',
      image: '/events/ff-jjk-2026.jpg',
      partners: [
        { name: 'Free Fire', logo: '/partners/free-fire-transparent.png' },
        { name: 'Jujutsu Kaisen' }
      ],
      participantCount: null
    },
    {
      id: 'real-cricket-2026',
      year: '2026',
      shortDate: '18 FEB',
      fullDate: '18th February 2026',
      title: 'Real Cricket',
      shortTitle: 'Real Cricket',
      category: 'Campus Esports Tournament',
      description: 'A competitive Real Cricket mobile gaming tournament organized by CBIT Esports, bringing cricket enthusiasts and mobile gamers together for a virtual cricket competition. The event provided students with an opportunity to compete in a familiar sporting format through esports, while encouraging participation, competition, and engagement within the CBIT gaming community.',
      image: '/events/real-cricket-2026.jpg',
      partners: [],
      participantCount: null
    },
    {
      id: 'krafton-esports-2026',
      year: '2026',
      shortDate: '19 FEB',
      fullDate: '19th February 2026',
      title: 'KRAFTON Esports Event',
      shortTitle: 'KRAFTON',
      category: 'Competitive Gaming & Community Engagement',
      description: 'A KRAFTON-powered esports activation that brought the gaming ecosystem closer to the CBIT student community. The event focused on competitive gaming, student participation and creating awareness around professional esports. It provided students with an opportunity to engage directly with a major gaming industry brand and experience esports beyond regular campus tournaments.',
      image: '/events/krafton-esports-2026.jpg',
      partners: [
        { name: 'KRAFTON', logo: '/partners/krafton-transparent.png' }
      ],
      participantCount: null
    },
    {
      id: 'infinix-codm-2026',
      year: '2026',
      shortDate: '02 APR',
      fullDate: '2nd April 2026',
      title: 'INFINIX × Call of Duty Mobile',
      shortTitle: 'INFINIX × CODM',
      category: 'Gaming Brand Activation',
      description: 'A gaming-focused collaboration featuring INFINIX and Call of Duty, designed around competitive gameplay and student engagement. The activation connected a major smartphone brand with the college gaming community, creating an interactive environment where students could experience gaming-focused technology while participating in esports activities.',
      image: '/events/infinix-codm-2026.jpg',
      partners: [
        { name: 'INFINIX', logo: '/partners/infinix-transparent.png' },
        { name: 'Call of Duty Mobile' }
      ],
      participantCount: null
    },
    {
      id: 'monster-bgmi-2026',
      year: '2026',
      shortDate: '08–10 APR',
      fullDate: '8th–10th April 2026',
      title: 'Monster × BGMI',
      shortTitle: 'Monster × BGMI',
      category: 'Campus Gaming Activation',
      description: 'A 3-day esports activation conducted at CBIT in collaboration with Monster Energy and BGMI. The first two days focused on student engagement and Monster Energy product distribution, while the third day featured a competitive BGMI tournament with live match screening for the campus audience. The event brought together 128 participants and created a high-energy gaming experience across the campus.',
      image: '/events/monster-bgmi-2026.jpg',
      partners: [
        { name: 'Monster Energy', logo: '/partners/monster-energy-transparent.png' },
        { name: 'BGMI' }
      ],
      participantCount: 128
    },
    {
      id: 'ff-campus-league-2026',
      year: '2026',
      shortDate: '07 AUG',
      fullDate: '7th August 2026',
      title: 'Free Fire Campus League',
      shortTitle: 'FF Campus League',
      category: 'Campus Esports Competition',
      description: 'A campus-level esports competition organized by CBIT Esports Club, bringing together Free Fire players from the student community for competitive gameplay. The league provided students with a structured platform to compete, showcase their gaming skills, and interact with fellow gaming enthusiasts. Beyond the tournament itself, the event helped strengthen the campus esports community and demonstrated CBIT Esports\' ability to organize and manage competitive gaming events.',
      image: '/events/ff-campus-league-2026.jpg',
      partners: [
        { name: 'Free Fire', logo: '/partners/free-fire-transparent.png' }
      ],
      participantCount: null
    }
  ],
  '2025': [
    {
      id: 'hp-omen-experience-zone-2025',
      year: '2025',
      shortDate: '13–14 AUG',
      fullDate: '13th–14th August 2025',
      title: 'HP OMEN Experience Zone',
      shortTitle: 'HP OMEN Zone',
      category: 'Gaming Experience & Product Engagement',
      description: 'A gaming experience activation centred around HP OMEN, giving students an opportunity to engage with gaming hardware and the broader PC-gaming ecosystem. The experience was designed to combine product interaction with gaming and student engagement, helping connect the brand directly with a young gaming audience.',
      image: '/events/hp-omen-2025.jpg',
      partners: [
        { name: 'HP OMEN', logo: '/partners/hp-omen-transparent.png' }
      ],
      participantCount: null
    }
  ]
};

// Available years in descending chronological order
export const AVAILABLE_YEARS = Object.keys(PAST_EVENTS_BY_YEAR).sort((a, b) => b.localeCompare(a));

// Flattened helper for general use
export const PAST_EVENTS = Object.values(PAST_EVENTS_BY_YEAR).flat();

export const ALL_PARTNERS = [
  {
    name: 'Monster Energy',
    category: 'Energy & Lifestyle Partner',
    note: 'Campus gaming activation and tournament collaboration',
    year: '2026',
    logo: '/partners/monster-energy-transparent.png'
  },
  {
    name: 'KRAFTON',
    category: 'Publisher & Esports Ecosystem',
    note: 'Esports awareness and collegiate activation',
    year: '2026',
    logo: '/partners/krafton-transparent.png'
  },
  {
    name: 'HP OMEN',
    category: 'Hardware & Tech Partner',
    note: 'Partnered for the HP OMEN Experience Zone at CBIT',
    year: '2025',
    logo: '/partners/hp-omen-transparent.png'
  },
  {
    name: 'INFINIX',
    category: 'Smartphone & Device Partner',
    note: 'Mobile gaming brand activation and showcase',
    year: '2026',
    logo: '/partners/infinix-transparent.png'
  },
  {
    name: 'Free Fire',
    category: 'Esports Title & Community',
    note: 'Campus leagues and themed anime pop-culture activations',
    year: '2026',
    logo: '/partners/free-fire-transparent.png'
  }
];

