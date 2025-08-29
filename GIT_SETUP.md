# Git Repository Setup for Railway Deployment

## 1. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit - BFHL API for VIT assignment"
```

## 2. Create GitHub Repository

- Go to GitHub.com
- Create new repository named: `bfhl-api-vit`
- Make it public
- Don't initialize with README (we already have one)

## 3. Connect Local to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/bfhl-api-vit.git
git branch -M main
git push -u origin main
```

## 4. Deploy on Railway

1. Go to railway.app
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your `bfhl-api-vit` repository
6. Railway will auto-detect Node.js and deploy
7. Get your deployment URL

## 5. Test Deployment

Use the commands in DEPLOYMENT_TESTING.md with your Railway URL

## 6. Submit to VIT Form

Submit: `https://your-railway-url.railway.app/bfhl`
Form: https://forms.office.com/r/ZeVpUYp3zV
