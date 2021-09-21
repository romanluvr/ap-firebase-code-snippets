exports.archiveSession = functions.database.ref('jira/{jiraKey}/board/{boardId}/sessions/{sessionId}/archived')
    .onWrite(async (change, context) => {
      //move session logic
    });

