---
sidebar_position: 1
---

# Tools

```json
  "scripts": {
    "start": "react-scripts start",
    "format": "npx prettier --write './src/**/*.{ts,tsx}'",
    "lint": "eslint --ext .js,.ts,.jsx,.tsx ./src",
    "test": "react-scripts test --verbose --no-cache",
    "coverage": "react-scripts test --coverage --no-cache",
    "extract": "i18next 'src/**/*.{ts,tsx}'",
    "build": "react-scripts build",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "analyze": "source-map-explorer 'build/static/js/*.js'",
    "eject": "react-scripts eject",
    "clean-files": "rm -rf ./template/public ./template/src",
    "copy-files": "cp -a ./src/. template/src && cp -a ./public/. template/public",
    "prepublishOnly": "npm run clean-files && npm run copy-files"
  },
```

this page is under construction.
