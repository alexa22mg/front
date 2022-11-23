import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoservicioComponent } from './editar-productoservicio.component';

describe('EditarProductoservicioComponent', () => {
  let component: EditarProductoservicioComponent;
  let fixture: ComponentFixture<EditarProductoservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProductoservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductoservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
