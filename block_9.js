async function sessionChild(boardId, sessionId) {
    const { jiraKey } = await auth();
    return db.ref(`jira/${jiraKey}/board/${boardId}/sessions/${sessionId}`);
}
