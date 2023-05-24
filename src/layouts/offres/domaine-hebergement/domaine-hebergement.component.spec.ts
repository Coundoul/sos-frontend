import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineHebergementComponent } from './domaine-hebergement.component';

describe('DomaineHebergementComponent', () => {
  let component: DomaineHebergementComponent;
  let fixture: ComponentFixture<DomaineHebergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomaineHebergementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomaineHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
