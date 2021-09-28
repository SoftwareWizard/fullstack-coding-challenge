import { of } from 'rxjs';

import { Spectator, SpectatorService } from '@ngneat/spectator/jest';

import { IFacadeSpy } from './facade-spy.type';

export const getFacadeSpy = (
  spectator: Spectator<any>,
  TFacade: any,
  TSelectors: any
): IFacadeSpy<typeof TFacade> => {
  const spy = spectator.inject(TFacade) as IFacadeSpy<typeof TFacade>;
  return populateSpy(spy, TFacade, TSelectors);
};

export const getFacadeSpyFromService = (
  spectator: SpectatorService<any>,
  TFacade: any,
  TSelectors: any
): IFacadeSpy<typeof TFacade> => {
  const spy = spectator.inject(TFacade) as IFacadeSpy<typeof TFacade>;
  return populateSpy(spy, TFacade, TSelectors);
};

function populateSpy(
  spy: any,
  TFacade: any,
  TSelectors: {}
): IFacadeSpy<typeof TFacade> {
  const x = new TFacade();
  const actionNames = Object.keys(x).reverse();
  actionNames.pop(); // remove select method

  actionNames.forEach((actionName) => {
    spy[actionName] = jest.fn();
    spy[actionName]['dispatch'] = jest.fn();
  });

  const selectorNames = Object.keys(TSelectors);
  spy['select'] = jest.fn();

  selectorNames.forEach((selectorName) => {
    spy['select'][selectorName] = of();
  });

  return spy;
}
