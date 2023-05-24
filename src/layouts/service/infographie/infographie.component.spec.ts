import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographieComponent } from './infographie.component';

describe('InfographieComponent', () => {
  let component: InfographieComponent;
  let fixture: ComponentFixture<InfographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
