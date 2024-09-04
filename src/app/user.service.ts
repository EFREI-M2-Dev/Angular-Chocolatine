import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Question} from "./quiz.service";
import {HttpClient} from "@angular/common/http";
import {User} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
}
