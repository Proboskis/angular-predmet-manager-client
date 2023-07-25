import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByPreuzimaOsobaComponent } from './sort-by-preuzima-osoba.component';

describe('SortByPreuzimaOsobaComponent', () => {
  let component: SortByPreuzimaOsobaComponent;
  let fixture: ComponentFixture<SortByPreuzimaOsobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByPreuzimaOsobaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByPreuzimaOsobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
