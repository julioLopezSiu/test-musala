# test-musala
Automated tests for Musala Soft  website.

# Requirements
Node JS: This project requires a node.js version that is 14 or above.

# Installation
1. Get the project.
  You can clone it (`git clone https://github.com/julioLopezSiu/test-musala.git`) or download it (`https://github.com/julioLopezSiu/test-musala/archive/refs/heads/main.zip`)

2. Go to `test-musala` folder and open terminal.

3. run command `npm install`.

4. run command `npx playwright install`.

**Note**: Sometimes it is necessary to install other dependencies with the `apt-get install libenchant1c2a` command. In any case, the tool will report if necessary.

# How to run the tests
To run the tests use the following commands depending on how you want to run the tests.

**Runs the tests on Desktop Chrome**

In parallel:          `npx playwright test --project=chromium --headed`

In order:             `npx playwright test --project=chromium --headed --workers=1`

Headless in parallel:    `npx playwright test --project=chromium`

Headless in order:    `npx playwright test --project=chromium --workers=1`

**Runs the tests on Desktop Firefox**

In parallel:        `npx playwright test --project=firefox --headed`

In order:           `npx playwright test --project=firefox --headed --workers=1`

Headless in parallel:  `npx playwright test --project=firefox`

Headless in order:  `npx playwright test --project=firefox --workers=1`

**Runs the tests on Desktop Safari**
In parallel:        `npx playwright test --project=webkit --headed`

In order:           `npx playwright test --project=webkit --headed --workers=1`

Headless in parallel:  `npx playwright test --project=webkit`

Headless in order:  `npx playwright test --project=webkit --workers=1`

# HTML report
At the end of the execution, an HTML report is generated into the `playwright-report` folder.