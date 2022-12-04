<template>
    <div class="root">
        <div class="info">
            <h2>photography studio</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content </p>
            <div class="buttons">
                <button type="button">About Us</button>
                <button type="button">Get A Quote</button>
            </div>
            <div class="arrows">
                <span class="back">B</span>
                <span type="follow">F</span>
            </div>
        </div>
        <div class="pic">
            <img src="../../imgs/slider-img.jpg" alt="">
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../sass/layout/global_rules';
@import '../../sass/variables/vars';

.root {
    width: 100%;
    background-size: cover;
    display: flex;

    @include breakpoint(xs) {
        flex-direction: column;
    }

    @include breakpoint(sm) {
        flex-direction: column;
    }

    .info {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        @include breakpoint(xs) {
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 70px;
        }

        @include breakpoint(sm) {
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-top: 70px;
        }

        h2 {
            text-transform: uppercase;
            font-size: 40px;
            line-height: 48px;
            margin-bottom: 30px;
            margin-left: 30px;
        }

        p {
            font-size: 16px;
            letter-spacing: 1px;
            margin-bottom: 30px;
            margin-left: 30px;
        }

        .buttons {
            margin-bottom: 30px;
            margin-left: 30px;

            button {
                padding: 10px 20px;
                font-size: 16px;
                border: none;
                border-radius: 20px;
                color: #fff;

                &:first-child {
                    background-color: $Font_color;
                }

                &:last-child {
                    background-color: #000;
                }
            }
        }

        .arrows {
            margin-left: 30px;
            position: relative;

            .back {
                position: absolute;
                content: '';

            }

            .follow {
                position: absolute;
                content: '';
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
</style>