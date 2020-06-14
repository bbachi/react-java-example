import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoardComponent } from './display-board.component';

describe('DisplayBoardComponent', () => {
  let component: DisplayBoardComponent;
  let fixture: ComponentFixture<DisplayBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
