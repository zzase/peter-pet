<template>
    <div class="wrapper">
        <parallax class="section page-header" :style="headerStyle"></parallax>
        <div class="main main-raised">
            <div class="section profile-content">
                <div class="container">
                    <div class="profile-tabs">
                        <div class="md-layout">
                            <div class="md-layout-item md-size-50 mx-auto">
                                <div class="profile">
                                    <div class="avatar">
                                        <img :src="img" alt="Circle Image" class="img-raised rounded-circle img-fluid"/>
                                    </div>
                                    <div class="name">
                                        <h1 class="title">Regist Your
                                            <br>Peter-Pet</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <tabs
                                :tab-name="['Peter-Pet', 'Wenddy', 'Tinkerbell']"
                                :tab-icon="['pets', 'people', 'reddit']"
                                plain="plain"
                                nav-pills-icons="nav-pills-icons"
                                color-button="success">
                                <!-- here you can add your content for tab-content -->
                                <template slot="tab-pane-1">
                                    <div class="md-layout">
                                        <div class="md-layout-item md-size-100 ml-auto">
                                            <login-card header-color="green">
                                                <h2 slot="title" class="card-title">Peter-Pet</h2>
                                                <p slot="description" class="description">Or Be Classical</p>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>face</md-icon>
                                                    <label>이름</label>
                                                    <md-input v-model="firstname"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>email</md-icon>
                                                    <label>견종</label>
                                                    <md-input v-model="email" type="email"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>성별</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>생년월일</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>입양일</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>중성화 여부</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>face</md-icon>
                                                    <label>모색</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>특이사항</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>접종내역</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-button slot="footer" class="md-simple md-success md-lg">
                                                    Get Started
                                                </md-button>
                                            </login-card>
                                        </div>
                                    </div>
                                </template>
                                <template slot="tab-pane-2">
                                    <div class="md-layout">
                                        <div class="md-layout-item md-size-100 ml-auto">
                                            <login-card header-color="orange">
                                                <h2 slot="title" class="card-title">Wenddy</h2>
                                                <p slot="description" class="description">Or Be Classical</p>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>favorite</md-icon>
                                                    <label>First Name...</label>
                                                    <md-input v-model="firstname"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>email</md-icon>
                                                    <label>Email...</label>
                                                    <md-input v-model="email" type="email"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>Password...</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-button slot="footer" class="md-simple md-success md-lg">
                                                    Get Started
                                                </md-button>
                                            </login-card>
                                        </div>
                                    </div>
                                </template>
                                <template slot="tab-pane-3">
                                    <div class="md-layout">
                                        <div class="md-layout-item md-size-100 ml-auto">
                                            <login-card header-color="red">
                                                <h2 slot="title" class="card-title">Tinkerbell</h2>
                                                <p slot="description" class="description">Or Be Classical</p>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>face</md-icon>
                                                    <label>First Name...</label>
                                                    <md-input v-model="firstname"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>email</md-icon>
                                                    <label>Email...</label>
                                                    <md-input v-model="email" type="email"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-icon>lock_outline</md-icon>
                                                    <label>Password...</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-button slot="footer" class="md-simple md-success md-lg">
                                                    Get Started
                                                </md-button>
                                            </login-card>
                                        </div>
                                    </div>
                                </template>
                            </tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        import {Tabs} from "@/components";
        import {LoginCard} from "@/components";
        export default {
            components: {
                Tabs,
                LoginCard
            },
            bodyClass: "profile-page",
            data() {
                return {
                    tabPane1: [
                        {
                            image: require("@/assets/img/examples/studio-1.jpg")
                        }, {
                            image: require("@/assets/img/examples/studio-2.jpg")
                        }, {
                            image: require("@/assets/img/examples/studio-4.jpg")
                        }, {
                            image: require("@/assets/img/examples/studio-5.jpg")
                        }
                    ],
                    tabPane2: [
                        {
                            image: require("@/assets/img/examples/olu-eletu.jpg")
                        }, {
                            image: require("@/assets/img/examples/clem-onojeghuo.jpg")
                        }, {
                            image: require("@/assets/img/examples/cynthia-del-rio.jpg")
                        }, {
                            image: require("@/assets/img/examples/mariya-georgieva.jpg")
                        }, {
                            image: require("@/assets/img/examples/clem-onojegaw.jpg")
                        }
                    ],
                    tabPane3: [
                        {
                            image: require("@/assets/img/examples/mariya-georgieva.jpg")
                        }, {
                            image: require("@/assets/img/examples/studio-3.jpg")
                        }, {
                            image: require("@/assets/img/examples/clem-onojeghuo.jpg")
                        }, {
                            image: require("@/assets/img/examples/olu-eletu.jpg")
                        }, {
                            image: require("@/assets/img/examples/studio-1.jpg")
                        }
                    ]
                };
            },
            props: {
                header: {
                    type: String,
                    default: require("@/assets/img/001.jpg")
                },
                img: {
                    type: String,
                    default: require("@/assets/img/faces/christian.jpg")
                }
            },
            computed: {
                headerStyle() {
                    return {backgroundImage: `url(${this.header})`};
                }
            }
        };
    </script>

    <style lang="scss" scoped="scoped">
        .section {
            padding: 0;
        }

        .profile-tabs::v-deep {
            .md-card-tabs .md-list {
                justify-content: center;
            }

            [class*="tab-pane-"] {
                margin-top: 3.213rem;
                padding-bottom: 50px;

                img {
                    margin-bottom: 2.142rem;
                }
            }
        }
    </style>