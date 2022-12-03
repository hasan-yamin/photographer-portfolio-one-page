<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../sass/helpers/media-queries';

.container {
    margin: auto;
    @include breakpoint(xs) {
        width: 95%;
    }

    @include breakpoint(sm) {
        width: 540px;
    }

    @include breakpoint(md) {
        width: 720px;
    }

    @include breakpoint(lg) {
        width: 960px;
    }

    @include breakpoint(xl) {
        width: 1140px;
    }

    @include breakpoint(xxl) {
        width: 1200px;
    }
}
</style>