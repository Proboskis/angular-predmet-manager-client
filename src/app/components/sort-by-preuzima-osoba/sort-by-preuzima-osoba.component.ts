import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PredmetService } from 'src/app/services/predmet.service';
import { Predmet } from 'src/interfaces/Predmet';

@Component({
  selector: 'app-sort-by-preuzima-osoba',
  templateUrl: './sort-by-preuzima-osoba.component.html',
  styleUrls: ['./sort-by-preuzima-osoba.component.css'],
})
export class SortByPreuzimaOsobaComponent implements OnInit {
  collection: Predmet[] = [];
  preuzima_osoba!: string;
  totalLength!: number;
  page: number = 1;

  constructor(private predmet: PredmetService) {}

  ngOnInit(): void {}

  Sort() {
    // console.warn(this.preuzima_osoba);
    this.predmet
      .sortByPreuzimaOosoba(this.preuzima_osoba)
      .subscribe((result: Predmet[]) => {
        // console.warn('result is here', result);
        this.collection = result;
        this.totalLength = result.length;
      });
  }

  removePredmet(item: any) {
    this.predmet.deletePredmet(item).subscribe((result) => {
      // console.warn('result', result);
      this.collection = this.collection.filter((i) => i.id !== item.id);
      // this.collection.splice(item - 1, 1);
      this.Sort();
    });
  }
}
