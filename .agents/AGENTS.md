# Workspace Rules - House of Kalaa

## GitHub Repository Creation & Standard formatting

Anytime a GitHub repository is created or modified, the agent must adhere to the standardized repository structure:

1.  **Repository Structure:** Create folders and files according to [GITHUB_REPO_STANDARDS.md](file:///c:/Users/ragha/OneDrive/Desktop/House%20Of%20Kalla/GITHUB_REPO_STANDARDS.md).
2.  **README.md Template:** Populate `README.md` at the root using the standard structure defined in `GITHUB_REPO_STANDARDS.md`. It must include clear links, technology stack, folder structure tree, installation guidelines, and deployment steps.
3.  **Deployment Configurations:** Create a `vercel.json` file in the root containing `{"cleanUrls": true}` to ensure clean subpage URLs.
4.  **Semantic Git Commits:** Write clean, structured commit messages adhering to the Conventional Commits style (e.g. `feat:`, `fix:`, `docs:`, `style:`, `refactor:`).
5.  **GitHub Workflow Action:** Include `.github/workflows/validate.yml` to automatically lint and check file integrity on code push.
