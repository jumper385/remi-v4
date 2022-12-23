<script>
    import Pocketbase from "pocketbase";
    import { find_schema_by_name } from "$lib/helpers/db_schema";
    import DbForm from "$lib/widgets/db_form.svelte";
    import DbEntry from "$lib/widgets/db_view/db_entry.svelte";

    let formdata = {};
    let editing = false;
    let submitting = false;
    let form_visible = false;

    let form_schema = find_schema_by_name("user_need");
    let pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

    const handleSubmit = async () => {
        try {
            submitting = true;
            if (editing) {
            } else {
                let out = await pb
                    .collection(form_schema.name)
                    .create(formdata);
                formdata = {};
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            submitting = false;
        }
    };
</script>

<div style="padding:0 24pt;">
    <div class="control-panel">
        <div>Page Title</div>
        <div>
            <button
                class="button"
                on:click={() => (form_visible = !form_visible)}
                >New Entry</button
            >
        </div>
    </div>

    <div>
        {#await pb.collection("user_need").getFullList()}
            Waiting...
        {:then user_needs}
            {#each user_needs as user_need}
                <DbEntry
                    entry={user_need}
                    handleClick={() => console.log("hello")}
                />
            {/each}
        {:catch err}
            <p>Error {err.message}</p>
        {/await}
    </div>
</div>

{#if form_visible}
    <DbForm
        {form_schema}
        bind:formdata
        bind:visibility={form_visible}
        {handleSubmit}
    />
{/if}

<style>
</style>
