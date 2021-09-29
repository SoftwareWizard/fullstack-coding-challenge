import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { NodeStatusComponent } from './node-status.component';

describe('NodeStatus Component', () => {
  let spectator: Spectator<NodeStatusComponent>;
  let component: NodeStatusComponent;

  const createComponent = createComponentFactory({
    component: NodeStatusComponent
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the component', async () => {
    expect(component).toBeTruthy();
  });

  it('should show loading ellipsis when loading', async () => {
      component.isLoading = true;

      spectator.detectChanges();

      const loadingIndicatorElement = spectator.query('.loading-ellipsis');
      expect(loadingIndicatorElement).toBeTruthy();
  });

  it.each([true, false, undefined])('should show status when not loading', async (isOnline: boolean | undefined) => {
    component.isLoading = false;
    component.isOnline = isOnline;

    spectator.detectChanges();

    const loadingIndicatorElement = spectator.query('.loading-ellipsis');
    expect(loadingIndicatorElement).toBeNull();
    const expectedText = component.statusText.get(isOnline);

    const statusTextElement = spectator.query('.status-text');
    expect(statusTextElement?.textContent).toBe(expectedText);
  });
});
