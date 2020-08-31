export class Post {
  userId: number;
  id: number;
  body: string;
  title: string;
  constructor(p) {
    this.userId = p.userId || 0;
    this.id = p.id || 0;
    this.body = p.body || "";
    this.title = p.title || "";


  }
}
