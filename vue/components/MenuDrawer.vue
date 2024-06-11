<template>
  <div>
    <v-navigation-drawer
      v-model="localDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="localRightDrawer" :right="true" temporary fixed>
      <v-list>
        <v-list-item @click.native="toggleRightDrawer">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
    miniVariant: {
      type: Boolean,
      required: true,
    },
    clipped: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    rightDrawer: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    localDrawer: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('update:drawer', value);
      },
    },
    localRightDrawer: {
      get() {
        return this.rightDrawer;
      },
      set(value) {
        this.$emit('update:rightDrawer', value);
      },
    },
  },
  methods: {
    toggleRightDrawer() {
      this.localRightDrawer = !this.localRightDrawer;
    },
  },
}
</script>
