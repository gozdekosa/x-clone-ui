import { Post } from "../types/post";

const names = [
  "Dr. Webster Champlin",
  "Dejon Swaniawski",
  "Dr. Christy Ondricka",
  "James Werthalter",
  "Kristina Gerlach",
  "Prof. Karli Doyle",
  "Dr. Morgan Kling",
  "Estelle Trantow",
  "Aubrey Roob",
  "Rene Mraz"
];

const usernames = [
  "webster_champ",
  "dejon_swan",
  "christy_ondri",
  "james_werth",
  "kristina_g",
  "karli_prof",
  "morgan_kling",
  "estelle_t",
  "aubrey_r",
  "rene_mraz"
];

const contents = [
  "Just launched my new project! Excited to share it with everyone.",
  "Looking forward to the weekend. Time to relax and recharge!",
  "Coffee and code - the perfect combination for a productive day.",
  "Anyone else obsessed with dark mode? It's a game changer!",
  "Reflecting on my journey this year. Grateful for the growth.",
  "Working on something exciting. Can't wait to reveal it soon!",
  "Found an amazing new library today. Definitely worth checking out.",
  "Rainy day vibes. Perfect weather for some deep work.",
  "Just finished a challenging project. Feeling accomplished!",
  "Learning new technologies every day. The future is bright!"
];

const avatars = [
  "https://api.realworld.io/images/demo-avatar.jpg",
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9"
];

export const posts: Post[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: names[i % names.length],
  username: usernames[i % usernames.length],
  avatar: avatars[i % avatars.length],
  content: contents[i % contents.length],
  comments: 42 + (i % 100),
  reposts: 128 + (i % 300),
  likes: 2500 + (i % 10000),
  views: 15000 + (i % 100000),
  createdAt: new Date(Date.now() - (i * 86400000)).getTime(),
}));