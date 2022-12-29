import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { P as Page_view } from "../../../chunks/page_view.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page_view, "PageView").$$render($$result, { collection_name: "compliance" }, {}, {})}`;
});
export {
  Page as default
};
