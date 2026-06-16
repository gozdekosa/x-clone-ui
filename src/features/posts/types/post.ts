export interface Post {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
  comments: number;
  reposts: number;
  likes: number;
  views: number;
  createdAt: Date;
}