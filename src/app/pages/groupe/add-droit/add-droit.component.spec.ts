import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDroitComponent } from './add-droit.component';

describe('AddDroitComponent', () => {
  let component: AddDroitComponent;
  let fixture: ComponentFixture<AddDroitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDroitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
