<script>
    import Pocketbase from "pocketbase";
    import DbEntry from "./db_entry.svelte";
    let pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

    export let collection_name, pointer, form_visible;

    const set_pointer = async (entry) => {
        pointer = entry;
    };
</script>

<div>
    {#await pb.collection(collection_name).getFullList()}
        <p>Waiting...</p>
    {:then collection}
        {#each collection as entry}
            <div class="list-item" on:click={() => set_pointer(entry)}>
                <DbEntry {entry} />
            </div>
        {/each}
    {:catch err}
        <p>{err.message}</p>
    {/await}
</div>
