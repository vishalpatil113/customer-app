import { Injectable } from '@angular/core';
import { Post } from '../postsmodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPostList(): Observable<Post[]> {
   
    let comps = this.http
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(map(res => <Post[]>res));
    return comps;
  }
  save(post: Post): Observable<Post> {
    
  

    let post$ = this
      .http
      .post(`https://jsonplaceholder.typicode.com/posts`,
        post)
      .pipe(map(r => <Post>r))
    return post$;
  }
  getPostBy(id:any): Observable<Post> {

    let comps = this.http
      .get(`https://jsonplaceholder.typicode.com/posts/`+id)
      .pipe(map(res => <Post>res));
    return comps;
  }
  update(post: Post): Observable<Post> {

    let post$ = this
      .http
      .put(`https://jsonplaceholder.typicode.com/posts/`+post.id,
        post)
      .pipe(map(r => <Post>r))
    return post$;
  }
}
