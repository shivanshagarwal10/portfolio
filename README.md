# Shivansh Agarwal Portfolio

Personal portfolio for Shivansh Agarwal, a backend-focused full-stack developer building Java, Spring Boot, FastAPI, React, AI and workflow automation products.

Live site: https://portfolio-virid-alpha-41.vercel.app  
Repository: https://github.com/shivanshagarwal10/portfolio

## Overview

This repository contains a static, production-ready portfolio website designed to present engineering work through focused case studies instead of a generic resume page. The site highlights backend depth, product ownership, deployment experience and real shipped projects with screenshots, live demos and source links.

The portfolio is intentionally simple to deploy: plain HTML, CSS and JavaScript with no build step, framework dependency or server runtime.

## Featured Projects

### TalentForge

A secure job portal platform for job seekers, employers and administrators.

- Java and Spring Boot backend
- JWT authentication and role-based workflows
- Employer job posting and applicant management
- Job seeker search, profile and application flows
- MySQL persistence and Docker-ready structure
- Homepage card uses a three-screen composition showing featured jobs, profile editing and employer post-job workflow

Case study: `work/talentforge/index.html`  
Live site: https://talent-forge-smoky.vercel.app/

### DainikBhaskar.ai Learning Platform

An AI learning platform built around live classes, video content, payments and learner workflows.

- FastAPI and Fastify backend work
- Course, payment, video and live-learning APIs
- Clerk authentication integration
- Designed to support 500+ concurrent learners
- Improved API reliability, validation and content-access flows

Case study: `work/dainikbhaskar/index.html`  
Live site: https://www.dainikbhaskar.ai/

### AI Conversation Platform

A real-time AI conversation product for speech, transcription, tone analysis and live response generation.

- FastAPI and WebSocket workflows
- React Native and Expo mobile integration
- AssemblyAI transcription pipeline
- LLM-powered response suggestions
- Multi-role conversation flows used across product demos

Case study: `work/ai-conversation/index.html`

### Smart Contact Manager

A full-stack contact intelligence platform focused on keeping relationships active rather than just storing records.

- Java 21, Spring Boot 3.4, Spring Security and React 19
- Duplicate detection and merge workflows
- Reconnect view for stale relationships
- Canvas-based relationship graph
- Rule-based tagging, reminders, notes, events and contact history
- RFC 6238 TOTP two-factor authentication
- OAuth2, ownership checks, hardened sessions and upload validation
- Docker, Railway deployment and resettable public demo mode

Case study: `work/smart-contact-manager/index.html`  
Live demo: https://smart-contact-manager-production-9f25.up.railway.app/  
Source: https://github.com/shivanshagarwal10/smart-contact-manager

## Design And UX

- Editorial single-page homepage with dedicated project case-study pages
- Responsive navigation for desktop and mobile
- Custom cursor and reveal animations
- Large visual project cards with real screenshots
- Downloadable resume linked from the header, mobile menu and about section
- SEO metadata, Open Graph tags and structured person schema
- Static fallback pages for section routes like `about/`, `work/`, `contact/` and `experience/`

## Tech Stack

- HTML5
- CSS3 with responsive layouts, custom properties and media queries
- Vanilla JavaScript
- Static assets and screenshots
- Vercel static hosting

No package manager, bundler or build command is required.

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- resume.html
|-- assets/
|   |-- Shivansh_Agarwal_Resume.pdf
|   |-- shivansh-profile.jpg
|   |-- favicon.svg
|   |-- talentforge/
|   |-- smart-contact-manager/
|-- work/
|   |-- talentforge/
|   |-- dainikbhaskar/
|   |-- ai-conversation/
|   |-- smart-contact-manager/
|   |-- payment-contact-manager/
|-- about/
|-- contact/
|-- experience/
```

`work/payment-contact-manager/index.html` is kept as a redirect fallback to the correct Smart Contact Manager case study.

## Run Locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deploy

The site is deployed on Vercel from GitHub.

Because this is a static site, the Vercel settings can stay minimal:

- Framework preset: Other
- Build command: empty
- Output directory: empty
- Root directory: repository root

Every push to `main` redeploys the portfolio.

## Common Updates

### Replace Resume

Replace:

```text
assets/Shivansh_Agarwal_Resume.pdf
```

All resume buttons already point to this file.

### Update A Project Card

Edit the project card in:

```text
index.html
```

Project visuals and responsive styles live in:

```text
styles.css
```

### Update A Case Study

Each long-form case study has its own folder under:

```text
work/
```

For example:

```text
work/smart-contact-manager/index.html
```

### Add Project Screenshots

Store screenshots in a project-specific folder:

```text
assets/<project-name>/
```

Then reference them with relative paths from `index.html` or the related case-study page.

## Git Workflow

```bash
git status
git add -A
git commit -m "Update portfolio"
git push origin main
```

After pushing, Vercel should automatically publish the new version.

## Contact

- LinkedIn: https://www.linkedin.com/in/shivansh-agarwal-887657234/
- GitHub: https://github.com/shivanshagarwal10
- LeetCode: https://leetcode.com/u/ShivanshAgrawal/
