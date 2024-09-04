import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../interfaces';
import {AnswerTimePipe} from "../answer-time.pipe";
import {AnswerComponent} from "../answer/answer.component";
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  dateAnswer!: number;

  @Input() question!: Question;
  @Input() questionIndex!: number;
  @Output() lockAnswer = new EventEmitter<{ questionIndex: number, answerIndex: number }>();

  onLockAnswer(answerIndex: number): void {
    this.dateAnswer = Date.now();
    this.lockAnswer.emit({ questionIndex: this.questionIndex, answerIndex });
  }

  protected readonly AnswerComponent = AnswerComponent;
  protected readonly AnswerTimePipe = AnswerTimePipe;
}
