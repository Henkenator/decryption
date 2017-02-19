/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MonoAlphabeticComponent } from './mono-alphabetic.component';

describe('MonoAlphabeticComponent', () => {
  let component: MonoAlphabeticComponent;
  let fixture: ComponentFixture<MonoAlphabeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonoAlphabeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoAlphabeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
