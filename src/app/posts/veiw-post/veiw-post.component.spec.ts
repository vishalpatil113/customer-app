import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwPostComponent } from './veiw-post.component';

describe('VeiwPostComponent', () => {
  let component: VeiwPostComponent;
  let fixture: ComponentFixture<VeiwPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
