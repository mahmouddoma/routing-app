import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorrPageComponent } from './erorr-page.component';

describe('ErorrPageComponent', () => {
  let component: ErorrPageComponent;
  let fixture: ComponentFixture<ErorrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErorrPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErorrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
