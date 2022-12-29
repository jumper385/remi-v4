<script>
    import { get_date_string } from "$lib/helpers/output_date";
    import SvelteMarkdown from "svelte-markdown";
    export let entry;
</script>

<div class="db_entry">
    <div>
        <p class="title">
            {entry.name || entry.question}
            <span class="tablet {entry.approved ? 'approved' : ''}"
                >{entry.id}</span
            >
        </p>
        <sub> Updated at {get_date_string(new Date(entry.updated))}</sub>
    </div>
    <!-- <p class="description" style="line-height:150%; margin:0; padding:0;">
        
    </p> -->
    <div style="line-height:175%">
        <SvelteMarkdown source={entry.description || entry.response} />
    </div>
</div>

<style lang="scss">
    div.db_entry {
        display: flex;
        flex-direction: column;
        gap: 12pt;
        margin-bottom: 24pt;
        transition: 250ms;
        padding: 12pt;
        box-sizing: border-box;
        border-radius: 3pt;

        p.title {
            margin: 0;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 6pt;
            justify-content: space-between;
        }

        p.description {
            margin: 0;
            line-height: 150%;
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
    div.db_entry:hover {
        background-color: #ecf0f1;
    }
</style>
