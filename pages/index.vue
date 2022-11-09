<script setup lang="ts">
onMounted(() => {
  if (process.server)
    return

  console.log('hello')

  const url
    = globalThis.location.protocol === 'https:'
      ? `wss://${globalThis.location.host}/api/v2/websocket/public`
      : `ws://${globalThis.location.host}/api/v2/websocket/public`

  console.log(url)

  const socket = new WebSocket(url)
})
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
