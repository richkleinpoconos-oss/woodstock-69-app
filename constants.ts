import { Artist, Producer, FilmStory, LogisticsStory, ModernLegacy, Photographer, ReunionStory } from './types';

export const WOODSTOCK_PHOTOGRAPHERS: Photographer[] = [
  {
    name: "Baron Wolman",
    role: "The First Chief Photographer of Rolling Stone",
    bio: "Wolman was the man who gave Rolling Stone its visual identity. At Woodstock, he didn't just photograph the stage; he was fascinated by the 'Woodstock People'—the fans, the families, and the communal spirit that defined the fields of Bethel.",
    legacy: "His images are credited with humanizing the rock legends of the era, capturing them in moments of quiet reflection and raw energy alike.",
    officialSite: "https://sfae.com/Artists/Baron-Wolman?srsltid=AfmBOoqinvIaYH_o7vcC_aAzVPfoFsCiOzCvQBhDxbKMOUGoEsrIHXbG",
    icon: "📷"
  },
  {
    name: "Elliott Landy",
    role: "The Official Photographer of the Woodstock Festival",
    bio: "Landy was the only photographer granted the freedom to roam the stage and the grounds as an 'official' documentarian. His intimate style and mastery of infrared film created the 'dreamlike' visual legacy we associate with the 60s.",
    legacy: "His book 'Woodstock Vision' is considered the definitive visual history of the event, capturing the intersection of music, nature, and youth culture.",
    officialSite: "https://www.elliottlandy.com/portfolio-items/1969-woodstock-festival-gallery/",
    icon: "🎞️"
  }
];

export const WOODSTOCK_MODERN_LEGACY: ModernLegacy = {
  title: "The Living Legacy: Bethel Woods",
  bethelWoodsSummary: "Max Yasgur's alfalfa field didn't just fade into history. In 2006, the site was transformed into the Bethel Woods Center for the Arts, a world-class performing arts center and museum dedicated to the social, political, and cultural impact of the 1960s. The venue officially opened on July 4, 2006, with a performance by the New York Philharmonic. It stands as a steward of the historic grounds, preserving the integrity of the original festival site while hosting new generations of legendary performances.",
  gerryVision: "Liberty native Alan Gerry, founder of Cablevision Industries, envisioned a project that would preserve the festival's hallowed ground while catalyzing economic growth in Sullivan County. After acquiring the 800-acre site in the late 1990s, he invested over $100 million into the non-profit center. The campus officially debuted in July 2006 with a performance by the New York Philharmonic. Today, it features a 15,000-seat outdoor pavilion and a world-class museum, fulfilling Gerry's promise to transform the site of the 'Three Days of Peace & Music' into a permanent home for the arts and culture.",
  museumDetail: "The Museum at Bethel Woods, opened in 2008, is an immersive multimedia experience located on the site. It tells the story of the 1960s and the festival through state-of-the-art exhibits, holding a massive collection of artifacts and oral histories.",
  monumentDetail: "Since 1984, a simple concrete monument has stood near the top of the hill overlooking the 'bowl' where the stage once sat. It remains a pilgrimage site for fans from around the world who come to stand on the ground where history was made.",
  monumentCreator: "Wayne Saward",
  awards: [
    "National Historic Landmark (Designated 2017)",
    "AASLH Award of Excellence (2024)",
    "Themed Entertainment Association (THEA) Award for Outstanding Achievement",
    "National Register of Historic Places"
  ],
  returningArtists: [
    "Santana",
    "Crosby, Stills & Nash",
    "Joe Cocker",
    "Arlo Guthrie",
    "Joan Baez",
    "John Sebastian",
    "Melanie",
    "The Who (Roger Daltrey)"
  ],
  anniversaryNote: "As we approach 2026, Bethel Woods prepares to celebrate its 20th anniversary of operation. This milestone marks two decades of successfully balancing the preservation of 'the field' with a vibrant future, proving that the spirit of 'Peace and Music' remains a cornerstone of the Sullivan County Catskills.",
  doveTrailDetail: "To further celebrate this history, Sullivan County created the 'Dove Trail'—a series of 50+ uniquely painted dove sculptures, each standing 7 feet tall, scattered throughout local towns. These doves, inspired by the iconic Woodstock logo, serve as a public art trail that guides visitors through the beauty of the Catskills while honoring the peace-loving heritage of 1969."
};

export const WOODSTOCK_REUNION: ReunionStory = {
  title: "Yasgur Road Reunion",
  summary: "While Bethel Woods preserves the historic field, the Yasgur Road Reunion keeps the counter-culture heart beating just down the road. Held on the land that once served as the primary gateway and campsite for the original festival, this annual grassroots gathering brings together 'Woodstockers' of all generations to honor the legacy of Max and Miriam Yasgur.",
  highlights: "The reunion features an annual concert that mirrors the 'Peace and Music' atmosphere with live performances, art vendors, and community camping. It has become a staple for those seeking an authentic, less commercialized connection to the spirit of 1969.",
  connection: "It stands as a living tribute to the hospitality of the Yasgur family, emphasizing that the message of the festival belongs to the people. Each August, the 'Yasgur Road' becomes a pilgrimage site once more, echoing with the sounds of a new generation of peace-loving spirits."
};

export const WOODSTOCK_LOGISTICS: LogisticsStory = {
  title: "The Bethel Miracle",
  summary: "After being rejected and banned by the town of Wallkill just weeks before the start date, the festival was in a death spiral until dairy farmer Max Yasgur 'said yes' and offered his 600-acre alfalfa field in Bethel, NY. What followed was a logistical impossibility that transformed into a cultural landmark.",
  yasgurFact: "Max Yasgur didn't just provide the land; he defended the kids to his neighbors, famously telling the crowd on Day 3 that they had proven to the world that half a million people could get together for three days of fun and music and have nothing but fun and music.",
  chaosFact: "The sheer volume of people backed up the New York State Thruway for over 20 miles, forcing thousands to abandon their cars and walk. This gridlock meant artists had to be ferried in via U.S. Army and private helicopters to reach the stage on time.",
  spiritFact: "Despite the torrential rain turning the fields into a mud bath and a critical food shortage, the crowd remained peaceful. The Hog Farm commune, led by Wavy Gravy, served 'breakfast in bed for 400,000,' and local Bethel residents donated thousands of sandwiches. Remarkably, despite the size and the conditions, there were no reports of violence—only a spirit of radical sharing and community."
};

export const WOODSTOCK_FILM: FilmStory = {
  title: "Woodstock",
  director: "Michael Wadleigh",
  releaseYear: "1970",
  theDeal: "When the festival became a 'free concert' due to the collapse of fences, the producers were left with a staggering $1.3 million debt. The only asset remaining was the film and recording rights.",
  kornfeldsRole: "Artie Kornfeld was the catalyst for the film's survival. While the other partners were focused on the chaos of the grounds, Artie tirelessly pitched the potential of the footage. He successfully convinced Warner Bros. executive Fred Weintraub to put up $100,000 to finish the film—a gamble that eventually paid off in millions and an Academy Award.",
  legacy: "The film didn't just document the festival; it created the legend. Edited by a young Martin Scorsese among others, it transformed a rain-soaked weekend in White Lake into a global symbol of the counter-culture movement."
};

export const WOODSTOCK_PRODUCERS: Producer[] = [
  {
    name: 'Michael Lang',
    role: 'The Visionary / Promoter',
    background: 'Had previously organized the Miami Pop Festival in 1968. Known as the charismatic "face" of Woodstock.',
    contribution: 'Lang provided the creative spark and experience in festival production. He was the one roaming the grounds on his motorcycle, keeping the spirit of "Peace and Music" alive despite the chaos.',
    icon: '🛵',
    links: [
      {
        label: 'Death of Michael Lang as reported by The SullivanTimes',
        url: 'https://www.sullivantimes.com/post/michael-lang-co-producer-of-woodstock-dies-at-77'
      }
    ]
  },
  {
    name: 'Artie Kornfeld',
    role: 'The Music Executive',
    background: 'The youngest Vice President at Capitol Records at the time and a prolific songwriter responsible for over 75 hits, including the 1967 classic "The Rain, the Park and Other Things" for The Cowsills.',
    contribution: 'Kornfeld brought the essential music industry connections and professional credibility. He was instrumental in securing the artists and later played a pivotal role in negotiating the Academy Award-winning documentary film deal.',
    icon: '🎵'
  },
  {
    name: 'John P. Roberts',
    role: 'The Financier',
    background: 'An heir to a pharmaceutical fortune with a multi-million dollar trust fund.',
    contribution: 'Roberts provided the primary financial backing. Along with Rosenman, he famously placed an ad in the New York Times seeking "interesting" business opportunities for "young men with unlimited capital."',
    icon: '💰',
    links: [
      {
        label: 'Interview with Jennifer Roberts, 2019, The SullivanTimes',
        url: 'https://www.sullivantimes.com/post/no-woodstock-without-john-roberts-a-proud-daughter-shares-his-story'
      }
    ]
  },
  {
    name: 'Joel Rosenman',
    role: 'The Businessman / Legal Mind',
    background: 'A Yale Law graduate and musician who was looking for investment opportunities with Roberts.',
    contribution: 'Rosenman handled the business logistics and legal complexities. He was instrumental in managing the spiraling costs and the massive legal liabilities when the festival became a "free" event.',
    icon: '⚖️'
  }
];

export const WOODSTOCK_ARTISTS: Artist[] = [
  // DAY 1 - FRIDAY, AUG 15
  {
    id: 'richie-havens',
    name: 'Richie Havens',
    ageAtTime: '28',
    origin: 'Brooklyn, New York, USA',
    genre: 'Folk',
    day: 1,
    performanceTime: '5:07 PM - 7:00 PM',
    setlist: [
      'High Flyin\' Bird',
      'I Can\'t Make It Anymore',
      'Strawberry Fields Forever',
      'Hey Jude',
      'Freedom (Motherless Child)'
    ],
    postWoodstockSuccess: 'Opened the festival and played for 3 hours. His improvised "Freedom" became an anthem. He remained a respected folk icon until his death in 2013.'
  },
  {
    id: 'sweetwater',
    name: 'Sweetwater',
    ageAtTime: '21-25',
    origin: 'Los Angeles, California, USA',
    genre: 'Psychedelic Rock',
    day: 1,
    performanceTime: '7:30 PM - 8:10 PM',
    setlist: ['Motherless Child', 'What\'s Wrong', 'For Pete\'s Sake', 'Day Song', 'Crystal Spider'],
    postWoodstockSuccess: 'A promising start, but lead singer Nansi Nevins was severely injured in a car accident shortly after the festival, halting their momentum.'
  },
  {
    id: 'bert-sommer',
    name: 'Bert Sommer',
    ageAtTime: '20',
    origin: 'Albany, New York, USA',
    genre: 'Folk Rock',
    day: 1,
    performanceTime: '8:20 PM - 9:15 PM',
    setlist: ['Jennifer', 'The Road to Travel', 'I\'m Sealed', 'She\'s Gone', 'America'],
    postWoodstockSuccess: 'Received a standing ovation but was left out of the original film and soundtrack, leading to a career that never quite reached superstar levels despite his talent.'
  },
  {
    id: 'tim-hardin',
    name: 'Tim Hardin',
    ageAtTime: '28',
    origin: 'Eugene, Oregon, USA',
    genre: 'Folk / Blues',
    day: 1,
    performanceTime: '9:20 PM - 9:45 PM',
    setlist: ['How Can We Hang On to a Dream?', 'If I Were a Carpenter', 'Reason to Believe', 'Simple Song of Freedom'],
    postWoodstockSuccess: 'Already a respected songwriter. However, struggles with substance abuse hindered his commercial success until his early death in 1980.'
  },
  {
    id: 'ravi-shankar',
    name: 'Ravi Shankar',
    ageAtTime: '49',
    origin: 'Varanasi, India',
    genre: 'Indian Classical',
    day: 1,
    performanceTime: '10:00 PM - 10:35 PM',
    setlist: ['Raga Puriya-Dhanashri', 'Tabla Solo', 'Raga Manj Khammeraj'],
    postWoodstockSuccess: 'Introduced Indian classical music to the West. He became a global cultural ambassador and three-time Grammy winner.'
  },
  {
    id: 'melanie',
    name: 'Melanie Safka',
    ageAtTime: '22',
    origin: 'Queens, New York, USA',
    genre: 'Folk',
    day: 1,
    performanceTime: '10:50 PM - 11:20 PM',
    setlist: ['Close to It All', 'Momma Momma', 'Beautiful People', 'Animal Crackers', 'Birthday of the Sun'],
    postWoodstockSuccess: 'Her experience inspired the hit \"Lay Down (Candles in the Rain)\". She became a leading voice of the 70s folk movement.'
  },
  {
    id: 'arlo-guthrie',
    name: 'Arlo Guthrie',
    ageAtTime: '22',
    origin: 'Brooklyn, New York, USA',
    genre: 'Folk',
    day: 1,
    performanceTime: '11:55 PM - 12:25 AM',
    setlist: ['Coming into Los Angeles', 'Walking Down the Line', 'Amazing Grace'],
    postWoodstockSuccess: 'Became an icon of storytelling folk. \"Alice\'s Restaurant\" (released earlier) and his Woodstock performance cemented his place in folk history.'
  },
  {
    id: 'joan-baez',
    name: 'Joan Baez',
    ageAtTime: '28',
    origin: 'Staten Island, New York, USA',
    genre: 'Folk',
    day: 1,
    performanceTime: '12:55 AM - 2:00 AM',
    setlist: ['Joe Hill', 'Sweet Sir Galahad', 'Hickory Wind', 'I Shall Be Released', 'We Shall Overcome'],
    postWoodstockSuccess: 'Already the \"Queen of Folk,\" she continued her career as a legendary activist and musician for over 50 more years.'
  },

  // DAY 2 - SATURDAY, AUG 16
  {
    id: 'quill',
    name: 'Quill',
    ageAtTime: '24-27',
    origin: 'Boston, Massachusetts, USA',
    genre: 'Hard Rock',
    day: 2,
    performanceTime: '12:15 PM - 12:45 PM',
    setlist: ['They Live the Life', 'Biding My Time', 'Waiting for Help'],
    postWoodstockSuccess: 'A victim of technical issues and being cut from the film. They broke up shortly after without achieving mainstream success.'
  },
  {
    id: 'country-joe-mcdonald',
    name: 'Country Joe McDonald',
    ageAtTime: '27',
    origin: 'Washington, D.C., USA',
    genre: 'Folk Rock / Psych',
    day: 2,
    performanceTime: '1:00 PM - 1:30 PM',
    setlist: ['Janis', 'Donovan\'s Reef', 'The \"Fish\" Cheer', 'I-Feel-Like-I\'m-Fixin\'-to-Die Rag'],
    postWoodstockSuccess: 'His solo \"Fish Cheer\" became one of the festival\'s most famous moments. He remained an active voice in political music.'
  },
  {
    id: 'santana',
    name: 'Santana',
    ageAtTime: '22',
    origin: 'Autlán de Navarro, Mexico',
    genre: 'Latin Rock',
    day: 2,
    performanceTime: '2:00 PM - 2:45 PM',
    setlist: ['Waiting', 'Evil Ways', 'You Just Don\'t Care', 'Savor', 'Jingo', 'Soul Sacrifice'],
    postWoodstockSuccess: 'The biggest breakout of the festival. Went from unknowns to multi-platinum legends with an enduring career.'
  },
  {
    id: 'john-sebastian',
    name: 'John Sebastian',
    ageAtTime: '25',
    origin: 'Greenwich Village, New York, USA',
    genre: 'Folk Rock',
    day: 2,
    performanceTime: '3:30 PM - 3:55 PM',
    setlist: ['How Have You Been', 'Rainbows All Over Your Blues', 'I Had a Dream', 'Darlin\' Be Home Soon'],
    postWoodstockSuccess: 'Played an impromptu solo set while \"tripping\" (his own admission). He later had a #1 hit with the theme for \"Welcome Back, Kotter\".'
  },
  {
    id: 'keef-hartley',
    name: 'Keef Hartley Band',
    ageAtTime: '25',
    origin: 'Preston, England',
    genre: 'Blues Rock',
    day: 2,
    performanceTime: '4:45 PM - 5:30 PM',
    setlist: ['Spanish Fly', 'She\'s Gone', 'Too Much Thinking', 'Believe in You'],
    postWoodstockSuccess: 'A solid blues-rock act, but Hartley\'s refusal to allow his performance to be filmed significantly limited the band\'s post-festival exposure.'
  },
  {
    id: 'incredible-string-band',
    name: 'Incredible String Band',
    ageAtTime: '25-26',
    origin: 'Edinburgh, Scotland',
    genre: 'Psychedelic Folk',
    day: 2,
    performanceTime: '6:00 PM - 6:30 PM',
    setlist: ['Invocation', 'The Letter', 'This Moment', 'When You Find Out Who You Are'],
    postWoodstockSuccess: 'They were supposed to play Friday but refused to play in the rain. Their acoustic set on Saturday was somewhat drowned out by the rock atmosphere.'
  },
  {
    id: 'mountain',
    name: 'Mountain',
    ageAtTime: '24',
    origin: 'Long Island, New York, USA',
    genre: 'Hard Rock',
    day: 2,
    performanceTime: '9:00 PM - 10:00 PM',
    setlist: ['Blood of the Sun', 'Theme for an Imaginary Western', 'Long Red', 'Southbound Train'],
    postWoodstockSuccess: 'Pioneers of heavy metal. Their hit \"Mississippi Queen\" followed in 1970, making Leslie West a guitar hero.'
  },
  {
    id: 'grateful-dead',
    name: 'Grateful Dead',
    ageAtTime: '21-27',
    origin: 'San Francisco, California, USA',
    genre: 'Psychedelic Rock',
    day: 2,
    performanceTime: '10:30 PM - 12:05 AM',
    setlist: ['St. Stephen', 'Mama Tried', 'Dark Star', 'High Time', 'Turn on Your Love Light'],
    postWoodstockSuccess: 'Widely considered their \"worst\" show due to electrical issues and rain. Regardless, they became the ultimate jam band cultural phenomenon.'
  },
  {
    id: 'creedence',
    name: 'Creedence Clearwater Revival',
    ageAtTime: '24',
    origin: 'El Cerrito, California, USA',
    genre: 'Roots Rock',
    day: 2,
    performanceTime: '12:30 AM - 1:20 AM',
    setlist: ['Born on the Bayou', 'Green River', 'Proud Mary', 'Bad Moon Rising', 'Keep on Chooglin\''],
    postWoodstockSuccess: 'The most popular band in America at the time. They continued their massive success until inner-band tensions led to a 1972 split.'
  },
  {
    id: 'janis-joplin',
    name: 'Janis Joplin',
    ageAtTime: '26',
    origin: 'Port Arthur, Texas, USA',
    genre: 'Blues Rock',
    day: 2,
    performanceTime: '2:00 AM - 3:00 AM',
    setlist: ['Raise Your Hand', 'Summertime', 'Piece of My Heart', 'Ball and Chain'],
    postWoodstockSuccess: 'Solidified her as the queen of rock. Her album \"Pearl\" was a posthumous masterpiece after her 1970 passing.'
  },
  {
    id: 'sly-stone',
    name: 'Sly & The Family Stone',
    ageAtTime: '26',
    origin: 'Dallas, Texas, USA',
    genre: 'Funk / Soul',
    day: 2,
    performanceTime: '3:30 AM - 4:20 AM',
    setlist: ['Everyday People', 'Dance to the Music', 'Music Lover', 'I Want to Take You Higher'],
    postWoodstockSuccess: 'Their set is cited as a peak of the festival. They influenced the sound of 70s funk and soul profoundly.'
  },
  {
    id: 'the-who',
    name: 'The Who',
    ageAtTime: '24-25',
    origin: 'London, England',
    genre: 'Hard Rock',
    day: 2,
    performanceTime: '5:00 AM - 6:05 AM',
    setlist: ['Heaven and Hell', 'I Can\'t Explain', 'Amazing Journey', 'See Me, Feel Me', 'My Generation'],
    postWoodstockSuccess: 'A career-defining performance of \"Tommy\". They became one of the \"Big Three\" rock bands of the 70s.'
  },
  {
    id: 'jefferson-airplane',
    name: 'Jefferson Airplane',
    ageAtTime: '24-30',
    origin: 'San Francisco, California, USA',
    genre: 'Psychedelic Rock',
    day: 2,
    performanceTime: '8:00 AM - 9:40 AM',
    setlist: ['The Other Side of This Life', 'Somebody to Love', 'White Rabbit', 'Volunteers'],
    postWoodstockSuccess: 'Performed \"Morning Maniac Music\" as the sun rose. They remained psych-rock royalty until splintering into Starship later.'
  },

  // DAY 3 - SUNDAY, AUG 17
  {
    id: 'joe-cocker',
    name: 'Joe Cocker',
    ageAtTime: '25',
    origin: 'Sheffield, England',
    genre: 'Blues Rock',
    day: 3,
    performanceTime: '2:00 PM - 3:25 PM',
    setlist: ['Dear Prudence', 'Feelin\' Alright', 'With a Little Help from My Friends'],
    postWoodstockSuccess: 'An overnight superstar. His performance remains one of the most imitated and iconic in rock history.'
  },
  {
    id: 'country-joe-fish',
    name: 'Country Joe and the Fish',
    ageAtTime: '27',
    origin: 'Berkeley, California, USA',
    genre: 'Psychedelic Rock',
    day: 3,
    performanceTime: '6:30 PM - 8:00 PM',
    setlist: ['Rock & Soul Music', 'Love', 'Not So Sweet Martha Lorraine', 'Crystal Blues'],
    postWoodstockSuccess: 'A second performance for Joe McDonald (this time with his band). They were pivotal in the anti-war music scene.'
  },
  {
    id: 'ten-years-after',
    name: 'Ten Years After',
    ageAtTime: '24',
    origin: 'Nottingham, England',
    genre: 'Blues Rock',
    day: 3,
    performanceTime: '8:15 PM - 9:15 PM',
    setlist: ['Good Morning Little Schoolgirl', 'I Can\'t Keep from Crying Sometimes', 'I\'m Going Home'],
    postWoodstockSuccess: 'Alvin Lee became the \"fastest guitarist in the West\" after his virtuosic soloing on \"I\'m Going Home\".'
  },
  {
    id: 'the-band',
    name: 'The Band',
    ageAtTime: '25-31',
    origin: 'Ontario, Canada / Arkansas, USA',
    genre: 'Americana / Roots',
    day: 3,
    performanceTime: '10:00 PM - 10:50 PM',
    setlist: ['Chest Fever', 'The Weight', 'I Shall Be Released', 'Up on Cripple Creek'],
    postWoodstockSuccess: 'Helped invent the Americana genre. They continued to release classic albums before their legendary \"Last Waltz\" in 1976.'
  },
  {
    id: 'johnny-winter',
    name: 'Johnny Winter',
    ageAtTime: '25',
    origin: 'Beaumont, Texas, USA',
    genre: 'Blues Rock',
    day: 3,
    performanceTime: '12:00 AM - 1:05 AM',
    setlist: ['Mama, Talk to Your Daughter', 'Leland Mississippi Blues', 'Mean Mistreater', 'Johnny B. Goode'],
    postWoodstockSuccess: 'A blues-rock heavyweight. He went on to produce albums for Muddy Waters and tour successfully for decades.'
  },
  {
    id: 'blood-sweat-tears',
    name: 'Blood, Sweat & Tears',
    ageAtTime: '24-28',
    origin: 'New York City, New York, USA',
    genre: 'Jazz Rock',
    day: 3,
    performanceTime: '1:30 AM - 2:30 AM',
    setlist: ['More and More', 'Spinning Wheel', 'You\'ve Made You So Very Happy'],
    postWoodstockSuccess: 'They were massive at the time, winning Album of the Year at the Grammys. Their mainstream jazz-rock style dominated early 70s radio.'
  },
  {
    id: 'csny',
    name: 'Crosby, Stills, Nash & Young',
    ageAtTime: '24-27',
    origin: 'USA / UK / Canada',
    genre: 'Folk Rock',
    day: 3,
    performanceTime: '3:00 AM - 4:00 AM',
    setlist: ['Suite: Judy Blue Eyes', 'Blackbird', 'Guinnevere', 'Wooden Ships', 'Long Time Gone'],
    postWoodstockSuccess: 'Their second-ever show. They became the supergroup of the era, defined by their complex harmonies.'
  },
  {
    id: 'butterfield-blues',
    name: 'Paul Butterfield Blues Band',
    ageAtTime: '26',
    origin: 'Chicago, Illinois, USA',
    genre: 'Blues Rock',
    day: 3,
    performanceTime: '6:00 AM - 7:00 AM',
    setlist: ['Everything\'s Gonna Be Alright', 'Driftin\' and Driftin\'', 'Born Under a Bad Sign'],
    postWoodstockSuccess: 'Brought Chicago blues to a rock audience. Butterfield is considered one of the greatest blues harmonica players ever.'
  },
  {
    id: 'sha-na-na',
    name: 'Sha Na Na',
    ageAtTime: '18-22',
    origin: 'Columbia University, NYC, USA',
    genre: 'Doo-Wop / Rock n Roll',
    day: 3,
    performanceTime: '7:30 AM - 8:15 AM',
    setlist: ['Get a Job', 'At the Hop', 'Teenager in Love', 'Duke of Earl'],
    postWoodstockSuccess: 'A strange but effective 50s revival act. Their performance led to their own popular TV variety show in the 70s.'
  },
  {
    id: 'jimi-hendrix',
    name: 'Jimi Hendrix',
    ageAtTime: '26',
    origin: 'Seattle, Washington, USA',
    genre: 'Psychedelic Rock',
    day: 3,
    performanceTime: '9:00 AM - 11:10 AM',
    setlist: ['Message to Love', 'Fire', 'Red House', 'Star Spangled Banner', 'Purple Haze', 'Hey Joe'],
    postWoodstockSuccess: 'The closing act. His feedback-laden national anthem is the defining image of the 60s. He remains a transcendent icon.'
  }
];
