import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent {
  score = 0;
  questions = this.quizService.questions;

  constructor(private quizService: QuizService) {

    this.score = this.quizService.score;
  }


}
