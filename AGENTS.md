<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All editable content (texts, image URLs, contacts, links) lives only in src/config/siteConfig.ts; components read from it and hide empty fields — why: owner edits one file.
- Portfolio sections live in src/components/portfolio/; images render via CloudImage directly from external URLs — why: no asset copying.
