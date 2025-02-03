# CrowsNest Frontend

CrowsNest Frontend Application

## Table of Contents

1. [Tutorials](#tutorials)  
   - [Getting Started](#getting-started)  
2. [How-To Guides](#how-to-guides)  
   - [Running Storybook in the Project](#running-storybook-in-the-project)
3. [Reference](#reference)  
   - [Project Structure](#project-structure)  
   - [Scripts](#scripts)
---

## 1. Tutorials

### Getting Started

Follow these steps to set up the project and get started:

#### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 22 or higher  
- **npm**: A package manager  

Verify by running:
```bash
node -v
npm -v
```

#### Steps
##### 1) Clone repository:
```
git clone https://github.com/crowsnest-security/crowsnest-frontend.git
```
##### 2) Navigate to the project directory:
```
cd crowsnest-frontend
```
##### 3) Install dependencies:
```
npm install
```
###### 3.1) Launch from a branch different from main

 Before installing dependencies you should checkout to specific branch with command
```
 git switch [YOUR_BRANCH_NAME]
```
##### 4) Setup and run local backend instance:
###### 4.1) Download backend image
```
    docker pull quay.io/ablock/crowsnest-backend:latest
```
###### 4.2) Run downloaded image with docker 
```
    docker run -p 8080:8080 quay.io/ablock/crowsnest-backend:latest
```
##### 5) Start the local CORS proxy in the separate terminal tab:
```
    npm run start:cors-proxy
```
##### 6) Start the development server:
```
npm run dev
```
##### 7) Open your browser and navigate to:
Open your browser and navigate to: [CrowsNest frontend](http://localhost:5173).

## 2. How-To Guides

### Running Storybook in the Project

#### Steps to Run Storybook

##### 1) Install Dependencies:
   Ensure all required dependencies for the project, including Storybook, are installed. Run:  
   ```
   npm install
   ```
##### 2) Start the Storybook Server:
Use the following command to start the Storybook development server:
```
npm run storybook
```
##### 3) Start the Storybook Server:
Once the server starts, Storybook will typically open automatically in your default browser at:
[Storybook URL](http://localhost:6006)

#### What You Will See on the Storybook Page
##### 1) Stories Panel (Left Sidebar):
* This panel lists all the available components (stories) in your project.
* Stories are grouped by components as defined in the src/  directory with name of file like **/*.stories.tsx .

Example structure:

* Button
* Header
    * Header (main for logged users)
    * Header login (for unauthorized users)
* Text field
    * Text Field (plain text field)
    * Text Field with search (user in case of input in Header component)
* Typography (all available variants of typographies)
##### 2) Canvas (Main View):
* The canvas displays the currently selected story.
* You can interact with the rendered component in real-time.
* Props passed to the component are shown in action.

## 3. Reference

### Project Structure
The project is organized as follows:

```
crowsnest-frontend/
    ├── .github/               # Github Actions setup .yml file
    ├── .storybook/            # Storybook setup file including addons, decorators, etc.
    ├── src/                   # Application source code
    │   ├── assets/            # Images, SVG files
    │   ├── components/        # Reusable React components, most common and used everywhere in project
    │   ├── constants/         # Constant values for global project usage
    │   ├── fields/            # Components with react-hook-form integration
    │   ├── forms/             # Form comonents (react-hook-form)
    │   ├── hooks/             # Custom React hooks
    │   ├── pages/             # Page components, could contain page-specific components in /components/ folder
    │   ├── providers/         # Context API logic with Provider components
    │   ├── tests/             # Directory for storing all project unit tests
    │   ├── theme/             # Mui theme related files
    │   ├── translations/      # json files for translations with i18n
    │   ├── App.tsx            # Root application component
    │   ├── main.tsx           # Entry point for React
    │   ├── vite-env.d.ts      # Vite TypeScript definitions
    ├── .env.example           # Environment variables file
    ├── .gitignore             # Config for files that shouldn't be staged in git 
    ├── .prettierrc            # Prettier configuration
    ├── .eslint.config.js      # ESLint configuration
    ├── index.html             # Entrypoint of application
    ├── package.json           # Project metadata, scripts, dependencies lists
    ├── package-lock.json      # Auto-generated file created by npm, shouldn't be updated manually
    ├── tsconfig.json          # TypeScript configuration
    ├── vite.config.ts         # Vite configuration
    └── README.md              # Project documentation

```

### Scripts


| Script                    | Description                       
| --------------------------|:------------------------------  
| npm run dev               | Starts the development server  
| npm run build             | Builds the app for production
| npm run lint              | Runs ESLint to check for linting issues
| npm run preview           | Preview the production build of your project locally 
| npm run storybook         | Start the Storybook development server
| npm run build-storybook   | Generates a static version of Storybook
| npm run test              | Running all unit tests
