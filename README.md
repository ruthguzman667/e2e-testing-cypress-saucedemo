#E2E Test Automation - Cypress | Saucedemo

##Project Overview
End-to-end test automation project built with Cypress to validate critical user flows in the SauceDemo e-commerce application.

This project follows a real-world QA automation workflow, including:

- Test case design
- Reusable custom commands
- CI/CD pipeline integration
- Scalable test structure
  
##Automated Test Scenarios

Business-critical flows covered:

- ✅Login - Valid Credentials
- ✅Login - Invalid Credentials (Negative Testing)
- ✅Add Product to Cart
- ✅Remove product from Cart
- ✅Checkout Process
- ✅Product Sorting Validation
- ✅Product Filtering Validation
- ✅Logout Flow
- ✅Protected Route Access Validation

##Tech Stack

|Technology   |Purpose     |
|------------|--------|
|Cypress      |E2E Test Automation|
|JavaScript   |Test Development  |
|Node.js     | Runtime Environment|
|GitHub Actions | CI/CD Pipeline  |
|Git/Github    |Version Control   |

##Project Structure

```
└── 📁e2e-testing-cypress-saucedemo
    └── 📁.github
        └── 📁workflows
            ├── cypress-tests.yml
    └── 📁cypress
        └── 📁e2e
            ├── addToCart.cy.js
            ├── checkout.cy.js
            ├── filterProducts.cy.js
            ├── login.cy.js
            ├── logout.cy.js
            ├── negativeLogin.cy.js
            ├── protectedRoute.cy.js
            ├── removeFromCart.cy.js
            ├── sortProducts.cy.js
        └── 📁fixtures
            ├── example.json
        └── 📁screenshots
        └── 📁support
            ├── commands.js
            ├── e2e.js
    ├── .gitignore
    ├── cypress.config.js
    ├── package-lock.json
    ├── package.json
    └── README.md
```

##Installation

* git clone https://github.com/ruthguzman667/e2e-testing-cypress-saucedemo

* cd e2e-testing-cypress-saucedemo

* npm install

##Runnig Tests
Headless Mode: npm test

Cypress UI Mode: npx cypress open
 

##CI/CD - GitHub Actions

Pipeline automatically runs on:

- Push to main
- Pull Requests

Pipeline Steps:

  + Setup Node.js
  + Install dependencies
  + Run Cypress tests 

##Test Execution Status
 - All tests locally
 - CI pipeline configured
 - Ready for real project environments

##QA Best Practices Applied
- Reusable Custom Commands
- Inpendent Test Cases
- Scalable Test Organization
- CI/CD Ready Setup
- Real User Flow Validation

##What This Project Demonstrates
- End-to-end test automation using Cypress
- Test case design base on real business scenarios
- CI/CD pipeline integration using GitHub Actions
- Implementation of reusable automation components(Custom Comands)
- Validation of critical user flows in an e-commerce application
- Simulation of a real QA automation workflow

##Author

Ruth Guzmán
QA Automation | Junior Software Developer

Skills
- JavaScript
- Cypress
- HTML
- CSS
- React(Learning/Pojects)
- Git/GitHub
- CI/CD Fundamentals








