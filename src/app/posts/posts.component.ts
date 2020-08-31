import { Component, OnInit } from '@angular/core';
import { User } from '../usermodel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  user: User;
  updatePost: number;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  
  }
  updatePostEmitter(id: number) {
    this.updatePost = id;
  }

}
