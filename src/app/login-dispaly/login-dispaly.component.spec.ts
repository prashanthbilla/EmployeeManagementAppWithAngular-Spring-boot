import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDispalyComponent } from './login-dispaly.component';

describe('LoginDispalyComponent', () => {
  let component: LoginDispalyComponent;
  let fixture: ComponentFixture<LoginDispalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDispalyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDispalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
