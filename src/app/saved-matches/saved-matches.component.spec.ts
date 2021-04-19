import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedMatchesComponent } from './saved-matches.component';

describe('SavedMatchesComponent', () => {
  let component: SavedMatchesComponent;
  let fixture: ComponentFixture<SavedMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
