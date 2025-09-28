project setup steps

npm init -y
this will create package.json

npm init playwright@latest
this will create remaining folder structure and setup of playwright project

npx playwright --version
this will check the installed playwright version


npm install --save-dev @playwright/test typescript ts-node
npx playwright install

once installed all the commands check package.json has "type": "module" if not add it
if type is common.js then update it to module to get the latest things

============================================

npx means node package runner

project runnning commands
npx playwright test
npx playwright test --headed
npx playwright test foldername/filename --headed
npx playwright show-report
npx playwright codegen https://www.google.com

ctrl+c to quit the terminal
====================================================

Important notes

if we want to create test case files then we need to create spec.ts file instead of ts file

playwright.config.ts file settings only pic when we run through npx playwright test in terminal

if you run only in run icon left of test name like in intellij in particular file then it will not pic playwright.config.ts settings instead it just run through chromium

similarly IIFE doen't depend on playwight config file.. it just like normal ts file

package.json similar to pom.xml file we will add the dependencies here and installed dependencies stored here
package-lock.json file lock the dependency version which is there in package.json file and same versions used for the current project


=================================
very useful feature

npx playwright test filename --ui

=================================

trace settings in playwright.config.ts

"off' (default): No trace recorded.
'on': Records traces for all tests but doesn’t auto-zip. You must run `npx playwright show-trace` to view.
'retain-on-failure' : Records traces only on test failures and automatically saves `.zip`.
'on-first-retry' : Records trace only when the test fails the first time and is retried. "

1) trace files will be captured on Playwright-report folder and test-results folder as well 
2) trace files also attached into html report 
3) every execution trace files will be overriden to latest

we can view the trace by executing command npx playwright show-trace and then by uploading here
don't use https://trace.playwright.dev/
=====================================


doutes
1) if we running IIFE function through code runner i'm getting this below error
ts-node' is not recognized as an internal or external command,
operable program or batch file.

2) green icon in particular test before test not getting for me
ans: install playwright test runner (sakamoto66)(Run Debug Inspect) and playwright test for vs code (Run green icon before test) extension to enable it
but runs by default in headless

3) parallel execution not properly happening in my system

4) not able to pass the chrome and edge from the terminals --project=chrome and msedge


======================================================

screen reader plugin for accessibility testing that speak sound and tell to blind user
aria-required= true attribute is there then dev team implemented for accessibility testing
for blind users
also keyboard navigation like tab to move from one element to next element.. shift tab reverse

=========================
