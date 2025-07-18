import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_YSo3kxk5.mjs';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_Cu4wtzCm.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$PokemonCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PokemonCard;
  const { pokemon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="cursor-pointer w-[200px] h-[300px] shadow text-center m-2 rounded bg-white/60 grayscale transition-all hover:scale-105 hover:grayscale-0 hover:rotate-2"${addAttribute(`/pokemon/${pokemon.name.toLowerCase()}`, "href")}> <div class="mt-2"> <span>${`${pokemon.name} #${pokemon.id}`}</span> </div> <img${addAttribute(pokemon.sprites.other["official-artwork"].front_default, "src")}${addAttribute(`Image of ${pokemon.name}`, "alt")}> </a>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/PokemonCard.astro", void 0);

const $$Spinner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-400 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path> </svg> <span class="sr-only">Loading...</span> </div>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/Spinner.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pokemons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pokemons;
  let pokemons = [];
  let loading = true;
  const pageParam = Astro2.url.searchParams.get("page");
  const page = pageParam ? parseInt(pageParam) : 0;
  const limit = 15;
  const offset = page * limit;
  try {
    const { results } = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    ).then((res) => res.json());
    pokemons = await Promise.all(
      results.map(async (result) => {
        const pokemon = await fetch(result.url).then(
          (res) => res.json()
        );
        return {
          ...pokemon,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        };
      })
    );
    loading = false;
  } catch (error) {
    alert("Error searching the Pokemons");
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-center md:justify-between w-4/5 pokemon-list"> ${loading || !pokemons.length ? renderTemplate`<div class="flex justify-center items-center"> ${renderComponent($$result, "Spinner", $$Spinner, {})} </div>` : pokemons.map((pokemon) => renderTemplate`${renderComponent($$result, "PokemonCard", $$PokemonCard, { "pokemon": pokemon })}`)} </div>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/Pokemons.astro", void 0);

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const pageParams = Astro2.url.searchParams.get("page");
  const page = pageParams ? parseInt(pageParams) : 0;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center my-5"> ${page > 0 && renderTemplate`<a${addAttribute(`/?page=${page - 1}`, "href")} class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm transition-all hover:bg-blue-400 hover:text-white mr-4"> <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L9.46 10l3.31 3.71a.75.75 0 11-1.08 1.04l-3.75-4.25a.75.75 0 010-1.04l3.75-4.25a.75.75 0 011.06-.02z" clip-rule="evenodd"></path> </svg>
Prev
</a>`} <a${addAttribute(`/?page=${page + 1}`, "href")} class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm transition-all hover:bg-blue-400 hover:text-white">
Next
<svg class="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.54 10 7.23 6.29a.75.75 0 111.08-1.04l3.75 4.25a.75.75 0 010 1.04l-3.75 4.25a.75.75 0 01-1.06.02z" clip-rule="evenodd"></path> </svg> </a> </div>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/Pagination.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Poke Wiki | Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex justify-center"> ${renderComponent($$result2, "Pokemons", $$Pokemons, {})} </section> <section> ${renderComponent($$result2, "Pagination", $$Pagination, {})} </section> ` })}`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/pages/index.astro", void 0);

const $$file = "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
