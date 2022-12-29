<script>
    import NavLink from "$lib/widgets/nav/nav_link.svelte";
</script>

<nav>
    <!-- System Pages -->
    <NavLink href="/" icon="ri-home-line" text="Home" />
    <NavLink href="/tutorial" icon="ri-book-line" text="Tutorial" />

    <br />
    <!-- Design Scoping -->
    <NavLink
        href="/interview_questions"
        icon="ri-question-answer-line"
        text="Interview Questions"
    />

    <br />
    <!-- Waterfall Sections -->
    <NavLink href="/user_needs" icon="ri-user-heart-line" text="User Needs" />
    <NavLink
        href="/requirements"
        icon="ri-compasses-2-line"
        text="Requirements"
    />
    <NavLink
        href="/specifications"
        icon="ri-shape-line"
        text="Specifications"
    />
    <NavLink
        href="/design_outputs"
        icon="ri-character-recognition-line"
        text="Design Outputs"
    />

    <br />
    <!-- Supporting Globals -->
    <NavLink
        href="/brainstorm"
        icon="ri-psychotherapy-line"
        text="Brainstorm"
    />
    <NavLink href="/research" icon="ri-search-eye-line" text="Research" />
    <NavLink href="/compliance" icon="ri-booklet-line" text="Compliance" />
    <NavLink href="/constraint" icon="ri-rotate-lock-line" text="Constraint" />
    <NavLink href="/test" icon="ri-test-tube-line" text="Test" />
    <NavLink href="/outcome" icon="ri-a-b" text="Test Outcome" />
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
