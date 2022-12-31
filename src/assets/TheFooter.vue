<template>
    <div class="footer">
        <h2> Follow on </h2>
        <div class="media">
            <span>G</span>
            <span>t</span>
            <span>f</span>
            <span>i</span>
            <span>w</span>
        </div>
        <p>© 2022 All Rights Reserved By Free Html Templates</p>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../sass/variables/vars';

.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: $BG_color3;
    color: #fff;
    padding: 30px;

    h2 {
        text-transform: uppercase;
        font-weight: 200;
        letter-spacing: 1px;
    }

    .media {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        span {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 2px solid #fff;
            background-color: none;
            text-align: center;
            line-height: 30px;
        }
    }

    p {
        text-transform: capitalize;
    }
}
</style>