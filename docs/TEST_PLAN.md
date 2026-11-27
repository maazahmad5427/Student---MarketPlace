# CampusLoop Test Plan

| ID | Test | Expected result |
|---|---|---|
| TC01 | Sign in as Maaz | Maaz's student workspace appears |
| TC02 | Sign in as Abeerah | Abeerah's personal listings and incoming approvals appear |
| TC03 | Sign in as admin | Administrator workspace appears |
| TC04 | Invalid credentials | Sign-in is rejected |
| TC05 | Search listings | Matching available listings appear |
| TC06 | Filter by category | Only matching available listings appear |
| TC07 | Save an item | Item appears in the signed-in user's saved list |
| TC08 | Submit a listing | Listing enters Pending Review |
| TC09 | Enter zero/negative price | Listing validation rejects it |
| TC10 | Request own listing | Request is rejected |
| TC11 | Request another student's listing | Pending request appears for buyer and seller |
| TC12 | Seller approves request | Request becomes Approved and item becomes Reserved |
| TC13 | Seller declines request | Buyer sees Declined status |
| TC14 | Competing requests | Other pending requests are declined after approval |
| TC15 | Complete approved exchange | Request becomes Completed and listing becomes Sold |
| TC16 | Admin approves listing | Listing becomes Available |
| TC17 | Admin rejects listing | Listing becomes Rejected |
| TC18 | Profile separation | Each student sees only their own account-related records |
| TC19 | Logout | Protected student portal is no longer shown |

Automated test execution details are recorded in TEST_EXECUTION.md. The front-end prototype uses Local Storage; do not use real passwords or sensitive student data.
