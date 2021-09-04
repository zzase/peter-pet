<template>
    <div class="wrapper">
        <parallax class="section page-header" :style="headerStyle">
            <div class="container">
                <div class="md-layout">
                    <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
                        <h1 class="title">Let's be wenddy for your PETER-PET</h1>
                        <h4>
                            Every landing page needs a small description after the big bold title, that's
                            why we added this text here. Add here all the information that can make you or
                            your product create the first impression.
                        </h4>
                        <br/>
                        <md-button
                        
                            href="/"
                            class="md-success md-lg"
                            target="_blank">
                            <i class="fas fa-play"></i>
                            Go to register Animals</md-button >
                    </div>
                </div>
            </div>
        </parallax>
        <div class="main main-raised">
            <div class="section">
                <div class="container">
                    <div class="md-layout">
                        <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
                            <h2 class="title text-center">What is DID?</h2>
                            <h5 class="description">
                                This is the paragraph where you can write more details about your product. Keep
                                you user engaged by providing meaningful information. Remember that by this
                                time, the user is curious, otherwise he wouldn't scroll to get here. Add a
                                button if you want the user to see more.
                            </h5>
                        </div>
                    </div>
                    <div class="features text-center">
                        <div class="md-layout">
                            <div class="md-layout-item md-medium-size-33 md-small-size-100">
                                <div class="info">
                                    <div class="icon icon-info">
                                        <md-icon>chat</md-icon>
                                    </div>
                                    <h4 class="info-title">Free Chat</h4>
                                    <p>
                                        Divide details about your product or agency work into parts. Write a few lines
                                        about each one. A paragraph describing a feature will be enough.
                                    </p>
                                </div>
                            </div>
                            <div class="md-layout-item md-medium-size-33 md-small-size-100">
                                <div class="info">
                                    <div class="icon icon-success">
                                        <md-icon>verified_user</md-icon>
                                    </div>
                                    <h4 class="info-title">Verified Users</h4>
                                    <p>
                                        Divide details about your product or agency work into parts. Write a few lines
                                        about each one. A paragraph describing a feature will be enough.
                                    </p>
                                </div>
                            </div>
                            <div class="md-layout-item md-medium-size-33 md-small-size-100">
                                <div class="info">
                                    <div class="icon icon-danger">
                                        <md-icon>fingerprint</md-icon>
                                    </div>
                                    <h4 class="info-title">Fingerprint</h4>
                                    <p>
                                        Divide details about your product or agency work into parts. Write a few lines
                                        about each one. A paragraph describing a feature will be enough.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        bodyClass: "landing-page",
        props: {
            header: {
                type: String,
                default: require("@/assets/img/001.jpg")
            },
            teamImg1: {
                type: String,
                default: require("@/assets/img/faces/avatar.jpg")
            },
            teamImg2: {
                type: String,
                default: require("@/assets/img/faces/christian.jpg")
            },
            teamImg3: {
                type: String,
                default: require("@/assets/img/faces/kendall.jpg")
            }
        },
        data() {
            return {name: null, email: null, message: null};
        },
        computed: {
            headerStyle() {
                return {backgroundImage: `url(${this.header})`};
            }
        }
    };
</script>

<style lang="scss" scoped="scoped">
    .md-card-actions.text-center {
        display: flex;
        justify-content: center !important;
    }
    .contact-form {
        margin-top: 30px;
    }

    .md-has-textarea + .md-layout {
        margin-top: 15px;
    }
</style>