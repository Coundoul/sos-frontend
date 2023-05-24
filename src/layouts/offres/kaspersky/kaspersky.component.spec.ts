import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasperskyComponent } from './kaspersky.component';

describe('KasperskyComponent', () => {
  let component: KasperskyComponent;
  let fixture: ComponentFixture<KasperskyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasperskyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KasperskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
