export interface Comment {
  id: number;
  postId: number;

  name: string;
  username: string;
  avatar: string;
  likes: number;
  content: string;
  createdAt: number;
}