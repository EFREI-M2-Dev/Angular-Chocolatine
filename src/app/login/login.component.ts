import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe((user: any) => {
      if (user.length === 0) alert('Erreur dans le pseudo ou le mot de passe');
      this.authService.user = user[0];
      if (!this.authService.user) return;
      this.authService.saveUser();
      this.router.navigate(['/']);
    }, (error) => {
      alert('Erreur dans la requête');
    });
  }


}
