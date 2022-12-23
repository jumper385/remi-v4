<script>
    import NavLink from "$lib/widgets/nav/nav_link.svelte";
</script>

<nav>
    <!-- System Pages -->
    <NavLink href="/" icon="ri-psychotherapy-line" text="Home" />
    <NavLink href="/tutorial" icon="ri-book-line" text="Tutorial" />

    <br />
    <!-- Waterfall Sections -->
    <NavLink href="/user_needs" icon="ri-user-heart-line" text="User Needs" />
    <NavLink href="/" icon="ri-compasses-2-line" text="Requirements" />
    <NavLink href="/" icon="ri-shape-line" text="Specification" />
    <NavLink
        href="/"
        icon="ri-character-recognition-line"
        text="Design Outputs"
    />

    <br />
    <!-- Supporting Globals -->
    <NavLink href="/" icon="ri-psychotherapy-line" text="Brainstorm" />
    <NavLink href="/" icon="ri-search-eye-line" text="Research" />
    <NavLink href="/" icon="ri-booklet-line" text="Compliance" />
    <NavLink href="/" icon="ri-rotate-lock-line" text="Constraint" />
    <NavLink href="/" icon="ri-test-tube-line" text="Test" />
    <NavLink href="/" icon="ri-a-b" text="Test Outcome" />
</nav>

<style lang="scss">
    nav {
        display: flex;
        flex-direction: column;
        padding: 24pt;
        box-sizing: border-box;
        gap: 6pt;
        width: 300pt;
    }
</style>
