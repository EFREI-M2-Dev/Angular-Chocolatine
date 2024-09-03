import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {QuizService} from "../quiz.service";

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  correct: boolean;
  locked: boolean;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit, OnDestroy {
  questions: Question[] = [];

  constructor(private router: Router, private quizService: QuizService) {
    this.quizService.getQuestions();
    this.questions = this.quizService.questions;
  }

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


  ngOnInit() {
    this.quizService.getQuestions().subscribe((questions: Question[]) => {
      this.questions = questions;
      this.questions.forEach((_, index) => {
        this.quizService.shuffleAnswers(index);
      });
    });
  }

  ngOnDestroy() {
    this.quizService.getQuestions().subscribe().unsubscribe();
  }
}
