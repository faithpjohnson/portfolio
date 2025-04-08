# Portfolio Deployment Guide

This guide outlines the steps to deploy updates to both GitHub and Heroku.

## Prerequisites

- Git installed and configured
- Heroku CLI installed
- Node.js and npm installed
- Access to both GitHub and Heroku repositories

## Quick Deploy

For a quick deployment, follow these steps:

```bash
# 1. Stage changes
git add .

# 2. Commit changes
git commit -m "Your descriptive commit message"

# 3. Push to GitHub
git push origin main

# 4. Build production version
npm run build

# 5. Deploy to Heroku
git push heroku main
```

## Detailed Steps

### 1. GitHub Deployment

Stage and commit your changes:
```bash
# Stage all changes
git add .

# Commit changes with a descriptive message
git commit -m "Your descriptive commit message"

# Push to GitHub main branch
git push origin main
```

### 2. Heroku Deployment

Build and deploy your changes:
```bash
# Build the production version of your React app
npm run build

# Push to Heroku
git push heroku main
```

## Troubleshooting

### Common Commands

```bash
# Check Heroku app status
heroku apps

# View Heroku logs (useful for debugging)
heroku logs --tail

# Check if Heroku remote is set up
git remote -v

# Add Heroku remote if missing
heroku git:remote -a faithjohnson-portfolio
```

### Common Issues

1. **Heroku Remote Not Found**
   ```bash
   # Add Heroku remote
   heroku git:remote -a faithjohnson-portfolio
   ```

2. **Not Logged into Heroku**
   ```bash
   # Login to Heroku
   heroku login
   ```

3. **Build Fails**
   - Check Heroku logs: `heroku logs --tail`
   - Ensure all dependencies are in package.json
   - Verify your Node.js version in package.json matches Heroku's requirements

### Important Notes

1. Always build your app (`npm run build`) before deploying to Heroku
2. Make sure you're on the main branch when deploying
3. Keep your dependencies up to date
4. Monitor Heroku logs for any deployment issues

## Deployment Verification

After deployment, verify your changes at:
- GitHub: https://github.com/faithpjohnson/portfolio
- Heroku: https://faithjohnson-portfolio.herokuapp.com/

## Maintenance

Regular maintenance tasks:
1. Keep dependencies updated (`npm update`)
2. Monitor Heroku stack updates
3. Regularly check Heroku logs for any issues
4. Keep local and remote branches in sync

## Additional Resources

- [Heroku Node.js Documentation](https://devcenter.heroku.com/categories/nodejs-support)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [GitHub Documentation](https://docs.github.com/en) 