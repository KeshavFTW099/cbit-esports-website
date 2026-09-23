// Structured real event data for CBIT Esports
// Sourced directly from official CBIT Esports Club records and confirmed activations

export const UPCOMING_EVENTS = [
  {
    id: 'cbit-invitational-2026',
    title: 'CBIT Inter-College Esports Invitational',
    category: 'Valorant & BGMI',
    date: 'April 2026',
    time: '10:00 AM IST',
    venue: 'CBIT Campus & Online',
    status: 'REGISTRATION OPEN',
    isOpen: true,
    shortDescription: 'The flagship inter-college esports tournament featuring premier collegiate teams competing in Valorant and BGMI.',
    fullDescription: 'CBIT Esports welcomes collegiate rosters from across Telangana and Andhra Pradesh to battle for supremacy, championship trophies, and partner rewards. Open to all verified college students.',
    rules: [
      'Valid college student ID required for all players',
      'Standard competitive rulesets apply for Valorant & BGMI',
      'Cross-college teams are not permitted for collegiate bracket',
      'Registration closes 48 hours prior to bracket seeding'
    ],
    registrationDeadline: 'March 31, 2026',
    teamSize: '5 Players + 1 Sub',
    featuredImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cbit-weekly-scrims-2026',
    title: 'CBIT Campus Scrims: Season 4',
    category: 'Community Scrimmage',
    date: 'Ongoing / Weekly',
    time: 'Every Saturday, 6:00 PM',
    venue: 'Official CBIT Esports Discord',
    status: 'OPEN WEEKLY',
    isOpen: true,
    shortDescription: 'Weekly competitive scrimmages for CBIT students across tactical shooters and battle royale titles.',
    fullDescription: 'Weekly friendly yet fierce community matches to scout talent, practice team communication, and build campus leaderboards.',
    rules: [
      'Exclusively for CBIT students and alumni',
      'Custom room credentials shared in verified Discord role'
    ],
    registrationDeadline: 'Weekly Fridays',
    teamSize: 'Solos / Duos / Squads',
    featuredImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
  }
];

export const PAST_EVENTS_BY_YEAR = {
  '2026': [
    {
      id: 'free-fire-jjk-2026',
      year: 2026,
      shortDate: '17 FEB',
      date: '17 February 2026',
      fullDate: '17 February 2026',
      title: 'Free Fire × Jujutsu Kaisen',
      shortTitle: 'FF × JJK',
      category: 'Themed Gaming Activation',
      description: 'A themed gaming activation blending competitive mobile gameplay with pop-culture anime engagement. Students and gaming enthusiasts gathered on campus for structured bracket play and community interactions.',
      thumbnail: '/images/events/2026/free-fire-jjk/01.webp',
      image: '/images/events/2026/free-fire-jjk/01.webp',
      images: [
        '/images/events/2026/free-fire-jjk/01.webp',
        '/images/events/2026/free-fire-jjk/02.webp',
        '/images/events/2026/free-fire-jjk/03.webp',
        '/images/events/2026/free-fire-jjk/04.webp',
        '/images/events/2026/free-fire-jjk/05.webp'
      ],
      galleryUrl: 'https://drive.google.com/drive/folders/1q6T_Mq4iqm1oOtHo66s5KtAa2ve3wrwA',
      actionType: 'drive',
      actionUrl: 'https://drive.google.com/drive/folders/1q6T_Mq4iqm1oOtHo66s5KtAa2ve3wrwA',
      actionLabel: 'VIEW PHOTO GALLERY →',
      partners: [
        { name: 'Free Fire', logo: '/partners/free-fire-transparent.png' },
        { name: 'Jujutsu Kaisen' }
      ],
      participantCount: null
    },
    {
      id: 'krafton-cct-real-cricket-2026',
      year: 2026,
      shortDate: '18 FEB',
      date: '18 February 2026',
      fullDate: '18 February 2026',
      title: 'Krafton CCT Real Cricket',
      shortTitle: 'Krafton CCT Real Cricket',
      category: 'Publisher Campus Tournament',
      description: 'A competitive virtual cricket activation conducted as part of the KRAFTON Campus Cricket Tournament (CCT) at CBIT, uniting mobile gamers across campus in intense head-to-head match-ups and live stadium bracket play.',
      thumbnail: '/images/events/2026/krafton-cct-real-cricket/01.webp',
      image: '/images/events/2026/krafton-cct-real-cricket/01.webp',
      images: [
        '/images/events/2026/krafton-cct-real-cricket/01.webp',
        '/images/events/2026/krafton-cct-real-cricket/02.webp',
        '/images/events/2026/krafton-cct-real-cricket/03.webp',
        '/images/events/2026/krafton-cct-real-cricket/04.webp',
        '/images/events/2026/krafton-cct-real-cricket/05.webp'
      ],
      galleryUrl: 'https://drive.google.com/drive/folders/1cwcz08_RKho0WuKTzRoSv6V56q0x4lIO',
      actionType: 'drive',
      actionUrl: 'https://drive.google.com/drive/folders/1cwcz08_RKho0WuKTzRoSv6V56q0x4lIO',
      actionLabel: 'VIEW PHOTO GALLERY →',
      partners: [
        { name: 'KRAFTON', logo: '/partners/krafton-transparent.png' },
        { name: 'Real Cricket' }
      ],
      participantCount: null
    },
    {
      id: 'krafton-cct-bgmi-2026',
      year: 2026,
      shortDate: '19 FEB',
      date: '19 February 2026',
      fullDate: '19 February 2026',
      title: 'Krafton CCT BGMI',
      shortTitle: 'Krafton CCT BGMI',
      category: 'Publisher Collegiate Esports Activation',
      description: 'A publisher-backed collegiate esports tournament conducted at CBIT in partnership with KRAFTON. The activation brought competitive BGMI lobby battles directly to campus, fostering collegiate circuits and esports awareness.',
      thumbnail: '/images/events/2026/krafton-cct-bgmi/01.webp',
      image: '/images/events/2026/krafton-cct-bgmi/01.webp',
      images: [
        '/images/events/2026/krafton-cct-bgmi/01.webp',
        '/images/events/2026/krafton-cct-bgmi/02.webp',
        '/images/events/2026/krafton-cct-bgmi/03.webp',
        '/images/events/2026/krafton-cct-bgmi/04.webp',
        '/images/events/2026/krafton-cct-bgmi/05.webp'
      ],
      galleryUrl: 'https://drive.google.com/drive/folders/16GG6c6nD2Shzb9iiaTXzJadF0UbkZe-f',
      actionType: 'drive',
      actionUrl: 'https://drive.google.com/drive/folders/16GG6c6nD2Shzb9iiaTXzJadF0UbkZe-f',
      actionLabel: 'VIEW PHOTO GALLERY →',
      partners: [
        { name: 'KRAFTON', logo: '/partners/krafton-transparent.png' },
        { name: 'BGMI' }
      ],
      participantCount: null
    },
    {
      id: 'infinix-codm-2026',
      year: 2026,
      shortDate: '02 APR',
      date: '2 April 2026',
      fullDate: '2 April 2026',
      title: 'Infinix × Call of Duty Mobile',
      shortTitle: 'Infinix × CODM',
      category: 'Gaming Brand Activation',
      description: 'A smartphone-powered gaming activation combining high-refresh mobile performance with competitive Call of Duty Mobile matches, providing students with hands-on device testing, tournament brackets, and showcase play.',
      thumbnail: '/images/events/2026/infinix-codm/01.webp',
      image: '/images/events/2026/infinix-codm/01.webp',
      images: [
        '/images/events/2026/infinix-codm/01.webp',
        '/images/events/2026/infinix-codm/02.webp',
        '/images/events/2026/infinix-codm/03.webp',
        '/images/events/2026/infinix-codm/04.webp',
        '/images/events/2026/infinix-codm/05.webp'
      ],
      galleryUrl: 'https://drive.google.com/drive/folders/13Fe1q8o9Z_z5rqOK3arOXasKthx7EB6W',
      actionType: 'drive',
      actionUrl: 'https://drive.google.com/drive/folders/13Fe1q8o9Z_z5rqOK3arOXasKthx7EB6W',
      actionLabel: 'VIEW PHOTO GALLERY →',
      partners: [
        { name: 'INFINIX', logo: '/partners/infinix-transparent.png' },
        { name: 'Call of Duty Mobile' }
      ],
      participantCount: null
    },
    {
      id: 'monster-bgmi-2026',
      year: 2026,
      shortDate: '08–10 APR',
      date: '8–10 April 2026',
      fullDate: '8–10 April 2026',
      title: 'Monster × BGMI',
      shortTitle: 'Monster × BGMI',
      category: 'Campus Gaming Activation & Invitational',
      description: 'A three-day campus gaming activation conducted at CBIT in collaboration with Monster Energy and BGMI. The activation featured brand engagement, energy drink distribution, and a full competitive BGMI tournament with live on-campus screening.',
      thumbnail: '/images/events/2026/monster-bgmi/01.webp',
      image: '/images/events/2026/monster-bgmi/01.webp',
      images: [
        '/images/events/2026/monster-bgmi/01.webp',
        '/images/events/2026/monster-bgmi/02.webp',
        '/images/events/2026/monster-bgmi/03.webp',
        '/images/events/2026/monster-bgmi/04.webp',
        '/images/events/2026/monster-bgmi/05.webp'
      ],
      galleryUrl: 'https://drive.google.com/drive/folders/1V61lsTcKEvg4kfXhtF-TclcKArp4muru',
      actionType: 'drive',
      actionUrl: 'https://drive.google.com/drive/folders/1V61lsTcKEvg4kfXhtF-TclcKArp4muru',
      actionLabel: 'VIEW PHOTO GALLERY →',
      partners: [
        { name: 'Monster Energy', logo: '/partners/monster-energy-transparent.png' },
        { name: 'BGMI' }
      ],
      participantCount: 128
    },
    {
      id: 'free-fire-campus-league-2026',
      year: 2026,
      shortDate: '07 AUG',
      date: '7 August 2026',
      fullDate: '7 August 2026',
      title: 'Free Fire Campus League',
      shortTitle: 'FF Campus League',
      category: 'Campus Esports Championship',
      description: 'A campus-wide league organized by CBIT Esports Club, providing student teams with a structured stage to compete, refine squad coordination, and showcase grassroots mobile battle royale mastery.',
      thumbnail: '/images/events/2026/free-fire-campus-league/01.webp',
      image: '/images/events/2026/free-fire-campus-league/01.webp',
      images: [
        '/images/events/2026/free-fire-campus-league/01.webp',
        '/images/events/2026/free-fire-campus-league/02.webp',
        '/images/events/2026/free-fire-campus-league/03.webp',
        '/images/events/2026/free-fire-campus-league/04.webp',
        '/images/events/2026/free-fire-campus-league/05.webp'
      ],
      galleryUrl: 'https://drive.google.com/drive/folders/1X1RPKwqfmhaZDEpXll8VgjD_kzTvcXzO',
      actionType: 'drive',
      actionUrl: 'https://drive.google.com/drive/folders/1X1RPKwqfmhaZDEpXll8VgjD_kzTvcXzO',
      actionLabel: 'VIEW PHOTO GALLERY →',
      partners: [
        { name: 'Free Fire', logo: '/partners/free-fire-transparent.png' }
      ],
      participantCount: null
    },
    {
      id: 'nrx-trinity-2026',
      year: 2026,
      shortDate: '11 AUG',
      date: '11 August 2026',
      fullDate: '11 August 2026',
      title: 'NRX Trinity — Final Act',
      shortTitle: 'NRX Trinity',
      category: 'Collegiate Championship Finale',
      description: 'The crowning climax of the NRX Trinity competitive series, bringing together top collegiate rosters for a high-intensity grand final showdown on campus.',
      thumbnail: null,
      image: null,
      images: [],
      galleryUrl: null,
      partners: [],
      participantCount: null,
      actionType: 'instagram',
      actionUrl: 'https://www.instagram.com/stories/highlights/18067450556523828/',
      actionLabel: 'VIEW EVENT HIGHLIGHTS →'
    }
  ],
  '2025': [
    {
      id: 'hp-omen-experience-zone-2025',
      year: 2025,
      shortDate: '13–14 AUG',
      date: '13–14 August 2025',
      fullDate: '13–14 August 2025',
      title: 'HP OMEN Experience Zone',
      shortTitle: 'HP OMEN Zone',
      category: 'Gaming Experience & Product Engagement',
      description: 'A two-day gaming experience activation centered around HP OMEN hardware at CBIT. Students engaged directly with high-performance gaming rigs, testing peripherals and competing in on-site community exhibition matches.',
      thumbnail: '/images/events/2025/hp-omen/01.webp',
      image: '/images/events/2025/hp-omen/01.webp',
      images: [
        '/images/events/2025/hp-omen/01.webp'
      ],
      galleryUrl: null,
      partners: [
        { name: 'HP OMEN', logo: '/partners/hp-omen-transparent.png' }
      ],
      participantCount: null,
      actionType: 'highlights',
      actionUrl: '/collaborate',
      actionLabel: 'VIEW EVENT HIGHLIGHTS →'
    },
    {
      id: 'act-fibernet-bgmi-2025',
      year: 2025,
      shortDate: '11 OCT',
      date: '11 October 2025',
      fullDate: '11 October 2025',
      title: 'ACT Fibernet X BGMI Showdown',
      shortTitle: 'ACT × BGMI',
      category: 'Campus Battle Royale Invitational',
      description: 'A high-intensity campus esports tournament powered by ACT Fibernet, delivering low-latency competitive gaming and tournament bracket play for collegiate rosters.',
      thumbnail: null,
      image: null,
      images: [],
      galleryUrl: null,
      partners: [
        { name: 'ACT Fibernet' },
        { name: 'BGMI' }
      ],
      participantCount: null,
      actionType: 'instagram',
      actionUrl: 'https://www.instagram.com/stories/highlights/18044780885404478/',
      actionLabel: 'VIEW EVENT HIGHLIGHTS →'
    }
  ],
  '2024': [],
  '2023': []
};

// Available years in descending chronological order: ['2026', '2025', '2024', '2023']
export const AVAILABLE_YEARS = ['2026', '2025', '2024', '2023'];

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
