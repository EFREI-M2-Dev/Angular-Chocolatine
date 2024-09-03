import { Injectable } from '@angular/core';
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

  getQuestions(): Observable<any[]> {
    return this.http.get<Question[]>('http://localhost:3000/questions').pipe(
      map((data: Question[]) => {
        this.questions = data;
        return data;
      })
    );
  }

  constructor(private http: HttpClient) {
    this.getQuestions().subscribe();
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
}
