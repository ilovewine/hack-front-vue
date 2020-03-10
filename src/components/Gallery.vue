<template>
    <b-row no-gutters>
        <b-col cols="12" lg="8" md="10" class="mx-auto">
            <VueAgile :options="galleryOptions" class="d-flex flex-column slides">
                <b-row no-gutters class="slide" v-for="(image, index) in images" :key="index">
                    <b-col cols="12">
                        <img class="img-fluid" :src="image" alt="event"/>
                    </b-col>
                </b-row>
            </VueAgile>
        </b-col>
    </b-row>
</template>

<script>
    import {VueAgile} from 'vue-agile'

    export default {
        name: 'Gallery',
        components: {
            VueAgile
        },
        data() {
            return {
                images: [...Array(8).keys()].map(x => require(`@/assets/images/slider/webp/${x + 1}.webp`)),
                galleryOptions: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    fade: true,
                    timing: 'ease-in-out',
                    navButtons: false
                }
            }
        },
        computed: {},
    }
</script>

<style scoped lang="scss">
    .slides /deep/ .agile__actions {
        @extend .mx-auto;
        .agile__dots {
            @extend .my-3;
            .agile__dot {
                button {
                    color: transparent;
                    height: 15px;
                    width: 15px;
                    background-color: $white;
                    border-radius: 100px;
                    display: inline-block;
                    border-color: $blue-dark;
                    @extend .mx-1;
                }
                &.agile__dot--current button {
                    background-color: $blue-dark;
                }

                /*visibility: hidden;*/
            }
        }
    }
</style>
