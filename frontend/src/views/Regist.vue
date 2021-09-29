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
                                        <h1 class="title">Register Your
                                            <br>Peter-Pet</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <tabs
                                ref="child"
                                :tab-name="['Peter-Pet', 'Wenddy', 'Tinkerbell']"
                                :tab-icon="['pets', 'people', 'reddit']"
                                plain="plain"
                                nav-pills-icons="nav-pills-icons"
                                color-button="success">

                                <!-- here you can add your content for tab-content -->
                                <template slot="tab-pane-1">
                                    <div class="md-layout">
                                        <div class="md-layout-item md-size-100 ml-auto">
                                            <form @submit.prevent="addDid">
                                                <login-card header-color="green">
                                                    <h2 slot="title" class="card-title">Peter-Pet</h2>
                                                    <md-field class="md-form-group" slot="inputs">
                                                        <div class="container">
                                                            <div class="md-layout">
                                                                <div class="md-layout-item md-size-66 md-xsmall-size-100 ">
                                                                    <form method="post" action="upload" enctype="multipart/form-data">
                                                                        <h6 class="info-title">반려견의 사진을 등록해주세요</h6>
                                                                        <ImagePreview></ImagePreview>

                                                                        <br>
                                                                            <br>
                                                                                <input type="submit"></form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </md-field>
                                                                <md-field class="md-form-group" slot="inputs">

                                                                    <label>
                                                                        <md-icon>face</md-icon>이름</label>
                                                                    <md-input v-model="peterpet.name"></md-input>
                                                                </md-field>
                                                                <md-field class="md-form-group" slot="inputs">
                                                                    <label>
                                                                        <md-icon>pets</md-icon>견종</label>
                                                                    <div>
                                                                        <md-autocomplete
                                                                            v-model="peterpet.breedOfDog"
                                                                            :md-options="breeds"
                                                                            md-layout="box"
                                                                            md-dense="md-dense">
                                                                            <label>--견종을 선택해주세요--</label>
                                                                        </md-autocomplete>
                                                                    </div>

                                                                </md-field>
                                                                <md-field class="md-form-group" slot="inputs">
                                                                    <label for="label-a">
                                                                        <md-icon>wc</md-icon>성별</label>
                                                                    <div>
                                                                        <br>
                                                                            <md-radio v-model="peterpet.gender" value="male">남자아이<md-icon>male</md-icon>
                                                                            </md-radio>
                                                                            <br>
                                                                                <md-radio v-model="peterpet.gender" value="female">여자아이<md-icon>female</md-icon>
                                                                                </md-radio>
                                                                            </div>

                                                                        </md-field>
                                                                        <md-field class="md-form-group" slot="inputs">
                                                                            <md-datepicker v-model="peterpet.birth" :md-model-type=String>
                                                                                <label>생년월일을 입력해주세요</label>
                                                                            </md-datepicker>
                                                                        </md-field>
                                                                        <md-field class="md-form-group" slot="inputs">
                                                                            <md-datepicker v-model="peterpet.adoptionDate" :md-model-type=String>
                                                                                <label>입양날짜를 입력해주세요</label>
                                                                            </md-datepicker>
                                                                        </md-field>
                                                                        <md-field class="md-form-group" slot="inputs">
                                                                            <label for="label-a">
                                                                                <md-icon>task_alt</md-icon>중성화 여부</label>
                                                                            <div>
                                                                                <br>
                                                                                    <md-radio v-model="peterpet.isNeutering" id="true" v-bind:value="true">중성화 O</md-radio>
                                                                                    <br>
                                                                                        <md-radio v-model="peterpet.isNeutering" id="false" v-bind:value="false">중성화 X</md-radio>
                                                                                    </div>
                                                                                </md-field>
                                                                                <md-field class="md-form-group" slot="inputs">
                                                                                    <label>
                                                                                        <md-icon>saved_search</md-icon>모색</label>
                                                                                    <div>
                                                                                        <md-autocomplete
                                                                                            v-model="peterpet.furColor"
                                                                                            :md-options="colors"
                                                                                            md-layout="box"
                                                                                            md-dense="md-dense">
                                                                                            <label>--모색을 선택해주세요--</label>
                                                                                        </md-autocomplete>
                                                                                    </div>
                                                                                </md-field>
                                                                                <md-field class="md-form-group" slot="inputs">

                                                                                    <md-field>
                                                                                        <label>!--반려견의 특이사항에 대해 알려주세요--!</label>
                                                                                        <md-textarea v-model="peterpet.notes"></md-textarea>
                                                                                    </md-field>
                                                                                </md-field>
                                                                                <label>접종내역</label>
                                                                                <md-field class="md-form-group" slot="inputs">

                                                                                    <label for="name">
                                                                                        <md-icon>medical_services</md-icon>접종내역</label>
                                                                                    <br>
                                                                                        <br>
                                                                                            <div>
                                                                                                <md-checkbox
                                                                                                    v-model="peterpet.vaccinationHistory"
                                                                                                    value="종합백신(홍역/간염/장염/기관지염/신장염)">종합백신(홍역/간염/장염/기관지염/신장염)</md-checkbox>
                                                                                                <md-checkbox v-model="peterpet.vaccinationHistory" value="코로나 장염 백신">코로나 장염 백신</md-checkbox>
                                                                                                <md-checkbox v-model="peterpet.vaccinationHistory" value="켄넬코프 백신">켄넬코프 백신</md-checkbox>
                                                                                                <md-checkbox v-model="peterpet.vaccinationHistory" value="광견병 백신">광견병 백신</md-checkbox>
                                                                                                <md-checkbox v-model="peterpet.vaccinationHistory" value="구충제">구충제</md-checkbox>
                                                                                                <md-checkbox v-model="peterpet.vaccinationHistory" value="심장사상충 예방">심장사상충 예방</md-checkbox>
                                                                                                <md-checkbox v-model="peterpet.vaccinationHistory" value="종합구충">종합구충</md-checkbox>
                                                                                            </div>
                                                                                        </md-field>

                                                                                        <md-button
                                                                                            id="tab-content"
                                                                                            slot="footer"
                                                                                            class="md-success md-lg"
                                                                                            type="submit">Next</md-button>

                                                                                        <!-- <md-button slot="footer" class="md-success md-lg" v-onclick="Wenddy"> -->
                                                                                        <!-- Next </md-button> -->
                                                                                    </login-card>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </template>

                                                                    <template slot="tab-pane-2">
                                                                        <div class="md-layout">
                                                                            <div class="md-layout-item md-size-100 ml-auto">
                                                                              <form @submit.prevent="registGov">
                                                                                <login-card header-color="orange">
                                                                                    <h2 slot="title" class="card-title">Wenddy</h2>
                                                                                    <md-field class="md-form-group" slot="inputs">
                                                                                        <label>
                                                                                            <md-icon>person_outline</md-icon>이름</label>
                                                                                        <md-input v-model="wenddy.name"></md-input>
                                                                                    </md-field>
                                                                                    <md-field class="md-form-group" slot="inputs">
                                                                                        <label>
                                                                                            <md-icon>whatsapp</md-icon>연락처</label>
                                                                                        <input
                                                                                            type="tel"
                                                                                            name="tlno"
                                                                                            id="tlno"
                                                                                            title="전화번호를 입력하세요."
                                                                                            placeholder="010*-0000*-0000"
                                                                                            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                                                                                            maxlength="13"
                                                                                            v-model="wenddy.phone"></md-field>
                                                                                        <md-field class="md-form-group" slot="inputs">
                                                                                            <label>
                                                                                                <md-icon>email</md-icon>Email</label>
                                                                                            <input type='email' v-model="wenddy.email" name='userEmail'/>

                                                                                        </md-field>
                                                                                        <md-field class="md-form-group" slot="inputs">
                                                                                            <label>
                                                                                                <md-icon>home</md-icon>주소</label>
                                                                                            <title>주소 입력 샘플</title>
                                                                                            <body>
                                                                                                <form name="form" id="form" method="post">
                                                                                                    <table >
                                                                                                        <colgroup>
                                                                                                            <col style="width:20%">
                                                                                                                <col></colgroup>
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <th>우편번호</th>
                                                                                                                        <td>
                                                                                                                            <input type="hidden" id="confmKey" name="confmKey" value="">
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    id="zipNo"
                                                                                                                                    name="zipNo"
                                                                                                                                    readonly="readonly"
                                                                                                                                    style="width:100px"
                                                                                                                                    v-model="addressInfo.zonecode">
                                                                                                                                    <input type="button" value="주소검색" @click="getPostalcode()"></td>
                                                                                                                                </tr>
                                                                                                                                <tr>
                                                                                                                                    <th>도로명주소</th>
                                                                                                                                    <td>
                                                                                                                                        <input
                                                                                                                                            type="text"
                                                                                                                                            id="roadAddrPart1"
                                                                                                                                            style="width:85%"
                                                                                                                                            v-model="addressInfo.roadAddress"></td>
                                                                                                                                    </tr>
                                                                                                                                    <tr>
                                                                                                                                        <th>상세주소</th>
                                                                                                                                        <td>
                                                                                                                                            <input
                                                                                                                                                type="text"
                                                                                                                                                id="addrDetail"
                                                                                                                                                style="width:40%"
                                                                                                                                                v-model="addressInfo.buildingName">
                                                                                                                                                <input type="text" id="roadAddrPart2" style="width:40%" v-model="addressInfo.detailAddress"></td>
                                                                                                                                            </tr>
                                                                                                                                        </tbody>
                                                                                                                                    </table>
                                                                                                                                </form>
                                                                                                                            </body>
                                                                                                                        </md-field>
                                                                                                                        <md-field class="md-form-group" slot="inputs">
                                                                                                                            <div id="app">
                                                                                                                                <input
                                                                                                                                    type="text"
                                                                                                                                    inputmode="numeric"
                                                                                                                                    pattern="[0-9]*"
                                                                                                                                    maxlength="6"
                                                                                                                                    @input="firstRRNCheck($event.data)"
                                                                                                                                    v-model="firstRRNView"
                                                                                                                                    class="tf_register"
                                                                                                                                    placeholder="주민번호 앞자리">
                                                                                                                                    -
                                                                                                                                    <input
                                                                                                                                        type="text"
                                                                                                                                        pattern="[0-9]*"
                                                                                                                                        inputmode="numeric"
                                                                                                                                        maxlength="7"
                                                                                                                                        @input="secondRRNCheck($event.data)"
                                                                                                                                        v-model="secondRRNView"
                                                                                                                                        placeholder="OOOOOOO"></div>
                                                                                                                                    <label>
                                                                                                                                        <md-icon>lock_outline</md-icon>주민등록번호</label>
                                                                                                                                </md-field>
                                                                                                                                <md-field class="md-form-group" slot="inputs">
                                                                                                                                    <form action="" id="joinForm">
                                                                                                                                        <ul class="join_box">
                                                                                                                                            <li class="checkBox check01">
                                                                                                                                                <ul class="clearfix">
                                                                                                                                                    <li>이용약관, 개인정보 수집 및 이용, 위치정보 이용약관(선택), 프로모션 안내 메일 수신(선택)에 모두 동의합니다.</li>
                                                                                                                                                    <li class="checkAllBtn">
                                                                                                                                                        <input type="checkbox" name="chkAll" id="chk" class="chkAll"></li>
                                                                                                                                                    </ul>
                                                                                                                                                </li>
                                                                                                                                                <li class="checkBox check02">
                                                                                                                                                    <ul class="clearfix">
                                                                                                                                                        <li>이용약관 동의(필수)</li>
                                                                                                                                                        <li class="checkBtn">
                                                                                                                                                            <input type="checkbox" name="chk"></li>
                                                                                                                                                        </ul>
                                                                                                                                                        <textarea name="" id="">여러분을 환영합니다. 피터펫 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은
                                                                                                                                                            다양한 피터펫 서비스의 이용과 관련하여 피터펫 서비스를 제공하는 피터펫 주식회사(이하 ‘피터펫’)와 이를 이용하는 피터펫 서비스 회원(이하
                                                                                                                                                            ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 피터펫 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                                                                                                                                        </textarea>
                                                                                                                                                    </li>
                                                                                                                                                    <li class="checkBox check03">
                                                                                                                                                        <ul class="clearfix">
                                                                                                                                                            <li>개인정보 수집 및 이용에 대한 안내(필수)</li>
                                                                                                                                                            <li class="checkBtn">
                                                                                                                                                                <input type="checkbox" name="chk"></li>
                                                                                                                                                            </ul>
                                                                                                                                                            <textarea name="" id="">여러분을 환영합니다. 피터펫 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은
                                                                                                                                                                다양한 피터펫 서비스의 이용과 관련하여 피터펫 서비스를 제공하는 피터펫 주식회사(이하 ‘피터펫’)와 이를 이용하는 피터펫 서비스 회원(이하
                                                                                                                                                                ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 피터펫 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                                                                                                                                            </textarea>
                                                                                                                                                        </li>
                                                                                                                                                        <li class="checkBox check03">
                                                                                                                                                            <ul class="clearfix">
                                                                                                                                                                <li>위치정보 이용약관 동의(선택)</li>
                                                                                                                                                                <li class="checkBtn">
                                                                                                                                                                    <input type="checkbox" name="chk"></li>
                                                                                                                                                                </ul>
                                                                                                                                                                <textarea name="" id="">여러분을 환영합니다. 피터펫 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은
                                                                                                                                                                    다양한 피터펫 서비스의 이용과 관련하여 피터펫 서비스를 제공하는 피터펫 주식회사(이하 ‘피터펫’)와 이를 이용하는 피터펫 서비스 회원(이하
                                                                                                                                                                    ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 피터펫 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                                                                                                                                                </textarea>
                                                                                                                                                            </li>
                                                                                                                                                            <li class="checkBox check04">
                                                                                                                                                                <ul class="clearfix">
                                                                                                                                                                    <li>이벤트 등 프로모션 알림 메일 수신(선택)</li>
                                                                                                                                                                    <li class="checkBtn">
                                                                                                                                                                        <input type="checkbox" name="chk"></li>
                                                                                                                                                                    </ul>

                                                                                                                                                                </li>
                                                                                                                                                            </ul>
                                                                                                                                                        </form>
                                                                                                                                                    </md-field>
                                                                                                                                                    <md-button
                                                                                                                                                        id="tab-content"
                                                                                                                                                        slot="footer"
                                                                                                                                                        class="md-success md-lg"
                                                                                                                                                        type="submit">동의</md-button>

                                                                                                                                                </login-card>
                                                                                                                                              </form>
                                                                                                                                            </div>
                                                                                                                                        </div>
                                                                                                                                    </template>
                                                                                                                                    <template slot="tab-pane-3">
                                                                                                                                        <div class="md-layout">
                                                                                                                                            <div class="md-layout-item md-size-100 ml-auto">
                                                                                                                                                <form @submit.prevent="selectTinkerbell">
                                                                                                                                                <login-card header-color="red">
                                                                                                                                                    <h2 slot="title" class="card-title">Tinkerbell</h2>
                                                                                                                                                    <md-field class="md-form-group" slot="inputs">
                                                                                                                                                        <div class="md-layout">
                                                                                                                                                            <div class="md-layout-item md-medium-size-60 md-small-size-100">
                                                                                                                                                                <div class="info">
                                                                                                                                                                    <img alt="brand" src="@/assets/img/Regist/necklace1.jpg">
                                                                                                                                                                        <div>
                                                                                                                                                                            <b-button
                                                                                                                                                                                id="tooltip-button-1"
                                                                                                                                                                                style="margin: 0 auto; display: block;"
                                                                                                                                                                                :pressed="true"
                                                                                                                                                                                variant="success"
                                                                                                                                                                                v-model="tinkerbellType"
                                                                                                                                                                                @click="selectTinkerbellType(1)">외장칩 목걸이</b-button>
                                                                                                                                                                        </div>

                                                                                                                                                                        
                                                                                                                                                                    </div>
                                                                                                                                                                </div>

                                                                                                                                                                <div class="md-layout-item md-medium-size-60 md-small-size-100">
                                                                                                                                                                    <div class="info">
                                                                                                                                                                        <img alt="brand" src="@/assets/img/Regist/necklace2.jpg">
                                                                                                                                                                            <div>
                                                                                                                                                                                <b-button
                                                                                                                                                                                    id="tooltip-button-1"
                                                                                                                                                                                    style="margin: 0 auto; display: block;"
                                                                                                                                                                                    :pressed="true"
                                                                                                                                                                                    variant="success"
                                                                                                                                                                                    v-model="tinkerbellType"
                                                                                                                                                                                    @click="selectTinkerbellType(2)">내장칩 목걸이</b-button>
                                                                                                                                                                            </div>
                                                                                                                                                                           

                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                    <div></div>

                                                                                                                                                                </div>
                                                                                                                                                            </md-field>

                                                                                                                                                            <md-button slot="footer" class="md-success md-lg" type="submit">
                                                                                                                                                                선택 완료
                                                                                                                                                            </md-button>
                                                                                                                                                        </login-card>
                                                                                                                                                        </form>
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
                                                                                                                    import Vue from 'vue';
                                                                                                                    import VMdDateRangePicker from "v-md-date-range-picker";
                                                                                                                    import checkbox from "@/assets/js/checkbox.js";
                                                                                                                    import ImagePreview from './components/ImagePreview.vue';

                                                                                                                    Vue.use(checkbox);
                                                                                                                    Vue.use(VMdDateRangePicker);

                                                                                                                    export default {
                                                                                                                        name: 'TrueFalseValue',
                                                                                                                        name: 'AutocompleteBox',

                                                                                                                        components: {
                                                                                                                            Tabs,
                                                                                                                            LoginCard,
                                                                                                                            ImagePreview
                                                                                                                        },

                                                                                                                        bodyClass: "profile-page",
                                                                                                                        data() {
                                                                                                                            return {
                                                                                                                                peterpet: {
                                                                                                                                    name: null,
                                                                                                                                    imgHash: "hash",
                                                                                                                                    breedOfDog: null,
                                                                                                                                    gender: null,
                                                                                                                                    birth: null,
                                                                                                                                    adoptionDate: null,
                                                                                                                                    isNeutering: null,
                                                                                                                                    furColor: null,
                                                                                                                                    vaccinationHistory: null,
                                                                                                                                    notes: null
                                                                                                                                },
                                                                                                                                wenddy : {
                                                                                                                                    name: "",
                                                                                                                                    phone: "",
                                                                                                                                    email: "",
                                                                                                                                    homeAddress: "",
                                                                                                                                    jumin: "",
                                                                                                                                    id : ""
                                                                                                                                },
                                                                                                                                tinkerbellType : null,
                                                                                                                                activePanel: this.tabName,

                                                                                                                                firstRRN: [],
                                                                                                                                firstRRNView: '',
                                                                                                                                secondRRN: [],
                                                                                                                                secondRRNView: '',

                                                                                                            
                                                                                                                                colors: [
                                                                                                                                    '혼합색',
                                                                                                                                    '검정&은색',
                                                                                                                                    '금색',
                                                                                                                                    '갈색',
                                                                                                                                    'STEEL BLUE&TAN',
                                                                                                                                    'BLUE&GOLD',
                                                                                                                                    '갈검색',
                                                                                                                                    '은색',
                                                                                                                                    '검정&금색',
                                                                                                                                    '기타'
                                                                                                                                ],

                                                                                                                                breeds: [
                                                                                                                                    '포메라니안',
                                                                                                                                    '말티즈',
                                                                                                                                    '요크셔테리어',
                                                                                                                                    '시츄',
                                                                                                                                    '골든리트리버',
                                                                                                                                    '비숑',
                                                                                                                                    '푸들',
                                                                                                                                    '닥스훈트',
                                                                                                                                    '보더콜리',
                                                                                                                                    '진돗개',
                                                                                                                                    '불독'
                                                                                                                                ],

                                                                                                                                withoutSetValue: null,
                                                                                                                                withSetValue: null,
                                                                                                                                native: null,

                                                                                                                                array: [],
                                                                                                                                file1: null,
                                                                                                                                file2: null,
                                                                                                                                radio: false,
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
                                                                                                                                ],
                                                                                                                                addressInfo: {
                                                                                                                                    postcode: "",
                                                                                                                                    buildingName: "",
                                                                                                                                    jibunAddress: "",
                                                                                                                                    roadAddress: "",
                                                                                                                                    zoneCode: "",
                                                                                                                                    detailAddress: ""
                                                                                                                                }
                                                                                                                            };
                                                                                                                        },

                                                                                                                        props: {
                                                                                                                            header: {
                                                                                                                                type: String,
                                                                                                                                default: require("@/assets/img/Main/registration-background.jpg")
                                                                                                                            },
                                                                                                                            img: {
                                                                                                                                type: String,
                                                                                                                                default: require("@/assets/img/faces/peter.jpg")
                                                                                                                            }
                                                                                                                        },
                                                                                                                        computed: {
                                                                                                                            headerStyle() {
                                                                                                                                return {backgroundImage: `url(${this.header})`};
                                                                                                                            }
                                                                                                                        },
                                                                                                                        filters: {
                                                                                                                            jsonStringify(val) {
                                                                                                                                return JSON.stringify(val)
                                                                                                                            }
                                                                                                                        },
                                                                                                                        methods: {
                                                                                                                            newPage: function () {
                                                                                                                                window.location.href = '#/complete'
                                                                                                                            },
                                                                                                                            validCheck: function () {
                                                                                                                                console.log(this.peterpet.name);
                                                                                                                                if (this.peterpet.name) {
                                                                                                                                    console.log('success check valid');
                                                                                                                                }
                                                                                                                            },

                                                                                                                            addDid: async function () {
                                                                                                                                
                                                                                                                                const peterpet = this.peterpet;
                                                                                                                                const address = this.$store.state.user.address;
                                                                                                                                const id = this.$store.state.user.id;
                                                                                                                                console.log('Regist.vue - address : ' + this.$store.state.user.address);
                                                                                                                                this.validCheck();
                                                                                                                                this
                                                                                                                                    .$http
                                                                                                                                    .post('http://localhost:3000/api/pet/regist', {
                                                                                                                                       peterpet : peterpet,
                                                                                                                                       address : address,
                                                                                                                                       id : id
                                                                                                                                    }, {"Content-Type": "application-json"})
                                                                                                                                    .then((res) => {
                                                                                                                                        console.log(res.data);
                                                                                                                                        if(res.data.checkReg){
                                                                                                                                            this.switchPanel("Wenddy");
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            alert("DID 등록에 실패하였습니다");
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                    .catch((err) => {
                                                                                                                                        console.error(err);
                                                                                                                                    });
                                                                                                                            },
                                                                                                                            registGov : function () {
                                                                                                                                console.log("regist gov api call");
                                                                                                                                const wenddy = this.wenddy;
                                                                                                                                wenddy.id = this.$store.state.user.id;
                                                                                                                                wenddy.homeAddress = this.addressInfo.roadAddress +" " + this.addressInfo.buildingName+" " + this.addressInfo.detailAddress;
                                                                                                                                wenddy.jumin = this.resultRRN()

                                                                                                                                this
                                                                                                                                    .$http
                                                                                                                                    .post('http://localhost:3000/api/user/regist', {
                                                                                                                                       wenddy : wenddy
                                                                                                                                    }, {"Content-Type": "application-json"})
                                                                                                                                    .then((res) => {
                                                                                                                                        console.log(res.data);
                                                                                                                                        if(res.data.checkReg){
                                                                                                                                            this.switchPanel("Tinkerbell");
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            alert("정부 등록에 실패하였습니다. 입력 정보를 다시 확인해주세요")
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                    .catch((err) => {
                                                                                                                                        console.error(err);
                                                                                                                                    });
                                                                                                                            },
                                                                                                                            selectTinkerbellType (type) {
                                                                                                                                this.tinkerbellType = type;
                                                                                                                                console.log(this.tinkerbellType);
                                                                                                                            },
                                                                                                                            
                                                                                                                            selectTinkerbell : function () {
                                                                                                                                const tinkerbellType = this.tinkerbellType;
                                                                                                                                const address = this.$store.state.user.address;;

                                                                                                                                console.log(tinkerbellType);

                                                                                                                                if(tinkerbellType === null){
                                                                                                                                    alert("칩을 선택해주세요!");
                                                                                                                                }
                                                                                                                                else {
                                                                                                                                    this
                                                                                                                                    .$http
                                                                                                                                    .post('http://localhost:3000/api/pet/tinkerbell', {
                                                                                                                                       tinkerbellType : tinkerbellType,
                                                                                                                                       address : address
                                                                                                                                    }, {"Content-Type": "application-json"})
                                                                                                                                    .then((res) => {
                                                                                                                                        console.log(res.data);
                                                                                                                                        if(res.data.checkUpdate){
                                                                                                                                            this.$router.push({name :"complete", query : {peterpet : res.data.peterpet, msg:res.data.msg}}).catch(()=>{});
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            alert("입력하신 정보가 잘못되었습니다.")
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                    .catch((err) => {
                                                                                                                                        console.error(err);
                                                                                                                                    });
                                                                                                                                }                                                                                                                                
                                                                                                                            },
                                                                                                                            
                                                                                                                            switchPanel: function (name) {
                                                                                                                                this
                                                                                                                                    .$refs
                                                                                                                                    .child
                                                                                                                                    .switchPanel(name);
                                                                                                                            },
                                                                                                                            getPostalcode() {
                                                                                                                                new window
                                                                                                                                    .daum
                                                                                                                                    .Postcode({
                                                                                                                                        oncomplete: (data) => {

                                                                                                                                            console.log(data)
                                                                                                                                            this.addressInfo = data;

                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                    .open()
                                                                                                                            },

                                                                                                                            setThumbnail: async function (event) {
                                                                                                                                console.log(event);
                                                                                                                                const reader = new FileReader();

                                                                                                                                reader.onload = (event) => {
                                                                                                                                    var img = document.createElement("img");
                                                                                                                                    console.log(img + "," + event);
                                                                                                                                    img.setAttribute("src", event.target.result);
                                                                                                                                    img.setAttribute("class", "col-lg-6");
                                                                                                                                    document
                                                                                                                                        .querySelector("div#image_container")
                                                                                                                                        .appendChild(img);
                                                                                                                                };

                                                                                                                                reader.readAsDataURL(event.target.files[0]);
                                                                                                                            },

                                                                                                                            firstRRNCheck(e) {
                                                                                                                                if (this.isNumber(e) && this.firstRRN.length < 6) {
                                                                                                                                    this
                                                                                                                                        .firstRRN
                                                                                                                                        .push(e)
                                                                                                                                } else if (e === null && this.firstRRN.length > 0) {
                                                                                                                                    this
                                                                                                                                        .firstRRN
                                                                                                                                        .pop()
                                                                                                                                }

                                                                                                                                this.firstRNNView = this
                                                                                                                                    .firstRRN
                                                                                                                                    .join('')
                                                                                                                            },
                                                                                                                            secondRRNCheck(e) {
                                                                                                                                if (this.isNumber(e) && this.secondRRN.length < 7) {
                                                                                                                                    this
                                                                                                                                        .secondRRN
                                                                                                                                        .push(e)
                                                                                                                                } else if (e === null && this.secondRRN.length > 0) {
                                                                                                                                    this
                                                                                                                                        .secondRRN
                                                                                                                                        .pop()
                                                                                                                                }

                                                                                                                                let convertStr = ''
                                                                                                                                if (this.secondRRN.length > 0) {
                                                                                                                                    convertStr = this.secondRRN[0] + String(this.secondRRN.join(''))
                                                                                                                                        .replace(
                                                                                                                                            /./g,
                                                                                                                                            '•'
                                                                                                                                        )
                                                                                                                                        .substr(1)
                                                                                                                                }
                                                                                                                                this.secondRRNView = convertStr
                                                                                                                            },
                                                                                                                            isNumber(data) {
                                                                                                                                if (/^[0-9]$/g.test(data)) {
                                                                                                                                    return true;
                                                                                                                                } else {
                                                                                                                                    return false;
                                                                                                                                }
                                                                                                                            },
                                                                                                                            validateRRN() {
                                                                                                                                if (this.firstRRN.length < 6 && this.secondRRN.length < 7) 
                                                                                                                                    return false

                                                                                                                                let N = 0
                                                                                                                                for (let i = 1; i < 7; i++) {
                                                                                                                                    N += this.firstRRN[i - 1] * (i + 1)
                                                                                                                                }

                                                                                                                                for (let j = 1; j < 7; j++) {
                                                                                                                                    if (j < 3) {
                                                                                                                                        N += this.secondRRN[j - 1] * (j + 7)
                                                                                                                                    } else {
                                                                                                                                        N += this.secondRRN[j - 1] * (j - 1)
                                                                                                                                    }
                                                                                                                                }

                                                                                                                                return ((11 - (N % 11)) % 10) === Number(this.secondRRN[6])
                                                                                                                            },
                                                                                                                            resultRRN() {
                                                                                                                                return this
                                                                                                                                    .firstRRN
                                                                                                                                    .join('') + '-' + this
                                                                                                                                    .secondRRN
                                                                                                                                    .join('')
                                                                                                                            }
                                                                                                                        }
                                                                                                                    };
                                                                                                                </script>

                                                                                                                <style lang="scss" scoped="scoped">

                                                                                                                    .md-checkbox {
                                                                                                                        display: flex;
                                                                                                                    }

                                                                                                                    table {
                                                                                                                        width: 100%;
                                                                                                                        table-layout: fixed;

                                                                                                                        th {
                                                                                                                            text-align: left;
                                                                                                                        }
                                                                                                                    }

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

                                                                                                                    .pop-address-search {
                                                                                                                        background-color: #ECECEC;
                                                                                                                    }
                                                                                                                    .pop-address-search .pop-address-search-inner .search-wrap {
                                                                                                                        background-color: #DCF3F4;
                                                                                                                    }
                                                                                                                    .pop-address-search .pop-address-search-inner .wrap input {
                                                                                                                        background-color: #FFFFFF;
                                                                                                                    }
                                                                                                                    .pop-address-search .pop-address-search-inner .wrap {
                                                                                                                        background-color: #FFFFFF;
                                                                                                                    }
                                                                                                                    .pop-address-search .pop-address-search-inner .result table.data-col tbody tr:nth-child(odd) td {
                                                                                                                        background: #FFFFFF;
                                                                                                                    }
                                                                                                                    .pop-address-search .pop-address-search-inner .result table.data-col tbody tr:nth-child(even) td {
                                                                                                                        background: #FFFFFF;
                                                                                                                    }

                                                                                                                    .joinForm {
                                                                                                                        width: 460px;
                                                                                                                        margin: 0 auto;
                                                                                                                    }
                                                                                                                    .ul.join_box {
                                                                                                                        border: 1px solid #ddd;
                                                                                                                        background-color: #fff;
                                                                                                                    }
                                                                                                                    .checkBox,
                                                                                                                    .checkBox > ul {
                                                                                                                        position: relative;
                                                                                                                    }
                                                                                                                    .checkBox > ul > li {
                                                                                                                        float: left;
                                                                                                                    }
                                                                                                                    .checkBox > ul > li:first-child {
                                                                                                                        width: 85%;
                                                                                                                        padding: 15px;
                                                                                                                        top: 50%;
                                                                                                                        right: 30px;
                                                                                                                        margin-top: -12px;
                                                                                                                    }
                                                                                                                    .checkBox textarea {
                                                                                                                        width: 96%;
                                                                                                                        height: 90px;
                                                                                                                        margin: 0 2%;
                                                                                                                        background-color: #f7f7f7;
                                                                                                                        color: #888;
                                                                                                                        border: none;
                                                                                                                    }
                                                                                                                    .footBtwrap {
                                                                                                                        margin-top: 15px;
                                                                                                                    }
                                                                                                                    .footBtwrap > li > button {
                                                                                                                        display: block;
                                                                                                                        width: 50%;
                                                                                                                        height: 100%;
                                                                                                                        font-size: 20px;
                                                                                                                        text-align: center;
                                                                                                                        line-height: 60px;
                                                                                                                    }
                                                                                                                    .fpmgBt1 {
                                                                                                                        background-color: #fff;
                                                                                                                        color: #fff;
                                                                                                                    }
                                                                                                                    .fpgmBt2 {
                                                                                                                        background-color: lightseagreen;
                                                                                                                        color: #fff;
                                                                                                                    }
                                                                                                                    .container {
                                                                                                                        top: -80px;
                                                                                                                    }
                                                                                                                    input[id="chk"] {
                                                                                                                        position: relative;
                                                                                                                        margin-left: 20px;
                                                                                                                    }
                                                                                                                    textarea {
                                                                                                                        width: 700px;
                                                                                                                        height: 150px;
                                                                                                                        resize: none;
                                                                                                                        /* 크기고정 */
                                                                                                                        /* resize: horizontal; // 가로크기만 조절가능 

                                                                                                                         resize: vertical;  세로크기만 조절가능  */
                                                                                                                    }
                                                                                                                    .block:not(:first-child) {
                                                                                                                        margin-top: 32px;
                                                                                                                    }
                                                                                                                    .search {
                                                                                                                        margin-left: 30px;
                                                                                                                        max-width: 500px;
                                                                                                                    }

                                                                                                                    .title {
                                                                                                                        font: 1.2em;
                                                                                                                    }

                                                                                                                    .input {
                                                                                                                        width: 70%;
                                                                                                                        padding: 10px 20px;
                                                                                                                        margin: 5px 0;
                                                                                                                        box-sizing: 80px;
                                                                                                                        border: solid 2px #cccccc;
                                                                                                                        border-radius: 8px;
                                                                                                                    }

                                                                                                                    input[type="text"] {
                                                                                                                        width: 70%;
                                                                                                                        padding: 10px 20px;
                                                                                                                        margin: 5px 0;
                                                                                                                        box-sizing: 80px;
                                                                                                                        border: solid 2px #cccccc;
                                                                                                                        border-radius: 8px;
                                                                                                                    }

                                                                                                                    input[type="tel"] {
                                                                                                                        width: 70%;
                                                                                                                        padding: 10px 20px;
                                                                                                                        margin: 5px 0;
                                                                                                                        box-sizing: 80px;
                                                                                                                        border: solid 2px #cccccc;
                                                                                                                        border-radius: 8px;
                                                                                                                    }

                                                                                                                    input[type="button"] {
                                                                                                                        margin-left: 15px;
                                                                                                                        border-radius: 8px;
                                                                                                                        border: solid 2px #cccccc;
                                                                                                                    }

                                                                                                                    input[type="submit"] {
                                                                                                                        border-radius: 8px;
                                                                                                                        border: solid 2px #cccccc;
                                                                                                                    }

                                                                                                                    input[type="email"] {
                                                                                                                        width: 70%;
                                                                                                                        padding: 10px 20px;
                                                                                                                        margin: 5px 0;
                                                                                                                        box-sizing: 80px;
                                                                                                                        border: solid 2px #cccccc;
                                                                                                                        border-radius: 8px;
                                                                                                                    }

                                                                                                                    div#selectbutton {
                                                                                                                        text-align: center;
                                                                                                                    }
                                                                                                                    .b-button {
                                                                                                                        padding-left: 30px;
                                                                                                                    }
                                                                                                                </style>