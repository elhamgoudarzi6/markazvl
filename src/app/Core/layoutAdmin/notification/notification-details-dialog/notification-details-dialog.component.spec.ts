import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDetailsDialogComponent } from './notification-details-dialog.component';

describe('NotificationDetailsDialogComponent', () => {
  let component: NotificationDetailsDialogComponent;
  let fixture: ComponentFixture<NotificationDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
