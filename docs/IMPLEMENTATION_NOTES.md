# Implementation Notes

## Delivered prototype
The website provides public listing discovery, student account access, student buying and selling activity, personal profiles, seller approval tasks and an administrator listing review area.

## Role rules represented in the demo
- Student accounts can both buy and sell.
- Profile listing counts are filtered by the signed-in student's account ID.
- Buyer request lists are filtered by the buyer account; seller approval queues are filtered by the listing owner/seller account.
- A student cannot request their own item.
- Only the seller associated with a request can approve or decline it.
- Approving a request reserves the listing and declines other pending requests for that same listing.
- Approved exchanges can be marked complete, changing the listing to Sold.
- Listing moderation is reserved for the administrator portal.

## Data and security boundary
Browser Local Storage is local to one browser. It is not a shared multi-user database and is not secure authentication or server-side authorization. Demo credentials are for coursework demonstration only.

## SRS preservation
No Assignment 4 SRS file was present in the repository tree at implementation time. Existing documentation was preserved; no replacement SRS was authored.
