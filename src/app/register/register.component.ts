import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  successMessage = '';
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required, this.forbiddenWords()]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    }, {validators: [this.checkPasswords, this.checkUsernameNotInPassword]});
  }


  private checkPasswords(FormGroup: FormGroup) {
    const password = FormGroup.get('password');
    const confirmPassword = FormGroup.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : { missMatch: true };
  }

  private checkUsernameNotInPassword(FormGroup: FormGroup) {
    const username = FormGroup.get('username');
    const password = FormGroup.get('password');
    return username && password && password.value.includes(username.value) ? {usernameInPassword: true} : null;
  }

  private forbiddenWords() {
    return (control: FormControl): ValidationErrors | null => {
      const forbidden = ['admin'];
      if (forbidden.includes(control.value)) {
        return {forbiddenWord: true};
      }
      return null;
    }
  }

  addUser() {
    if (this.registerForm.invalid) return;
    this.authService.addUser(this.registerForm.value);
    this.router.navigate(['/login']);
  }

  get getErrorLabel() {
    if (this.registerForm.errors?.['required']) return 'Les champs sont obligatoires';
    if (!!this.registerForm.controls?.['password']?.errors?.['minlength']) return `La longueur minimal pour votre mot de passe est ${this.registerForm.controls?.['password']?.errors?.['minlength']?.requiredLength}`;
    if (this.registerForm.errors?.['missMatch']) return 'Les mots de passe ne correspondent pas';
    if (this.registerForm.errors?.['usernameInPassword']) return 'Le mot de passe ne doit pas contenir le nom d\'utilisateur';
    return 'Un problème est survenu';
  }
}
