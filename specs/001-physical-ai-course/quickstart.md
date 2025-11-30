# Quickstart Guide: Physical AI & Humanoid Robotics Course Book Platform

**Feature Branch**: `001-physical-ai-course`  
**Created**: 2025-11-30  
**Spec**: [link to spec.md]

This guide provides a quick overview of how to get the Docusaurus-based online book platform up and running locally for development and content creation.

## 1. Prerequisites

Ensure you have the following installed:

*   **Node.js**: Version 20.x LTS (recommended). You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** (Node Package Manager): Usually comes bundled with Node.js.
*   **Git**: For version control.

## 2. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/SyedMuhammadSarmad/Physical-AI-Humanoid-Robotics-Course.git
cd Physical-AI-Humanoid-Robotics-Course
```

## 3. Navigate to the Docusaurus Site Directory

The Docusaurus site will be located in the `docusaurus-site` subdirectory (this directory will be created in the implementation phase).

```bash
cd docusaurus-site # This directory will be scaffolded during implementation
```

## 4. Install Dependencies

Once inside the `docusaurus-site` directory, install the project dependencies:

```bash
npm install
```

## 5. Start the Development Server

To run the Docusaurus site locally in development mode, use:

```bash
npm run start
```

This will start a local development server, usually accessible at `http://localhost:3000`. It will automatically reload the page when you make changes.

## 6. Build for Production

To build the static production version of the site (e.g., for deployment to GitHub Pages):

```bash
npm run build
```

The static files will be generated in the `build` directory within `docusaurus-site`.

## 7. Content Creation

All book content will be written in Markdown (`.md`) or MDX (`.mdx`) files within the `docusaurus-site/docs` directory. The navigation structure is defined in `docusaurus-site/sidebars.js`.

---

**Next Steps**: Refer to the `specs/001-physical-ai-course/plan.md` for architectural decisions and the `specs/001-physical-ai-course/tasks.md` for specific implementation tasks.