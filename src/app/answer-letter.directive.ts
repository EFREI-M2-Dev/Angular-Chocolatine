import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAnswerLetter]'
})
export class AnswerLetterDirective implements AfterViewInit {
  @Input() answerIndex!: number;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.textContent = String.fromCharCode(65 + this.answerIndex) + '. ' + this.el.nativeElement.textContent;
  }
}
