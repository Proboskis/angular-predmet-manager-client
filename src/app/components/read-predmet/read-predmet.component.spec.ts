import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPredmetComponent } from './read-predmet.component';

describe('ReadPredmetComponent', () => {
  let component: ReadPredmetComponent;
  let fixture: ComponentFixture<ReadPredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
