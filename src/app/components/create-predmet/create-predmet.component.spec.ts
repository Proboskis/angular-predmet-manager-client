import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePredmetComponent } from './create-predmet.component';

describe('CreatePredmetComponent', () => {
  let component: CreatePredmetComponent;
  let fixture: ComponentFixture<CreatePredmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePredmetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
