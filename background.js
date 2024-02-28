// Define the button properties
let buttonProperties = {
  title: "Open Google Calendar",
  url: "https://calendar.google.com",
  // Specify the icon for the button
  defaultIcons: {
    "16": "icons/icon3.png",
    "32": "icons/icon3.png"
  }
};

// Add the button to the spaces toolbar
browser.spacesToolbar.addButton("googleCalendarButton", buttonProperties)
  .then(spaceId => {
    console.log(`Button added to space with ID: ${spaceId}`);
  }, error => {
    console.error(`Error adding button: ${error}`);
  });
