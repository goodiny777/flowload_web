# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript application called "flowload_web" bootstrapped with Create React App. It uses React 19.1.0 with TypeScript 4.9.5 and includes Tailwind CSS for styling.

## Common Development Commands

### Running the Development Server
```bash
npm start
```
Runs the app in development mode at http://localhost:3000

### Running Tests
```bash
npm test
```
Launches the test runner in interactive watch mode using Jest and React Testing Library

### Building for Production
```bash
npm run build
```
Creates an optimized production build in the `build` folder

## Project Architecture

- **Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Styling**: Tailwind CSS 4.1.10
- **Testing**: Jest with React Testing Library
- **Type Checking**: TypeScript with strict mode enabled

The main application entry point is `src/index.tsx` which renders the App component from `src/App.tsx`. The App component includes Google Analytics integration and uses custom SVG icon components.

## TypeScript Configuration

The project uses strict TypeScript settings with:
- Target: ES5
- JSX: react-jsx
- Module: ESNext
- Strict mode enabled
- All files in the `src` directory are included in compilation