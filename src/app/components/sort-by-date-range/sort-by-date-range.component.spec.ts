import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByDateRangeComponent } from './sort-by-date-range.component';

describe('SortByDateRangeComponent', () => {
  let component: SortByDateRangeComponent;
  let fixture: ComponentFixture<SortByDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByDateRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
