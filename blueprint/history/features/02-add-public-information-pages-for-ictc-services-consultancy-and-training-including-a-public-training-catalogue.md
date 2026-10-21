# Feature: Add public information pages for ICTC services, consultancy, and training

**From build-plan:** feature 2
**Build attempt:** 1
**Branch:** feature/add-public-information-pages-for-ictc-services-consultancy-and-training-including-a-public-training-catalogue
**Status:** verified

## Goal

Expand the landing page into a working public information experience for Napitalai ICTC by adding route-based information pages for services, consultancy, and training, plus a public training catalogue that can be discovered from the home page.

## Design reference

Use the current app as the design reference for the public site because the repository already contains the established landing-page look in `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`. Preserve the existing white, navy, deep teal, and warm accent palette, the East New Britain-inspired visual direction, and the accessible focus treatment already present in the root stylesheet.

## In scope

- Add a public route or section flow for ICTC services and consultancy information.
- Add a public training page with clear learning outcomes and a visible catalogue of course offerings.
- Add navigation from the landing page to the public info pages, including a clear training call-to-action.
- Keep the experience responsive and accessible using the established Next.js App Router layout and Tailwind styling conventions.
- Use simple in-memory content objects for services, consultancy themes, and training catalogue entries until a backend or content source is added.

## Out of scope

- Authentication, user accounts, learner dashboards, or admin roles.
- Course enrolment, payments, memberships, or checkout flows.
- Real database storage, content management, or external API integration.
- A public contact form, email delivery, or enquiry processing.
- A full interactive GIS product or other advanced front-end application features.

## Build loop

This feature stays in a single reviewable slice. The project already uses a default `stepReview` of `feature` and `checkpointCommits` is disabled, so the work should stay small and reviewable without extra checkpoint commits.

## Build steps

- [ ] Add the public route skeleton and navigation entry points for the services, consultancy, and training pages.
  - Done when: `app/services/page.tsx`, `app/consultancy/page.tsx`, and `app/training/page.tsx` render with semantic headings and the landing page links point to them; `npm run build` succeeds.
- [ ] Add the services and consultancy content pages with structured sections and a consistent brand treatment.
  - Done when: each page explains the capability clearly, keeps the layout responsive, and uses the existing shared design tokens; `npm run build` succeeds.
- [ ] Add the public training catalogue and training-focus landing-page section.
  - Done when: the public training page lists course summaries or cards in a discoverable way, the home page links to the catalogue, and the page remains readable on mobile and desktop; `npm run build` succeeds.
- [ ] Verify the final route set for accessibility and polish.
  - Done when: keyboard focus styles remain visible, headings are semantically ordered, and the new content does not regress the existing app layout; `npm run build` succeeds.

## Files / areas

- `app/page.tsx` - Landing page navigation and calls to action.
- `app/layout.tsx` - Shared root layout and page metadata.
- `app/globals.css` - Shared theme tokens and focus styling.
- `app/services/page.tsx` - Public ICT services information.
- `app/consultancy/page.tsx` - Public consultancy information.
- `app/training/page.tsx` - Public training overview and catalogue route.
- `app/training/catalogue/page.tsx` - Optional route for a more detailed catalogue layout if the content is large enough to warrant a second page.
- `app/components/` or route-local helper modules - Only if a reusable section pattern emerges from the public pages.

## Data / contracts

- This feature does not establish a database layer, auth contract, payment flow, or external API integration.
- Public content for services, consultancy, and courses should be represented as static arrays or simple route-local data objects at the application boundary.
- Route names and catalogue fields should stay explicit and human-readable until a later feature adds a CMS, database, or richer course metadata model.
- No user-generated content, sensitive records, or private learner data should be added in this feature.

## Testing

- No test runner is configured in this project. The current project-wide verification signal is `npm run build`.
- Validate this feature through the build, browser review of the new public routes, and a quick visual pass for accessibility and layout stability.
- Do not claim a test pass for logic or browser automation that is not configured or run in this repository.

## Notes for the AI

- Keep the implementation in the App Router and prefer server components unless the feature gains client-side interactivity.
- Preserve the current palette and layout conventions from the landing page instead of introducing a new design system.
- Keep the route surface small and explicit: services, consultancy, training, and catalogue. Do not start building admin, portal, or payments flows in this feature.
- If a training course list is introduced, keep it static and clearly marked as provisional until a later feature adds real course management or a database-backed catalogue.
- Do not add a dependency for a UI toolkit or a CMS because the app already has its required design and route structure.

## Open questions

- Which exact public route names should be used for the services and training pages in the final site structure.
- Should the public training catalogue be a single training page or a dedicated catalogue route with a list of course cards.
- Which course entries should be included in the initial catalogue until the later course-authoring and publishing features are built.
- Whether a future route should include a single summary page for consultancy work plus a second page for services and training categories.


<!-- blueprint:completion {"schemaVersion":2,"specBytes":6141,"specSha256":"5d401bedf94b998dff1cd4378faf59be66aab260cb156970bc6a71d50842a942","branch":"refs/heads/feature/add-public-information-pages-for-ictc-services-consultancy-and-training-including-a-public-training-catalogue","head":"3a8f0446607f323019b50c67ac38b598f76c17ef","baseRef":"refs/heads/main","baseCommit":"3a8f0446607f323019b50c67ac38b598f76c17ef","sourceTree":"0075a6095e19d0cc9f8dd8de077c23a00ec5f3a8","landing":"local-merge","absentOptional":[]} -->
