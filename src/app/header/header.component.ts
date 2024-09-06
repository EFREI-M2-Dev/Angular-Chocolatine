import {Component} from '@angular/core';
import {UserService} from "../user.service";
import {QuizService} from "../quiz.service";
import {AuthService} from "../auth.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string = '';

  constructor (private quizService: QuizService,
               private authService: AuthService,
               private TranslateService: TranslateService) {
    this.quizService.currentUser ? this.username = this.quizService.currentUser  : "";
  }

  get isConnected(): boolean {
    return window.localStorage.getItem('user') !== null;
  }

  logout(): void {
    window.localStorage.removeItem('user');
    window.location.reload();
  }

  get getUsername() {
    return this.authService.user?.username || '';
  }

  useLanguage(language: string): void {
    this.TranslateService.use(language);
  }

}
