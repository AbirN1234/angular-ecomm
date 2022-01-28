import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbannerComponent } from './appbanner.component';

describe('AppbannerComponent', () => {
  let component: AppbannerComponent;
  let fixture: ComponentFixture<AppbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
