import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialClientRequestLayoutComponent } from './create-special-client-request-layout.component';

describe('CreateSpecialClientRequestLayoutComponent', () => {
  let component: CreateSpecialClientRequestLayoutComponent;
  let fixture: ComponentFixture<CreateSpecialClientRequestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpecialClientRequestLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSpecialClientRequestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
