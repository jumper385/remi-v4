<script>
    import Pocketbase from "pocketbase";
    import "$lib/global.scss";

    let pb = new Pocketbase(import.meta.env.VITE_DB_PATH);

    const login = async () => {
        let auth = await pb
            .collection("users")
            .authWithPassword(
                import.meta.env.VITE_TEST_EMAIL,
                import.meta.env.VITE_TEST_PASSWORD
            );
    };

    const logout = async () => {
        let auth = await pb.authStore.clear();
    };
</script>

<h1>Remi - V4</h1>

{#if pb.authStore.isValid}
    <p>You are Logged In</p>
    <button on:click={logout}>Logout</button>
{:else}
    <button on:click={login}>Login</button>
{/if}
