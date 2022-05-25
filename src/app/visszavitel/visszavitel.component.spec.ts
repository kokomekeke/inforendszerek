import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisszavitelComponent } from './visszavitel.component';

describe('VisszavitelComponent', () => {
  let component: VisszavitelComponent;
  let fixture: ComponentFixture<VisszavitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisszavitelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisszavitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
