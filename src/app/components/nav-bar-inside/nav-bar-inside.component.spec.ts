import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInsideComponent } from './nav-bar-inside.component';

describe('NavBarInsideComponent', () => {
  let component: NavBarInsideComponent;
  let fixture: ComponentFixture<NavBarInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
