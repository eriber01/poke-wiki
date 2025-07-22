import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CrZPHbpy.mjs';
import { manifest } from './manifest_BqKzLVf5.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/pokemon/_pokemon_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.10.0_@types+node@24_d374345723e3a19a7ecc7e857a65e709/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/pokemon/[pokemon].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "558b15a3-b69f-4821-af83-c711f671d001",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
