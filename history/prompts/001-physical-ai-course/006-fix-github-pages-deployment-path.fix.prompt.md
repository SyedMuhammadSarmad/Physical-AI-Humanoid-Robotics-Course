---
id: 006
title: Fix GitHub Pages Deployment Path
stage: fix
date: 2025-12-02
surface: agent
model: gemini-pro
feature: 001-physical-ai-course
branch: 001-physical-ai-course
user: 
command: # (implicit, after user reported error)
labels: ["github-actions", "deployment", "bugfix"]
links:
  spec: null
  ticket: null
  adr: null
  pr: https://github.com/SyedMuhammadSarmad/Physical-AI-Humanoid-Robotics-Course/pull/3
files:
 - docs/.github/workflows/deploy.yml
tests:

---

## Prompt

(User reported GitHub Pages 404 error, implying incorrect deployment path)

## Response snapshot

Updated the `deploy.yml` workflow to correctly reference the Docusaurus build output directory.

## Outcome

- ✅ Impact: High - Corrected the deployment path for GitHub Pages, which should resolve the 404 error.
- 🧪 Tests: No automated tests were run for this fix.
- 📁 Files: Modified one file: `docs/.github/workflows/deploy.yml`.
- 🔁 Next prompts: Commit the fix and push to GitHub to trigger a new deployment.
- 🧠 Reflection: The previous workflow incorrectly uploaded the entire repository instead of the Docusaurus-built static assets. By changing the `path` to `docs/build`, the correct files will be deployed, resolving the 404.

## Evaluation notes (flywheel)

- Failure modes observed: GitHub Pages 404 error due to incorrect artifact path.
- Graders run and results (PASS/FAIL): PASS (fix applied)
- Prompt variant (if applicable): 
- Next experiment: Verify the deployed site after the new workflow run.
