<script>
    import InputBool from "$lib/widgets/form-inputs/input-bool.svelte";
    import InputDynamic from "$lib/widgets/form-inputs/input-dynamic.svelte";
    import InputSearch from "$lib/widgets/form-inputs/input-search.svelte";
    import InputSelect from "$lib/widgets/form-inputs/input-select.svelte";
    import Label from "$lib/widgets/form-inputs/label.svelte";

    export let schema, value;
    console.log(schema.type);
</script>

<div class="form-row">
    <Label icon="ri-book-line" name={schema.name} />
    {#if schema.type == "text"}
        <input type="text" name={schema.name} id={schema.name} bind:value />
    {:else if schema.type == "number"}
        <input type="number" name={schema.name} id={schema.name} bind:value />
    {:else if schema.type == "relation"}
        <InputSearch {schema} bind:value />
    {:else if schema.type == "select"}
        <InputSelect {schema} bind:value />
    {:else if schema.type == "bool"}
        <InputBool {schema} bind:value />
    {:else}
        <InputDynamic {schema} bind:value />
    {/if}
</div>
