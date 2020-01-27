<template>
  <z-view
  style="border-width: 8px"
  slider
  :progress="progress">
    <span style="color: var(--accent-text-color)">Services
     
    </span>
    <img slot="image" src="serv.png" width="100%" height="100%" style="opacity: 0.3">
    <div slot="extension">
      <z-spot size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="How we do?" :distance="120" :angle="135" @click.native="toLink('https://www.whitelake.in/How-we-do/')">
          <h6>How we do</h6>
        </z-spot>
        <z-spot button class="butt2" size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="Who we are?" :distance="120" :angle="45" @click.native="toLink('https://www.whitelake.in/who-we-are/')">
           <h6>Who we are</h6>
        </z-spot>
    </div>
     
     
  </z-view>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: {},
      activePage: true,
    }
  },
  methods: {
    toLink (url) {
      return window.open(url, '_blank')
    },
  
  }
}
</script>
