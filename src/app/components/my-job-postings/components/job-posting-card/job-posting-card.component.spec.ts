import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostingCardComponent } from './job-posting-card.component';

describe('JobPostingCardComponent', () => {
  let component: JobPostingCardComponent;
  let fixture: ComponentFixture<JobPostingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPostingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
