import { TestBed } from '@angular/core/testing';
import { SecondWebAppComponent } from './second-web-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SecondWebAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SecondWebAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'second-web-app'`, () => {
    const fixture = TestBed.createComponent(SecondWebAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('second-web-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SecondWebAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('second-web-app app is running!');
  });
});
