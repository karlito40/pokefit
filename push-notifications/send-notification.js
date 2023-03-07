require("dotenv").config();

const assert = require("assert");
const admin = require("firebase-admin");
const { getMessaging } = require("firebase-admin/messaging");
const serviceAccount = require("./firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

assert(process.env.FCM_TOKEN_TEST, "No FCM token found");
const FCM_TOKEN = process.env.FCM_TOKEN_TEST;
console.log("FCM_TOKEN", FCM_TOKEN);
const message = {
  notification: {
    title: "awesome title 3",
    body: "awesome body 3",
  },
  data: {
    challengeId: "13a",
  },
  token: FCM_TOKEN,
};

// Send a message to the device corresponding to the provided
// registration token.
getMessaging()
  .send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });
