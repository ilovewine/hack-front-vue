<template>
  <b-row class="bg-blue-dark text-white" no-gutters>
    <b-col cols="12">
      <h1 class="text-center my-4 my-sm-5 display-4">Jak dojechać</h1>
    </b-col>
    <b-col class="mb-4 mb-sm-5 mb-lg-0" cols="10" lg="5" offset="1" offset-lg="1" xl="4">
      <l-map :center="center"
             :zoom="zoom"
             @update:center="centerUpdated"
             @update:zoom="zoomUpdated"
             class="map w-100">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="placeMarker">
          <l-tooltip class="font-weight-bold secondary-font">Krakowski Park Technologiczny<br>
            ul. Podole 60<br>
            30-394, Kraków
          </l-tooltip>
        </l-marker>
      </l-map>
    </b-col>
    <b-col class="d-flex flex-column justify-content-around" cols="10" lg="4" offset="1"
           offset-lg="1" xl="5">
      <b-row class="mb-3" no-gutters>
        <b-col cols="2">
          <font-awesome-icon icon="map-marker-alt" size="lg"></font-awesome-icon>
        </b-col>
        <b-col>
          <span class="secondary-font">Krakowski Park Technologiczny</span><br>
          <span class="secondary-font">Podole 60</span>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <b-col cols="2">
          <font-awesome-icon icon="bus" size="lg"></font-awesome-icon>
        </b-col>
        <b-col>
          <span class="secondary-font">Linie: {{ buses }}</span>
        </b-col>
      </b-row>
    </b-col>
    <b-col class="mx-auto" cols="11" lg="8" md="10">
      <p class="text-justify my-4 my-sm-5">
        Nasz hackathon odbędzie się w Krakowskim Parku Technologicznym, który wspiera nas od
        pierwszej edycji.
      </p>
      <p class="text-justify">
        Krakowski Park Technologiczny to najbardziej kompletny one-stop-shop dla biznesu w Polsce,
        gdzie przedsiębiorcy, naukowcy i samorządowcy tworzą ekosystem rozwoju małopolskiej
        gospodarki. Udostępnia także firmom i organizacjom sprzęt elektroniczny, specjalistyczne
        oprogramowanie i infrastrukturę pomocną w rozszerzaniu ich możliwości i oferty.
      </p>
    </b-col>
    <img alt="mountains" class="img-fluid w-100" src="@/assets/images/mountains-middle.png"/>
  </b-row>
</template>

<script>

export default {
  name: 'Place',
  data() {
    return {
      zoom: 15,
      center: [50.0211894, 19.8862796046309],
      placeMarker: [50.0211894, 19.8862796046309],
      busArray: [11, 17, 18, 52, 62, 662, 116, 156, 203, 204, 213, 223, 253, 263, 283, 578, 903], // check here -> https://ztp.krakow.pl/transport-publiczny/komunikacja-miejska/mapy-i-schematy-kmk
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    }
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom
    },
    centerUpdated(center) {
      this.center = center
    },
  },
  computed: {
    buses() {
      return this.busArray.join(', ')
    },
  },
}
</script>

<style lang="scss" scoped>
.map {
  height: 15rem;
}

.img-fluid {
  transform: rotate(180deg);
}
</style>
