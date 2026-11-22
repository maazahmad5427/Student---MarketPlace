# Test Plan — CampusLoop

Actual Result and Status must be completed after executing each test on the final deployed build. The status below is deliberately marked Not Run rather than claiming unperformed tests passed.

| ID | Test case | Steps | Expected result | Actual result | Status |
|---|---|---|---|---|---|
| TC01 | Valid student login | Enter maaz@student.edu / student123 | Account session starts | To execute | Not Run |
| TC02 | Invalid login | Enter wrong password | Access is rejected with a clear message | To execute | Not Run |
| TC03 | Search listing | Search for “Clean Code” | Matching available item appears | To execute | Not Run |
| TC04 | Empty search result | Search for an impossible title | Empty-state message appears | To execute | Not Run |
| TC05 | Category filter | Select Electronics | Only available electronics appear | To execute | Not Run |
| TC06 | Create listing with positive price | Complete required listing fields and submit | Listing is saved as Available | To execute | Not Run |
| TC07 | Zero-price boundary | Submit price 0 | Validation rejects the listing | To execute | Not Run |
| TC08 | Required title boundary | Submit with blank title | Browser/form validation blocks submission | To execute | Not Run |
| TC09 | Self-reservation | Sign in as listing owner and request own item | Request is rejected | To execute | Not Run |
| TC10 | Reservation of unavailable item | Request an item already Reserved or Sold | Request is rejected | To execute | Not Run |
| TC11 | Positive price display | Open a listing | Price is displayed in PKR | To execute | Not Run |
| TC12 | Logout | Sign out from an active session | Session is cleared | To execute | Not Run |

## Black-box techniques
Equivalence partitions: valid/invalid email, valid/invalid credentials, positive/non-positive price, Available/non-Available listing state. Boundary values: blank title, zero price, minimum positive price and maximum allowed title/description length. Use-case testing: login → discover → details → request reservation.

## White-box techniques
Inspect and exercise both outcomes of authorization and availability decisions; verify the self-reservation guard; exercise search with zero, one and multiple matching records; exercise reservation-state transitions. Record branch/statement evidence from actual execution. Do not claim coverage percentages without a coverage tool and measured report.
