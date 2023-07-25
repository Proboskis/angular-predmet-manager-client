import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePredmetComponent } from './update-predmet.component';

describe('UpdatePredmetComponent', () => {
  let component: UpdatePredmetComponent;
  let fixture: ComponentFixture<UpdatePredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePredmetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
