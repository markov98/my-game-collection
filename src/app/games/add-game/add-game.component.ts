import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

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
    imgUrl: ['', Validators.required]
  });;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  addGame() {
    if (this.form.invalid) {
      return;
    }

    const { name, year, developer, imgUrl } = this.form.value;

    this.apiService.addGame({ name, year, developer, imgUrl })
      .subscribe(() => this.router.navigate(['/games']))
  }
}