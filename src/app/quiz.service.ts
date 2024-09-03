import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  correct: boolean;
  locked: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  questions: Question[] = [];
  score = 0;

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:3000/questions').pipe(
      map((data: Question[]) => {
        this.questions = data;
        return this.questions;
      })
    );
  }

  checkAnswers(): void {
    this.score = 0;
    this.questions.forEach((question: Question) => {
      question.answers.forEach((answer: Answer) => {
        if (answer.locked && answer.correct) {
          this.score++;
        }
      });
    });
  }

  shuffleAnswers(questionIndex: number): void {
    this.questions[questionIndex].answers.sort(() => Math.random() - 0.5);
  }
}
