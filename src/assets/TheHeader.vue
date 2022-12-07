<template>
    <div class="header">
        <div class="logo">
            <img src="../imgs/logo.png" alt="">
            <span>HKY</span>
        </div>
        <nav>
            <ul>
                <li :class="{ active: activeMenu === 'home' }" @click="isActive('home')">home</li>
                <li :class="{ active: activeMenu === 'about' }" @click="isActive('about')">about</li>
                <li :class="{ active: activeMenu === 'portfolio' }" @click="isActive('portfolio')">portfolio</li>
                <li :class="{ active: activeMenu === 'contact' }" @click="isActive('contact')">contact</li>
            </ul>
        </nav>
    </div>
</template>

<script>
import store from '@/store';

export default {
    data() {
        return {
            // activeMenu: this.getViewSection(),
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

.header {
    // width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            margin-right: 5px;
        }

        span {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 25px;
            line-height: 30px;
            color: $Font_color;
        }
    }

    ul {
        // list-style: none;
        display: flex;
        gap: 50px;

        @include breakpoint(xs) {
            gap: 20px;
        }

        @include breakpoint(sm) {
            gap: 20px;
        }

        li {
            font-size: 16px;
            letter-spacing: 1px;
            line-height: 24px;
            color: $Font_color;
            cursor: pointer;
            text-transform: uppercase;

            &:hover {
                color: #000;
            }

            &.active {
                color: #000;
            }

            @include breakpoint(xs) {
                font-size: 12px;
                font-weight: bold;
            }

            @include breakpoint(sm) {
                font-size: 13px;
                font-weight: bold;
            }

        }

    }
}
</style>