# ADR 003: Web Analytics Integration (Google Analytics GA4)

**Date**: 2025-11-30

## Context

The project requires tracking website usage and reader behavior to measure engagement and inform content decisions, as specified in `FR-012` and `SC-004`. This data is crucial for evaluating the book's success.

## Decision

**Google Analytics (GA4)** will be integrated into the Docusaurus website to track basic web analytics and reader behavior.

## Alternatives Considered

*   **Plausible Analytics / Fathom Analytics:**
    *   **Pros:** Privacy-focused, lightweight, cookie-less by default.
    *   **Cons:** Requires manual integration via `headTags`, offers less comprehensive data than GA4, potentially higher cost for advanced features.
*   **Matomo:**
    *   **Pros:** Open-source, self-hosting option for full data ownership.
    *   **Cons:** Self-hosting adds operational overhead; cloud version might have higher costs. More complex setup for Docusaurus than GA4.
*   **No Analytics (rely solely on feedback form):**
    *   **Pros:** Simplest to implement, highest privacy.
    *   **Cons:** Provides no objective data on actual usage patterns (e.g., page views, popular chapters, traffic sources, bounce rate), making it impossible to fully evaluate `SC-002` and `SC-003` objectively.

## Rationale

*   **Comprehensive Data**: GA4 offers extensive features for tracking user behavior, page views, events, and audience demographics, providing a holistic view of reader engagement.
*   **Built-in Docusaurus Support**: Docusaurus has native, built-in integration for Google Analytics, simplifying setup and configuration compared to manual script injection for other providers.
*   **Industry Standard**: Widely adopted, allowing for easier comparison and interpretation of data.
*   **Free Tier**: The free tier of GA4 is sufficient for the project's current needs.
*   **Supports Success Criteria**: Directly supports the measurement of `SC-002` (navigation success rate) and provides context for `SC-004` (reader satisfaction).

## Consequences

*   **Positive**:
    *   Rich data on website usage and reader behavior.
    *   Easy integration and maintenance.
    *   Provides objective metrics for evaluating book success and identifying areas for improvement.
*   **Negative**:
    *   **Data Privacy Concerns**: GA4 is not privacy-focused by default; requires careful configuration to ensure GDPR/CCPA compliance (e.g., IP anonymization, clear privacy policy).
    *   Potential for data overload if not configured and analyzed effectively.
    *   External dependency on Google's services.
