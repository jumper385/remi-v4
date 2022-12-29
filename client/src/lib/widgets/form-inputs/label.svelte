<script>
    export let name, icon;
</script>

<label for={name}>
    <i class={icon} />
    <span>{name}</span>
</label>

<style>
    label {
        display: flex;
        gap: 6pt;
    }
</style>
