<!--This is the initial view of our app-->
<template>
<!--always we need to define z-view as the main comp-->
  <z-view>
     ISO 9001:2008
    <br>
   company existing since 2002..
    <br>
   <br>
   Welcome to
    <br>
   WhiteLake Technology Solutions
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
        <i class="fas fa-sliders-h"></i>
      </z-spot>
    </div>
  </z-view>
</template>
