import { Component, OnInit } from '@angular/core';
import { PredmetService } from 'src/app/services/predmet.service';
import { Predmet } from 'src/interfaces/Predmet';

@Component({
  selector: 'app-read-predmet',
  templateUrl: './read-predmet.component.html',
  styleUrls: ['./read-predmet.component.css'],
})
export class ReadPredmetComponent implements OnInit {
  collection: Predmet[] = [];
  preuzima_osoba: any;
  constructor(private predmet: PredmetService) {}
  totalLength!: number;
  page: number = 1;

  ngOnInit(): void {
    this.predmet.readPredmet().subscribe((result: Predmet[]) => {
      // console.warn(result);
      this.collection = result;
      this.totalLength = result.length;
    });
  }

  removePredmet(item: any) {
    this.predmet.deletePredmet(item).subscribe((result) => {
      // console.warn('result', result);
      this.collection = this.collection.filter((i) => i.id !== item.id);
      // this.collection.splice(item - 1, 1);
      this.ngOnInit();
    });
  }

  /*Search() {
    if (this.preuzima_osoba == '') {
      this.ngOnInit();
    } else {
      this.collection = this.collection.filter((res) => {
        return res.preuzima_osoba
          .toLocaleLowerCase()
          .match(this.preuzima_osoba.toLocaleLowerCase());
      });
    }
  }*/
}
