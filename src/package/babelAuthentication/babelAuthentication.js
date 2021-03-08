import { LitElement, html, css } from 'lit-element';
import { bulmaStyles } from '@granite-elements/granite-lit-bulma';

export class BabelAuthentication extends LitElement {

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

    _handleEventClick() {
        this.dispatchEvent(new CustomEvent('on-login', {
            bubbles: true,
            composed: true
        }))
    }

    render() {
        return html`
            <button @click="${this._handleEventClick}" class="button is-danger">Danger</button>
        `;
    }
}