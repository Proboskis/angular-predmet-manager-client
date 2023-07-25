import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePredmetComponent } from './components/create-predmet/create-predmet.component';
import { ReadPredmetComponent } from './components/read-predmet/read-predmet.component';
import { UpdatePredmetComponent } from './components/update-predmet/update-predmet.component';
import { SortByDateComponent } from './components/sort-by-date/sort-by-date.component';
import { SortByDateRangeComponent } from './components/sort-by-date-range/sort-by-date-range.component';
import { SortByPreuzimaOsobaComponent } from './components/sort-by-preuzima-osoba/sort-by-preuzima-osoba.component';
import { SortByNazivPredmetaComponent } from './components/sort-by-naziv-predmeta/sort-by-naziv-predmeta.component';

const ROUTES: Routes = [
  {
    component: CreatePredmetComponent,
    path: 'create',
  },
  {
    component: UpdatePredmetComponent,
    path: 'update/:id',
  },
  {
    component: SortByDateComponent,
    path: 'sort-by-date',
  },
  {
    component: SortByDateRangeComponent,
    path: 'sort-by-date-range',
  },
  {
    component: SortByPreuzimaOsobaComponent,
    path: 'sort-by-preuzima-osoba',
  },
  {
    component: SortByNazivPredmetaComponent,
    path: 'sort-by-naziv-predmeta',
  },
  {
    component: ReadPredmetComponent,
    path: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
