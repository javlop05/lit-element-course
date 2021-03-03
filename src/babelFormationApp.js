import { LitElement, html, css } from 'lit-element';
import { bulmaStyles } from "@granite-elements/granite-lit-bulma";
import { RouterMixin } from './router/routerMixin';
import { routes } from './router/routes';

export class BabelFormationApp extends RouterMixin(LitElement) {

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

    get routes() {
        return routes;
    }

    connectedCallback() {
        super.connectedCallback();
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