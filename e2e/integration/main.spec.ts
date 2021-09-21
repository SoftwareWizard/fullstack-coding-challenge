import TEST_BLOCK from '../fixtures/block.json';
import { MainPageObject } from '../page-objects/main.po';

const TEST_NODE_URLS = [
  'https://thawing-springs-53971.herokuapp.com',
  'https://secret-lowlands-62331.herokuapp.com',
  'https://calm-anchorage-82141.herokuapp.com',
  'http://localhost:3002'
];

const TEST_NODE_NAMES = ['Thawing Springs', 'Secret Lowlands', 'Calm Anchorage', 'Node 4'];

const ITERATOR_NAME = ['first', 'second', 'third', 'fourth'];

describe('Main Page', () => {
  beforeEach(() => {
    for (let i = 0; i < TEST_NODE_URLS.length - 1; i++) {
      cy.intercept(`${TEST_NODE_URLS[i]}/api/v1/status`, { node_name: `${TEST_NODE_NAMES[i]}` }).as(`${ITERATOR_NAME[i]}Node`);
    }

    cy.intercept(`${TEST_NODE_URLS[3]}/api/v1/status`).as(`${ITERATOR_NAME[3]}Node`);

    cy.intercept(`${TEST_NODE_URLS[0]}/api/v1/blocks`, { fixture: 'block.json' }).as(`${ITERATOR_NAME[0]}Block`);
  });

  it('should load status of Nodes', () => {
    cy.visit('/');

    cy.wait(['@firstNode', '@secondNode', '@thirdNode', '@fourthNode']).then(_ => {
      for (let i = 0; i < TEST_NODE_NAMES.length; i++) {
        MainPageObject.NodeDetailNames.eq(i).should('have.text', TEST_NODE_NAMES[i]);
      }

      MainPageObject.StatusTexts.eq(0).contains('online');
      MainPageObject.StatusTexts.eq(1).contains('online');
      MainPageObject.StatusTexts.eq(2).contains('online');
    });
  });

  it('should open nodes with information', () => {
    const TEST_BLOCK_DETAIL_DESCRIPTION = TEST_BLOCK.data[0].attributes.data;

    cy.visit('/');

    cy.wait('@firstNode').then(_ => {
      MainPageObject.ExpandButtons.eq(0).click();

      cy.wait('@firstBlock')
        .then(_ => {
          MainPageObject.BlockDetailDescriptions.eq(0).should('have.text', TEST_BLOCK_DETAIL_DESCRIPTION);
          MainPageObject.ToastContainer.contains('Success');
        })
        .then(_ => {
          MainPageObject.ExpandButtons.eq(0).click();
          MainPageObject.NodeDetailContainer.should('not.contain', TEST_BLOCK_DETAIL_DESCRIPTION);
        });
    });
  });

  it('should have Node 4 disabled', () => {
    cy.visit('/');

    cy.wait('@fourthNode').then(_ => {
      MainPageObject.ExpandButtons.eq(3).should('be.disabled');
    });
  });
});
