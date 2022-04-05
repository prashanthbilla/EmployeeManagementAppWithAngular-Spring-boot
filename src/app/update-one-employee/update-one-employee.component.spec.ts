import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneEmployeeComponent } from './update-one-employee.component';

describe('UpdateOneEmployeeComponent', () => {
  let component: UpdateOneEmployeeComponent;
  let fixture: ComponentFixture<UpdateOneEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOneEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOneEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
