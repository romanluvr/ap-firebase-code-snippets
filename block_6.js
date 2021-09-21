const admin = require("firebase-admin");

const generateFirebaseToken = async function (context) {
        const uid = `${context.clientKey}:${context.userAccountId}`;
        return admin.auth().createCustomToken(uid, {
            userAccountId: context.userAccountId,
            jiraKey: context.clientKey,
        });
    }
app.get("/index", addon.authenticate(), async function (req, res) {
   const firebaseToken = generateFirebaseToken(req.context);
   res.render('index', {
       // ...
       firebaseUrl: process.env.FIREBASE_URL,
       firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
       firebaseApiKey: process.env.FIREBASE_API_KEY,
       firebaseToken,
       // ...
   });
});
