import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobPostingLayoutComponent } from './create-job-posting-layout.component';

describe('CreateJobPostingLayoutComponent', () => {
  let component: CreateJobPostingLayoutComponent;
  let fixture: ComponentFixture<CreateJobPostingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobPostingLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJobPostingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
