import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdatePredmetComponent } from './components/update-predmet/update-predmet.component';
import { ReadPredmetComponent } from './components/read-predmet/read-predmet.component';
import { CreatePredmetComponent } from './components/create-predmet/create-predmet.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortByDateRangeComponent } from './components/sort-by-date-range/sort-by-date-range.component';
import { SortByDateComponent } from './components/sort-by-date/sort-by-date.component';
import { SortByPreuzimaOsobaComponent } from './components/sort-by-preuzima-osoba/sort-by-preuzima-osoba.component';
import { SortByNazivPredmetaComponent } from './components/sort-by-naziv-predmeta/sort-by-naziv-predmeta.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UpdatePredmetComponent,
    ReadPredmetComponent,
    CreatePredmetComponent,
    SortByDateRangeComponent,
    SortByDateComponent,
    SortByPreuzimaOsobaComponent,
    SortByNazivPredmetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
