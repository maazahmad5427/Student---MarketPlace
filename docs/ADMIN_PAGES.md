# Administrator Pages

The admin navigation now links to real standalone pages:

- admin/dashboard.html
- admin/approvals.html
- admin/reports.html
- admin/users.html

All pages load css/admin.css and js/admin.js. They read and update the same `campusloop_oceanic_v2` Local Storage record as the public website. An authenticated administrator session is required. If there is no admin session, the browser is redirected to the main site's login hash.

Admin navigation uses ordinary HTML links so the pages can be opened directly, bookmarked and refreshed. Listing approval/rejection, report resolution/dismissal and student account suspension/reactivation persist in Local Storage and create audit entries.

This remains a single-browser coursework demo. Local Storage and client-side role checks are not production security or a shared multi-user backend.
