<script>
    import InputDynamic from "./input-dynamic.svelte";
    import InputSearch from "./input-search.svelte";
    import InputSelect from "./input-select.svelte";

    export let schema, value;
</script>

<div class="form-row">
    <label for={schema.name}>{schema.name}</label>
    {#if schema.type == "text"}
        <input type="text" name={schema.name} id={schema.name} bind:value />
    {:else if schema.type == "number"}
        <input type="number" name={schema.name} id={schema.name} bind:value />
    {:else if schema.type == "relation"}
        <InputSearch {schema} bind:value />
    {:else if schema.type == "select"}
        <InputSelect {schema} bind:value />
    {:else}
        <InputDynamic {schema} bind:value />
    {/if}
</div>
