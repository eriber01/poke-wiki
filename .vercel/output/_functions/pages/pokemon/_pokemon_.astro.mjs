import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent } from '../../chunks/astro/server_YSo3kxk5.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cu4wtzCm.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const pokemonTypeColor = {
  normal: "#aa9",
  fire: "#f42",
  water: "#39f",
  electric: "#fc3",
  grass: "#7c5",
  ice: "#6cf",
  fighting: "#b54",
  poison: "#a59",
  ground: "#db5",
  flying: "#89f",
  psychic: "#89f",
  bug: "#ab2",
  rock: "#ba6",
  ghost: "#66b",
  dragon: "#76e",
  dark: "#754",
  steel: "#aab",
  fairy: "#e9e"
};
const firstUpperCase = (text) => `${text.charAt(0)?.toUpperCase()}${text.slice(1)}`;

const $$Astro$2 = createAstro();
const $$PokemonTypes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PokemonTypes;
  const { types } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex mt-3"> ${types.map((type) => renderTemplate`<div${addAttribute(`mr-2 rounded-3xl px-2 py-0.5 text-white`, "class")}${addAttribute(`background-color: ${pokemonTypeColor[type.type.name]};`, "style")}> <span class="text-shadow-2xs text-shadow-gray-400"> ${type.type.name} </span> </div>`)} </div>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/PokemonTypes.astro", void 0);

const $$Astro$1 = createAstro();
const $$PokemonStats = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PokemonStats;
  const { stats } = Astro2.props;
  const statsFilter = stats.filter(
    (i) => i.stat.name !== "hp" && i.stat.name !== "special-attack" && i.stat.name !== "special-defense"
  );
  return renderTemplate`${maybeRenderHead()}<div class="flex mt-5 justify-between w-10/12"> ${statsFilter.map((i) => renderTemplate`<div class="flex flex-col text-center"> <span class="font-semibold">${i.base_stat}</span> <span>${firstUpperCase(i.stat.name || "")}</span> </div>`)} </div>`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/components/PokemonStats.astro", void 0);

const $$Astro = createAstro();
const $$pokemon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pokemon;
  const { pokemon } = Astro2.params;
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  ).then((res) => res.json());
  const statistic = {
    hp: data.stats.find((i) => i.stat.name = "hp")
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Poke Wiki | ${firstUpperCase(pokemon || "")}`, "`": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center"> <div class="flex flex-col items-center w-[300px] h-[400px] shadow m-2 rounded bg-white/60"> <div class="text-right w-full mt-5"> <span class="mr-3 py-2 px-3 rounded-full bg-blue-800 text-white"> <span class="text-sm">HP</span> <span class=""> ${statistic.hp?.base_stat} </span> </span> </div> <img class="" width="200" height="250"${addAttribute(data.sprites.other["official-artwork"].front_default, "src")}${addAttribute(`Image of ${pokemon}`, "alt")}> <span class="font-semibold text-xl">${firstUpperCase(pokemon || "")}</span> <div> ${renderComponent($$result2, "PokemonTypes", $$PokemonTypes, { "types": data.types })} </div> <div class="flex justify-center w-full"> ${renderComponent($$result2, "PokemonStats", $$PokemonStats, { "stats": data.stats })} </div> </div> </div> ` })}`;
}, "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/pages/pokemon/[pokemon].astro", void 0);

const $$file = "C:/Users/eribe/OneDrive/Escritorio/Web Dev/Astro/poke-wiki/src/pages/pokemon/[pokemon].astro";
const $$url = "/pokemon/[pokemon]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$pokemon,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
