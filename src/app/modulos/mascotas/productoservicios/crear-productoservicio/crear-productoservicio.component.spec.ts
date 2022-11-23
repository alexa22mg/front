import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProductoservicioComponent } from './crear-productoservicio.component';

describe('CrearProductoservicioComponent', () => {
  let component: CrearProductoservicioComponent;
  let fixture: ComponentFixture<CrearProductoservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProductoservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProductoservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
