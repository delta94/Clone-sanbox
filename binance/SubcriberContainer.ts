
export class Container<T> {
    data: T;
    subscribers: Set<(data: T) => void>;
    hook: (data: T) => void;

    constructor(hook: (data: T) => void) {
        this.hook = hook;
        this.subscribers = new Set();
    }

    notify(): void {
        for (const subscriber of this.subscribers) {
            try {
                subscriber(this.data);
            } catch (error) {
                console.error('Error notifying subscriber:', error);
            }
        }
    }
}
