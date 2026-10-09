# Feature: Build the branded Napitalai ICTC landing page

**From build-plan:** feature 1
**Build attempt:** 1
**Branch:** feature/build-the-branded-napitalai-ictc-landing-page
**Status:** verified

## Goal

Replace the Next.js starter home page with a responsive, accessible Napitalai ICTC landing page that introduces the company, its ICT training, consultancy, and GIS work, and makes available training easy to discover.

## Design reference

- Use `prototypes/landing-page.html` for the page structure, content direction, and visual composition, and port the shared theme from `prototypes/theme.css`.
- The prototype's full-logo image is no longer available because the user deleted `logo/`. Use the existing `app/icon.svg` with visible “Napitalai ICTC” text as the header brand, per the user's selection. Do not restore the deleted logo folder.
- The prototype's `mailto:info@nictc.com.pg` address is unverified. Use the prototype for layout and colors, but do not copy that email link.

## In scope

- Replace the starter content at `/` with a branded home page containing a navigation header, hero, service highlights, self-paced training callout, and footer.
- Use the existing icon plus text wordmark. Keep the page responsive, with clear typography, semantic landmarks and heading order, visible keyboard focus, and reduced-motion support for decorative transitions.
- Port the prototype's shared colors, spacing, type, radius, and shadow tokens into the existing global theme and use the current Tailwind CSS setup for page styling.
- Update the root document title and description to identify Napitalai ICTC and its training and consultancy work.
- Keep the page server-rendered; its navigation and calls to action use valid in-page anchors only.

## Out of scope

- Dedicated service, consultancy, training-catalogue, contact, learner, or admin pages.
- Contact or enquiry form, email delivery, chatbot, authentication, course access, payments, or stored data.
- Restoring or recreating the deleted full logo, adding dependencies, or implementing a full interactive GIS product.

## Build loop

- Work on `feature/build-the-branded-napitalai-ictc-landing-page`.
- Review cadence is feature-level (`workflow.stepReview: "feature"`): complete the small steps, then present one final implementation review. Checkpoint commits are disabled; `/complete` owns the feature commit.

## Build steps

- [x] Port the agreed prototype theme into `app/globals.css` and replace the starter document metadata in `app/layout.tsx`. **Done when:** the existing root route still builds and exposes the Napitalai ICTC title and description; `npm run build` passes.
- [x] Replace the starter in `app/page.tsx` with the semantic responsive page shell, header, icon-plus-text brand, hero, and anchor navigation. **Done when:** `/` renders Napitalai ICTC content, the icon route loads, and all header/hero links point to present sections; `npm run build` passes.
- [x] Add the service highlights, training callout, and footer; refine narrow-screen layout, keyboard focus, and reduced-motion behavior. Do not include the unverified email or a nonfunctional form CTA. **Done when:** browser review at desktop and narrow mobile widths shows the intended layout without horizontal overflow, broken anchors, or inaccessible navigation, and `npm run build` passes.

## Files / areas

- `app/page.tsx` - Root landing-page server component.
- `app/globals.css` - Shared theme tokens and base styles.
- `app/layout.tsx` - Root metadata; keep the existing layout and font setup unless the page requires a minimal adjustment.
- `app/icon.svg` - Existing brand icon exposed by the App Router metadata route; use it with adjacent text rather than adding another logo asset.
- `prototypes/landing-page.html` and `prototypes/theme.css` - Visual reference and shared design tokens; the reference's deleted logo path and unverified email are superseded as noted above.

## Data / contracts

- No persistence, external API, client state, or authentication is needed for this static public page.
- `/` remains the public home route. Internal links must resolve to sections rendered on this page; do not create routes reserved for later features.
- The header brand is the existing app icon accompanied by the visible text “Napitalai ICTC”. The icon is decorative when that text is present.
- Do not publish an unconfirmed email address. Contact-form behavior belongs to the planned contact/enquiry feature.

## Testing

- No test runner or `Verify` command is configured. `npm run build` passed during spec preparation.
- During implementation, run the build and inspect the running root page at desktop and narrow mobile widths. Check that the icon loads, anchors resolve, keyboard focus is visible, and the layout has no horizontal overflow. Do not claim browser-test automation; none is configured.

## Notes for the AI

- Keep this page as a Server Component and reuse installed Next.js, React, and Tailwind CSS. Do not add a UI or icon dependency for the prototype's decorative artwork.
- Use only the services and training teasers already represented by the design reference. Feature 2 owns detailed public pages and the catalogue; feature 3 owns working contact and enquiry delivery.
- The deletion of `logo/` is the user's intended choice. Do not restore those files or silently replace the text brand with an assumed full logo.

## Open questions

- The public contact destination and email address are unconfirmed. This does not block the landing page because contact delivery is out of scope; confirm the destination before implementing the contact/enquiry feature.


<!-- blueprint:completion {"schemaVersion":2,"specBytes":5655,"specSha256":"63d77a626b773813cd6298f07730de6e9cd1781e0fa2475f56d7cd6fd459f849","branch":"refs/heads/feature/build-the-branded-napitalai-ictc-landing-page","head":"9c6a0986db2dce6fb02811785c0d10bfb3e0c867","baseRef":"refs/heads/main","baseCommit":"9c6a0986db2dce6fb02811785c0d10bfb3e0c867","sourceTree":"e11777c5b86a50ecc67f2c3bc2ccd10d3b3d9e84","landing":"local-merge","absentOptional":[]} -->
