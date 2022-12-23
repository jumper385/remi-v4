<script>
    import CustomInput from "./form-inputs/customInput.svelte";

    import Pocketbase from "pocketbase";
    import { fly } from "svelte/transition";

    let pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

    export let form_schema, visibility, formdata, handleSubmit, handleClick;

    let submitting = false;
</script>

<div class="form-drawer" transition:fly={{ x: 250, duration: 150 }}>
    <div class="form-controls">
        <p>New {form_schema.name}</p>
        <button
            style="border:none; background:none; display:flex; align-items:center; justify-content:center"
        >
            <i
                class="ri-close-line"
                on:click={() => (visibility = !visibility)}
            /></button
        >
    </div>

    <form on:submit|preventDefault={handleSubmit} novalidate>
        {#each form_schema.schema as schema}
            <CustomInput {schema} bind:value={formdata[schema.name]} />
        {/each}

        <input
            class="button"
            type="submit"
            value="Submit"
            disabled={submitting}
        />
    </form>
</div>

<style lang="scss">
    div.form-drawer {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        padding: 24pt;
        width: 300pt;
        box-sizing: border-box;
        background: white;

        div.form-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12pt;
        }
    }
</style>
