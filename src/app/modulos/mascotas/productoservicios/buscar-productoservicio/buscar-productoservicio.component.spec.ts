import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductoservicioComponent } from './buscar-productoservicio.component';

describe('BuscarProductoservicioComponent', () => {
  let component: BuscarProductoservicioComponent;
  let fixture: ComponentFixture<BuscarProductoservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProductoservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProductoservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
