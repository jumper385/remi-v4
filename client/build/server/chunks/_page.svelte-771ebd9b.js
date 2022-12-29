import { c as create_ssr_component, v as validate_component } from './index-0270cc2d.js';
import { P as Page_view } from './page_view-65422a64.js';
import 'pocketbase';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page_view, "PageView").$$render($$result, { collection_name: "compliance" }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-771ebd9b.js.map
