import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategriesComponent } from './view-categries.component';

describe('ViewCategriesComponent', () => {
  let component: ViewCategriesComponent;
  let fixture: ComponentFixture<ViewCategriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCategriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
