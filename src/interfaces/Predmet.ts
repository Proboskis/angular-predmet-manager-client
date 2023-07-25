export interface Predmet {
  id: number;
  broj_predmeta: string;
  arhivski_broj: string;
  naziv_predmeta: string;
  opis_predmeta: string;
  faza_predmeta: string;
  iznos: number;
  datum_unosa: Date;
  datum_otpisa: Date;
  napomena: string;
  ustanova: string;
  preuzima_osoba: string;
  potpisano: string;
  admin_radnik: string;
}
