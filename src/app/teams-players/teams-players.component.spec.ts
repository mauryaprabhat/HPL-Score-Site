import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsPlayersComponent } from './teams-players.component';

describe('TeamsPlayersComponent', () => {
  let component: TeamsPlayersComponent;
  let fixture: ComponentFixture<TeamsPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
