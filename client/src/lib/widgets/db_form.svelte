<script>
    export let collection_name;
    export let formdata = {};

    import { find_schema_by_name } from "$lib/helpers/db_schema";
    import CustomInput from "$lib/widgets/form-inputs/customInput.svelte";
    
    let schema = find_schema_by_name(collection_name)?.schema;
</script>

{#each schema as entry}
    <CustomInput schema={entry} bind:value={formdata[entry.name]} />
{/each}

<style>
    form {
        max-width: 300pt;
        width: 100%;
    }
</style>
