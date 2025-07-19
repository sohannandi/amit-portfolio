# Netlify Deployment Instructions

## Current Issue: 404 Page Not Found

### Solution Options:

#### Option 1: Update Netlify Settings
1. Go to Netlify Dashboard → Your Site → Site Settings
2. Build & Deploy → Build Settings
3. Set **Publish directory** to: `Website-main`
4. Leave **Build command** empty
5. Click "Save"

#### Option 2: Repository Structure
If your GitHub repo has this structure:
```
your-repo/
├── Website-main/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── ...
```

Then set publish directory to `Website-main`

#### Option 3: Move Files to Root
Move all files from Website-main folder to the root of your repository:
```
your-repo/
├── index.html
├── style.css
├── script.js
└── ...
```

### Files Required for Deployment:
✅ index.html
✅ style.css  
✅ script.js
✅ amit.jpg
✅ Amit-Resume-21.pdf
✅ _redirects
✅ netlify.toml

### After Making Changes:
1. Commit and push to GitHub
2. Netlify will auto-deploy
3. Check your site: https://wonderful-seahorse-1d3108.netlify.app/

### Troubleshooting:
- Check Netlify deploy logs for errors
- Ensure all file paths are relative (no leading /)
- Verify index.html is in the correct directory