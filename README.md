Reproduction for an issue with Eleventy when using the programmatic API.

## Steps to reproduce

1. `npm install`
2. `npx vitest` and see that the test fails
3. Go to `tests/fixtures/minimal/.eleventy.js` and toggle the `input` configuration line
4. Run `npx vitest` again and see that the test passes