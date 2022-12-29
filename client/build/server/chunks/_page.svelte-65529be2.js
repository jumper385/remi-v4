import { c as create_ssr_component, f as each, v as validate_component, d as add_attribute, i as is_promise, n as noop, e as escape } from './index-0270cc2d.js';
import Pocketbase from 'pocketbase';

/* empty css                   *//* empty css                                                */const Input_bool = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema, value } = $$props;
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<input type="${"checkbox"}"${add_attribute("checked", value, 1)}>`;
});
const Input_dynamic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema, value } = $$props;
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<input${add_attribute("value", value, 0)}>`;
});
const Input_search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema, value } = $$props;
  let { options } = schema;
  let { collectionId } = options;
  let pb = new Pocketbase("http://digism.xyz:6349");
  const get_collections = async (collectionId2) => {
    let out = await pb.collection(collectionId2).getFullList(200);
    console.log(out);
    return out;
  };
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<input${add_attribute("list", collectionId, 0)}${add_attribute("name", schema.name, 0)}${add_attribute("id", schema.name, 0)} type="${"email"}" multiple${add_attribute("value", value, 0)}>

<datalist${add_attribute("id", collectionId, 0)}>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(collections) {
      return `
        ${each(collections, (collection) => {
        return `<option${add_attribute("value", collection.id, 0)}>${escape(collection.name || collection.response)}</option>`;
      })}
    `;
    }(__value);
  }(get_collections(collectionId))}</datalist>`;
});
const Input_select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema, value } = $$props;
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<select${add_attribute("name", schema.name, 0)}${add_attribute("id", schema.name, 0)}><option value="${""}"></option>${each(schema.options.values, (val) => {
    return `<option${add_attribute("value", val, 0)}>${escape(val)}</option>`;
  })}</select>`;
});
const css = {
  code: "label.svelte-u42zh2{display:flex;gap:6pt}",
  map: null
};
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name, icon } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$result.css.add(css);
  return `<label${add_attribute("for", name, 0)} class="${"svelte-u42zh2"}"><i${add_attribute("class", icon, 0)}></i>
    <span>${escape(name)}</span>
</label>`;
});
const CustomInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { schema, value } = $$props;
  console.log(schema.type);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"form-row"}">${validate_component(Label, "Label").$$render($$result, { icon: "ri-book-line", name: schema.name }, {}, {})}
    ${schema.type == "text" ? `<textarea type="${"text"}"${add_attribute("name", schema.name, 0)}${add_attribute("id", schema.name, 0)}>${value || ""}</textarea>` : `${schema.type == "number" ? `<input type="${"number"}"${add_attribute("name", schema.name, 0)}${add_attribute("id", schema.name, 0)}${add_attribute("value", value, 0)}>` : `${schema.type == "relation" ? `${validate_component(Input_search, "InputSearch").$$render(
      $$result,
      { schema, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${schema.type == "select" ? `${validate_component(Input_select, "InputSelect").$$render(
      $$result,
      { schema, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${schema.type == "bool" ? `${validate_component(Input_bool, "InputBool").$$render(
      $$result,
      { schema, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(Input_dynamic, "InputDynamic").$$render(
      $$result,
      { schema, value },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`}`}`}`}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pb = new Pocketbase("http://digism.xyz:6349");
  let formdata = {};
  let authReady = pb.authStore.isValid;
  let schema = [{ name: "email", type: "email" }, { name: "password", type: "password" }];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h1>Remi - V4</h1>

<div style="${"padding:24pt; box-sizing:border-box"}">${authReady ? `<button class="${"button"}">Logout</button>` : `<form>${each(schema, (entry) => {
      return `${validate_component(CustomInput, "CustomInput").$$render(
        $$result,
        {
          schema: entry,
          value: formdata[entry.name]
        },
        {
          value: ($$value) => {
            formdata[entry.name] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}
            <input type="${"submit"}" value="${"Login"}" class="${"button"}"></form>`}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-65529be2.js.map
