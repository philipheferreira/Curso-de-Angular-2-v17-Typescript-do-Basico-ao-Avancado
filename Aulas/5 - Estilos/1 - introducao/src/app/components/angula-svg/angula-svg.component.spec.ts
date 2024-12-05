import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulaSvgComponent } from './angula-svg.component';

describe('AngulaSvgComponent', () => {
  let component: AngulaSvgComponent;
  let fixture: ComponentFixture<AngulaSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngulaSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulaSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
