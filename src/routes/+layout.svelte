<script>
    import "$lib/global.scss";
    import Nav from "$lib/widgets/nav/nav.svelte";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
    />
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
    />
</svelte:head>

<div class="page">
    <Nav />
    <div class="content">
        <slot />
    </div>
</div>

<style>
    div.page {
        display: flex;
    }
    .content {
        width: 100%;
    }
</style>
