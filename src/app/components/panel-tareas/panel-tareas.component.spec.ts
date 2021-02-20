import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTareasComponent } from './panel-tareas.component';

describe('PanelTareasComponent', () => {
  let component: PanelTareasComponent;
  let fixture: ComponentFixture<PanelTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
