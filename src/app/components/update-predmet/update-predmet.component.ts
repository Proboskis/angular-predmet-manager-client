import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PredmetService } from 'src/app/services/predmet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-predmet',
  templateUrl: './update-predmet.component.html',
  styleUrls: ['./update-predmet.component.css'],
})
export class UpdatePredmetComponent implements OnInit {
  alert: boolean = false;

  editPredmet = new FormGroup({
    broj_predmeta: new FormControl('', Validators.required),
    arhivski_broj: new FormControl(''),
    naziv_predmeta: new FormControl(''),
    opis_predmeta: new FormControl(''),
    faza_predmeta: new FormControl(''),
    iznos: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*'),
    ]),
    datum_unosa: new FormControl(''),
    datum_otpisa: new FormControl(''),
    napomena: new FormControl(''),
    ustanova: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    preuzima_osoba: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    potpisano: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(11),
    ]),
    admin_radnik: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
  });

  constructor(
    private router: ActivatedRoute,
    private predmet: PredmetService
  ) {}

  ngOnInit(): void {
    //console.warn(this.router.snapshot.params.id);
    this.predmet
      .getCurrentPredmet(this.router.snapshot.params.id)
      .subscribe((result: any) => {
        console.warn('result', result);
        this.editPredmet.setValue({
          broj_predmeta: result[0].broj_predmeta,
          arhivski_broj: result[0].arhivski_broj,
          naziv_predmeta: result[0].naziv_predmeta,
          opis_predmeta: result[0].opis_predmeta,
          faza_predmeta: result[0].faza_predmeta,
          iznos: result[0].iznos,
          datum_unosa: result[0].datum_unosa,
          datum_otpisa: result[0].datum_otpisa,
          napomena: result[0].napomena,
          ustanova: result[0].ustanova,
          preuzima_osoba: result[0].preuzima_osoba,
          potpisano: result[0].potpisano,
          admin_radnik: result[0].admin_radnik,
        });
      });
  }
  collection() {
    // console.warn(this.editPredmet.value);
    this.predmet
      .updatePredmet(this.router.snapshot.params.id, this.editPredmet.value)
      .subscribe(
        (
          result // console.warn(result)
        ) => (this.alert = true)
      );
  }
  closeAlert() {
    this.alert = false;
  }

  get brojPredmeta() {
    return this.editPredmet.get('broj_predmeta');
  }

  get ustanova() {
    return this.editPredmet.get('ustanova');
  }

  get osoba() {
    return this.editPredmet.get('preuzima_osoba');
  }

  get iznos() {
    return this.editPredmet.get('iznos');
  }

  get adminRadnik() {
    return this.editPredmet.get('admin_radnik');
  }

  get potpis() {
    return this.editPredmet.get('potpisano');
  }
}
