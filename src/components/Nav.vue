<template>
  <div>
    <ul class="tabs">
      <li class="tab" v-for="(menu, index) in menus" :key="index">
        <a>{{menu}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      menus: [1, 2, 3]
    }
  }
}
</script>
<style>
.tabs {
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;
  padding-left: 50px;
  padding-right: 100px;
  border-bottom: 4px solid red;
  overflow: hidden;
  float: left;
}

.tabs li {
  float: left;
}

.tab {
  padding: 10px;
  font-size: 20px;
  border: 4px solid blue;
}
</style>
