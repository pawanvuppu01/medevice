type Subscriber = (data: any) => void;

const subscribers = new Set<Subscriber>();

export function publishEvent(data: any) {
  for (const sub of subscribers) {
    try {
      sub(data);
    } catch (err) {
      // ignore
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
