
<template>
<z-view label="Leaflet | OpenStreetMap | CartoDB" ref="map">
    <div slot="media" :id="$zircle.getCurrentViewName()" style="height:100%; width: 100%;">
    </div>
    <section slot="extension">
       <z-spot button
        :angle="-90"
        size="s"
        :style="active === 0 ? 'border-color: purple; color: purple;' : ''"
        label="Whitelake Technology"
        label-pos="top"
        @click.native="showMe(0, 'purple')">
        <i class="fas fa-building"></i>
      </z-spot>
      <z-spot button
        :angle="30"
        size="s"
        label="Nagercoil busstand"
        :style="active === 1 ? 'border-color: green; color: green;' : ''"
        @click.native="showMe(1, 'green')">
        <i class="fas fa-bus"></i>
      </z-spot>
      <z-spot button
        :angle="150"
        size="s"
        label="Railway station"
        :style="active === 2 ? 'border-color: orange; color: orange;' : ''"
        @click.native="showMe(2, 'orange')">
        <i class="fas fa-train"></i>
      </z-spot>
    </section>
  </z-view>
</template>
<script>
/*eslint-disable*/
import L from 'leaflet'
export default {
  data () {
    return {
      map : null,
      markers: [],
      active: ''
    }
  },
  methods: {
    initMap () {
      this.map = L.map(this.$zircle.getCurrentViewName(), {attributionControl: false, zoomControl: false}).setView([8.181864, 77.4306441], 16)
      L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        { 
          zoom: 18
        }).addTo(this.map)
      this.markers.push(
        L.marker([8.181872, 77.430860]).bindPopup("located at nagercoil").addTo(this.map),
        L.marker([8.1816, 77.4341]).bindPopup("1km from WLTS.").addTo(this.map).openPopup(),
        L.marker([8.1746, 77.4439]).bindPopup("3kms from WLTS").addTo(this.map)
      )
      this.active = 1
      this.showMe(1, 'green')
    },
    showMe (index, color) {
      this.map.flyTo(this.markers[index].getLatLng())
      this.markers[index].openPopup()
      this.active = index
      this.$refs.map.$el.style.borderColor = color
    }
    
  },
  mounted () {
    this.initMap();
    tis.initMarkers();
  }
}
</script>
<style>
  @import url('https://unpkg.com/leaflet@1.3.1/dist/leaflet.css');
</style>

