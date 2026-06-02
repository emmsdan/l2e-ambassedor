export const user = {
  name: "Amaka Okonkwo",
  handle: "amaka",
  city: "Lagos, NG",
  tier: "Advocate" as "Advocate" | "Champion" | "Ambassador",
  joined: "Mar 2026",
  avatar: "AO",
  referralCode: "AMAKA-L2E",
  referralUrl: "https://learn2earn.africa/r/AMAKA-L2E",
};

export const pipelineStats = [
  { label: "Invited", value: 24, delta: "+4 this week", tone: "muted" },
  { label: "Qualified", value: 12, delta: "+2 this week", tone: "primary" },
  { label: "In Trials", value: 7, delta: "+1 this week", tone: "plum" },
  { label: "Admitted", value: 3, delta: "+1 this week", tone: "amber" },
];

export const tierRequirements = {
  Advocate: [
    { label: "Referrals pass Selection Game", current: 7, target: 10 },
  ],
  Champion: [{ label: "Referrals complete Trials", current: 4, target: 10 }],
  Ambassador: [
    { label: "Referrals pass Trials", current: 0, target: 10 },
    { label: "Referrals admitted", current: 0, target: 5 },
  ],
};

export const tiers = [
  {
    key: "Advocate",
    n: 1,
    reward: "₦5,000 bonus + Digital badge",
    color: "tier-advocate",
    req: "10 referrals pass Selection Game",
    perks: ["Founding badge", "Community access", "Resource library"],
  },
  {
    key: "Champion",
    n: 2,
    reward: "₦10,000 monthly stipend + Merch",
    color: "tier-champion",
    req: "10 referrals complete Trials",
    perks: ["Monthly stipend", "Branded merch kit", "Spotlight features"],
  },
  {
    key: "Ambassador",
    n: 3,
    reward: "₦25,000 monthly retainer",
    color: "tier-ambassador",
    req: "10 pass Trials + 5 admitted",
    perks: ["Monthly retainer", "Leadership council", "Early opportunities"],
  },
] as const;

export const referrals = [
  {
    id: "r1",
    name: "Tunde Bello",
    city: "Ibadan",
    stage: "Admitted",
    days: 12,
  },
  {
    id: "r2",
    name: "Chiamaka Eze",
    city: "Enugu",
    stage: "In Trials",
    days: 5,
  },
  {
    id: "r3",
    name: "Kwame Mensah",
    city: "Accra",
    stage: "In Trials",
    days: 8,
  },
  { id: "r4", name: "Aisha Bello", city: "Kano", stage: "Qualified", days: 2 },
  {
    id: "r5",
    name: "David Otieno",
    city: "Nairobi",
    stage: "Qualified",
    days: 3,
  },
  {
    id: "r6",
    name: "Funke Adebayo",
    city: "Lagos",
    stage: "Qualified",
    days: 4,
  },
  { id: "r7", name: "Yaw Owusu", city: "Kumasi", stage: "Invited", days: 1 },
  { id: "r8", name: "Zainab Musa", city: "Abuja", stage: "Invited", days: 1 },
  { id: "r9", name: "Ifeanyi Obi", city: "PH", stage: "Invited", days: 6 },
];

export const activity = [
  {
    icon: "",
    text: "Tunde Bello was admitted to Learn2Earn",
    time: "2h ago",
    tone: "amber",
  },
  {
    icon: "",
    text: "Chiamaka Eze passed Selection Game",
    time: "1d ago",
    tone: "primary",
  },
  {
    icon: "",
    text: "Kwame Mensah entered Trials",
    time: "2d ago",
    tone: "plum",
  },
  {
    icon: "",
    text: "You invited 4 new contacts",
    time: "3d ago",
    tone: "muted",
  },
  {
    icon: "",
    text: "Earned the Connector badge",
    time: "5d ago",
    tone: "amber",
  },
];

export const leaderboard = [
  { rank: 1, name: "Adaeze N.", city: "Lagos", tier: "Ambassador", score: 248 },
  { rank: 2, name: "Kofi A.", city: "Accra", tier: "Ambassador", score: 221 },
  {
    rank: 3,
    name: "Wanjiku M.",
    city: "Nairobi",
    tier: "Champion",
    score: 198,
  },
  { rank: 4, name: "Tobi A.", city: "Ibadan", tier: "Champion", score: 184 },
  { rank: 5, name: "Sade O.", city: "Lagos", tier: "Champion", score: 171 },
  { rank: 6, name: "Emeka U.", city: "Enugu", tier: "Advocate", score: 152 },
  { rank: 7, name: "Halima B.", city: "Kano", tier: "Advocate", score: 134 },
  { rank: 8, name: "Ngozi I.", city: "Abuja", tier: "Advocate", score: 122 },
];

export const earnings = {
  total: 35000,
  pending: 10000,
  nextPayout: "Jun 30, 2026",
  history: [
    { date: "May 31", amount: 10000, type: "Stipend", status: "Paid" },
    { date: "May 15", amount: 5000, type: "Advocate Bonus", status: "Paid" },
    { date: "Apr 30", amount: 10000, type: "Stipend", status: "Paid" },
    { date: "Apr 15", amount: 10000, type: "Stipend", status: "Paid" },
  ],
};

export const missions = [
  {
    title: "Share your story",
    desc: "Post why you joined Learn2Earn on X or LinkedIn — tag @learn2earn.",
    reward: "+15 impact",
  },
  {
    title: "Invite 3 friends this week",
    desc: "Use your WhatsApp template to reach 3 new contacts.",
    reward: "+30 impact",
  },
  {
    title: "Attend Tuesday Town Hall",
    desc: "Live Q&A with the founding team. 18:00 WAT.",
    reward: "+20 impact",
  },
];

export const badges = [
  {
    name: "Founding 100",
    desc: "Joined the founding cohort",
    earned: true,
    icon: "",
  },
  {
    name: "First Share",
    desc: "Sent your first referral link",
    earned: true,
    icon: "",
  },
  { name: "Connector", desc: "10 invites in a week", earned: true, icon: "" },
  {
    name: "Storyteller",
    desc: "Posted 3 spotlight stories",
    earned: false,
    icon: "",
  },
  {
    name: "Mentor",
    desc: "Coached a Trial referral to admission",
    earned: false,
    icon: "",
  },
  { name: "Host", desc: "Ran a community event", earned: false, icon: "🎤" },
];

export const events = [
  {
    title: "Ambassador Town Hall",
    when: "Tue · Jun 10 · 18:00 WAT",
    host: "Founding Team",
    rsvps: 142,
    live: false,
  },
  {
    title: "Onboarding Clinic for New Advocates",
    when: "Thu · Jun 12 · 17:00 WAT",
    host: "Community",
    rsvps: 64,
    live: false,
  },
  {
    title: "Lagos Meetup — Co-working day",
    when: "Sat · Jun 14 · 11:00 WAT",
    host: "Lagos Chapter",
    rsvps: 38,
    live: false,
  },
];

export const community = [
  {
    author: "Adaeze N.",
    tier: "Ambassador",
    text: "Just had 2 referrals admitted today  Sharing the WhatsApp script that worked best in the thread.",
    likes: 48,
    replies: 12,
    time: "2h",
  },
  {
    author: "Kofi A.",
    tier: "Ambassador",
    text: "Hosting a virtual Q&A for prospective learners in Accra tomorrow. RSVP link inside.",
    likes: 31,
    replies: 7,
    time: "4h",
  },
  {
    author: "Sade O.",
    tier: "Champion",
    text: "Question: what's your best response when someone asks 'is this legit?'",
    likes: 22,
    replies: 19,
    time: "8h",
  },
];

export const notifications = [
  {
    type: "celebration",
    text: "Tunde Bello was admitted ",
    time: "2h ago",
    unread: true,
  },
  {
    type: "progress",
    text: "Chiamaka Eze passed Selection Game",
    time: "1d ago",
    unread: true,
  },
  {
    type: "system",
    text: "Your May stipend of ₦10,000 has been paid",
    time: "2d ago",
    unread: false,
  },
  {
    type: "event",
    text: "RSVP open: Ambassador Town Hall — Tue 18:00",
    time: "3d ago",
    unread: false,
  },
  {
    type: "community",
    text: "Adaeze replied to your post",
    time: "4d ago",
    unread: false,
  },
];

// Admin
export const applications = [
  {
    id: "a1",
    name: "Ngozi Iwu",
    city: "Abuja",
    score: 92,
    status: "pending",
    reach: "5.2k",
    story:
      "I've been teaching free Python on weekends to my church youth group...",
  },
  {
    id: "a2",
    name: "Brian Otieno",
    city: "Nairobi",
    score: 88,
    status: "pending",
    reach: "12k",
    story: "Run a YouTube channel about African tech careers...",
  },
  {
    id: "a3",
    name: "Fatima Sani",
    city: "Kano",
    score: 76,
    status: "pending",
    reach: "2.1k",
    story:
      "Computer science student at BUK, active in WhatsApp study groups...",
  },
  {
    id: "a4",
    name: "Kwabena Asare",
    city: "Kumasi",
    score: 64,
    status: "pending",
    reach: "800",
    story: "...",
  },
];

export const adminStats = [
  { label: "Active Ambassadors", value: "1,240", delta: "+86 this month" },
  { label: "Pending Applications", value: "147", delta: "12 over SLA" },
  { label: "Admitted (MTD)", value: "318", delta: "+22% MoM" },
  { label: "Payouts Pending", value: "₦4.2M", delta: "Approve by Jun 30" },
];
