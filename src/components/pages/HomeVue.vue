<template>

    <div class="root">
        <div class="info">
            <h2>photography studio</h2>
            <!-- <font-awesome-icon icon="fa-solid fa-book" /> -->
            <!-- <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-solid fa-user-secret" />
            <font-awesome-icon icon="fa-regular fa-bicycle" />
            <font-awesome-icon icon="fa-light fa-envelope" />
            <font-awesome-icon icon="fa-thin fa-feather" />
            <font-awesome-icon icon="fa-duotone fa-horse-saddle" />
            <font-awesome-icon icon="fa-sharp fa-solid fa-alien" /> -->
            <p>It is a long established fact that a reader will be distracted by the readable content </p>
            <div class="buttons">
                <button type="button" @click="isActive('about')">About Us</button>
                <button type="button" @click="isActive('contact')">Get A Quote</button>
            </div>
            <div class="arrows">
                <span class="prev"><img src="../../imgs/prev.png" alt=""></span>
                <span class="next"><img src="../../imgs/next.png" alt=""></span>
            </div>
        </div>
        <div class="pic">
            <img src="../../imgs/slider-img.jpg" alt="">
        </div>
    </div>
    <about-vue></about-vue>
    <portfolio-vue></portfolio-vue>

    <base-container>
        <div class="achievment">
            <h2> ACHIEVEMENTS </h2>
            <p> minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
            <div class="cards">
                <div class="card">
                    <img src="../../imgs/a-1.png" alt="">
                    <span>1000+</span>
                    <p>Photo Session </p>
                </div>
                <div class="card">
                    <img src="../../imgs/a-2.png" alt="">
                    <span>1000+</span>
                    <p>Happy Customers </p>
                </div>
                <div class="card">
                    <img src="../../imgs/a-3.png" alt="">
                    <span>1000+</span>
                    <p>Archive Photographs </p>
                </div>
            </div>
        </div>
    </base-container>
    <base-container>
        <div class="testimonial">
            <h2>testimonial</h2>
            <p> minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
            <div class="cards">
                <div class="card">
                    <span>Aloz den </span>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum </p>
                </div>
                <div class="card">
                    <span>Hasan K </span>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum </p>
                </div>
            </div>
            <div class="arrows">
                <span class="prev"><img src="../../imgs/prev-white.png" alt=""></span>
                <span class="next"><img src="../../imgs/next-white.png" alt=""></span>
            </div>
        </div>
    </base-container>

    <contact-vue></contact-vue>

</template>

<script>
import AboutVue from './AboutVue.vue';
import PortfolioVue from './PortfolioVue.vue';
import ContactVue from './ContactVue.vue';
export default {
    components: {
        AboutVue, PortfolioVue, ContactVue,
    },
    methods:{
        isActive(value) {
            this.$store.dispatch('setViewSection', value)
        },
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/layout/global_rules';
@import '../../sass/variables/vars';

.root {
    width: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url('../../imgs/home-bg.png');
    height: 1170px;

    @include breakpoint(xs) {
        background-image: none;
        background-color: $BG_color;
        height: auto;
        flex-direction: column;
    }

    @include breakpoint(sm) {
        background-image: none;
        background-color: $BG_color;
        height: auto;
        flex-direction: column;
    }

    @include breakpoint(md) {
        height: 500px;
    }

    @include breakpoint(lg) {
        height: 900px;
    }

    @include breakpoint(xl) {
        height: 1000px;
    }

    .info {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 100px;
        padding-top: 100px;

        @include breakpoint(xs) {
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 70px;
            padding-left: 0;
            text-align: center;
            padding-top: 0;
        }

        @include breakpoint(sm) {
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 70px;
            padding-left: 0;
            text-align: center;
            padding-top: 0;
        }

        h2 {
            text-transform: uppercase;
            font-size: 40px;
            line-height: 48px;
            margin-bottom: 30px;
            text-align: left;

            @include breakpoint(xs) {

                text-align: center;
            }

            @include breakpoint(sm) {

                text-align: center;
            }
        }

        p {
            font-size: 16px;
            letter-spacing: 1px;
            margin-bottom: 30px;
            text-align: left;

            @include breakpoint(xs) {

                text-align: center;
            }

            @include breakpoint(sm) {

                text-align: center;
            }
        }

        .buttons {
            margin-bottom: 30px;
            // margin-left: 30px;
            display: flex;
            gap: 10px;

            button {
                padding: 10px 20px;
                font-size: 16px;
                border: none;
                border-radius: 20px;
                color: #fff;
                cursor: pointer;

                &:first-child {
                    background-color: $Font_color;

                    &:hover {
                        background-color: $hover;
                    }
                }

                &:last-child {
                    background-color: #000;

                    &:hover {
                        background-color: $hover3;
                    }
                }
            }
        }

        .arrows {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;

            .prev {
                display: flex;
                gap: 10px;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
            }

            .next {
                display: flex;
                gap: 10px;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }

    .pic {
        width: 50%;
        overflow: hidden;

        @include breakpoint(xs) {
            margin-top: 50px;
            width: 100%;
        }

        @include breakpoint(sm) {
            margin-top: 50px;
            width: 100%;
        }

        img {
            width: 100%;
        }
    }
}

.achievment {
    h2 {
        text-transform: uppercase;
        font-size: 40px;
        line-height: 48px;
        margin-top: 60px;
        margin-bottom: 30px;
    }

    p {
        font-size: 16px;
        letter-spacing: 1px;
        margin-bottom: 60px;
        line-height: 25px;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 25px;

        @include breakpoint(xs) {
            flex-direction: column;
        }

        @include breakpoint(sm) {
            flex-direction: column;
        }

        .card {
            width: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            border: 1px solid $Font_color;
            padding: 10px;

            img {
                width: 50%;
            }

            span {
                font-size: 50px;

            }

            p {
                font-size: 25px;
            }
        }
    }
}

.testimonial {
    margin-top: 70px;

    h2 {
        text-transform: uppercase;
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 30px;
    }

    p {
        font-size: 16px;
        letter-spacing: 1px;
        margin-bottom: 60px;
        line-height: 25px;
    }

    .cards {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;

        @include breakpoint(xs) {
            flex-direction: column;
        }

        @include breakpoint(sm) {
            flex-direction: column;
        }

        .card {
            border: 1px solid $Font_color;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            span {
                font-size: 35px;
                margin-bottom: 10px;
            }

            p {
                font-size: 16px;
                letter-spacing: 1px;
                line-height: 25px;
                text-align: left;
            }
        }
    }

    .arrows {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;

        .prev {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: $Font_color;
            cursor: pointer;

            &:hover {
                background-color: #000;
            }
        }

        .next {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: $Font_color;
            cursor: pointer;

            &:hover {
                background-color: #000;
            }
        }
    }
}


@include breakpoint(xs) {}

@include breakpoint(sm) {}
</style>