import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CrZPHbpy.mjs';
import { manifest } from './manifest_DNkYPGCG.mjs';

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
    "middlewareSecret": "d66e747b-922b-4c23-84a0-7676e4f64182",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
