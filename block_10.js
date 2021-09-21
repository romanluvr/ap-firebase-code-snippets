export async function onSessionPropertyChange(boardId, sessionId, path, onChange) {
    const ref = await sessionChild(boardId, sessionId, path);
    const listener = ref.on('value', snapshot => {
        const value = snapshot.val();
        onChange(value);
    });
    return () => ref.off('value', listener);
}
