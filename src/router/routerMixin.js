import { Router } from "@vaadin/router";
import { dedupeMixin } from "@open-wc/dedupe-mixin";

export const RouterMixin = dedupeMixin(superClass =>
    class RouterMixin extends superClass {

        constructor(...args) {
            super(args);

            if (!this.routes.length) {
                console.error('Routes not defined');
            }
        }

        firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);

            const router = new Router(this.shadowRoot.querySelector('#content-main'));
            debugger;
            router.setRoutes([...this.routes]);
        }
    }
);