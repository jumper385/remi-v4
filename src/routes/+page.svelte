<script>
    import "$lib/global.scss";
    import { db_schema } from "$lib/schema";
    import DbForm from "$lib/widgets/db_form.svelte";
</script>

<h1>Remi - V4</h1>
<DbForm form_schema={db_schema[3]} />
