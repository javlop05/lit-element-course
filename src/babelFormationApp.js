import { LitElement, html, css } from 'lit-element';
import { bulmaStyles } from "@granite-elements/granite-lit-bulma";
import { Router } from '@vaadin/router';
import './views/babelHome/babel-home';

export class BabelFormationApp extends LitElement {

    static get styles() {
        return [
            bulmaStyles,
            css`
                :host {
                    display: block;
                }
            `
        ]
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        const router = new Router(this.shadowRoot.querySelector('#content-main'));
        router.setRoutes([
            { path: '/', component: 'babel-home' },
        ]);
    }

    render() {
        return html`
            <section>
                <main id="content-main">
                </main>
            </section>
        `;
    }
}