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
        "id": "ng6r13lgpijrm6o",
        "name": "user_needs",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "p5ppdvfp",
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
                "id": "iazykvmk",
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
                "id": "kkmzst9j",
                "name": "priority",
                "type": "number",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "min": 1,
                    "max": 5
                }
            },
            {
                "id": "hpx0sgm6",
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
            },
            {
                "id": "ht6ehggl",
                "name": "test_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "51qjo1w00ws2yy8",
                    "cascadeDelete": false
                }
            },
            {
                "id": "9f2svkfm",
                "name": "system_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5w8ftqzv9gy91je",
                    "cascadeDelete": false
                }
            },
            {
                "id": "tsw3zkeq",
                "name": "attachments",
                "type": "file",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1,
                    "maxSize": 5242880,
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
        "id": "5avg8uw73o6sz34",
        "name": "requirements",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "aqcx4o8p",
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
                "id": "h8mikqre",
                "name": "priority",
                "type": "select",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1,
                    "values": [
                        "Not Needed",
                        "Desirable",
                        "Essential"
                    ]
                }
            },
            {
                "id": "1oppow2v",
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
            },
            {
                "id": "pfh1qbvi",
                "name": "user_need_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "ng6r13lgpijrm6o",
                    "cascadeDelete": false
                }
            },
            {
                "id": "mkfw9t9d",
                "name": "test_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "51qjo1w00ws2yy8",
                    "cascadeDelete": false
                }
            },
            {
                "id": "qz9rf3li",
                "name": "compliance_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "bpj4azd1oon1dfb",
                    "cascadeDelete": false
                }
            },
            {
                "id": "begsnkrd",
                "name": "system_constraint_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "2a39r6p0lfjgnzf",
                    "cascadeDelete": false
                }
            },
            {
                "id": "tjq3wnaa",
                "name": "system_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5w8ftqzv9gy91je",
                    "cascadeDelete": false
                }
            },
            {
                "id": "nwxsglcp",
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
        "id": "o5a9ahf34ale13x",
        "name": "specifications",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "dxf2770z",
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
                "id": "hjpjsgqn",
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
            },
            {
                "id": "plwli1h5",
                "name": "requirement_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 10000,
                    "collectionId": "5avg8uw73o6sz34",
                    "cascadeDelete": false
                }
            },
            {
                "id": "cfuhmo5i",
                "name": "specification_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "o5a9ahf34ale13x",
                    "cascadeDelete": false
                }
            },
            {
                "id": "5yx14c9r",
                "name": "test_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "51qjo1w00ws2yy8",
                    "cascadeDelete": false
                }
            },
            {
                "id": "pzw2gupf",
                "name": "compliance_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "bpj4azd1oon1dfb",
                    "cascadeDelete": false
                }
            },
            {
                "id": "oj85ui9o",
                "name": "system_constraint_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "2a39r6p0lfjgnzf",
                    "cascadeDelete": false
                }
            },
            {
                "id": "riv2yd8v",
                "name": "system_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5w8ftqzv9gy91je",
                    "cascadeDelete": false
                }
            },
            {
                "id": "d4o5zytl",
                "name": "approved",
                "type": "bool",
                "system": false,
                "required": false,
                "unique": false,
                "options": {}
            },
            {
                "id": "jxz8aptf",
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
        "id": "2a39r6p0lfjgnzf",
        "name": "system_constraints",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "k9r3xjaz",
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
                "id": "kczvxaag",
                "name": "comments",
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
                "id": "b2kfxi8g",
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
            },
            {
                "id": "qxwkkrmi",
                "name": "system_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5w8ftqzv9gy91je",
                    "cascadeDelete": false
                }
            },
            {
                "id": "7yhpsikn",
                "name": "approved",
                "type": "bool",
                "system": false,
                "required": false,
                "unique": false,
                "options": {}
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
        "id": "bpj4azd1oon1dfb",
        "name": "compliance",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "sgvjjgrt",
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
                "id": "gvxod2g3",
                "name": "standard_code",
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
                "id": "lvmvqmp3",
                "name": "clause",
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
                "id": "3o79jjjr",
                "name": "comment",
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
                "id": "cpg8qv1i",
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
        "id": "5w8ftqzv9gy91je",
        "name": "system",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "ig3up58a",
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
        "id": "51qjo1w00ws2yy8",
        "name": "tests",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "o5jq0yul",
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
                "id": "kd0jjfbx",
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
                "id": "dse1nrxy",
                "name": "findings",
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
                "id": "kkkb9rvp",
                "name": "category",
                "type": "select",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 3,
                    "values": [
                        "Validation",
                        "Debugging",
                        "Research"
                    ]
                }
            },
            {
                "id": "zsuuttgo",
                "name": "success",
                "type": "bool",
                "system": false,
                "required": false,
                "unique": false,
                "options": {}
            },
            {
                "id": "n9h5i88x",
                "name": "proceeding_project_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "g8n06t5lic8i1c5",
                    "cascadeDelete": false
                }
            },
            {
                "id": "vqt2r8tb",
                "name": "proceeding_user_need_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "ng6r13lgpijrm6o",
                    "cascadeDelete": false
                }
            },
            {
                "id": "ropskeyg",
                "name": "proceeding_requirement_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5avg8uw73o6sz34",
                    "cascadeDelete": false
                }
            },
            {
                "id": "ehifb5h6",
                "name": "proceeding_specification_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "o5a9ahf34ale13x",
                    "cascadeDelete": false
                }
            },
            {
                "id": "rmuhmxrf",
                "name": "proceeding_design_output_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "8lwsruh0gkp2hsx",
                    "cascadeDelete": false
                }
            },
            {
                "id": "laedobwc",
                "name": "attachements",
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
        "id": "g8n06t5lic8i1c5",
        "name": "projects",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "hvepzuz7",
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
                "id": "wzbrxfoj",
                "name": "comments",
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
                "id": "n1zdne7b",
                "name": "active",
                "type": "bool",
                "system": false,
                "required": false,
                "unique": false,
                "options": {}
            },
            {
                "id": "yqcfqnvk",
                "name": "proceeding_requirement",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5avg8uw73o6sz34",
                    "cascadeDelete": false
                }
            },
            {
                "id": "iq3300ac",
                "name": "proceeding_specification_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "o5a9ahf34ale13x",
                    "cascadeDelete": false
                }
            },
            {
                "id": "urefxkwo",
                "name": "proceeding_design_output_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "8lwsruh0gkp2hsx",
                    "cascadeDelete": false
                }
            },
            {
                "id": "kpgp3g6o",
                "name": "proceeding_test_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "51qjo1w00ws2yy8",
                    "cascadeDelete": false
                }
            },
            {
                "id": "0kwbncqw",
                "name": "proceeding_project_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1,
                    "collectionId": "g8n06t5lic8i1c5",
                    "cascadeDelete": false
                }
            },
            {
                "id": "joz1w56k",
                "name": "compliance_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1,
                    "collectionId": "bpj4azd1oon1dfb",
                    "cascadeDelete": false
                }
            },
            {
                "id": "krkatvnk",
                "name": "system_constraint_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "2a39r6p0lfjgnzf",
                    "cascadeDelete": false
                }
            },
            {
                "id": "io8pcir3",
                "name": "system_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5w8ftqzv9gy91je",
                    "cascadeDelete": false
                }
            },
            {
                "id": "x06jjh2e",
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
        "id": "8lwsruh0gkp2hsx",
        "name": "design_outputs",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "grii9gpq",
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
                "id": "vukgapke",
                "name": "comments",
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
                "id": "gzhffgmy",
                "name": "specification_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "o5a9ahf34ale13x",
                    "cascadeDelete": false
                }
            },
            {
                "id": "mdxj8fza",
                "name": "design_output",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "8lwsruh0gkp2hsx",
                    "cascadeDelete": false
                }
            },
            {
                "id": "y8affqwh",
                "name": "test_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "51qjo1w00ws2yy8",
                    "cascadeDelete": false
                }
            },
            {
                "id": "xc838bri",
                "name": "compliance_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "bpj4azd1oon1dfb",
                    "cascadeDelete": false
                }
            },
            {
                "id": "p2tzb3rm",
                "name": "system_constraint_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "2a39r6p0lfjgnzf",
                    "cascadeDelete": false
                }
            },
            {
                "id": "ehideqba",
                "name": "system_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1000,
                    "collectionId": "5w8ftqzv9gy91je",
                    "cascadeDelete": false
                }
            },
            {
                "id": "kgsvub2r",
                "name": "production_ready",
                "type": "bool",
                "system": false,
                "required": false,
                "unique": false,
                "options": {}
            },
            {
                "id": "9zyozsnw",
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
        "id": "75hyw3h9y6xgikm",
        "name": "testA",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "y0knq3eg",
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
        "id": "o35b95y63u9xb8n",
        "name": "testB",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "pfldifpf",
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
        "id": "p95c5ccvv60c2yf",
        "name": "link",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "fcr1wh3q",
                "name": "testA_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1,
                    "collectionId": "75hyw3h9y6xgikm",
                    "cascadeDelete": false
                }
            },
            {
                "id": "kzxpqszj",
                "name": "testB_id",
                "type": "relation",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1,
                    "collectionId": "o35b95y63u9xb8n",
                    "cascadeDelete": false
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
        "id": "49r4ug6rzcenjc9",
        "name": "research",
        "type": "base",
        "system": false,
        "schema": [
            {
                "id": "0wrhz8rq",
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
                "id": "fg5h62en",
                "name": "document_type",
                "type": "select",
                "system": false,
                "required": false,
                "unique": false,
                "options": {
                    "maxSelect": 1,
                    "values": [
                        "technical report",
                        "exploratory report",
                        "application notes",
                        "research finding"
                    ]
                }
            },
            {
                "id": "bkrj4nbx",
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
        "listRule": null,
        "viewRule": null,
        "createRule": null,
        "updateRule": null,
        "deleteRule": null,
        "options": {}
    }
]
