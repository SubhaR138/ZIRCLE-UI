<!--This is the initial view of our app-->
<template>
<!--always we need to define z-view as the main comp-->
  <z-view>
    <!--iframe is an inline frame used to embed another document with the current html doc
      accelerometer is used in mobile phoneds to determine the phone's orientation
      gyroscope adds the additional dimension to the information supplied by the accelerometer-->
 <img src="tf.jpg" alt="Tensorflow" height="410" width="410">
    <div slot="extension">
      <!--we use slot.extension in this we can put several z-spots-->
      <!-- status monitor -->
      <div class="style1">
      <z-spot
        style="background-color:orange; border-width: 4px; border-color: var(--background-color);"
        :angle="-145"
        size="m"
        :distance="120"
        to-view="status">
        <!--toiView prop allow us to go to another view-->
        <i style="color: var( --accent-text-color)" class="fas fa-bell"></i><br>
        <span style="color: var( --accent-text-color)">6</span>
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
        to-view="scenes">
       <i class="fas fa-clock"></i>
      </z-spot>
      <!-- rooms-->
      <z-spot :angle="30"
        size="s"
        :distance="120"
        label="OfficeInterior"
        label-pos="right"
        to-view="rooms">
      <i class="fas fa-building"></i>
      </z-spot>
      <!-- devices-->
      <z-spot
        :angle="-60"
        :distance="120"
        size="s"
        label="Achievements"
        label-pos="right"
        to-view="devices">
        <i class="fa fa-trophy"></i>
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
      <!--about us-->
      <z-spot
        :angle="-90"
        size="s"
        :distance="120"
        label="aboutus"
        label-pos="top"
        to-view="aboutus">
       <i class="fa fa-question"></i>
      </z-spot>
      <z-spot class="circle" size="xxs" :angle="-10" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ; ' :distance="150"></z-spot>
      <z-spot class="circle" size="xxs" :angle="-20" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ; ' :distance="150"></z-spot>
      <z-spot class="circle" size="xxs" :angle="-30" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ; ' :distance="150"></z-spot>
      <z-spot class="circle" size="xxs" :angle="-40" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ; ' :distance="150"></z-spot>
      <z-spot class="circle" size="xxs" :angle="-50" style=' background-color: var(--shade-color);border-width: 3px;  border-color:white ;' :distance="150"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance="150" :angle="-60"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance="150" :angle="-70"> </z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance="150" :angle="-80"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance="150" :angle="-90"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance=150 :angle="-100"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance=150 :angle="-110"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance=150 :angle="-120"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance=150 :angle="-130"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance=150 :angle="-140"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-150"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width: 3px;  border-color:white;' size=xxs :distance=150 :angle="-160"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-170"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-180"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-190"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-200"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-210"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-220"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-230"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="-240"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="10"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="20"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="30"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="40"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="50"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="60"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="70"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="80"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="90"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="100"></z-spot>
      <z-spot class="circle" style='background-color: var(--shade-color);border-width:3px;  border-color:white;' size=xxs :distance=150 :angle="110"></z-spot>
      </div>
     </div>
  </z-view>
</template>
<style>
.style1{
  font-family: snap ITC;
  color:#f5f3f1;
  }
  </style>
