import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../quiz.service";
import {getLocaleDateFormat} from "@angular/common";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent {
  score = 0;
  questions = this.quizService.questions;
  dateObj: number = Date.now();

  constructor(private quizService: QuizService) {

    this.score = this.quizService.score;
  }


    protected readonly getLocaleDateFormat = getLocaleDateFormat;
}
