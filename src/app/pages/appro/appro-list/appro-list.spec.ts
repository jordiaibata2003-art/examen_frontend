import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproList } from './appro-list';

describe('ApproList', () => {
  let component: ApproList;
  let fixture: ComponentFixture<ApproList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproList],
    }).compileComponents();

    fixture = TestBed.createComponent(ApproList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
