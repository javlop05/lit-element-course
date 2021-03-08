import { LitElement, html } from 'lit-element';
import '../../package/babelAuthentication/babel-authentication';

export class BabelLogin extends LitElement {

    render() {
        return html`
            <babel-authentication></babel-authentication>
        `;
    }
}
