<script>
    import Pocketbase from "pocketbase";
    import "$lib/global.scss";
    import CustomInput from "$lib/widgets/form-inputs/customInput.svelte";

    let pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

    let formdata = {};
    let authReady = pb.authStore.isValid;

    const login = async () => {
        let auth = await pb
            .collection("users")
            .authWithPassword(formdata.email, formdata.password);
        authReady = pb.authStore.isValid;
    };

    const logout = async () => {
        let auth = await pb.authStore.clear();
        authReady = false;
    };

    let schema = [
        { name: "email", type: "email" },
        { name: "password", type: "password" },
    ];
</script>

<h1>Remi - V4</h1>

<div style="padding:24pt; box-sizing:border-box">
    {#if authReady}
        <button class="button" on:click={logout}>Logout</button>
    {:else}
        <form on:submit|preventDefault={login}>
            {#each schema as entry}
                <CustomInput schema={entry} bind:value={formdata[entry.name]} />
            {/each}
            <input type="submit" value="Login" class="button" />
        </form>
    {/if}
</div>
