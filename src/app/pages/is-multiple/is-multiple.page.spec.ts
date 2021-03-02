import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IsMultiplePage } from './is-multiple.page';

describe('IsMultiplePage', () => {
  let component: IsMultiplePage;
  let fixture: ComponentFixture<IsMultiplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IsMultiplePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsMultiplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
