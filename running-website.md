# Running the John Paul Gamo Portfolio Website

This project is a personal portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS 4**. It includes a responsive glassmorphic design, dark/light mode switching, animated sections, project cards, and responsive navigation.

## Requirements

Install the following software before running the project:

- Node.js 18 or newer
- npm
- A modern web browser such as Chrome, Edge, Firefox, or Safari

Check whether Node.js and pnpm are installed:

```bash
node --version
npm --version
```

If npm is not installed, install it with:

```bash
npm install --global npm
```

## Open the Project

Open a terminal and move into the project directory:

```bash
cd /home/ubuntu/john-paul-gamo-portfolio
```

If you received the project as a ZIP file or cloned it into another location, replace the path above with the actual project path.

## Install Dependencies

Install the project dependencies before starting the website:

```bash
npm install
```

Run this command the first time you open the project or whenever the dependencies change.

## Start the Development Server

Start the Vite development server:

```bash
npm run dev
```

The terminal will display a local URL, usually:

```text
http://localhost:3000
```

Open that URL in your browser. Vite supports hot reload, so changes to React components, TypeScript files, and CSS files should appear automatically after saving.

## Stop the Development Server

Return to the terminal where the development server is running and press:

```text
Ctrl + C
```

## Create a Production Build

Build the optimized production version of the website:

```bash
npm run build
```

A successful build should finish without errors and create the production files in the `dist` directory.

## Preview the Production Build

After creating a production build, preview it locally with:

```bash
npm run preview
```

Open the preview URL shown in the terminal. The preview command lets you test the optimized build before deployment.

## Development Workflow

A typical workflow is:

```bash
cd /home/ubuntu/john-paul-gamo-portfolio
npm install
npm run dev
```

After making changes, verify the production build:

```bash
npm run build
```

## Important Project Files

### Main application

```text
client/src/App.tsx
```

This file assembles the main page sections and enables the theme provider.

### Navigation

```text
client/src/components/Navigation.tsx
```

This file contains the responsive navigation, navigation links, mobile menu, and light/dark mode button.

### Theme switching

```text
client/src/contexts/ThemeContext.tsx
```

This file manages the current theme, switches the `light` and `dark` classes on the HTML document, and saves the selected theme in browser `localStorage`.

### Global styles

```text
client/src/index.css
```

This file contains Tailwind CSS setup, design tokens, glassmorphism styles, gradients, animations, typography, and light-mode styles.

### Hero section and profile image

```text
client/src/components/Hero.tsx
```

Change the profile image and hero background URL in this file.

### Projects section

```text
client/src/components/Projects.tsx
```

Change project titles, descriptions, technology badges, image URLs, GitHub links, and demo links in this file.

### Other sections

```text
client/src/components/About.tsx
client/src/components/Skills.tsx
client/src/components/Contact.tsx
```

These files contain the About, Skills, and Contact sections.

## Changing the Default Theme

The website starts in dark mode by default. This setting is in `client/src/App.tsx`:

```tsx
<ThemeProvider defaultTheme="dark">
```

To start in light mode, change it to:

```tsx
<ThemeProvider defaultTheme="light">
```

Users can still switch between light and dark mode using the button in the navigation bar.

## Changing the Profile Image

Open:

```text
client/src/components/Hero.tsx
```

Find the `profileImage` constant:

```tsx
const profileImage = 'YOUR_IMAGE_URL';
```

Replace the value with the URL of the new image. A square image works best, such as a 1000 x 1000 pixel JPG, PNG, or WebP image.

## Common Problems

### `pnpm: command not found`

Install pnpm globally:

```bash
npm install --global pnpm
```

### `node: command not found`

Install Node.js from the official Node.js website, then restart your terminal and verify the installation:

```bash
node --version
```

### Port 3000 is already in use

Stop the other development server using `Ctrl + C`, or start Vite on another port:

```bash
pnpm run dev -- --port 3001
```

Then open:

```text
http://localhost:3001
```

### The browser shows an old version

Try a hard refresh:

- Windows/Linux: `Ctrl + Shift + R`
- macOS: `Cmd + Shift + R`

If the issue continues, stop the development server, run `pnpm install`, and start it again with `pnpm run dev`.

### Build errors after changing dependencies

Remove the installed dependencies and lockfile, then reinstall:

```bash
rm -rf node_modules
npm install
npm run build
```

Only remove `pnpm-lock.yaml` if you understand that it may update dependency versions.

## Summary of Commands

```bash
# Open the project
cd /home/ubuntu/john-paul-gamo-portfolio

# Install dependencies
npm install

# Start development mode
npm run dev

# Create a production build
npm run build

# Preview the production build
npm run preview
```