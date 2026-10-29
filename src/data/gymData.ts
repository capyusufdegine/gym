export interface Program {
  id: string;
  number: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  price: string;
  duration: string;
  format: string;
  features: string[];
  idealFor: string;
  schedule: string;
}

export interface Article {
  id: string;
  tag: 'TRAINING' | 'NUTRITION' | 'MINDSET';
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string;
    }[];
    takeaways: string[];
  };
}

export interface Transformation {
  id: string;
  name: string;
  category: 'Fat Loss' | 'Muscle Gain' | 'Strength' | 'Athletic';
  stats: string;
  timeframe: string;
  story: string;
  quote: string;
  highlight: string;
}

export const GYM_INFO = {
  name: 'CrossFit Round Rock TX',
  shortName: 'CFRR TX',
  tagline: 'Forge Your Best Self · Round Rock, Texas',
  address: '1201 E Palm Valley Blvd, Suite 200, Round Rock, TX 78664',
  phone: '+1 (512) 843-7625',
  email: 'info@crossfitroundrocktx.com',
  hours: {
    weekdays: 'Mon – Fri: 05:00 – 20:30',
    saturday: 'Saturday: 07:00 – 14:00 (Open Gym & Team WOD)',
    sunday: 'Sunday: 09:00 – 12:00 (Mobility & Active Recovery)',
  }
};

export const PROGRAMS: Program[] = [
  {
    id: 'crossfit-wods',
    number: '01',
    title: 'CROSSFIT GROUP WODS',
    description: 'Constantly varied, high-intensity functional movements scaled for all fitness levels. Community-driven, coach-led workouts.',
    isFeatured: false,
    price: '$165 / month',
    duration: 'Unlimited Monthly Membership',
    format: 'Coach-Led Daily WODs (Cap at 12 Athletes)',
    features: [
      'Daily coached Strength portion + Metcon WOD',
      'Olympic weightlifting, barbell cycling & gymnastics skill work',
      'Scalable options for all skill levels from beginner to competitor',
      'Wodify app tracking for personal barbell records & workout leaderboards',
      'Full access to Round Rock open gym hours & mobility area',
    ],
    idealFor: 'Anyone in Round Rock, TX looking for a tight-knit fitness community, high accountability, and serious conditioning.',
    schedule: 'Classes daily at 05:00, 06:15, 09:00, 12:00, 16:30, 17:45, 18:45.'
  },
  {
    id: 'one-on-one',
    number: '02',
    title: 'ONE-ON-ONE COACHING',
    description: 'Private personalized training sessions built around your unique biomechanics, barbell technique, and athletic goals.',
    isFeatured: false,
    price: '$110 / session',
    duration: '12-Week Transformation Focus',
    format: 'Private 1-on-1 at Round Rock Box',
    features: [
      'In-depth movement screen, joint mobility audit & barbell assessment',
      'Hyper-customized progressive strength & conditioning programming',
      'Snatch, clean & jerk, and gymnastic skill private coaching',
      'Full nutrition & macro architecture blueprint included',
      'Direct WhatsApp access to your certified CrossFit coach',
    ],
    idealFor: 'Busy Round Rock executives, athletes rehabbing previous injuries, or those wanting rapid individualized progress.',
    schedule: 'Flexible 60-minute private sessions scheduled around your lifestyle.'
  },
  {
    id: 'nutrition-planning',
    number: '03',
    title: 'NUTRITION & MACRO COACHING',
    description: 'Fuel your WODs and accelerate body recomposition with an individualized nutrition strategy built for real life.',
    isFeatured: true,
    price: '$149 / month',
    duration: '8-Week Sprint or 16-Week Phase',
    format: '1-on-1 Nutritionist Portal + Meal Blueprints',
    features: [
      'Custom macro calculations tailored to CrossFit metabolic demands',
      'Flexible eating guides with local Round Rock grocery shopping blueprints',
      'Pre-workout, intra-workout, and post-WOD glycogen refueling protocols',
      'Bi-weekly InBody biometric scans at our Round Rock box',
      'Weekly habit tracking, hunger, sleep, and recovery optimization',
    ],
    idealFor: 'Anyone looking to drop stubborn body fat, build lean muscle, or maximize energy during demanding training sessions.',
    schedule: 'Weekly check-in reports with 48-hr coach adjustment turnaround.'
  },
  {
    id: 'on-ramp-foundations',
    number: '04',
    title: 'ON-RAMP FOUNDATIONS',
    description: 'A 4-session introductory program teaching fundamental barbell movements, safety standards, and mechanics before joining classes.',
    isFeatured: false,
    price: '$129 / program',
    duration: '4 Private / Semi-Private Sessions',
    format: 'Foundational Skill Clinic',
    features: [
      'Hands-on coaching for squats, presses, deadlifts, and olympic lifts',
      'Injury prevention, pacing techniques, and proper movement standards',
      'Personal mobility drill package for tight hips, shoulders, and ankles',
      'Includes 2 free weeks of regular CrossFit classes after graduation',
      'Zero intimidation — tailored entirely for newcomers',
    ],
    idealFor: 'Beginners completely new to CrossFit or barbell training who want confidence before jumping into group classes.',
    schedule: 'Scheduled by appointment with coach.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'beginner-principles',
    tag: 'TRAINING',
    title: '5 Principles Every Beginner Must Know Before Starting CrossFit',
    description: 'Stepping into a CrossFit box can feel intimidating. These five fundamentals will set you up for long-term progress from day one.',
    date: 'Apr 8, 2026',
    readTime: '6 min read',
    image: '/images/article-squat.jpg',
    isFeatured: false,
    content: {
      lead: 'At CrossFit Round Rock TX, our number one rule is: Mechanics first, consistency second, and intensity only when the first two are locked in. When your movement bedrock is clean, PRs come naturally.',
      sections: [
        {
          heading: '1. Check Your Ego at the Door',
          body: 'Never sacrifice posture for a heavier barbell on the whiteboard. An empty barbell moved with crisp spinal bracing, proper hip hinge mechanics, and stable foot tripod contact builds the real foundation.'
        },
        {
          heading: '2. The Magic of Scaling',
          body: 'Every single WOD at CrossFit Round Rock can be scaled. Whether using resistance bands for pull-ups, modifying box jump heights, or adjusting barbell loads, you get the exact intended metabolic stimulus.'
        },
        {
          heading: '3. Mobility Is Non-Negotiable',
          body: 'Spend 10 minutes before and after class opening up ankle dorsiflexion, thoracic extension, and hip internal rotation. Good mobility protects your joints and unlocks effortless overhead squats.'
        },
        {
          heading: '4. Fueling High-Intensity Metcons',
          body: 'You cannot perform in a grueling 15-minute AMRAP running on zero calories. Prioritize clean complex carbohydrates and adequate sodium to keep muscle glycogen primed.'
        },
        {
          heading: '5. Celebrate Every Micro-Win',
          body: 'Your first unassisted pull-up, your first 135lb clean, or simply finishing a brutal hero WOD without stopping — the Round Rock community cheers just as loud for your first milestone as for a veteran athlete’s PR.'
        }
      ],
      takeaways: [
        'Mechanics and consistency always precede intensity.',
        'Scaling is a tool used by smart athletes to stay injury-free.',
        'Commit to 10 minutes of daily joint mobility.',
        'Lean on the Round Rock community for encouragement on tough days.'
      ]
    }
  },
  {
    id: 'nutrition-timing',
    tag: 'NUTRITION',
    title: 'What to Eat Before and After Training for Maximum Gains',
    description: 'Nutrition timing is everything. Learn exactly what to eat and when to maximise your training output.',
    date: 'Mar 25, 2026',
    readTime: '5 min read',
    image: '/images/article-nutrition.jpg',
    isFeatured: false,
    content: {
      lead: 'High-intensity CrossFit workouts burn through muscle glycogen and elevate body heat rapidly. Strategic nutrient timing ensures you have explosive bar speed on minute 15 and recover for tomorrow’s WOD.',
      sections: [
        {
          heading: 'Pre-WOD Window (2-3 Hours Out)',
          body: 'Aim for 30-45g of clean, easily digestible protein combined with 40-70g of low-glycemic complex carbohydrates (e.g., jasmine rice or rolled oats with grilled chicken or egg whites). Keep fats under 10g to prevent delayed gastric emptying.'
        },
        {
          heading: 'Immediate Fuel (30-45 Minutes Out)',
          body: 'A quick 20-30g bolus of fast-acting carbs like a ripe banana, raw honey, or cream of rice, paired with 500ml water and 400mg Texas pink sea salt to drive cellular hydration and pump.'
        },
        {
          heading: 'Post-WOD Anabolic Rebound (Within 60 Minutes)',
          body: 'Your insulin sensitivity is peaked. Consume 35-50g of whey isolate or lean beef with 50-80g of fast carbohydrates to halt muscle breakdown and restock glycogen stores.'
        },
        {
          heading: 'Texas Heat & Electrolyte Balance',
          body: 'Training in Round Rock, TX demands strict electrolyte replenishment. Sodium, potassium, and magnesium ions dictate muscle contraction force and prevent cramping.'
        }
      ],
      takeaways: [
        'Eat a balanced low-fat protein and carb meal 2-3 hours before lifting.',
        'Consume 300-500mg sodium with 500ml water 30 minutes before heavy squats or WODs.',
        'Target 0.4g to 0.5g of protein per kg of bodyweight in the post-workout meal.'
      ]
    }
  },
  {
    id: 'discipline-over-motivation',
    tag: 'MINDSET',
    title: 'How to Stay Consistent When Motivation Runs Out',
    description: "Motivation fades. Discipline wins. Here's how to build the mental systems that keep you showing up every day.",
    date: 'Mar 10, 2026',
    readTime: '7 min read',
    image: '/images/article-mindset.jpg',
    isFeatured: true,
    content: {
      lead: 'Motivation is a fickle biological emotion driven by transient dopamine spikes. The consistent athletes at CrossFit Round Rock don’t wait to "feel ready" — they cultivate systems that eliminate decision friction.',
      sections: [
        {
          heading: '1. Book Your Class in Advance',
          body: 'Reserve your spot in the 6:15 AM or 5:45 PM class the evening before. When your name is on the whiteboard and coaches expect you, the psychological resistance dissolves.'
        },
        {
          heading: '2. The Community Factor',
          body: 'Training alone in a garage is lonely. Training alongside 10 other athletes sweating through the same heavy barbell complex turns suffering into collective triumph.'
        },
        {
          heading: '3. Identity-Based Habits Over Scale Milestones',
          body: 'Shift from "I want to lose 15 pounds" to "I am an athlete who values resilience, functional longevity, and strength." When the goal is identity, every workout is a win.'
        },
        {
          heading: '4. The 5-Minute Rule',
          body: 'Tell yourself you only need to show up and do the warm-up. 95% of the battle is pulling into the Round Rock parking lot; once your grips are on and music hits, momentum takes over.'
        }
      ],
      takeaways: [
        'Never rely on motivation; engineer an environment that makes skipping harder.',
        'Lock in your class schedule every Sunday night.',
        'Surround yourself with the CrossFit Round Rock community for relentless support.'
      ]
    }
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 't1',
    name: 'David Keller (Round Rock Resident)',
    category: 'Fat Loss',
    stats: '-28 lbs Fat · -9% Body Fat',
    timeframe: '16 Weeks',
    story: 'Dell Tech executive in Round Rock working long desk hours. Joined our 6:15 AM CrossFit class 4 days a week with guided macro adjustments.',
    quote: "CrossFit Round Rock completely changed my life. At 42, I am in better shape than when I was in college. No back pain, incredible energy, and a supportive crew.",
    highlight: 'Dropped from 29% body fat to 15.2% while adding 35kg to his back squat.'
  },
  {
    id: 't2',
    name: 'Elena Rostova (Round Rock, TX)',
    category: 'Strength',
    stats: '+55kg Total · Clean & Jerk 95kg',
    timeframe: '12 Weeks',
    story: 'Wanted to develop genuine barbell power and athletic confidence. Focused on our Olympic lifting cycles and functional strength progressions.',
    quote: "The coaches at CrossFit Round Rock have an insane eye for movement mechanics. They fixed my hip extension and my Olympic lifts exploded.",
    highlight: 'Achieved a double-bodyweight deadlift and first unassisted bar muscle-up.'
  },
  {
    id: 't3',
    name: 'Marcus Vance Jr. (Austin / Round Rock)',
    category: 'Muscle Gain',
    stats: '+15 lbs Lean Mass',
    timeframe: '20 Weeks',
    story: 'Hit a stubborn plateau at conventional commercial gyms. Switched to CrossFit high-intensity compound workouts and dialed-in surplus nutrition.',
    quote: "Traditional gyms were boring. The competitive energy and structured strength programming at CFRR pushed me to levels I didn't think possible.",
    highlight: 'Set PRs across all benchmark girl WODs while building a dense athletic physique.'
  },
  {
    id: 't4',
    name: 'Sophia Chang (Local High School Coach)',
    category: 'Athletic',
    stats: '5k PR 19m45s · Murph 38m',
    timeframe: '14 Weeks',
    story: 'Runner struggling with knee instability and weakness in overhead movements. Built full-body posterior chain durability and core bracing.',
    quote: "CrossFit Round Rock made me durable. I run faster, lift heavier, and haven't had a single running injury since joining the box.",
    highlight: 'Completed Murph unpartitioned with 14lb vest in under 39 minutes.'
  }
];

export const COACH_DETAILS = {
  name: 'Head Coach Marcus Reid & Staff',
  boxName: 'CrossFit Round Rock TX',
  experience: '12+ Years Coaching High-Performance Fitness',
  certifications: [
    'CrossFit Level 3 Certified Coach (CCFT)',
    'USA Weightlifting (USAW) Level 2 Advanced Sports Performance',
    'NSCA-CSCS (Certified Strength & Conditioning Specialist)',
    'Precision Nutrition Level 2 Master Coach',
    'CrossFit Gymnastics & Aerobic Capacity Certified'
  ],
  stats: {
    satisfaction: '100%',
    clientsTrained: '500+',
    avgFatLost: '18 lbs',
    hoursCoached: '14,000+'
  },
  philosophy: [
    {
      title: 'Mechanics Before Intensity',
      description: 'Zero compromised reps. We drill technique, joint alignment, and safe barbell mechanics before adding heavy plates or high speed.'
    },
    {
      title: 'Scalable for Everyone',
      description: 'Every workout is universally scalable. Whether you are an elite competitor or stepping foot into a gym for the first time in 10 years, you get the exact right stimulus.'
    },
    {
      title: 'Fuel for Performance',
      description: 'No crash diets. We fuel your engine with nutrient-dense, sustainable foods that boost energy, burn body fat, and accelerate recovery.'
    },
    {
      title: 'The Round Rock Community',
      description: 'You never suffer through a brutal workout alone. We cheer the last athlete to finish with the exact same passion as the first.'
    }
  ]
};
