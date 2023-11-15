type Handler<A extends any[] = unknown[]> = (...args: A) => void;
type MarInterface<P> = P[keyof  P];

export class EventBus<
    E extends Record<string, string> = Record<string, string>,
    Args extends  Record<MarInterface<E>, any[]> = Record<string, any[]>
> {
    private readonly listeners: {
        [K in MarInterface<E>]?: Handler<Args[K]>[]
    } = {};
    
    on<Event extends MarInterface<E>>(event: Event, callback: Handler<Args[Event]>) {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }
        
        this.listeners[event]?.push(callback)
    }
    
    off<Event extends MarInterface<E>>(event: Event, callback: Handler<Args[Event]>) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        
        this.listeners[event] = this.listeners[event]?.filter(
            listener => listener !== callback
        );
    }
    
    emit<Event extends MarInterface<E>>(event: Event, ...args: Args[Event]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        
        this.listeners[event]?.forEach(function(listener) {
            listener(...args);
        });
    }
}

