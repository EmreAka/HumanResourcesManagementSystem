import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpecialClientRequestsComponent } from './my-special-client-requests.component';

describe('MySpecialClientRequestsComponent', () => {
  let component: MySpecialClientRequestsComponent;
  let fixture: ComponentFixture<MySpecialClientRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySpecialClientRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySpecialClientRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
