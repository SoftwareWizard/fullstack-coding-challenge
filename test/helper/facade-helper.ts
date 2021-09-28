import { of } from 'rxjs';

import { Spectator, SpectatorService } from '@ngneat/spectator/jest';

import { IFacadeMock } from './facade-mock.type';

export const getFacadeMock = (
  spectator: Spectator<any>,
  TFacade: any,
  TSelectors: any
): IFacadeMock<typeof TFacade> => {
  const mock = spectator.inject(TFacade) as IFacadeMock<typeof TFacade>;
  return populateMock(mock, TFacade, TSelectors);
};

export const getFacadeMockFromService = (
  spectator: SpectatorService<any>,
  TFacade: any,
  TSelectors: any
): IFacadeMock<typeof TFacade> => {
  const mock = spectator.inject(TFacade) as IFacadeMock<typeof TFacade>;
  return populateMock(mock, TFacade, TSelectors);
};

function populateMock(
  mock: any,
  TFacade: any,
  TSelectors: {}
): IFacadeMock<typeof TFacade> {
  const x = new TFacade();
  const actionNames = Object.keys(x).reverse();
  actionNames.pop(); // remove select method

  actionNames.forEach((actionName) => {
    mock[actionName] = jest.fn();
    mock[actionName]['dispatch'] = jest.fn();
  });

  const selectorNames = Object.keys(TSelectors);
  mock['select'] = jest.fn();

  selectorNames.forEach((selectorName) => {
    mock['select'][selectorName] = of();
  });

  return mock;
}
