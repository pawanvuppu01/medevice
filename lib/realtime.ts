type Subscriber = (data: unknown) => void;

const subscribers = new Set<Subscriber>();

export function publishEvent(data: unknown) {
  for (const sub of subscribers) {
    try {
      sub(data);
    } catch {
      // ignore errors from subscribers
    }
  }
}

export function subscribe(sub: Subscriber) {
  subscribers.add(sub);
  return () => subscribers.delete(sub);
}

export function getSubscriberCount() {
  return subscribers.size;
}
