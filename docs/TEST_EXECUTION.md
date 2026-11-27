# Test Execution

The committed repository test suite is a lightweight Node.js static smoke test for the single-file coursework prototype.

Run: `npm test`

It checks that the committed page contains the Oceanic Luxe palette, public discovery, student buyer/seller profile areas, administrator navigation, core reservation rules, demo accounts and responsive CSS.

A separate local service-layer test run during development reported 12 passing tests, but those temporary service-module tests are not part of this single-file commit. No full browser end-to-end run is claimed; perform the manual checks in TEST_PLAN.md in Chrome or Edge before submission.
