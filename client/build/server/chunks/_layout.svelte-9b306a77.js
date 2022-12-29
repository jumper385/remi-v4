import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape, d as add_attribute } from './index-0270cc2d.js';
import { p as page } from './stores-9d45f9d7.js';

const css$2 = {
  code: "a.svelte-1hygtfw{display:flex;align-items:center;border-radius:3pt;padding:8pt;box-sizing:border-box;text-decoration:none;color:#2c3e50;gap:8pt;transition:250ms}a.active.svelte-1hygtfw{background:#ecf0f1}a.svelte-1hygtfw:hover{background:#ecf0f1}",
  map: null
};
const Nav_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href, icon, text } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$2);
  isActive = $page.url.pathname == href;
  $$unsubscribe_page();
  return `<a class="${"nav_link " + escape(isActive ? "active" : "inactive", true) + " svelte-1hygtfw"}"${add_attribute("href", href, 0)}><i${add_attribute("class", icon, 0)}></i> <span>${escape(text)}</span></a>`;
});
const css$1 = {
  code: "nav.svelte-ucyc8c{display:flex;flex-direction:column;padding:24pt;box-sizing:border-box;gap:6pt;width:300pt}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-ucyc8c"}">
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/",
      icon: "ri-home-line",
      text: "Home"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/tutorial",
      icon: "ri-book-line",
      text: "Tutorial"
    },
    {},
    {}
  )}

    <br>
    
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/interview_questions",
      icon: "ri-question-answer-line",
      text: "Interview Questions"
    },
    {},
    {}
  )}

    <br>
    
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/user_needs",
      icon: "ri-user-heart-line",
      text: "User Needs"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/requirements",
      icon: "ri-compasses-2-line",
      text: "Requirements"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/specifications",
      icon: "ri-shape-line",
      text: "Specifications"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/design_outputs",
      icon: "ri-character-recognition-line",
      text: "Design Outputs"
    },
    {},
    {}
  )}

    <br>
    
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/brainstorm",
      icon: "ri-psychotherapy-line",
      text: "Brainstorm"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/research",
      icon: "ri-search-eye-line",
      text: "Research"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/compliance",
      icon: "ri-booklet-line",
      text: "Compliance"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/constraint",
      icon: "ri-rotate-lock-line",
      text: "Constraint"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/test",
      icon: "ri-test-tube-line",
      text: "Test"
    },
    {},
    {}
  )}
    ${validate_component(Nav_link, "NavLink").$$render(
    $$result,
    {
      href: "/outcome",
      icon: "ri-a-b",
      text: "Test Outcome"
    },
    {},
    {}
  )}
</nav>`;
});
const css = {
  code: "div.page.svelte-bueitx{display:flex}.content.svelte-bueitx{width:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-exi6ig_START --><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"}" integrity="${"sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="}" crossorigin="${"anonymous"}" referrerpolicy="${"no-referrer"}"><link href="${"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"}" rel="${"stylesheet"}"><link href="${"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"}" rel="${"stylesheet"}"><!-- HEAD_svelte-exi6ig_END -->`, ""}

<div class="${"page svelte-bueitx"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
    <div class="${"content svelte-bueitx"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-9b306a77.js.map
