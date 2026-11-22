# Architecture and Design Notes

## Architecture style
The coursework build uses a three-tier client-side architecture. The presentation tier is semantic HTML and external CSS. The logic tier is JavaScript event handling and marketplace services. The data tier is browser Local Storage containing JSON records. This keeps the demonstration easy to run and matches the project brief's example of HTML/CSS, JavaScript and Local Storage/JSON. It is a prototype: Local Storage is device-local and does not provide real multi-user synchronization, secure authentication or server-side authorization.

## Main modules
- Authentication: demo sign-in and active session.
- Listing catalogue: create, search and filter available items.
- Reservation service: prevent self-reservation, create pending requests, accept/decline, cancel and complete.
- Messaging and notifications: private conversation participants and event notifications (planned extension to the base demo).
- Moderation: report review, listing removal and account restrictions (planned extension to the base demo).
- Persistence: JSON serialization to Local Storage.

## Data model
Student(id, institutionalEmail, displayName, verified, active, role)
Listing(id, ownerId, title, description, category, condition, askingPricePKR, pickupArea, status)
Reservation(id, listingId, buyerId, sellerId, status, agreedPricePKR)
Conversation(id, listingId, buyerId, sellerId)
Message(id, conversationId, senderId, text, sentAt)
Report(id, listingId, reporterId, reason, decision, decisionReason)
Audit(id, actorId, action, targetId, timestamp)

The original Assignment 4 SRS is the authoritative source for detailed fields, constraints, priorities and business rules.
