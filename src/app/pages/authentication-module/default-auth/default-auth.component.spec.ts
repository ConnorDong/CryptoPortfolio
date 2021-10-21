import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAuthComponent } from './default-auth.component';

describe('DefaultAuthComponent', () => {
  let component: DefaultAuthComponent;
  let fixture: ComponentFixture<DefaultAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
