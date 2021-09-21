import { By, Selector } from 'cypress-selectors';

export class MainPageObject {
  @By.Attribute('node-list-title', { attribute: 'data-cy' }) static NodeListTitle: Selector;
  @By.Class('name') static NodeDetailNames: Selector;
  @By.Class('expand-button') static ExpandButtons: Selector;
  @By.Class('block-detail-description') static BlockDetailDescriptions: Selector;
  @By.Class('node-detail-container') static NodeDetailContainer: Selector;
  @By.Id('toast-container') static ToastContainer: Selector;
  @By.Class('status-text') static StatusTexts: Selector;
}
