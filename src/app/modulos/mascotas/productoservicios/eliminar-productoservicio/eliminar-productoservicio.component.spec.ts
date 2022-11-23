import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductoservicioComponent } from './eliminar-productoservicio.component';

describe('EliminarProductoservicioComponent', () => {
  let component: EliminarProductoservicioComponent;
  let fixture: ComponentFixture<EliminarProductoservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProductoservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProductoservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
