<template>
  <fragment v-if="is">
    <div>
      Hi
    </div>
  </fragment>
  <fragment v-else>
    <div>
      Hello
    </div>
  </fragment>
</template>

<script>
/**
 * React 의 <> </> 구문과 같은 역할임
 */
export default {
  name: 'FragmentExample',
  data () {
    return {
      is: false
    }
  }
}
</script>
