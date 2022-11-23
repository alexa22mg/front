import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProspectoComponent } from './crear-prospecto.component';

describe('CrearProspectoComponent', () => {
  let component: CrearProspectoComponent;
  let fixture: ComponentFixture<CrearProspectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProspectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
