import { Router } from "@vaadin/router";
import { dedupeMixin } from "@open-wc/dedupe-mixin";
import { isLoggedIn } from '../login/statusLogin';

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
            const routesAction = this._setRoutesAction(this.routes);

            router.setRoutes([...routesAction]);
        }

        _setRoutesAction(routes) {
            return routes.map((route) => ({
                ...route,
                action: this._getActionProtected(route)
            }));
        }

        _getActionProtected(path) {
            return async (cxd, commands) => {
                if (!await isLoggedIn() && path.protected) {
                    return commands.redirect('/');
                }

                return import(path.pathComponent);
            }
        }
    }
);

export const RouterProvider = dedupeMixin(superClass =>
    class RouterProvider extends superClass {
        navigator(path) {
            Router.go(path);
        }
    }
);