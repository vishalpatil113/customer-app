import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostsComponent, PostListComponent, AddPostComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule, ReactiveFormsModule 
  ],
   providers: [
    PostService
  ],
})
export class PostsModule { }
