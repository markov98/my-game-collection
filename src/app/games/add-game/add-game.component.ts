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
    year: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    developer: ['', Validators.required],
  });;

  constructor(private formBuilder: FormBuilder) { }

  addGame() {
    if (this.form.invalid) {
      return;
    }

    alert('Succes!!!')
  }
}