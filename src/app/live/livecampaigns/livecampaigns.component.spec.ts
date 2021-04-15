import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecampaignsComponent } from './livecampaigns.component';

describe('LivecampaignsComponent', () => {
  let component: LivecampaignsComponent;
  let fixture: ComponentFixture<LivecampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecampaignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
