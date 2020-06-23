import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmarkerComponent } from './editmarker.component';

describe('EditmarkerComponent', () => {
  let component: EditmarkerComponent;
  let fixture: ComponentFixture<EditmarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
