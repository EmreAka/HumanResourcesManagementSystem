import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpecialClientRequestComponent } from './create-special-client-request.component';

describe('CreateSpecialClientRequestComponent', () => {
  let component: CreateSpecialClientRequestComponent;
  let fixture: ComponentFixture<CreateSpecialClientRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSpecialClientRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSpecialClientRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
