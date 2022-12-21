<script>
    export let type, label, value;

    const typeAction = (node) => {
        node.type = type;
    };
</script>

<div class="form-row">
    <label for={label}>{label}</label>
    <input bind:value use:typeAction />
</div>
