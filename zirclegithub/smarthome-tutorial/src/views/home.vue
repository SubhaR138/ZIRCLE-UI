<!--This is the initial view of our app-->
<template>
<!--always we need to define z-view as the main comp-->
  <z-view>
    <!--iframe is an inline frame used to embed another document with the current html doc
      accelerometer is used in mobile phoneds to determine the phone's orientation
      gyroscope adds the additional dimension to the information supplied by the accelerometer-->
 <img src="tf.jpg" alt="Tensorflow" height="412" width="407">
    <div slot="extension">
      <!--we use slot.extension in this we can put several z-spots-->
      <!-- status monitor -->
      <div class="style1">
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
      <z-spot :angle="-30"
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
        to-view="scenes"
        >
        <i class="fa fa-hourglass-2"></i>
         4
      </z-spot>
      <!-- rooms-->
      <z-spot :angle="30"
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
      <!--achievements-->
       <z-spot
        :angle="-60"
        size="s"
        :distance="120"
        label="achievements"
        label-pos="right"
        to-view="acheievements">
     <i class="fa fa-trophy"></i>
      </z-spot>
      <z-spot class="circle" size="s" :angle="-65" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ' :distance="150"></z-spot>
      <z-spot class="circle" size="s" :angle="-130" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ' :distance="165"></z-spot>
      <z-spot class="circle" size="s" :angle="169" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ' :distance="150"></z-spot>
      <z-spot class="circle" size="s" :angle="33" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ' :distance="155"></z-spot>
      <z-spot class="circle" size="s" :angle="-47" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ' :distance="180"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white ' size=xs :distance="185" :angle="160"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white ' size=s :distance="130" :angle="-110"> </z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white ' size=s :distance="150" :angle="84"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white ' size=xs :distance="148" :angle="10"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white' size=xs :distance=160 :angle="110"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 1px;  border-color:white' size=xxs :distance=148 :angle="54"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 1px;  border-color:white' size=xxs :distance=122 :angle="113"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 1px;  border-color:white' size=xxs :distance=132 :angle="200"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 1px;  border-color:white' size=xxs :distance=132 :angle="-82"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white' size=xs :distance=190 :angle="-160"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white' size=xs :distance=190 :angle="130"></z-spot>
      </div>
    </div>
  </z-view>
</template>
<style>
.style1{
  font-family: snap ITC;
  }

</style>
