import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../postsmodel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit, OnDestroy  {
  postTitle: string;
  post: Post;
  paramsSub: Subscription;
  postForm: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostService, private route: ActivatedRoute) {    
    
  }
 
  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(val => {
      // Handle param values here
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
       
        this.postService.getPostBy(id).subscribe(p => {
          this.postTitle = p.title;
          this.post = p;
          this.postForm = this.fb.group({
            title: [this.post.title],
            body: [this.post.body],
            userId: [this.post.userId],
            id: [this.post.id],
          });
        })
      }
      else {
        this.postTitle = "Add Post";
        this.post = new Post({});
        this.postForm = this.fb.group({
          title: [this.post.title],
          body: [this.post.body],
          userId: [this.post.userId],
          id: [this.post.id],
        });
      }
    });
   
  }

  public ngOnDestroy(): void {
    // Prevent memory leaks
    this.paramsSub.unsubscribe();
  }
  save() {
    if (!this.postForm.value.id) {
      this.postService.save(this.postForm.value).subscribe(p => {
        this.post = p;
      })
    }
    else {
      this.postService.update(this.postForm.value).subscribe(p => {
        this.post = p;
      })
    }
  }
}
