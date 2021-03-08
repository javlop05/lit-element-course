import { LitElement, html, css } from 'lit-element';
import { bulmaStyles } from "@granite-elements/granite-lit-bulma";
import { RouterMixin, RouterProvider } from './router/routerMixin';
import { routes } from './router/routes';
import { instanceLogin } from './login/login';

export class BabelFormationApp extends RouterProvider(RouterMixin(LitElement)) {

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

    static get properties() {
        return {
            isLogin: { type: Boolean }
        }
    }

    get routes() {
        return routes;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('on-login', this._handleOnLogin);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('on-login', this._handleOnLogin);
    }

    async _handleOnLogin(event) {
        this.isLogin = await instanceLogin.loginWithFacebook();

        if (this.isLogin) {
            this.navigator('home')
        }
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