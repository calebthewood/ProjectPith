# Models ReadMe

## Blog Posts

### Notes
- Would like to determine the best pattern for error catching. Try/catch blocks, the current if statements. old school callback pattern? Needs follow-up. Maybe ask Zach?

- Kicking around the idea of instantiating a db class each time I need a set of db operations vs the current static setup. I want to get the cleanest db interaction possible, but this is more of a stretch goal

- Should set up a test db asap so that I can keep my db organized. keep collection names the same for simplicity but change db to test_project_pith or something. Then update config file to check env for test or production.

- Will need to make pipeline more resilient. Notion is very lax about data so it'll be up to me to put the correct data in there - still, would be nice for the server to not break if a minor field is missing.

- Stretch goals: Upsert functionality will allow me to easily update things like tags after I've uploaded data. I'll try not to change content too often, but metadata changes may be useful. It's likely I'll come up with better tag ideas later on