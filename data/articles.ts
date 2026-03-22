export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  author: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Faker Leads T1 to Another World Championship Victory",
    slug: "faker-leads-t1-worlds-2024",
    excerpt: "The Unkillable Demon King secures his fourth world title in a thrilling 3-2 series against JD Gaming.",
    content: "In an epic grand final that went the distance, T1's legendary mid-laner Faker showcased why he's considered the greatest of all time. The series saw incredible plays, back-and-forth momentum swings, and a historic comeback in game 5 that will be remembered for years to come...",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format",
    category: "League of Legends",
    date: "Nov 19, 2024",
    author: "Alex Chen"
  },
  {
    id: 2,
    title: "Valorant Champions 2024: EDG Stuns the World",
    slug: "valorant-champions-2024-edg",
    excerpt: "Chinese underdogs EDward Gaming defeat defending champions Fnatic in a stunning 3-1 upset.",
    content: "EDG's disciplined approach and aggressive plays caught everyone off guard. ZmjjKK put up MVP numbers with a 1.42 rating across the series, proving that the Chinese region has officially arrived on the global stage...",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format",
    category: "Valorant",
    date: "Nov 15, 2024",
    author: "Sarah Johnson"
  },
  {
    id: 3,
    title: "CS2 IEM Katowice: Vitality Claims Victory",
    slug: "cs2-iem-katowice-vitality",
    excerpt: "Team Vitality dominates the competition, securing their first IEM Katowice title with a perfect playoff run.",
    content: "The French-Danish roster looked unstoppable throughout the tournament, dropping only two maps total. ZywOo delivered a career-defining performance with a 1.35 rating, solidifying his claim as the world's best player...",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format",
    category: "CS2",
    date: "Nov 10, 2024",
    author: "Michael Rodriguez"
  },
  {
    id: 4,
    title: "Dota 2: Team Spirit's Dynasty Continues",
    slug: "dota2-team-spirit-dynasty",
    excerpt: "Team Spirit wins their third consecutive Major, solidifying their place in Dota 2 history.",
    content: "With incredible coordination and Yatoro's unstoppable carry play, Team Spirit looks poised to challenge for another International title. Their understanding of the meta and teamfight execution is simply unmatched...",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format",
    category: "Dota 2",
    date: "Nov 5, 2024",
    author: "David Kim"
  },
  {
    id: 5,
    title: "Riot Games Announces New Esports Ecosystem",
    slug: "riot-new-esports-ecosystem",
    excerpt: "Major changes coming to League of Legends and Valorant competitive scenes in 2025.",
    content: "Riot Games revealed a comprehensive restructuring of their esports programs, including new revenue sharing models, expanded international events, and a promotion-relegation system for Tier 2 leagues...",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format",
    category: "Industry",
    date: "Nov 1, 2024",
    author: "Emma Watson"
  },
  {
    id: 6,
    title: "Overwatch 2: New Hero Sparks Meta Shift",
    slug: "overwatch-2-new-hero-meta",
    excerpt: "The introduction of Venture sends shockwaves through the competitive Overwatch scene.",
    content: "With unique tunneling abilities and high burst damage, Venture has completely changed how teams approach map control. Early tournaments show a massive uptick in dive compositions...",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&auto=format",
    category: "Overwatch",
    date: "Oct 28, 2024",
    author: "Chris Evans"
  },
  {
    id: 7,
    title: "Rocket League: New Season Brings Major Changes",
    slug: "rocket-league-new-season",
    excerpt: "Psyonix unveils new map mechanics and revamped tournament system for Season 15.",
    content: "The new update introduces variable boost pads and dynamic field elements that promise to shake up high-level play. Pros are already experimenting with new strategies...",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format",
    category: "Rocket League",
    date: "Oct 25, 2024",
    author: "Jessica Lee"
  },
  {
    id: 8,
    title: "Esports World Cup: Record-Breaking Prize Pool",
    slug: "esports-world-cup-record-prize",
    excerpt: "The Saudi-backed tournament announces $60 million prize pool across 20 different games.",
    content: "The Esports World Cup continues to push boundaries with the largest combined prize pool in history. Over 500 teams from around the world will compete for glory and life-changing money...",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format",
    category: "General",
    date: "Oct 20, 2024",
    author: "Mohammed Al-Rashid"
  }
]