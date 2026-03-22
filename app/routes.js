//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here
router.get("/case-details/:id", function (req, res) {
  // 1. Get the ID from the URL (e.g., the '0' in /case-details/0)
  const personId = req.params.id;

  // 2. Fetch that specific person from your session data
  const person = req.session.data["cases"][personId];

  // 3. Send that person's data to the new page
  res.render("case-details.html", {
    person: person,
  });
});
