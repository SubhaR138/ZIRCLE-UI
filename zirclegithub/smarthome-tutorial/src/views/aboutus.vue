<template>
<z-view size=xxl style="background-color: black; border-width: 7px">
WhiteLake Technology Solutions is an ISO 9001:2008 certified private owned company 
<div v-if="activePage" style="position: absolute; left: 0; bottom: 0; z-index: 90;font-weight: 300; padding-top: 10px;padding-bottom: 50px;background-color: var(--shade-color); color: var(--accent-color); margin: 0; height: 20%; width: 100%;">
<h6 class="fa fa-phone">+91-4652-230776</h6>
<br>
<h6 class="fa fa-envelope">info@whitelake.in</h6>
</div>
    <div slot="extension">
        <z-spot size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="Our details" :distance="120" :angle="135" to-view="services">
            <i class="fa fa-info-circle"></i>
        </z-spot>
        <z-spot button class="butt2" size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="other services" :distance="120" :angle="45" @click.native="toLink('https://www.whitelake.in/')">
            <i class="fa fa-briefcase"></i>
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

<style>

.label {
    font-weight: 500;
    position: absolute;
    top: 32%;
    display: flex;
    align-items: bottom;
    justify-content: center;
    left: 0;
    padding-top: 30px;
    margin-left: 10%;
    word-break: break-word;
    width: 80%;
    height: 40%;
    font-size: calc(10px + 0.8vw);
    overflow: hidden;
    max-lines: 3
}

.super-label {
    font-weight: 700;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    padding: 10px;
    padding-top: 30%;
    margin-left: 10%;
    word-break: break-all;
    width: 80%;
    height: 30%;
    font-size: calc(15px + 0.8vw);
}

.icons {
    font-size: calc(1vw + 1.2vh + 1.2vmin);
}

</style>
