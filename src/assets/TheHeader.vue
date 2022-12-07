<template>
    <nav class="nav">
        <div class="logo">
            <img src="../imgs/logo.png" alt="">
            <span>HKY</span>
        </div>
        <div class="main_list" :class="{ 'show-list': showMenu }" id="mainListDiv">
            <ul>
                <li :class="{ active: activeMenu === 'home' }" @click="isActive('home')">home</li>
                <li :class="{ active: activeMenu === 'about' }" @click="isActive('about')">about</li>
                <li :class="{ active: activeMenu === 'portfolio' }" @click="isActive('portfolio')">portfolio</li>
                <li :class="{ active: activeMenu === 'contact' }" @click="isActive('contact')">contact</li>
            </ul>
        </div>
        <div class="media_button" :class="{ active: showMenu }">
            <button class="main_media_button" id="mediaButton" @click="menu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        }
    },
    computed: {
        activeMenu: {
            get() {
                return this.getViewSection()
            },
        }
    },
    methods: {
        menu() {
            this.showMenu = !this.showMenu
        },
        isActive(value) {
            this.$store.dispatch('setViewSection', value)
        },
        getViewSection() {
            return this.$store.getters.getViewSection
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/helpers/media-queries';
@import '../sass/variables/vars';

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: $BG_color;

    @include breakpoint(xs) {
        align-items: flex-start;
    }

    @include breakpoint(sm) {
        align-items: flex-start;
    }

    .logo {
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        @include breakpoint(xs) {
            height: 70px;
        }

        @include breakpoint(sm) {
            height: 70px;
        }

        img {}

        span {
            text-decoration: none;
            color: $Font_color;
            font-size: 1.8em;
            text-transform: uppercase;
            font-weight: bold;
        }
    }

    .main_list {
        align-self: flex-start;

        @include breakpoint(xs) {
            display: none;
        }

        @include breakpoint(sm) {
            display: none;
        }

        &.show-list {
            display: flex;
        }

        ul {
            display: flex;
            gap: 50px;
            list-style: none;

            @include breakpoint(xs) {
                flex-direction: column;
                gap: 0;
            }

            @include breakpoint(sm) {
                flex-direction: column;
                gap: 0;
            }

            li {
                color: $Font_color;
                line-height: 50px;
                text-transform: uppercase;
                cursor: pointer;

                &:hover,
                &.active {
                    color: $hover3;
                }
            }
        }
    }

    .media_button {
        width: 40px;
        background-color: transparent;
        display: none;
        justify-content: center;
        align-items: center;

        @include breakpoint(xs) {
            display: flex;
            height: 70px;
        }

        @include breakpoint(sm) {
            display: flex;
            height: 70px;
        }

        .main_media_button {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
            background-color: transparent;
            border: none;
            cursor: pointer;

            span {
                width: 100%;
                height: 5px;
                border-radius: 6px;
                background-color: #000;
            }

            &:hover {
                transform: rotateY(180deg);
                transition: all 0.5s;

                span {
                    background-color: #c0c0c0;
                }
            }
        }
    }
}
</style>