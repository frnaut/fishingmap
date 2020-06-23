import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerDeatailComponent } from './marker-deatail.component';

describe('MarkerDeatailComponent', () => {
  let component: MarkerDeatailComponent;
  let fixture: ComponentFixture<MarkerDeatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerDeatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
