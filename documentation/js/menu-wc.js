'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">challenge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-db00a82eb8187b901f78c77c2b1781f3599b39d5743f43745d215d3051687f8676a067addf80fe0dd0e7ccc62724830bcaf682eee9f9a9b7e4b4273205285da1"' : 'data-target="#xs-components-links-module-AppModule-db00a82eb8187b901f78c77c2b1781f3599b39d5743f43745d215d3051687f8676a067addf80fe0dd0e7ccc62724830bcaf682eee9f9a9b7e4b4273205285da1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-db00a82eb8187b901f78c77c2b1781f3599b39d5743f43745d215d3051687f8676a067addf80fe0dd0e7ccc62724830bcaf682eee9f9a9b7e4b4273205285da1"' :
                                            'id="xs-components-links-module-AppModule-db00a82eb8187b901f78c77c2b1781f3599b39d5743f43745d215d3051687f8676a067addf80fe0dd0e7ccc62724830bcaf682eee9f9a9b7e4b4273205285da1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-10842091da21bc3f9531a3cc9500876f7a60c11761bb37a8359d69e1d9d8b73f20359e1197c74f8c051b80a610e24584ec4dc4c1c40c0be1fd88d8f5330f46b2"' : 'data-target="#xs-components-links-module-CoreModule-10842091da21bc3f9531a3cc9500876f7a60c11761bb37a8359d69e1d9d8b73f20359e1197c74f8c051b80a610e24584ec4dc4c1c40c0be1fd88d8f5330f46b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-10842091da21bc3f9531a3cc9500876f7a60c11761bb37a8359d69e1d9d8b73f20359e1197c74f8c051b80a610e24584ec4dc4c1c40c0be1fd88d8f5330f46b2"' :
                                            'id="xs-components-links-module-CoreModule-10842091da21bc3f9531a3cc9500876f7a60c11761bb37a8359d69e1d9d8b73f20359e1197c74f8c051b80a610e24584ec4dc4c1c40c0be1fd88d8f5330f46b2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StatusModule.html" data-type="entity-link" >StatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatusModule-e37ad89204394af7fc92e471c5fb4ec305314dbfca3e24e4d75cc0c8d0be4e7faf430fcf903fb5e46f3cc8a7bd77c3860265f177574f182f6403dab17c690adc"' : 'data-target="#xs-components-links-module-StatusModule-e37ad89204394af7fc92e471c5fb4ec305314dbfca3e24e4d75cc0c8d0be4e7faf430fcf903fb5e46f3cc8a7bd77c3860265f177574f182f6403dab17c690adc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatusModule-e37ad89204394af7fc92e471c5fb4ec305314dbfca3e24e4d75cc0c8d0be4e7faf430fcf903fb5e46f3cc8a7bd77c3860265f177574f182f6403dab17c690adc"' :
                                            'id="xs-components-links-module-StatusModule-e37ad89204394af7fc92e471c5fb4ec305314dbfca3e24e4d75cc0c8d0be4e7faf430fcf903fb5e46f3cc8a7bd77c3860265f177574f182f6403dab17c690adc"' }>
                                            <li class="link">
                                                <a href="components/BlockDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlockListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NodeDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodeDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NodeListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodeListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NodeStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodeStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusRoutingModule.html" data-type="entity-link" >StatusRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/StatusFacade.html" data-type="entity-link" >StatusFacade</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NodeService.html" data-type="entity-link" >NodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatusEffects.html" data-type="entity-link" >StatusEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Block.html" data-type="entity-link" >Block</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BlockAttributes.html" data-type="entity-link" >BlockAttributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Blocks.html" data-type="entity-link" >Blocks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Node.html" data-type="entity-link" >Node</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Status.html" data-type="entity-link" >Status</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusState.html" data-type="entity-link" >StatusState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});