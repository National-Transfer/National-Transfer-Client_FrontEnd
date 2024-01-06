import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransfersComponent } from './recent-transfers.component';

describe('RecentTransfersComponent', () => {
  let component: RecentTransfersComponent;
  let fixture: ComponentFixture<RecentTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentTransfersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
