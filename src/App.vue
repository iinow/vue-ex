<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    meta: [
      {
        vmid: 'parent vmid',
        property: 'parent property',
        content: 'parent content',
        template: chunk => `${chunk} - Page..`
      }
    ]
  }
}
</script>
