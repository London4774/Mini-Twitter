import { mockUsers } from "./users";

export const mockTweets = [
  {
    id: "1",
    author: mockUsers[0],
    content: "What's up!?",
    date: "Sep 15",
    likes: 2000,
    comments: 350,
    reposts: 67,
    bookmarked: false,
    isOwn: false,
  },
  {
    id: "2",
    author: mockUsers[1],
    content: "Say my name!",
    date: "Sep 16",
    likes: 6700,
    comments: 420,
    reposts: 120,
    bookmarked: true,
    isOwn: false,
  },
];