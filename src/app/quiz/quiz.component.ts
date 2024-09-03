import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  constructor(private router: Router, private quizService: QuizService) { }

  questions = this.quizService.questions;

  lockAnswer(questionIndex: number, answerIndex: number): void {
    this.quizService.questions[questionIndex].answers.forEach((answer) => {
      answer.locked = false;
    });
    this.quizService.questions[questionIndex].answers[answerIndex].locked = true;
    console.log(this.quizService.questions[questionIndex]);
  }

  checkAnswers(): void {
    this.quizService.checkAnswers();
    this.router.navigateByUrl(`/result`);
  }

  shuffleAnswers(questionIndex: number): void {
    this.quizService.questions[questionIndex].answers.sort(() => Math.random() - 0.5);
  }

  ngOnInit() {
    this.quizService.questions.forEach((question, index) => {
      this.shuffleAnswers(index);
    });
  }
}
