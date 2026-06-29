# Atlas Marketing Consulting - Website Redesign Project

## Project Overview

Redesign the existing website (https://atlasmarketingconsulting.com.au/) into a modern, premium, highly interactive marketing website while preserving the company's existing branding, messaging, and business identity.

This is **NOT** a redesign that changes the company's brand.

The existing logo, colors, and business positioning must remain consistent.

The goal is to transform the outdated website into a premium experience similar to high-end creative agencies.

---

# Tech Stack

Build using:

* Next.js 15
* JavaScript (NOT TypeScript)
* App Router
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Lenis Smooth Scroll
* Lucide React Icons
* next/image
* next/font/google

Do NOT use Bootstrap.

Do NOT use Material UI.

Everything should be responsive.

---

# Typography

Use:

Headings:

* Manrope

Body:

* Inter

Large typography throughout the website.

Lots of whitespace.

Premium spacing.

---

# Color Palette

The website MUST stay aligned with Atlas Marketing Consulting's existing branding.

Do NOT introduce random colors.

Use the existing logo colors as primary colors.

General palette:

Background:
White (#FFFFFF)

Secondary Background:
#FAFAFA

Primary Text:
#1F2937

Secondary Text:
#6B7280

Borders:
#E5E7EB

Buttons:
Existing brand blue

Accent:
Existing logo gold

---

# Website Concept

The website contains THREE experiences.

1. Landing Website

2. Atlas Growth

3. Atlas Moments

The Landing Website introduces the company.

It allows the visitor to choose between the two services.

Once a service is selected, the entire experience transitions into that dedicated service website.

The visitor should always be able to return to the Landing Website.

This should feel like one premium experience rather than three disconnected websites.

Use page transitions with Framer Motion.

---

# Website Routes

/

Landing Website

/growth

Atlas Growth Website

/moments

Atlas Moments Website

---

# Landing Website Structure

Hero

Who We Are

Choose Your Service

Atlas Moments Card

Atlas Growth Card

Footer

The landing page should remain simple and clean.

The detailed service information belongs inside Growth and Moments.

---

# Hero Section

Use a full-width premium hero.

Large headline.

Supporting text.

Primary CTA

Secondary CTA

Professional imagery.

Soft background animations.

No video background.

---

# Who We Are

Use content from the existing Atlas Marketing website.

Rewrite only for better readability.

Keep the same message.

Explain:

Who Atlas is

Experience

Mission

Approach

Business philosophy

Do not change business meaning.

---

# Choose Your Service Section

Display two large premium cards.

Card 1

Atlas Moments

Photography & Videography

Card 2

Atlas Growth

Business Growth & Marketing

Each card contains:

Large image

Short description

Hover animation

Dark overlay

Image zoom

Animated button

Explore →

When hovered:

Image zooms slightly

Overlay fades in

Button slides upward

Description fades in

When clicked:

Animate transition into the dedicated website.

---

# Atlas Moments Description

Capture life's most meaningful moments with premium photography and cinematic videography.

Services include:

* Wedding photography
* Wedding videography
* Wedding highlight films
* Social media teasers
* Full ceremony coverage
* Reception coverage
* Engagement shoots
* Pre-wedding shoots
* Baptism photography
* Christening photography
* Birthday photography
* Family events
* Cultural events
* Church events
* Community events
* Event recap videos
* Photo galleries
* Full event edits
* Social media reels

---

# Atlas Growth Description

Helping businesses grow through strategic content and marketing.

Services include:

* Social media reels
* TikTok videos
* YouTube Shorts
* Promotional videos
* Corporate profile videos
* Founder story videos
* Client testimonials
* Brand campaigns
* Product videos
* Service videos
* Staff introduction videos
* Recruitment videos
* Training videos
* Business photography
* Professional headshots
* Monthly content planning
* Social media strategy
* Campaign concepts
* Content calendars
* Hooks
* Captions

---

# Atlas Growth Website

The current Atlas Marketing Consulting website becomes the Atlas Growth website.

Reuse and redesign the following sections from the existing website:

Hero

About

Marketing Strategy

Brand Strategy

Digital Marketing

SEO

Social Media Marketing

Content Marketing

Website Consulting

Marketing Audit

Business Growth Consulting

Campaign Planning

Process

Testimonials

Call To Action

Contact

Do NOT simply copy the layout.

Create a completely modern premium experience.

---

# Atlas Moments Website

Completely different visual style.

Large photography.

Elegant typography.

Luxury feeling.

Sections:

Hero

Featured Gallery

Wedding Services

Photography

Videography

Special Events

Portfolio

Testimonials

Contact

Large imagery throughout.

---

# Animation Style

Use Framer Motion.

Animations should be elegant.

Use:

Fade Up

Fade In

Scale

Image Zoom

Parallax

Button Hover

Page Transition

Section Reveal

Avoid excessive animation.

---

# Design Language

Modern

Premium

Luxury

Minimal

Professional

Large whitespace

Rounded cards

Soft shadows

Glass effects only where appropriate

No clutter

No gradients unless subtle.

---

# Performance

Use next/image everywhere.

Lazy-load images.

Optimize fonts.

Avoid unnecessary re-renders.

Maintain Lighthouse scores above 90.

---

# SEO

Use metadata API.

Semantic HTML.

Proper heading hierarchy.

Open Graph metadata.

Structured layout.

---

# Folder Structure

src/

app/

page.jsx

growth/page.jsx

moments/page.jsx

components/

landing/

growth/

moments/

shared/

lib/

public/

images/

videos/

---

# Important

Do NOT generate placeholder lorem ipsum.

Reuse the content and messaging from the current Atlas Marketing Consulting website wherever applicable.

Only improve readability and presentation.

Never change the company's branding or core business identity.

The final result should feel like a premium creative agency website released in 2026.
