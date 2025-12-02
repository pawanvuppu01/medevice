import { describe, it, expect } from 'vitest';
import { publishEvent, subscribe } from '../lib/realtime';

describe('realtime pubsub', () => {
  it('should notify subscribers when publishing', (done) => {
    const unsubscribe = subscribe((data) => {
      try {
        expect(data).toBeDefined();
        expect(data.type).toBe('test-event');
        unsubscribe();
        done();
      } catch (err) {
        unsubscribe();
        done(err);
      }
    });

    publishEvent({ type: 'test-event', payload: { hello: 'world' } });
  });
});
