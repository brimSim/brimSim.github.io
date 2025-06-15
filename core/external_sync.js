// External Node Syncer
async function syncExternalNode(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('[sync] Pulled from', url, data);
    localStorage.setItem('external_sync_' + Date.now(), JSON.stringify(data));
  } catch (e) {
    console.warn('[sync] Failed to fetch from', url, e);
  }
}
