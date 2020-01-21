<template>
  <z-view
  label="ClientCountryTimings"
  slider
  :progress="progress"
  :style="styleActive">
  <h1>{{activeScene}}</h1>
  <div style="height: 60px;">
    {{msg}}
  </div>
  <div slot="extension">
        <z-spot
          v-for="(el, index) in elements"
          button
          size="s"
          :distance="120"
          :angle="325 + (90 / elements.length * index)"
          :style="activeScene === el.scene ? styleActive : ''"
          :key="index"
          @click.native="showMe(el)">
          <i class="fas" :class="el.icon"></i>
        </z-spot>
    </div>
  </z-view>
</template>
<script>
export default {
  data () {
    return {
      activeScene: 'Night',
      color: 'blue',
      msg: '',
      progress: 0,
      elements: [
        { scene: 'India', color: 'orange', icon: 'fa-sun', msg: '6hrs91 mins lagging than aus,10hrs leading than US,6hrs leading than UK' },
        { scene: 'US', color: 'blue', icon: 'fa-moon', msg: '10hrs lagging than India' },
        { scene: 'UK', color: 'white', icon: 'fa-shield-alt', msg: '6hrs lagging than India' },
        { scene: 'Australia', color: 'green', icon: 'fa-tree', msg: '7hrs leading than India' }
      ]
    }
  },
  computed: {
    styleActive () {
      return {
        borderWidth: '8px',
        borderColor: this.color,
        color: this.color
      }
    }
  },
  methods: {
    showMe (el) {
      if (this.activeScene !== el.scene) {
        this.progress = 5
        this.activeScene = el.scene
        this.color = el.color
        this.msg = 'Activating devices...'
        var vm = this
        var id = setInterval(function () {
          if (vm.progress >= 100) {
            clearInterval(id)
            vm.progress = 0
            vm.msg = el.msg
          } else if (vm.progress === 40) {
            vm.msg = 'Applying rules...'
            vm.progress++
          } else {
            vm.progress++
          }
        }, 20)
      } else {
        this.msg = 'This scene is already activated'
      }
    }
  }
}
</script>
