<script>
    export let schema, value;
</script>

<select name={schema.name} id={schema.name} bind:value>
    <option value="" />
    {#each schema.options.values as val}
        <option value={val}>{val}</option>
    {/each}
</select>
