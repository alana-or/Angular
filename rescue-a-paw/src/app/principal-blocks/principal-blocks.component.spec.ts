import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBlocksComponent } from './principal-blocks.component';

describe('PrincipalBlocksComponent', () => {
  let component: PrincipalBlocksComponent;
  let fixture: ComponentFixture<PrincipalBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
