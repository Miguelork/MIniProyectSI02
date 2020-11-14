import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallboxpersonComponent } from './smallboxperson.component';

describe('SmallboxpersonComponent', () => {
  let component: SmallboxpersonComponent;
  let fixture: ComponentFixture<SmallboxpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallboxpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallboxpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
