import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit{

  quizLink = '/quiz';
  quizForm!: FormGroup;

  profileForm = new FormGroup({
    username: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.quizForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      const username = this.profileForm.value.username
      this.router.navigate([`/${this.quizLink}`]);
    }
  }

  get isEmpty(): boolean {
    return this.quizForm.value.name === '';
  }

  get isConnected(): boolean {
    return window.localStorage.getItem('user') !== null;
  }
}
