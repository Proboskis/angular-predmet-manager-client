import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PredmetService } from 'src/app/services/predmet.service';
import { Predmet } from 'src/interfaces/Predmet';

@Component({
  selector: 'app-sort-by-naziv-predmeta',
  templateUrl: './sort-by-naziv-predmeta.component.html',
  styleUrls: ['./sort-by-naziv-predmeta.component.css'],
})
export class SortByNazivPredmetaComponent implements OnInit {
  collection: Predmet[] = [];
  naziv_predmeta!: string;
  totalLength!: number;
  page: number = 1;

  constructor(private predmet: PredmetService) {}

  ngOnInit(): void {}

  Sort() {
    // console.warn(this.naziv_predmeta);
    this.predmet
      .sortByNaziv(this.naziv_predmeta)
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
