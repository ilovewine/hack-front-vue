<template>
    <b-container class="p-0 position-relative" fluid>
        <b-button @click.stop="showCollapse = !showCollapse" class="position-fixed p-2 p-sm-3 align-self-center menu d-flex" size="sm" variant="outline-secondary">
            <font-awesome-icon icon="bars" size="lg"></font-awesome-icon>
        </b-button>
        <b-row :class="{ active: showCollapse }" @click="blankClick" class="position-fixed" id="container" no-gutters ref="container">
            <b-col class="position-fixed d-flex flex-column align-items-stretch" cols="11" lg="4" md="6" sm="8">
                <b-navbar class="p-0 flex-fill d-flex flex-column align-items-stretch position-relative" toggleable="true" type="light" variant="faded">
                    <div class="py-3 horizontal flex-fill d-flex flex-column align-items-center bg-white min-vh-100 position-absolute" ref="collapse">
                        <b-navbar-brand class="m-0">
                            <img alt="logo" class="img-fluid" src="@/assets/images/hackathon-logo5.png"/>
                        </b-navbar-brand>

                        <b-navbar-nav class="mt-4 font-weight-bold w-100">
                            <b-nav-item :key="id" @click="scrollTo(link)" class="text-center" href="#" v-for="(link, id) in links">{{ link.name }}</b-nav-item>
                        </b-navbar-nav>
                    </div>
                </b-navbar>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    name: 'Aside',
    data () {
      return {
        showCollapse: false,
        links: [
          {
            name: 'Start',
            href: 'main',
          },
          {
            name: 'Czas',
            href: 'timer',
          },
          {
            name: 'O projekcie',
            href: 'about-project',
          },
          {
            name: 'O nas',
            href: 'about-us',
          },
          // {
          //   name: 'jak dojechać',
          //   href: 'place',
          // },
          {
            name: 'Najczęściej zadawane pytania',
            href: 'faq',
          },
          {
            name: 'Partnerzy',
            href: 'partners',
          },
          {
            name: 'Kontakt',
            href: 'contact',
          },
        ],
      }
    },
    methods: {
      blankClick (e) {
        if (e.target.isSameNode(this.$refs.container)) this.showCollapse = false
      },
      scrollTo (link) {
        this.showCollapse = false
        this.$scrollTo(`#${link.href}`, 700)
      },
    },
    watch: {
      showCollapse () {
        document.querySelector('body').style.overflowY = this.showCollapse ? 'hidden' : 'auto'
      },
    },
  }
</script>

<style lang="scss" scoped>
    #container {
        user-select: none;
        width: 100vw;
        height: 100vh;
        background: transparent;
        transition: $transition-base;
    }

    #container.active {
        background: transparentize($black, 0.4);
        z-index: $aside-index;

        nav.navbar {
            overflow-y: auto;
        }

        .horizontal {
            transform: translateX(0);
        }
    }

    nav.navbar div.position-absolute {
        left: 0;
        right: 0;
    }

    div.position-fixed.d-flex {
        height: 100vh;
        z-index: $aside-index + 1;

        .horizontal {
            transform: translateX(-100%);
            transform-origin: left;
            transition: $transition-base;
        }
    }

    .menu {
        z-index: $aside-index + 2;
        @include media-breakpoint-down(md) {
            &:hover, &:focus {
                background-color: transparent !important;
                color: $secondary !important;
                font-family: 'Norse', sans-serif;
            }
        }
    }

    .img-fluid {
        width: 5rem;
        height: auto;
    }
</style>
