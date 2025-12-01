# Data Model for Physical AI & Humanoid Robotics Course Book Platform

**Feature Branch**: `001-physical-ai-course`  
**Created**: 2025-11-30  
**Spec**: [link to spec.md]

## Entities

### Chapter

*   **Description**: Represents a single, self-contained unit of educational content within the book.
*   **Attributes**:
    *   `id`: Unique identifier (string, derived from file name/path).
    *   `title`: Display title of the chapter (string).
    *   `content`: The textual and multimedia content of the chapter (Markdown/MDX format).
    *   `format`: Specifies content format (enum: `Markdown`, `MDX`).
*   **Relationships**:
    *   Belongs to one `Section/Part`.
    *   Can have `Previous` and `Next` chapters for navigation.
*   **Validation**:
    *   Content must be authored in Markdown (`.md`) or MDX (`.mdx`) format (FR-007).

### Section/Part

*   **Description**: A logical grouping of related chapters, used to structure the book into larger, digestible modules.
*   **Attributes**:
    *   `label`: Display name of the section/part (string).
*   **Relationships**:
    *   Contains multiple `Chapters`.
    *   Forms a hierarchical structure for navigation.

### Reader

*   **Description**: The primary user of the book – a tech enthusiast seeking to learn about Physical AI and Humanoid Robotics.
*   **Attributes**:
    *   `interaction_data`: (Implicitly collected via analytics, e.g., page views, time on page).
    *   `feedback`: (Collected via embedded feedback form).
*   **Relationships**:
    *   Interacts with `Chapter` and `Section/Part` content.

## Data Flow & Transitions

*   **Content Creation**: Content is authored as Markdown/MDX files by users/contributors.
*   **Content Lifecycle**: Managed via Git for source files (updates, versioning).
*   **Site Generation**: Docusaurus processes Markdown/MDX files into static HTML, CSS, JavaScript.
*   **Site Hosting**: Static files are served via GitHub Pages.
*   **Analytics Data Collection**: Client-side JavaScript sends usage data to Google Analytics (GA4).
*   **Feedback Collection**: Embedded feedback form submits data (mechanism to be determined in implementation, e.g., third-party service).
