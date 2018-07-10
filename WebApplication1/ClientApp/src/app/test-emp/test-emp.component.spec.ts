import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEmpComponent } from './test-emp.component';

describe('TestEmpComponent', () => {
  let component: TestEmpComponent;
  let fixture: ComponentFixture<TestEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
