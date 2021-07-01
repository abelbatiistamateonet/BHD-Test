import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments: Comment[] | undefined;
  commentsCount: number | undefined;

  constructor(
    private _commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.getComments();
    this.commentsCount = this.comments?.length;
  }

  getComments(): void{
    this._commentsService.getComments()
      .subscribe(comments => 
        this.comments = comments
      );
  }
}
