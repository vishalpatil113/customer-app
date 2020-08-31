import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../../postsmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  @Output() public updatePostEmitter = new EventEmitter<number>();
  constructor(private postService: PostService,private router: Router) { }

  ngOnInit(): void {
    this.postService.getPostList().subscribe(p => {
      this.posts = p;
    })
  }
  updatePost(p) {
    this.router.navigate(["posts/posts/"+p.id]);
    //this.updatePostEmitter.emit(p.id)
  }

}
