import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

async function handleRequest(event) {
    try {
        return await getAssetFromKV(event);
    } catch (e) {
        return new Response('Error: ' + e.message, { status: 500 });
    }
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event));
});
