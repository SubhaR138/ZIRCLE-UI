<!--This is the initial view of our app-->
<template>
<!--always we need to define z-view as the main comp-->
  <z-view>
    <!--iframe is an inline frame used to embed another document with the current html doc
      accelerometer is used in mobile phoneds to determine the phone's orientation
      gyroscope adds the additional dimension to the information supplied by the accelerometer-->
 <iframe slot="media" width="600" height="300" src="https://www.youtube.com/embed/oZikw5k_2FM" frameborder="10" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div slot="extension">
      <!--we use slot.extension in this we can put several z-spots-->
      <!-- status monitor -->
      <z-spot
        style="background-color: green; border-width: 4px; border-color: var(--background-color);"
        :angle="-145"
        size="m"
        :distance="120"
        to-view="status">
        <!--toiView prop allow us to go to another view-->
        <i style="color: var( --accent-text-color)" class="fas fa-bell"></i><br>
        <span style="color: var( --accent-text-color)">15</span>
      </z-spot>
      <!-- location-->
      <z-spot
        :angle="-30"
        size="s"
        :distance="120"
        label="location"
        label-pos="right"
        to-view="location">
        <i class="fas fa-map-marker-alt"></i>
      </z-spot>
      <!-- scenes-->
      <z-spot
        :angle="0"
        size="s"
        :distance="120"
        label="ClientCountryTimings"
        label-pos="right"
        to-view="scenes">
        4
      </z-spot>
      <!-- rooms-->
      <z-spot
        :angle="30"
        size="s"
        :distance="120"
        label="OfficeInterior"
        label-pos="right"
        to-view="rooms">
        5
      </z-spot>
      <!-- devices-->
      <z-spot
        :angle="60"
        :distance="120"
        size="s"
        label="Devices"
        label-pos="right"
        to-view="devices">
        45
      </z-spot>
      <!-- settings-->
      <z-spot
        :angle="150"
        :distance="120"
        size="s"
        label="Settings"
        to-view="settings">
        <i class="fas fa-cog fa-spin"></i>
      </z-spot>
    </div>
  </z-view>
</template>
