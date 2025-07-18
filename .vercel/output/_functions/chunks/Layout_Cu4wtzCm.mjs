import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, e as renderComponent, b as addAttribute, f as renderHead, g as renderSlot } from './astro/server_YSo3kxk5.mjs';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-container" data-astro-cid-3ef6ksr2> <nav class="flex justify-between header" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <li class="font-semibold" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>Poke Wiki</a></li> </div> <div class="opacity-10" data-astro-cid-3ef6ksr2>|</div> <div class="flex" data-astro-cid-3ef6ksr2> <li class="ml-2.5" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Pokemons</a> </li> <li class="ml-2.5" data-astro-cid-3ef6ksr2> <a href="#contact" data-astro-cid-3ef6ksr2>Contact</a> </li> </div> </nav> </div> `;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/Header.astro", void 0);

const $$FooterSocials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center gap-4"> <a href="https://github.com/eriber01/poke-wiki" target="_blank" rel="noopener noreferrer"> <svg width="24" height="24" viewBox="0 0 100 100" role="img" aria-label="Logotipo de Github"> <path fill="currentColor" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path> </svg> </a> <a href="https://www.linkedin.com/in/eriber-tejeda-amparo/" target="_blank" rel="noopener noreferrer"> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" focusable="false"> <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path> </svg> </a> </div>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/FooterSocials.astro", void 0);

const $$FooterLine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="border-b-2 md:border-r-2 md:border-b-0 border-white/20 w-5/12 my-4 md:w-0"></span>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/FooterLine.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="bg-blue-950 text-white px-4 py-5"> <footer class="flex flex-col items-center md:flex-row w-full"> <div class="flex flex-col items-center md:text-start w-full md:w-2/12 tracking-wider"> <div class="mb-2 md:mb-3"> <span class="text-2xl">Eriber</span> </div> <div class="flex flex-col items-center"> <span class="text-lg">Tejeda Amparo</span> <span>Web Developer</span> </div> </div> ${renderComponent($$result, "FooterLine", $$FooterLine, {})} <div class="flex flex-col items-center w-8/12 md:text-star md:ml-2"> <span class="text-2xl">About</span> <span class="text-center">
This is a single project to learn Astro.
</span> </div> ${renderComponent($$result, "FooterLine", $$FooterLine, {})} <div class="flex flex-col items-center w-8/12 md:text-star md:ml-2"> <span class="text-2xl">Contact</span> <span class="text-center">eriber01@gmail.com</span> </div> ${renderComponent($$result, "FooterLine", $$FooterLine, {})} <div> ${renderComponent($$result, "FooterSocials", $$FooterSocials, {})} </div> </footer> </section>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="content" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
