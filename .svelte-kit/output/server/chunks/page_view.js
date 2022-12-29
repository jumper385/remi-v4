import { c as create_ssr_component, h as compute_rest_props, f as each, v as validate_component, m as missing_component, e as escape, g as getContext, d as add_attribute, j as createEventDispatcher, s as setContext, i as is_promise, n as noop } from "./index.js";
import Pocketbase from "pocketbase";
/* empty css                                     */import { Slugger, Lexer } from "marked";
const db_schema = [
  {
    "id": "_pb_users_auth_",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "id": "users_name",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "users_avatar",
        "name": "avatar",
        "type": "file",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": null
        }
      }
    ],
    "listRule": "id = @request.auth.id",
    "viewRule": "id = @request.auth.id",
    "createRule": "",
    "updateRule": "id = @request.auth.id",
    "deleteRule": "id = @request.auth.id",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  },
  {
    "id": "6mc3msew3crp8o9",
    "name": "interview",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "7shugdr0",
        "name": "question",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "rjfiiy7o",
        "name": "response",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "phuytq4n",
        "name": "approved",
        "type": "bool",
        "system": false,
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "id": "rl0sikg9",
        "name": "notes",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "cyszuyq5g0v3uam",
    "name": "user_need",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "gqnxwx0b",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "eczxekby",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "usg2vakb",
        "name": "interview_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "6mc3msew3crp8o9",
          "cascadeDelete": true
        }
      },
      {
        "id": "psfuiqk4",
        "name": "priority",
        "type": "number",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 10
        }
      },
      {
        "id": "kz3tpeae",
        "name": "approved",
        "type": "bool",
        "system": false,
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "id": "rcmad2l9",
        "name": "notes",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "uimu5brid80icrj",
    "name": "requirement",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "k7umipvy",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "c7c7nt8r",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "0zrl4xgb",
        "name": "priority",
        "type": "number",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "id": "1nyvcj63",
        "name": "user_need_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "cyszuyq5g0v3uam",
          "cascadeDelete": true
        }
      },
      {
        "id": "0wpnyt5n",
        "name": "approved",
        "type": "bool",
        "system": false,
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "id": "7vi4xmxi",
        "name": "notes",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "gh4fqlwlohfx5ec",
    "name": "specification",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "ei8eridr",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "jidoybg3",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "dsbylleq",
        "name": "requirement_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "uimu5brid80icrj",
          "cascadeDelete": true
        }
      },
      {
        "id": "oe0dqtjn",
        "name": "approved",
        "type": "bool",
        "system": false,
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "id": "ceb2j5mc",
        "name": "notes",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "glubiub7nxrdija",
    "name": "design_output",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "1kjrl6p2",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "9gcyli5n",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "skoogw6w",
        "name": "specification_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "gh4fqlwlohfx5ec",
          "cascadeDelete": true
        }
      },
      {
        "id": "wlce6pao",
        "name": "verified",
        "type": "bool",
        "system": false,
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "id": "mywyw3bb",
        "name": "notes",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "u65yk6a86upl4yg",
    "name": "globals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "gu7qy44j",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "v99yrnvl",
        "name": "research_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "bcxguonlutghxn3",
          "cascadeDelete": true
        }
      },
      {
        "id": "ir5kiton",
        "name": "compliance_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "ntp6n9ctz3twpmm",
          "cascadeDelete": true
        }
      },
      {
        "id": "dbayl4c8",
        "name": "brainstorm_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "05fjqxu5mrkatvj",
          "cascadeDelete": true
        }
      },
      {
        "id": "dhtqpeq4",
        "name": "test_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "lc8jh1bp85lx1mu",
          "cascadeDelete": false
        }
      },
      {
        "id": "jaf0ceh6",
        "name": "test_outcome_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "m0cy5gimuu00fhq",
          "cascadeDelete": false
        }
      },
      {
        "id": "rdebfz5v",
        "name": "constraint_id",
        "type": "relation",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "collectionId": "5f72qoohxmfme5v",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "bcxguonlutghxn3",
    "name": "research",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "qwpjnzkv",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "sim931sb",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "7rctecrf",
        "name": "outcome",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "lzlous1p",
        "name": "attachments",
        "type": "file",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "maxSize": 1e9,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "ntp6n9ctz3twpmm",
    "name": "compliance",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "xzmwai7u",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "wo38rxws",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "n3fnferd",
        "name": "reference",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "riflqa53",
        "name": "attachments",
        "type": "file",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "maxSize": 1e9,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "05fjqxu5mrkatvj",
    "name": "brainstorm",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "jeujoazu",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "gez8mtr2",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "z9eoxdu3",
        "name": "attachments",
        "type": "file",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "maxSize": 1e9,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "lc8jh1bp85lx1mu",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "counqwt8",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "h0kaanyt",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "c8kbbdbl",
        "name": "objective",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "5h8v3k8y",
        "name": "required_outcome",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "x3fssz04",
        "name": "methodology",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "qrpzr2i6",
        "name": "attachment",
        "type": "file",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "maxSize": 1e9,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "m0cy5gimuu00fhq",
    "name": "test_outcome",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "34ytnuyq",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "lgectbg5",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "4wetov1w",
        "name": "discussion",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "zsgv0v40",
        "name": "conclusion",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "2yb9sun8",
        "name": "attachments",
        "type": "file",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "maxSize": 1e9,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  },
  {
    "id": "5f72qoohxmfme5v",
    "name": "constraint",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "ktd8ldwx",
        "name": "name",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "1dfaczti",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "yqb1jguz",
        "name": "attachments",
        "type": "file",
        "system": false,
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1e3,
          "maxSize": 1e10,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.verified = true",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.verified = true",
    "options": {}
  }
];
const find_schema_by_name = (name) => {
  db_schema.map((e, i) => e.name);
  let index = db_schema.findIndex((e) => e.name == name);
  return db_schema[index];
};
const get_date_string = (timestamp) => {
  let date = timestamp.toDateString();
  let hour = timestamp.getHours();
  let min = String(timestamp.getMinutes()).padStart(2, "0");
  return `${date} ${hour}:${min}`;
};
function supressWarnings() {
  const origWarn = console.warn;
  console.warn = (message) => {
    if (message.includes("unknown prop"))
      return;
    if (message.includes("unexpected slot"))
      return;
    origWarn(message);
  };
}
const Parser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "tokens", "header", "rows", "ordered", "renderers"]);
  let { type = void 0 } = $$props;
  let { tokens = void 0 } = $$props;
  let { header = void 0 } = $$props;
  let { rows = void 0 } = $$props;
  let { ordered = false } = $$props;
  let { renderers } = $$props;
  supressWarnings();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  return `${!type ? `${each(tokens, (token) => {
    return `${validate_component(Parser, "svelte:self").$$render($$result, Object.assign(token, { renderers }), {}, {})}`;
  })}` : `${renderers[type] ? `${type === "table" ? `${validate_component(renderers.table || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(renderers.tablehead || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => {
              return `${each(header, (headerItem, i) => {
                return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                  $$result,
                  {
                    header: true,
                    align: $$restProps.align[i] || "center"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: headerItem.tokens, renderers }, {}, {})}
              `;
                    }
                  }
                )}`;
              })}`;
            }
          })}`;
        }
      })}
        ${validate_component(renderers.tablebody || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => {
                return `${each(row, (cells, i) => {
                  return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                    $$result,
                    {
                      header: false,
                      align: $$restProps.align[i] || "center"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: cells.tokens, renderers }, {}, {})}
                `;
                      }
                    }
                  )}`;
                })}
            `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}` : `${type === "list" ? `${ordered ? `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.orderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign(item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `;
          }
        })}`;
      })}`;
    }
  })}` : `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.unorderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign(item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `;
          }
        })}`;
      })}`;
    }
  })}`}` : `${validate_component(renderers[type] || missing_component, "svelte:component").$$render($$result, Object.assign($$restProps), {}, {
    default: () => {
      return `${tokens ? `${validate_component(Parser, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${escape($$restProps.raw)}`}`;
    }
  })}`}`}` : ``}`}`;
});
const key = {};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let { depth } = $$props;
  let { raw } = $$props;
  let { text } = $$props;
  const { slug, getOptions } = getContext(key);
  const options = getOptions();
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  return `${depth === 1 ? `<h1${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${escape(raw)}`}`}`}`}`}`}`;
});
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>${slots.default ? slots.default({}) : ``}</p>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { raw } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  let { text = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${add_attribute("src", href, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", text, 0)}>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<em>${slots.default ? slots.default({}) : ``}</em>`;
});
const Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<del>${slots.default ? slots.default({}) : ``}</del>`;
});
const Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { raw } = $$props;
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `<code>${escape(raw.replace(/`/g, ""))}</code>`;
});
const Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table>${slots.default ? slots.default({}) : ``}</table>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { align } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  return `${header ? `<th${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ordered } = $$props;
  let { start } = $$props;
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `${ordered ? `<ol${add_attribute("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { text } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<pre${add_attribute("class", lang, 0)}><code>${escape(text)}</code></pre>`;
});
const Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>${slots.default ? slots.default({}) : ``}`;
});
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
const SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let preprocessed;
  let slugger;
  let combinedOptions;
  let combinedRenderers;
  let { source = [] } = $$props;
  let { renderers = {} } = $$props;
  let { options = {} } = $$props;
  let { isInline = false } = $$props;
  const dispatch = createEventDispatcher();
  let tokens;
  let lexer;
  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  preprocessed = Array.isArray(source);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = { ...defaultOptions, ...options };
  {
    if (preprocessed) {
      tokens = source;
    } else {
      lexer = new Lexer(combinedOptions);
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
      dispatch("parsed", { tokens });
    }
  }
  combinedRenderers = { ...defaultRenderers, ...renderers };
  return `${validate_component(Parser, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
});
const db_entry_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.db_entry.svelte-1bqg5od.svelte-1bqg5od{display:flex;flex-direction:column;gap:12pt;margin-bottom:24pt;transition:250ms;padding:12pt;box-sizing:border-box;border-radius:3pt}div.db_entry.svelte-1bqg5od p.title.svelte-1bqg5od{margin:0;font-weight:bold;display:flex;align-items:center;gap:6pt;justify-content:space-between}div.db_entry.svelte-1bqg5od sub.svelte-1bqg5od{font-size:8pt}div.db_entry.svelte-1bqg5od .approved.svelte-1bqg5od{background:#2ecc71 !important;color:white}div.db_entry.svelte-1bqg5od .tablet.svelte-1bqg5od{background:#ecf0f1;padding:3pt 12pt;box-sizing:border-box;border-radius:30pt;font-size:8pt}div.db_entry.svelte-1bqg5od.svelte-1bqg5od:hover{background-color:#ecf0f1}",
  map: null
};
const Db_entry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  $$result.css.add(css$1);
  return `<div class="${"db_entry svelte-1bqg5od"}"><div><p class="${"title svelte-1bqg5od"}">${escape(entry.name || entry.question)}
            <span class="${"tablet " + escape(entry.approved ? "approved" : "", true) + " svelte-1bqg5od"}">${escape(entry.id)}</span></p>
        <sub class="${"svelte-1bqg5od"}">Updated at ${escape(get_date_string(new Date(entry.updated)))}</sub></div>
    <div class="${"description"}" style="${"line-height:150%; margin:0; padding:0;"}">${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render(
    $$result,
    {
      source: entry.description || entry.response
    },
    {},
    {}
  )}</div>
</div>`;
});
const page_view_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.page-content.svelte-10warer.svelte-10warer{width:100%;display:flex;gap:12pt;height:calc(100vh - 100pt)}div.list-view.svelte-10warer.svelte-10warer{max-height:100%;overflow-y:scroll;width:100%;padding:24pt;box-sizing:border-box}div.form-view.svelte-10warer.svelte-10warer{width:100%}div.topbar.svelte-10warer.svelte-10warer{display:flex;justify-content:space-between;align-items:center;padding:12pt 36pt;box-sizing:border-box}.form-button.svelte-10warer.svelte-10warer{background:none;width:fit-content;height:fit-content;font-weight:600;align-items:center}.button-delete.svelte-10warer.svelte-10warer{background:#e74c3c !important}div.form-view.svelte-10warer.svelte-10warer{padding:0 24pt;box-sizing:border-box}div.form-view.svelte-10warer .form-controls.svelte-10warer{margin-bottom:24pt;display:flex;align-items:center;justify-content:space-between}div.form-view.svelte-10warer .form-controls .form-title.svelte-10warer{margin:0}div.form-view.svelte-10warer .form-controls .entry-id.svelte-10warer{font-size:8pt;margin:0;margin-top:6pt}div.form-view.svelte-10warer .form-buttons.svelte-10warer{display:flex;gap:12pt}div.form-view.svelte-10warer form.svelte-10warer{margin-bottom:12pt}",
  map: null
};
const Page_view = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { collection_name } = $$props;
  const pb = new Pocketbase("http://digism.xyz:6349");
  let db_list = [];
  find_schema_by_name(collection_name);
  const getData = async (collection_name2) => {
    db_list = await pb.collection(collection_name2).getFullList(200, { sort: "-updated" });
  };
  if ($$props.collection_name === void 0 && $$bindings.collection_name && collection_name !== void 0)
    $$bindings.collection_name(collection_name);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"topbar svelte-10warer"}"><div class="${"right"}"><h3>${escape(collection_name)}</h3></div>
    <div class="${"right"}"><button class="${"button"}">Create New Entry
        </button></div></div>

<div class="${"page-content svelte-10warer"}"><div class="${"list-view svelte-10warer"}">${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ``;
      }
      return function(_) {
        return `
            ${db_list?.length > 0 ? `${each(db_list, (entry) => {
          return `<div>${validate_component(Db_entry, "DbEntry").$$render($$result, { entry }, {}, {})}
                    </div>`;
        })}` : `<p style="${"padding:12pt; box-sizing:border-box"}">No Entires to Show...
                </p>`}
        `;
      }();
    }(getData(collection_name))}</div>
    ${``}</div>

`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page_view as P
};
