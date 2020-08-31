import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  isAddpost: boolean = false;
  @Input() updatePost: any;
 
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isAddpost = true;
    }
    else {
      this.isAddpost = false;
    }
  }
  add() {
    this.router.navigate(["posts"]);
    this.isAddpost = true;

  }
}
