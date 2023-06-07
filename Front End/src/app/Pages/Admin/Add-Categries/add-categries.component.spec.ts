import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategriesComponent } from './add-categries.component';

describe('AddCategriesComponent', () => {
  let component: AddCategriesComponent;
  let fixture: ComponentFixture<AddCategriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
