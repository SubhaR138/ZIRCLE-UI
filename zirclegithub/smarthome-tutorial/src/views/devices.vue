<template>
 <z-view>
    <section slot="extension">
      <z-list
        :items="rooms"
        :per-page="3">
          <z-spot
            :distance="60"
            slot-scope="props"
            :index="props.index"
            :to-view="props.name"
            :label="props.name"
            label-pos="bottom">
            
          </z-spot>
      </z-list>
    </section>
</z-view>
</template>
<script>
export default {
  data () {
    return {
      rooms: [
        { name: 'Face-recognition', devices: 6},
        { name: 'Tensorflow', devices: 2, status: 'alert' },
        { name: 'Future-projects', devices: 5 },
        { name: 'NAASCOM member', devices: 1 }
      ],
      openDialog: false
    }
  }
}
</script>
