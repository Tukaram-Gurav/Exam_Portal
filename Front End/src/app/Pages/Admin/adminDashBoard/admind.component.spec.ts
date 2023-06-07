import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindComponent } from './admind.component';

describe('AdmindComponent', () => {
  let component: AdmindComponent;
  let fixture: ComponentFixture<AdmindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
