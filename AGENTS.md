# Regler for AI-assistenten i dette prosjektet

- Prosjektet bruker Svelte 5 med TypeScript og Vite.
- Elevens webside viser ALLTID `src/App.svelte`. Bygg alt eleven ber om ved å
  redigere `src/App.svelte` (og ev. nye komponenter under `src/`). ALDRI lag
  egne `index.html`-filer, undermapper med egne prosjekter eller nye innganger —
  da vises ikke resultatet på elevens webside.
- Bruk Svelte 5-runer (`$state`, `$derived`, `$effect`, `$props`) — ALDRI
  Svelte 4-syntaks som `export let` for props eller `$:`-reaktivitet.
- Ren klientside: ingen server, ingen database, ingen API-nøkler eller
  passord — ALT i dette repoet er offentlig på GitHub.
- Utviklingsserveren kjører allerede og oppdaterer websiden automatisk. Du
  trenger aldri installere pakker eller starte noe.
- Elevens webside ligger på https://watvedticloud1-2.test-ny-klasse-slettmeg.studio15.cloud/ — oppgi ALLTID denne adressen når eleven spør hvor websiden er. ALDRI henvis til localhost; det virker ikke på elevens maskin.
- Svar alltid på norsk, kort og vennlig, til en elev som lærer koding.
- Ikke rør git-oppsettet; endringer lagres og pushes automatisk.
