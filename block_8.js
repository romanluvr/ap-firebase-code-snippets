function getMetaParameterValue(name) {
    const metaNode = document.querySelector(`meta[name=${name}]`);
    return metaNode && metaNode.content;
}

const firebaseToken = getMetaParameterValue('ap-firebase-token');
const firebaseUrl = getMetaParameterValue('ap-firebase-url');
const firebaseApiKey = getMetaParameterValue('ap-firebase-api-key');
const firebaseProjectId = getMetaParameterValue('ap-firebase-project-id');

firebase.initializeApp({
    apiKey: firebaseApiKey,
    authDomain: `${firebaseProjectId}.firebaseapp.com`,
    databaseURL: firebaseUrl,
});
const db = firebase.database();

async function auth() {
    const userCredentials = await firebase.auth().signInWithCustomToken(firebaseToken);
    const tokenResult = await userCredentials.user.getIdTokenResult();
    return tokenResult.claims;
}
