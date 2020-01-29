<template>
<z-view size=xxl style="background-color: black; border-width: 7px">
    <section slot="extension">
        <z-spot size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="face-recognition" :distance="50" :angle="-95" to-view="device">
           <img slot="image" src="face.jpg" width="100%" height="100%" style="opacity: 1">
        </z-spot>
        <z-spot button class="butt2" size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="Tensorflow" :distance="50" :angle="0" @click.native="toLink('https://youtu.be/LbIzWp8JliY')">
           <img slot="image" src="tflogo.png" width="100%" height="100%" style="opacity: 1">
        </z-spot>
        <z-spot button class="butt2" size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="NAASCOM member" :distance="50" :angle="95" @click.native="toLink('')">
            <i class="fa fa-briefcase"></i>
        </z-spot>
        <z-spot button class="butt2" size=s style="font-size: 25px;color: white; border-color:var(--shade-color);background-color: var(--shade-color);" label="Future projects" :distance="50" :angle="180" @click.native="toLink('')">
             <img slot="image" src="facenet.jpg" width="100%" height="100%" style="opacity: 1">
        </z-spot>
    </section>
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
.z-spot{
  border-color:rgb(207, 113, 5);
}

</style>
