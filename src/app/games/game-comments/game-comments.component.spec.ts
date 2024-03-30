import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCommentsComponent } from './game-comments.component';

describe('GameCommentsComponent', () => {
  let component: GameCommentsComponent;
  let fixture: ComponentFixture<GameCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCommentsComponent]
    });
    fixture = TestBed.createComponent(GameCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
