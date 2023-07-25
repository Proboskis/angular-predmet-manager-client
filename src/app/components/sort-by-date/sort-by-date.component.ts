import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PredmetService } from 'src/app/services/predmet.service';
import { Predmet } from 'src/interfaces/Predmet';

@Component({
  selector: 'app-sort-by-date',
  templateUrl: './sort-by-date.component.html',
  styleUrls: ['./sort-by-date.component.css'],
})
export class SortByDateComponent implements OnInit {
  collection: Predmet[] = [];
  datum!: string;
  totalLength!: number;
  page: number = 1;

  constructor(private predmet: PredmetService) {}

  ngOnInit(): void {}

  Sort() {
    // console.warn(this.datum);
    this.predmet.sortByDate(this.datum).subscribe((result: Predmet[]) => {
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
