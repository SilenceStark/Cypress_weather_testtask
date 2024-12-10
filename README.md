# Cypress Project

This project uses **Cypress** for automated testing and integrates with **Allure** for detailed test reporting.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Allure Reports](#allure-reports)
- [Project Structure](#project-structure)

## Project Overview

This is a test automation suite built on **Cypress** for web application testing. It uses **Allure** to generate
detailed test reports after runs.

## Prerequisites

- **Node.js** (version 20+)
- **npm**
- **Docker** (optional, for running Cypress in containers)
- **Allure Commandline** (for generating reports)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:SilenceStark/Cypress_weather_testtask.git
   cd cypress-weather-testtask
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Locally

- **With Cypress UI**:
  ```bash
  npm run cy:open
  ```

- **Headless Mode (Background)**:
  ```bash
  npm run cy:run
  ```

## Allure Reports

After running tests, generate Allure reports using:

```bash
npm allure:generate
npm allure:open
```

## Project Structure

```plaintext
cypress/
├── e2e/                 # Test files
│   ├── weather.test.js  # Weather test suite
├── pages/               # Page Object Models
│   ├── homePage.js      
│   ├── cityPage.js      
│   ├── forecastPage.js  
├── support/             # Custom commands
│   ├── commands.js      
├── plugins/             # Cypress plugins
│   ├── index.js         
├── .github/             # CI/CD workflows
    └── workflows/
        └── cypress.yml  # GitHub Actions for Cypress tests
```