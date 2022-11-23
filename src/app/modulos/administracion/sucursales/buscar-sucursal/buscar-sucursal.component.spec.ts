import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSucursalComponent } from './buscar-sucursal.component';

describe('BuscarSucursalComponent', () => {
  let component: BuscarSucursalComponent;
  let fixture: ComponentFixture<BuscarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
