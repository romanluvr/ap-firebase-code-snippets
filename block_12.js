:i
async mounted() {
    try {
        this.interactiveSessionUnsubscribe = await this.subscribeToInteractiveSessionChanges();
    } catch (error) {
        throw new NestedError('Failed to subscribe to Firebase', error);
    }
}
