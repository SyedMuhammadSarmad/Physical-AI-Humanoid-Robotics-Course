# ADR 002: Content Management & Versioning Strategy (Git-based)

**Date**: 2025-11-30

## Context

The book's content needs a robust, collaborative, and version-controlled management system to ensure accuracy, facilitate updates, and support community contributions as outlined in the project's Constitution.

## Decision

All book content (Markdown/MDX files) and website configuration will be managed and versioned using **Git**, hosted on GitHub. Content updates and contributions will follow a standard Git workflow (branches, commits, pull requests).

## Alternatives Considered

*   **Dedicated Content Management System (CMS) (e.g., Strapi, Contentful):**
    *   Offers a user-friendly interface for non-technical content creators and advanced content workflows.
    *   Introduces significant overhead (server deployment, database, API layer, maintenance) for a static site.
    *   Adds complexity for developers who are already comfortable with Git.
*   **Manual File Management (e.g., shared drive):**
    *   Lack of version control, collaboration features, and audit trails.
    *   High risk of data loss and conflicts.

## Rationale

*   **Version Control**: Git provides a comprehensive history of all changes, allowing for easy rollback and tracking of content evolution.
*   **Collaboration**: Standard Git workflows (branches, pull requests, code reviews) are ideal for managing contributions from multiple authors and ensuring quality.
*   **Integration with GitHub Pages**: Seamlessly integrates with the chosen hosting platform, where the content source is the Git repository itself.
*   **Developer Familiarity**: Leverages a tool familiar to most technical stakeholders and tech enthusiasts.
*   **Simplicity & Efficiency**: Avoids the overhead of a separate CMS for content that is primarily text-based and Markdown-formatted.
*   **Supports Constitution**: Directly supports the "Open & Extensible" and "Rigorous & Up-to-Date Content" principles.

## Consequences

*   **Positive**:
    *   Robust version history for all content.
    *   Streamlined collaboration and contribution workflow.
    *   Simplified content review process via pull requests.
    *   Low cost (leveraging existing Git/GitHub infrastructure).
*   **Negative**:
    *   Requires content contributors to have basic Git proficiency.
    *   Markdown/MDX authoring might be a barrier for non-technical contributors compared to a WYSIWYG editor.
    *   Scalability for very large numbers of non-technical contributors might be challenging without additional tooling.
