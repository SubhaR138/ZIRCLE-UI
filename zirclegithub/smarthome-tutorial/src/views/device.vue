<template>
  <z-view
  style="border-width: 8px"
  slider
  :progress="progress">
    <span style="color: var(--accent-text-color)">Face-reg
</span>
    <img slot="image" src="facenet.jpg" width="100%" height="100%" style="opacity: 0.3">
    <div slot="extension">
      <z-spot size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="Facenet?" :distance="120" :angle="135" @click.native="toLink('https://en.wikipedia.org/wiki/Facial_recognition_system')">
          <h6>How we do?</h6>
        </z-spot>
        <z-spot button class="butt2" size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="What we did" :distance="120" :angle="45" @click.native="toLink('https://youtu.be/on3Ai6vp_xI?t=1')">
           <h6>What we did?</h6>
        </z-spot>
    </div>
 </z-view>
</template>
<script>
export default {
  data () {
    return {
      info: {},
      activePage: true
    }
  },
  methods: {
    toLink (url) {
      return window.open(url, '_blank')
    }
  }
}
</script>
