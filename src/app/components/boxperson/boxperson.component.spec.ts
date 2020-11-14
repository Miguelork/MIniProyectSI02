import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxpersonComponent } from './boxperson.component';

describe('BoxpersonComponent', () => {
  let component: BoxpersonComponent;
  let fixture: ComponentFixture<BoxpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
