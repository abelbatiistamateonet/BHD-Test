import { Component, OnInit } from '@angular/core';

import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comments-add',
  templateUrl: './comments-add.component.html',
  styleUrls: ['./comments-add.component.css']
})
export class CommentsAddComponent implements OnInit {

  comments: Comment[] | undefined;

  constructor(
    private _commentsService: CommentsService
  ) { }

  ngOnInit(): void {
  }

  add(name: string, email: string, website: string, content: string): void {
    name = name.trim();
    email = email.trim();
    website = website.trim();
    content = content.trim();
    if (!name || !email || !website || !content) { return; }
    this._commentsService.addComment({ name, email, website, content } as Comment)
      .subscribe(comment => {
        this.comments!.push(comment);
      });
  }

}
