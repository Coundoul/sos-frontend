import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementLogicielComponent } from './equipement-logiciel.component';

describe('EquipementLogicielComponent', () => {
  let component: EquipementLogicielComponent;
  let fixture: ComponentFixture<EquipementLogicielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementLogicielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementLogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
