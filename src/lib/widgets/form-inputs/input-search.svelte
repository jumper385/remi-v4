<script>
    import Pocketbase from "pocketbase";

    export let schema, value;

    let { options } = schema;
    let { collectionId } = options;

    let pb = new Pocketbase("http://digism.xyz:6346");

    const get_collections = async (collectionId) => {
        let out = await pb.collection(collectionId).getFullList(200);
        return out;
    };

    const handlChange = (e) => {
        value = e.target.value.split(",");
        console.log(value);
    };
</script>

<input
    list={collectionId}
    name={schema.name}
    id={schema.name}
    type="email"
    multiple
    on:change={handlChange}
/>

<datalist id={collectionId}>
    {#await get_collections(collectionId) then collections}
        {#each collections as collection}
            <option value={collection.id}>{collection.name}</option>
        {/each}
    {/await}
</datalist>
