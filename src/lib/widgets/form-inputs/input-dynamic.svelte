<script>
    export let schema, value;
    const handletype = (node) => {
        node.type = schema.type;
    };
</script>

<input use:handletype bind:value />
