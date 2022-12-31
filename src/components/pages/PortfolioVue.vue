<template>
    <div class="portfol">
        <base-container>
            <div class="portfolio">
                <h2>Our portfolio</h2>
                <p> minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                <div class="galary">
                    <div class="videos">
                        <div class="video">
                            <img src="../../imgs/p-1.jpg" alt="">
                        </div>
                        <div class="video">
                            <img src="../../imgs/p-2.jpg" alt="">
                        </div>
                    </div>
                    <div class="photos">
                        <div class="photo">
                            <img src="../../imgs/p-3.jpg" alt="">
                        </div>
                        <div class="photo">
                            <img src="../../imgs/p-4.jpg" alt="">
                        </div>

                        <div>
                            <div class="photo">
                                <img src="../../imgs/p-5.jpg" alt="">
                            </div>
                            <div class="photo">
                                <img src="../../imgs/p-6.jpg" alt="">
                            </div>

                        </div>
                    </div>
                </div>
                <button>see More</button>
            </div>
        </base-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../sass/variables/vars';
@import '../../sass/layout/global_rules';

.portfol {
    background-color: $BG_color2;
    padding-top: 100px;

    .portfolio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

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
        }

        .galary {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
            width: 100%;
            margin-bottom: 80px;

            @include breakpoint(xs) {
                flex-direction: column;
            }

            @include breakpoint(sm) {
                flex-direction: column;
            }

            .videos {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                width: 38.5%;

                @include breakpoint(xs) {
                    width: 100%;
                }

                @include breakpoint(sm) {
                    width: 100%;
                }

                .video {
                    position: relative;

                    &:hover {
                        &::before {
                            position: absolute;
                            content: '';
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: $hover;
                            opacity: 0.5;
                        }
                    }

                    img {
                        width: 100%;

                    }
                }
            }

            .photos {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                width: 60%;

                @include breakpoint(xs) {
                    width: 100%;
                }

                @include breakpoint(sm) {
                    width: 100%;
                }

                .photo {
                    position: relative;

                    &:hover {
                        &::before {
                            position: absolute;
                            content: '';
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: $hover;
                            opacity: 0.5;
                        }
                    }

                    img {
                        width: 100%;
                    }
                }


                >div {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 100%;

                    .photo {
                        &:first-child {
                            width: 65%;
                        }

                        &:last-child {
                            width: 34%;
                        }

                        img {}
                    }

                }
            }
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

            &:hover {
                background-color: $hover3;
            }
        }
    }
}
</style>