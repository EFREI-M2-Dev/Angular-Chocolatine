import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private userService: UserService) {
    console.log(this.userService.users);
  }
  title = 'Azur Lane Quiz';
  description = 'Test your knowledge of the mobile game Azur Lane with this quiz!';
  startQuiz = 'Start Quiz';
  quizLink = '/quiz';
}
