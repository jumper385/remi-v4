export const db_schema = [
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
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
                    "maxSelect": 1000,
                    "maxSize": 1000000000,
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
                    "maxSelect": 1000,
                    "maxSize": 1000000000,
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
                    "maxSelect": 1000,
                    "maxSize": 1000000000,
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
                    "maxSelect": 1000,
                    "maxSize": 1000000000,
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
                    "maxSelect": 1000,
                    "maxSize": 1000000000,
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
                    "maxSelect": 1000,
                    "maxSize": 10000000000,
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
]