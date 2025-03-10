import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicBoardComponent } from './academic-board.component';

describe('AcademicBoardComponent', () => {
  let component: AcademicBoardComponent;
  let fixture: ComponentFixture<AcademicBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicBoardComponent]
    });
    fixture = TestBed.createComponent(AcademicBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
