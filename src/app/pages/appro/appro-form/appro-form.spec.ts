import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproForm } from './appro-form';

describe('ApproForm', () => {
  let component: ApproForm;
  let fixture: ComponentFixture<ApproForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ApproForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
