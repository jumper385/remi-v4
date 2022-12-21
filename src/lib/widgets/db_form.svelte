<script>
    import CustomInput from "./customInput.svelte";

    export let form_schema;
    let formdata = {};
</script>

<form>
    {#each form_schema.schema as schema}
        <CustomInput
            label={schema.name}
            bind:value={formdata[schema.name]}
            type={schema.type}
        />
    {/each}
    <input type="submit" value="Submit" />
</form>

<!-- <input type="text" bind:value={formdata.name} /> -->
<pre>
    {JSON.stringify(formdata)}
</pre>
