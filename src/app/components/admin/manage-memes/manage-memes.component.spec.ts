import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMemesComponent } from './manage-memes.component';

describe('ManageMemesComponent', () => {
  let component: ManageMemesComponent;
  let fixture: ComponentFixture<ManageMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
