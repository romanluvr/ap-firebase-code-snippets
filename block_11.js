async subscribeToInteractiveSessionChanges({ rootGetters, dispatch, commit }) {
    const { boardId, sessionId, isFirstBatchOfIssuesLoaded } = rootGetters;
    const votedIssueIdChangeOff = await onSessionPropertyChange(boardId, sessionId, 'voting/issuedId' votedIssueId => {
            commit('setVotedIssueId', votedIssueId);
        }),
    ]);

    return () => {
        votedIssueIdChangeOff();
    }
},
