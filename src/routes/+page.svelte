<script>
    import "$lib/global.scss";
    import { db_schema } from "$lib/schema";
    import DbForm from "$lib/widgets/db_form.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" /><link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<DbForm form_schema={db_schema[1]} />
