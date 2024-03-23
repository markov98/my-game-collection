import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    year: ['', Validators.required],
    developer: ['', Validators.required],
  });;

  constructor(private formBuilder: FormBuilder) { }
}