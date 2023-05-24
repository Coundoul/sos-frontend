import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultanceComponent } from './consultance.component';

describe('ConsultanceComponent', () => {
  let component: ConsultanceComponent;
  let fixture: ComponentFixture<ConsultanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
