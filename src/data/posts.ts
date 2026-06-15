import { faker } from "@faker-js/faker";
import { Post } from "@/types/post";  

export const posts : Post[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  username: faker.internet.username(),
  avatar: faker.image.avatar(),
  content: faker.lorem.paragraph(),
  comments: faker.number.int({ min: 0, max: 500 }),
  reposts: faker.number.int({ min: 0, max: 1000 }),
  likes: faker.number.int({ min: 0, max: 50000 }),
  views: faker.number.int({ min: 100, max: 500000 }),
  createdAt: faker.date.recent({ days: 30 }),
}));