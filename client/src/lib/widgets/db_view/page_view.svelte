<script>
    export let collection_name;
    export let child_collection;

    import { find_schema_by_name } from "$lib/helpers/db_schema";
    import Pocketbase from "pocketbase";
    import { fly } from "svelte/transition";
    import CustomInput from "../form-inputs/customInput.svelte";
    import InputDynamic from "../form-inputs/input-dynamic.svelte";
    import DbEntry from "./db_entry.svelte";
    const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

    let form_visible = false;
    let formdata = {};
    let editing = false;
    let db_list = [];

    let { schema } = find_schema_by_name(collection_name);

    const compile_collection = async (collection_name, child_collection) => {
        /**Identify and Tag Parent Collection that doesnt have chil_collection covering the parent*/
        // Get data from collections
        let out = await pb.collection(collection_name).getFullList(200, {
            sort: "-updated",
        });
        let childs = await pb.collection(child_collection).getFullList(200, {
            expand: `${collection_name}_id`,
        });

        // Create sets of the ID's on both, parent and child
        let parents = new Set(out.map((e) => e?.id));
        let covered_parents = new Set([
            ...childs
                .map((e) => {
                    let check_keys = new Set(Object.keys(e?.expand));
                    if (check_keys.has(`${collection_name}_id`)) {
                        return e.expand[`${collection_name}_id`];
                    } else {
                        return [];
                    }
                })
                .reduce((acc, curr) => {
                    console.log(curr);
                    return [...curr.map((e) => e?.id), ...acc];
                }, []),
        ]);

        // Find the differences
        let diffs = new Set([...parents].filter((e) => covered_parents.has(e)));

        // tag the differences on db_list object
        db_list = out.map((e) => {
            console.log(diffs.has(e.id));
            return {
                ...e,
                hasChild: diffs.has(e.id),
            };
        });
    };

    const getData = async (collection_name) => {
        if (child_collection) {
            await compile_collection(collection_name, child_collection);
        } else {
            db_list = await pb
                .collection(collection_name)
                .getFullList(200, { sort: "-updated" });
        }
    };

    const resetform = () => {
        form_visible = false;
        formdata = {};
        editing = false;
    };

    const onEntryEdit = async (entry) => {
        editing = true;
        formdata = entry;
        form_visible = true;
    };

    const onEntryCreate = async () => {
        editing = false;
        formdata = {};
        form_visible = true;
    };

    const onFormClose = async () => {
        editing = false;
        formdata = {};
        form_visible = false;
    };

    const onFormSubmit = async () => {
        let res;
        try {
            if (editing) {
                // Form Submission when Editing
                let new_submission = {};
                schema.forEach((entry) => {
                    new_submission[entry.name] = formdata[entry.name];
                });
                res = await pb
                    .collection(collection_name)
                    .update(formdata.id, new_submission);

                await getData(collection_name);
            } else {
                // Form Submission when Creating
                res = await pb.collection(collection_name).create(formdata);
                await getData(collection_name);
            }
        } catch (err) {
            alert(err.message);
        } finally {
            editing = false;
            formdata = {};
            form_visible = false;

            return res;
        }
    };

    const deleteEntry = async () => {
        try {
            let res = await pb.collection(collection_name).delete(formdata.id);
            await getData(collection_name);
        } catch (err) {
            alert(err.message);
        } finally {
            editing = false;
            formdata = {};
            form_visible = false;
        }
    };

    const onKeyPress = (e) => {
        switch (e.key) {
            case "Escape":
                e.preventDefault();
                resetform();
                break;

            case "s":
                if (e.metaKey && form_visible) {
                    e.preventDefault();
                    onFormSubmit().then((res) => {
                        console.log(res);
                        formdata = res;
                        form_visible = true;
                        editing = true;
                    });
                }
                break;

            default:
                break;
        }
    };
</script>

<div class="topbar">
    <div class="right">
        <h3>{collection_name}</h3>
    </div>
    <div class="right">
        <button on:click={onEntryCreate} class="button">
            Create New Entry
        </button>
    </div>
</div>

<div class="page-content">
    <div class="list-view">
        {#await getData(collection_name) then _}
            {#if db_list?.length > 0}
                {#each db_list as entry}
                    <div on:click={() => onEntryEdit(entry)}>
                        <DbEntry {entry} />
                    </div>
                {/each}
            {:else}
                <p style="padding:12pt; box-sizing:border-box">
                    No Entires to Show...
                </p>
            {/if}
        {:catch err}
            <p>Error: {err.message}</p>
            {console.log(err)}
        {/await}
    </div>
    {#if form_visible}
        <div class="form-view" transition:fly={{ x: 200, duration: 250 }}>
            <div class="form-controls">
                <div>
                    <h4 class="form-title">
                        {editing ? "Edit" : "Create"}
                        {collection_name} entry
                    </h4>
                    {#if editing}
                        <p class="entry-id">{formdata.id}</p>
                    {/if}
                </div>
                <button class="button form-button" on:click={onFormClose}
                    ><i class="ri-close-line" /></button
                >
            </div>
            <form on:submit|preventDefault={onFormSubmit} novalidate>
                {#each schema as form_entry}
                    <CustomInput
                        schema={form_entry}
                        bind:value={formdata[form_entry.name]}
                    />
                {/each}
                <div class="form-buttons">
                    <input type="submit" value="Submit" class="button" />
                </div>
            </form>
            {#if editing}
                <button class="button button-delete" on:click={deleteEntry}
                    >Delete</button
                >
            {/if}
        </div>
    {/if}
</div>

<svelte:window on:keydown={onKeyPress} on:keyup={onKeyPress} />

<style lang="scss">
    div.page-content {
        width: 100%;
        display: flex;
        gap: 12pt;
        height: calc(100vh - 100pt);
    }

    div.list-view {
        max-height: 100%;
        overflow-y: scroll;
        width: 100%;
        padding: 24pt;
        box-sizing: border-box;
    }

    div.form-view {
        width: 100%;
    }

    div.topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12pt 36pt;
        box-sizing: border-box;
        .left {
            background: pink;
        }
    }

    .form-button {
        background: none;
        width: fit-content;
        height: fit-content;
        font-weight: 600;
        align-items: center;
    }

    .button-delete {
        background: #e74c3c !important;
    }

    div.form-view {
        padding: 0 24pt;
        box-sizing: border-box;
        .form-controls {
            margin-bottom: 24pt;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .form-title {
                margin: 0;
            }
            .entry-id {
                font-size: 8pt;
                margin: 0;
                margin-top: 6pt;
            }
        }
        .form-buttons {
            display: flex;
            gap: 12pt;
        }

        form {
            margin-bottom: 12pt;
        }
    }
</style>
