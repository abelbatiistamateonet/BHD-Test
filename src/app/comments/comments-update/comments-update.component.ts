import { Component, OnInit } from '@angular/core';

import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/interfaces/comment';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments-update',
  templateUrl: './comments-update.component.html',
  styleUrls: ['./comments-update.component.css']
})
export class CommentsUpdateComponent implements OnInit {

  comment: Comment | undefined;

  constructor(
    private _location: Location,
    private _commentsService: CommentsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getComment();
  }

  getComment(): void{
    const id = +this._route.snapshot.paramMap.get('id')!;
    this._commentsService.getComment(id)
    .subscribe(comment => this.comment = comment);
  }

  save(): void{
    this._commentsService.updateComment(this.comment!)
    .subscribe(() => this.goBack());
    console.log(this.comment);
  }

  goBack(): void {
    this._location.back();
  }

}
