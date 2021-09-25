import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the component', async () => {
    expect(component).toBeTruthy();
    expect(spectator.query('h2')).toHaveText('Hurra');
  });
});
