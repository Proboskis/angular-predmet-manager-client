import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PredmetService } from 'src/app/services/predmet.service';

@Component({
  selector: 'app-create-predmet',
  templateUrl: './create-predmet.component.html',
  styleUrls: ['./create-predmet.component.css'],
})
export class CreatePredmetComponent implements OnInit {
  alert: boolean = false;

  newPredmet = new FormGroup({
    broj_predmeta: new FormControl('', Validators.required),
    arhivski_broj: new FormControl(''),
    naziv_predmeta: new FormControl(''),
    opis_predmeta: new FormControl(''),
    faza_predmeta: new FormControl(''),
    iznos: new FormControl(0, [
      Validators.required,
      Validators.pattern('^[0-9]*'),
    ]),
    datum_unosa: new FormControl(new Date().toISOString().substring(0, 10)),
    datum_otpisa: new FormControl(new Date().toISOString().substring(0, 10)),
    napomena: new FormControl(''),
    ustanova: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    preuzima_osoba: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    potpisano: new FormControl('nepotpisano', Validators.required),
    admin_radnik: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
  });

  constructor(private predmet: PredmetService) {}

  ngOnInit(): void {}

  addPredmet() {
    // console.warn(this.createPredmet.value);
    this.predmet.createPredmet(this.newPredmet.value).subscribe((result) => {
      // console.warn('result is here', result);
      this.alert = true;
      this.newPredmet.reset();
    });
  }

  closeAlert() {
    this.alert = false;
  }

  get brojPredmeta() {
    return this.newPredmet.get('broj_predmeta');
  }

  get ustanova() {
    return this.newPredmet.get('ustanova');
  }

  get osoba() {
    return this.newPredmet.get('preuzima_osoba');
  }

  get iznos() {
    return this.newPredmet.get('iznos');
  }

  get adminRadnik() {
    return this.newPredmet.get('admin_radnik');
  }

  get potpis() {
    return this.newPredmet.get('potpisano');
  }
}
