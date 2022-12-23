<script>
    import { get_date_string } from "$lib/helpers/output_date";

    export let entry;
</script>

<div class="db_entry">
    <p class="title">
        {entry.name}
        <span class="tablet {entry.approved ? 'approved' : ''}">{entry.id}</span
        >
    </p>
    <sub> Updated at {get_date_string(new Date(entry.updated))}</sub>
    <p class="description">{entry.description}</p>
</div>

<style lang="scss">
    div.db_entry {
        margin-bottom: 24pt;
        p.title {
            margin: 0;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 6pt;
        }
        sub {
            font-size: 8pt;
        }

        .approved {
            background: #2ecc71 !important;
            color: white;
        }

        .tablet {
            background: #ecf0f1;
            padding: 3pt 12pt;
            box-sizing: border-box;
            border-radius: 30pt;
            font-size: 8pt;
        }
    }
</style>
