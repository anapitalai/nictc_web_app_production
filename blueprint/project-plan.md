# Project Plan

> One of the two planning docs you provide. Use as much detail as the project
> needs, including rationale, constraints, examples, edge cases, and explicit
> exclusions that should guide later feature work. Draft it directly, develop it
> through any AI conversation, or optionally run `/discovery` for a guided deep
> planning session. The content is always yours to direct. When it is filled in,
> run `/overview` to generate the project overview from this plus `build-plan.md`.

## 1. Problem - What problem are we solving?

Napitalai ICTC needs a website where the public can learn about the company, its ICT training and consultancy services, and make enquiries. The site should also support a multi-tenant training portal where learners can purchase training, complete self-paced courses, track progress, and receive certificates.

The platform should bring the public website, customer enquiries, course access, and training delivery together while keeping each organisation's portal and learner data separate.

## 2. Users - Who is this for?

- **Public visitors and prospective customers:** Learn about the company, services, and training; ask questions or submit enquiries.
- **Learners:** Create or use an account, access eligible courses, complete lessons, quizzes, and assignments, track progress, and receive certificates.
- **Organisation admins:** Create or manage their organisation's portal only after a company admin grants the required privilege. Their exact permissions within that portal remain to be defined.
- **Company admins:** Manage the platform across organisations, grant organisation-admin privileges, and create and publish course content. Course creation and publishing are reserved for company admins.

## 3. Features - What does the MVP need?

- Public pages that explain Napitalai ICTC, its services, consultancy work, and training.
- Contact and enquiry forms, with a way for visitors to send questions by email.
- User authentication for learners and administrators.
- Multi-tenant organisation portals, with company-admin-controlled permissions and separation of organisation data.
- Company-admin tools to create and publish courses for learners.
- Self-paced online courses with lessons, quizzes, assignments, progress tracking, and certificates.
- Course purchases and memberships, with payment processed through a payment gateway.
- A chatbot that answers from approved NICTC information, directs unanswered questions to the contact form, and cannot access learner accounts or records.

## 4. Data - What are we storing?

The application may need to store:

- User accounts, profiles, and role/permission grants.
- Organisations and their portal settings.
- Courses, lessons, quizzes, assignments, submissions, and results.
- Enrolments and learner progress.
- Issued certificates.
- Course purchases, membership status, and payment references or gateway outcomes.
- Customer enquiries and, if needed, chatbot conversations.

Tenant-owned data must be isolated so organisation users cannot access another organisation's data. Company admins need platform-wide administrative access. The exact data retention rules, access to payment records, and whether chatbot conversations are stored remain to be decided.

## 5. Tech - What stack are we using?

These are the selected technologies:

- Next.js
- Neon Postgres
- shadcn/ui
- any model will do
- A vector database
- Socket.IO

The specific vector database and payment gateway providers, authentication approach, and email-delivery service are not yet selected. Socket.IO is a firm choice; the real-time use case should be defined before implementation.

The current repository is a Next.js application; the other selected services still need to be integrated.

## 6. Monetize - How will this make money?

The platform will offer both:

- One-time purchases of training courses.
- Memberships that provide training access.

Payments will be handled through a payment gateway. The gateway provider, supported payment methods, pricing, membership duration or renewal rules, and refund policy remain open decisions. The application should rely on the gateway for sensitive payment details and retain only the references and status needed to manage access and records.

## 7. UI/UX - How should this look and feel?

The design should reflect East New Britain and Napitalai ICTC's focus on information technology, training, consultancy, and geographic information science. The existing logo guidance names white, navy, and deep teal, and calls for East New Britain flag colours in the icon.

The interface should be clear, responsive, accessible, and easy to use for both public visitors and learners. The website should make services, training, and contact options easy to find; the portal should make course progress and next steps clear. A full interactive GIS product is not currently specified.

## 8. Deployment - Where and how will this ship?

The app will run on a virtual private server with Apache installed. A likely setup is to run the Next.js application as a Node.js service behind Apache, with Neon and the selected AI, vector database, and payment gateway accessed as external services. Confirm the final deployment arrangement during implementation.

The repository should contain application code and a sample environment-variable file with names only. Real credentials belong in server environment configuration and must not be committed to Git.

The README currently names https://www.nictc.com.pg as the site address; confirm domain and DNS control before release. Define a health-check path, HTTPS setup, deployment and restart procedure, and database backup/restore approach before launch. No worker or cron-job requirements are confirmed yet.

## 9. Usage model and constraints

The application is multi-tenant. An organisation admin may create or manage an organisation portal only after a company admin grants that privilege. Company admins control course creation and publishing; organisation admins do not create or publish courses.

Learners take self-paced courses for now. Live instructor-led delivery is not part of the current scope. The chatbot may use approved public or course information, but must not access private learner records.

## 10. Open decisions and assumptions

- Select the payment gateway and confirm supported payment methods.
- Define course and membership pricing, membership duration or renewal, and purchase-access rules.
- Define the exact permissions available to organisation admins and how organisation portals are configured.
- Decide whether courses are shared across organisations or assigned to particular portals.
- Define course completion, quiz and assignment grading, and certificate eligibility rules.
- Select the authentication and email-delivery services.
- Select the vector database and define how approved chatbot content is added and updated.
- Define the intended real-time feature for Socket.IO.
- Decide whether enquiries and chatbot conversations are stored, and for how long.
- Set measurable success targets for enquiries, purchases, course completion, and learner experience.