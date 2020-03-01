import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts;
  public search_post;

  constructor(private post : PostService) { }

  ngOnInit(): void {
    this.post.getAllPost().subscribe((posts) => {
      this.posts= posts;
    });
  }

  searchPost(id){
    this.post.getSinglePost(id).subscribe((posts) => {
      this.search_post = posts;
    });
  }

}
