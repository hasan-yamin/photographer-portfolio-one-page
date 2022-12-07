<template>
    <section class="cont">
        <base-container>
            <div class="contact">
                <h2> Contact Us </h2>
                <form @submit.prevent="">
                    <div class="form-control">
                        <input type="text" name="userName" id="userName" placeholder="Name">
                    </div>
                    <div class="form-control">
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="phone Number">
                    </div>
                    <div class="form-control">
                        <input type="email" name="userEmail" id="userEmail" placeholder="Email">
                    </div>
                    <div class="form-control">
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </base-container>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../sass/variables/vars';
@import '../../sass/layout/global_rules';

.cont {
    margin-top: 100px;
    background-image: url('../../imgs/contact-bg.png');

    .contact {
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

        form {
            width: 50%;
            margin-bottom: 125px;

            @include breakpoint(xs) {
                width: 100%;
            }

            @include breakpoint(sm) {
                width: 100%;
            }

            .form-control {
                width: 100%;
                margin-top: 20px;
                border: none;
                border-bottom: 1px solid;

                textarea,
                input {
                    width: 100%;
                    border: none;
                    padding: 10px 0px;
                    font-size: 18px;
                    background-color: transparent;
                    resize: none;
                    outline: none;
                }
            }

            button {
                padding: 10px 50px;
                margin-top: 20px;
                background-color: $Font_color;
                border: none;
                cursor: pointer;

                &:hover {
                    background-color: $hover;
                }
            }
        }
    }
}
</style>