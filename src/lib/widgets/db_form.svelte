<script>
    import CustomInput from "./form-inputs/customInput.svelte";

    import Pocketbase from "pocketbase";

    let pb = new Pocketbase("http://digism.xyz:6346");

    export let form_schema;
    let formdata = {};

    let submitting = false;

    const handleSubmit = async () => {
        try {
            submitting = true;
            let out = await pb.collection(form_schema.name).create(formdata);
            formdata = {};
        } catch (err) {
            console.log(err.message);
        } finally {
            submitting = false;
        }
    };
</script>

<p>{form_schema.name}</p>

<pre>{JSON.stringify(formdata)}</pre>

<form on:submit|preventDefault={handleSubmit} novalidate>
    {#each form_schema.schema as schema}
        <CustomInput {schema} bind:value={formdata[schema.name]} />
    {/each}
    <input type="submit" value="Submit" disabled={submitting} />
</form>
