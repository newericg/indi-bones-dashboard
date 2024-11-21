import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardPageComponent } from './home-dashboard-page.component';

describe('HomeDashboardPageComponent', () => {
  let component: HomeDashboardPageComponent;
  let fixture: ComponentFixture<HomeDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDashboardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
