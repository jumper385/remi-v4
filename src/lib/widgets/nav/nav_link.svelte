<script>
    import { page } from "$app/stores";
    import { fade } from "svelte/transition";
    export let href, icon, text;
    $: isActive = $page.url.pathname == href;
</script>

<a
    transition:fade={{ duration: 250 }}
    class="nav_link {isActive ? 'active' : 'inactive'}"
    {href}><i class={icon} /> <span>{text}</span></a
>

<style>
    a {
        display: flex;
        align-items: center;
        border-radius: 3pt;
        padding: 8pt;
        box-sizing: border-box;
        text-decoration: none;
        color: #2c3e50;
        gap: 8pt;
        transition: 250ms;
    }
    a.active {
        background: #ecf0f1;
    }
    a:hover {
        background: #ecf0f1;
    }
</style>
