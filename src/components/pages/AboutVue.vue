<template>
    <base-container>
        <div class="about">
            <h2>About Studio</h2>
            <div class="img-bg">
                <img class="bg" src="../../imgs/about-img.jpg" alt="">
                <img class="movable" src="../../imgs/about-img-bg.png" alt="">
            </div>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, </p>
            <button>about More </button>
        </div>
    </base-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../sass/variables/vars';
@import '../../sass/layout/global_rules';

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        text-transform: uppercase;
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 30px;
    }

    .img-bg {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto 50px;
        position: relative;

        @include breakpoint(xs) {
            width: 200px;
        }

        @include breakpoint(sm) {
            width: 200px;
        }

        .bg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;

        }

        .movable {
            width: 700px;
            position: relative;
            animation-name: circletoright;
            animation-iteration-count: infinite;
            animation-duration: 4s;
            animation-timing-function: ease-in-out;

            @keyframes circletoright {
                from {
                    transform: rotate(0deg);
                }

                50% {
                    transform: rotate(180deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            @include breakpoint(xs) {
                width: 350px;
            }

            @include breakpoint(sm) {
                width: 350px;
            }
        }
    }

    p {
        font-size: 16px;
        letter-spacing: 1px;
        margin-bottom: 60px;
        line-height: 25px;
    }

    button {
        padding: 15px 40px;
        font-size: 16px;
        border: none;
        border-radius: 30px;
        color: #fff;
        background-color: #000;
        margin-bottom: 80px;
        text-transform: uppercase;
        cursor: pointer;
        &:hover{
                background-color: $hover3;
            }
    }
}
</style>