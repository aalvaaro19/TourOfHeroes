import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightComponentComponent } from './eight-component.component';

describe('EightComponentComponent', () => {
  let component: EightComponentComponent;
  let fixture: ComponentFixture<EightComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EightComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
