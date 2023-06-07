import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdComponent } from './userd.component';

describe('UserdComponent', () => {
  let component: UserdComponent;
  let fixture: ComponentFixture<UserdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
