import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhHomeComponent } from './gh-home.component';

describe('GhHomeComponent', () => {
  let component: GhHomeComponent;
  let fixture: ComponentFixture<GhHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
