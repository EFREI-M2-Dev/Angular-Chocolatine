import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from "../quiz.service";
import {Question} from "../interfaces";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  username: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizService, private authService: AuthService) {
    this.username = this.authService.user?.username || '';
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

    console.log(this.questions);
  }

  onLockAnswer(event: { questionIndex: number, answerIndex: number }): void {
    const { questionIndex, answerIndex } = event;
    this.questions[questionIndex].answers.forEach((answer) => {
      answer.locked = false;
    });
    this.questions[questionIndex].answers[answerIndex].locked = true;
  }

  ngOnDestroy() {
    this.quizService.getQuestions().subscribe().unsubscribe();
  }
}
