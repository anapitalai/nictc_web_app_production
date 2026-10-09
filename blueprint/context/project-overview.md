# Napitalai ICTC - Project Overview

<!-- blueprint:source-hash 43af2083add18622f0000f8b256acdfc099ef41408b7dd213442ca2e89061ccf -->

> Public information and training platform for Napitalai ICTC, with a multi-tenant self-paced learning portal.

## Problem

Napitalai ICTC needs a public site for its ICT training, consultancy, and services, plus a platform where learners can access and complete paid self-paced courses. Organisation data and portals must remain separated.

## Users

- **Public visitors:** Learn about services and training, ask questions, and submit enquiries.
- **Learners:** Access eligible courses, complete lessons, quizzes, and assignments, track progress, and receive certificates.
- **Organisation admins:** Manage their organisation's portal only when a company admin grants that privilege. Exact permissions are undecided.
- **Company admins:** Manage the platform, grant organisation-admin privileges, and create and publish courses.

## Usage model

- Multi-tenant portals; organisation-owned data must be isolated across organisations.
- Company admins have platform-wide authority. Organisation-admin authority is granted by company admins; detailed permissions remain undecided.
- Courses are self-paced. Live instructor-led training is out of scope for now.
- The chatbot uses approved NICTC information, sends unanswered questions to the contact form, and must not access learner records.

## Features

1. **Branded landing page (headline):** Replace starter content with the Napitalai ICTC home page and supplied brand direction.
2. **Public information and catalogue:** Present ICTC services, consultancy, training, and available courses.
3. **Contact and enquiries:** Let visitors submit questions for email delivery.
4. **Authentication and roles:** Support learners and admins, with company-admin-controlled privilege grants.
5. **Organisation portals:** Provide authorised organisation access with tenant data isolation.
6. **Course authoring:** Let company admins create and publish courses.
7. **Self-paced learning:** Deliver lessons, quizzes, assignments, progress tracking, and certificates.
8. **Payments:** Support one-time course purchases and memberships through a payment gateway.
9. **Information chatbot:** Answer from approved NICTC content and direct unanswered questions to contact.

## Data model

The plans identify these records and relationships, but do not settle identifiers, field formats, or a database schema. Types and detailed fields therefore remain TODO until specified for implementation.

### User account

- Identity, profile, and role/permission grants (field shapes and authentication provider: TODO).
- May be associated with an organisation and learner enrolments; exact cardinality and membership rules: TODO.

### Organisation

- Organisation identity and portal settings (fields and types: TODO).
- Owns or is associated with portal access and learner data; course-to-organisation assignment: TODO.

### Course and learning activity

- Course content includes lessons, quizzes, and assignments; field formats and authoring details: TODO.
- Learner enrolments relate users to courses and track progress; status, grading, and completion rules: TODO.
- Submissions and results relate to assignments or quizzes and learners; fields and grading rules: TODO.
- Certificates are issued to learners for completed courses; eligibility, contents, and identifier format: TODO.

### Purchase and membership

- Course purchases and memberships grant training access; pricing, duration, renewal, and access rules: TODO.
- Store payment references and gateway outcomes, not sensitive payment details; provider and exact fields: TODO.

### Enquiry and chatbot conversation

- Visitor enquiries support email delivery; stored fields and retention: TODO.
- Chatbot conversations may be stored; storage and retention are undecided. The chatbot cannot access private learner records.

## Tech stack

- **Next.js:** Existing application framework and public site/portal runtime.
- **Neon Postgres:** Planned database; schema and integration are not yet established.
- **shadcn/ui:** Selected UI component library.
- **AI model:** Any model is acceptable; provider and integration are undecided.
- **Vector database:** Selected category; provider and approved-content update workflow are undecided.
- **Socket.IO:** Selected; intended real-time use case is undecided.
- **Payment gateway, authentication, email delivery:** Required categories, providers undecided.

## Monetization

Offer one-time course purchases and memberships through a payment gateway. Gateway provider, supported methods, prices, membership terms, and refunds are TODO.

## UI/UX

Use a clear, responsive, accessible interface reflecting East New Britain and ICT, training, consultancy, and GIS. Brand guidance names white, navy, and deep teal, with East New Britain flag colours for the icon. The landing-page prototype is in `prototypes/landing-page.html` with shared tokens in `prototypes/theme.css`.

- `/` - Public landing page.
- Public services, consultancy, training catalogue, contact, learner, and admin screens - routes and detailed layouts TODO.
- No full interactive GIS product is specified.

## Deployment

- **Target:** VPS with Apache; likely run Next.js as a Node.js service behind Apache. Confirm final arrangement.
- **Database and external services:** Neon Postgres and selected AI, vector database, and payment gateway.
- **Commands:** `npm run dev`, `npm run build`, `npm run start`; lint with `npm run lint`.
- **Environment variables:** Required names and server configuration TODO; commit names only, never credentials.
- **Operations:** HTTPS, deployment/restart process, database backup/restore, and health-check path TODO. No workers or cron jobs are confirmed.
- **Domain:** README names `www.nictc.com.pg`; confirm domain and DNS control before release.

## Open questions

- Payment gateway, supported payment methods, prices, membership terms, and refunds.
- Organisation-admin permission set; portal setup and course-to-organisation relationships.
- Completion, grading, certificate eligibility and contents.
- Authentication and email providers; vector database and content update process.
- Socket.IO use case, enquiry/chat retention, and measurable success targets.
- Deployment operations, environment-variable names, health path, domain/DNS control.