import { NextResponse } from 'next/server';
import { subscribe } from '../../../../lib/realtime';

export async function GET(req: Request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const push = (data: any) => {
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
        } catch (err) {
          // ignore
        }
      };

      const unsubscribe = subscribe(push);

      // send a welcome ping
      push({ type: 'connected', ts: Date.now() });

      const onAbort = () => {
        unsubscribe();
        controller.close();
      };

      // close when client disconnects
      // @ts-ignore - Request.signal exists in runtime
      req.signal?.addEventListener?.('abort', onAbort);
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  });
}
