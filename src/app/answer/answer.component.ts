import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from '../interfaces';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  @Input() answer!: Answer;
  @Input() answerIndex!: number;
  @Input() isLocked!: boolean;
  @Output() selectAnswer = new EventEmitter<number>();

  onSelectAnswer(): void {
    this.selectAnswer.emit(this.answerIndex);
  }
}
