import { db_schema } from "$lib/schema"

export const schema_get_all_names = (name) => {
    let namelist = db_schema.map((e, i) => e.name)
    return namelist
}

export const find_schema_by_name = (name) => {
    let namelist = db_schema.map((e, i) => e.name)
    let index = db_schema.findIndex(e => e.name == name)
    return db_schema[index]
}