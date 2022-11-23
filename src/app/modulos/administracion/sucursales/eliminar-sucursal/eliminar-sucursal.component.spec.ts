import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSucursalComponent } from './eliminar-sucursal.component';

describe('EliminarSucursalComponent', () => {
  let component: EliminarSucursalComponent;
  let fixture: ComponentFixture<EliminarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
