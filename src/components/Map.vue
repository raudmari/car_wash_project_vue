<template>
  <div>

    <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="2"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
        :options="location1"
    >
      <GmapMarker :position="{lat: 53.9033, lng: -2.245}"/>
      <GmapMarker :position="{lat: 58.9033, lng: -3.245}"/>
    </GmapMap>
  </div>
</template>

<script>

</script>