import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBusqComponent } from './barra-busq.component';

describe('BarraBusqComponent', () => {
  let component: BarraBusqComponent;
  let fixture: ComponentFixture<BarraBusqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraBusqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraBusqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
