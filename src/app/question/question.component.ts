import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../interfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() questionIndex!: number;
  @Output() lockAnswer = new EventEmitter<{ questionIndex: number, answerIndex: number }>();

  onLockAnswer(answerIndex: number): void {
    this.lockAnswer.emit({ questionIndex: this.questionIndex, answerIndex });
  }
}
