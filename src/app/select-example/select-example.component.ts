import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Option {
  id: number;
  name: string;
}

@Component({
  selector: 'app-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.css'],
})
export class SelectExampleComponent {
  options: Option[] = [
    { id: 1, name: 'Banjo' },
    { id: 2, name: 'Advocado' },
    { id: 3, name: 'Uncle Barry' },
    { id: 4, name: 'Lettuce' },
  ];

  nameForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nameForm = this.fb.group({
      name: [3, Validators.required],
    });
  }
}
