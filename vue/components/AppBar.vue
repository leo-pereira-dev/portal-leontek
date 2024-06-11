<template>
  <v-app-bar :clipped-left="clipped" fixed app class="custom-app-bar" style="height: 70px">
    <v-app-bar-nav-icon @click.stop="$emit('toggle-drawer')" />
    <v-btn icon @click.stop="$emit('toggle-mini-variant')">
      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>

    <img src="../static/logo.png" wid style="width: 90px; margin: 5px;" ></img>

    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <v-btn icon @click.stop="$emit('toggle-right-drawer')">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    clipped: Boolean,
    miniVariant: Boolean,
    title: String,
  },
}
</script>

<style scoped>
.custom-app-bar {
  border-bottom: solid 1px grey;
}

</style>
