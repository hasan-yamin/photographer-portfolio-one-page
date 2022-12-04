<template>
    <div class="header">
        <div class="logo"><img src="" alt="">أحمد</div>
        <nav>
            <ul>
                <li :class="{ active: activeMenu === 'home' }" @click="isActive('home')">الرئيسية</li>
                <li :class="{ active: activeMenu === 'about' }" @click="isActive('about')">من أنا</li>
                <li :class="{ active: activeMenu === 'portfolio' }" @click="isActive('portfolio')">أعمالي</li>
                <li :class="{ active: activeMenu === 'contact' }" @click="isActive('contact')">تواصل معي</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeMenu: 'home',
        }
    },
    computed: {

    },
    methods: {
        isActive(m) {
            this.activeMenu = m
        },
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
    padding: 20px  0;

    .logo {
        width: 50px;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 50px;

        li {
            font-size: 20px;
            color: $Font_color;
            cursor: pointer;

            &:hover {
                color: #000;
            }

            &.active {
                color: #000;
            }

            @include breakpoint(xs) {
                font-size: 15px;
            }

            @include breakpoint(sm) {
                font-size: 15px;
            }

        }

    }
}
</style>