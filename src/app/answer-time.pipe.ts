import { Pipe, PipeTransform } from '@angular/core';
import {QuizService} from "./quiz.service";

@Pipe({
  name: 'answerTime'
})
export class AnswerTimePipe implements PipeTransform {
  constructor(private quizService: QuizService) {
  }
  transform(value: number, ...args: unknown[]): number {
    return value - this.quizService.startDate!;
  }
}
