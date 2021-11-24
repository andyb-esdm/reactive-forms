import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { catchError, delay, map, Observable, of, switchMap, timer } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-async-validator-example',
  templateUrl: './async-validator-example.component.html',
  styleUrls: ['./async-validator-example.component.css'],
})
export class AsyncValidatorExampleComponent implements OnInit {
  userNameForm: FormGroup;

  get userNameControl() {
    return this.userNameForm.get('userName');
  }

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.userNameForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameExistsValidator()]],
    });
  }

  ngOnInit(): void {}

  private userNameExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      // return of(control.value).pipe(
      //   delay(500),
      //   switchMap((userName) => {
      //     return this.api
      //       .userNameExists(userName)
      //       .pipe(map((exists) => (exists ? { unavailable: true } : null)));
      //   })
      // );

      // functionally equivalent I think
      return timer(500).pipe(
        switchMap((_) => this.api.userNameExists(control.value)),
        map((exists) => (exists ? { unavailable: true } : null))
      );
    };
  }

  onSubmit() {
    console.log(this.userNameForm.value);
  }
}
