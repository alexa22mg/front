import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSucursalComponent } from './crear-sucursal.component';

describe('CrearSucursalComponent', () => {
  let component: CrearSucursalComponent;
  let fixture: ComponentFixture<CrearSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSucursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
