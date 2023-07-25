import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByNazivPredmetaComponent } from './sort-by-naziv-predmeta.component';

describe('SortByNazivPredmetaComponent', () => {
  let component: SortByNazivPredmetaComponent;
  let fixture: ComponentFixture<SortByNazivPredmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByNazivPredmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByNazivPredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
