import { TestBed } from '@angular/core/testing';
import { FirstWebAppComponent } from './first-web-app.component';

describe('SecondWebAppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FirstWebAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FirstWebAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'first-web-app'`, () => {
    const fixture = TestBed.createComponent(FirstWebAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('first-web-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FirstWebAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('first-web-app app is running!');
  });
});
