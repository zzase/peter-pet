                             <template slot="tab-pane-3">
                                    <div class="md-layout">
                                        <div class="md-layout-item md-size-100 ml-auto">
                                            <login-card header-color="red">
                                                <h2 slot="title" class="card-title">Tinkerbell</h2>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <div class="md-layout">
                                                    <div class="md-layout-item md-medium-size-60 md-small-size-100">
                                                    <div class="info">
                                                    <img alt="brand" src="@/assets/img/Regist/necklace1.jpg">
                                                    <h4 class="title text-center">외장칩 목걸이</h4>
                                                    <p>
                                                        Divide details about your product or agency work into parts.
                                                        Write a few lines about each one. A paragraph describing a
                                                        feature will be enough.
                                                    </p>
                                                    <div>#selectbutton
                                                      <b-button :pressed="true" variant="success">외장칩 목걸이</b-button>
                                                    </div>


                                                    </div>
                                                </div>
                                                
                                                <div class="md-layout-item md-medium-size-60 md-small-size-100">
                                                    <div class="info">
                                                    <img alt="brand" src="@/assets/img/Regist/necklace2.jpg">
                                                    <h4 class="title text-center">내장칩 목걸이</h4>
                                                    <p>
                                                        Divide details about your product or agency work into parts.
                                                        Write a few lines about each one. A paragraph describing a
                                                        feature will be enough.
                                                    </p>
                                                    <div>#selectbutton
                                                    <b-button :pressed="true" variant="success">내장칩 목걸이</b-button>
                                                    </div>



                                                    </div>
                                                </div>
                                                <div>
                                                    </div>

                                                    </div>
                                                </md-field>
                                                
                                                <md-button slot="footer" class="md-success md-lg">
                                                   선택 완료
                                                </md-button>
                                            </login-card>
                                        </div>
                                    </div>
                                </template>
     <script>
        
        import {Tabs} from "@/components";
        import {LoginCard} from "@/components";
        import Vue from 'vue';
        import VMdDateRangePicker from "v-md-date-range-picker";
        import checkbox from "@/assets/js/checkbox.js";

        Vue.use(checkbox);
        Vue.use(VMdDateRangePicker);


        

        export default {
            name: 'TrueFalseValue',
            name: 'AutocompleteBox',

            components: {
                Tabs,
                LoginCard,
            },


            bodyClass: "profile-page", 
            data() {
                return {
                    firstRRN: [],
                    firstRRNView: '',
                    secondRRN: [],
                    secondRRNView: '',


                    selectedColor: null,
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

                    selectedEmployee: null,
                    employees: [
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
                    '불독'],

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
                    addressInfo :{
                        postcode:"",
                        buildingName:"",
                        jibunAddress:"",
                        roadAdress:"",
                        zoneCode:""
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
                jsonStringify (val) {
                return JSON.stringify(val)
                }
            },
            methods :{
                getPostalcode(){
                    new window.daum.Postcode({
                        oncomplete: (data) => {
  
                            console.log(data)
                            this.addressInfo = data;

                        }
                    }).open()
                },

              setThumbnail: async function (event){
                  console.log(event);
                const reader = new FileReader();
		
		        reader.onload = (event) =>{
			        var img = document.createElement("img");
                    console.log(img + ","+event);
			        img.setAttribute("src", event.target.result);
			        img.setAttribute("class", "col-lg-6");
			        document.querySelector("div#image_container").appendChild(img);
		    };
		
		    reader.readAsDataURL(event.target.files[0]);
		},



                firstRRNCheck(e) {
                if (this.isNumber(e) && this.firstRRN.length < 6) {
                    this.firstRRN.push(e)
                } else if (e === null && this.firstRRN.length > 0) {
                    this.firstRRN.pop()
                }

                this.firstRNNView = this.firstRRN.join('')
                },
                secondRRNCheck(e) {
                if (this.isNumber(e) && this.secondRRN.length < 7) {
                    this.secondRRN.push(e)
                } else if (e === null && this.secondRRN.length > 0) {
                    this.secondRRN.pop()
                }

                let convertStr = ''
                if (this.secondRRN.length > 0) {
                    convertStr = this.secondRRN[0] + String(this.secondRRN.join('')).replace(/./g, '•').substr(1)
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
                if (this.firstRRN.length < 6 && this.secondRRN.length < 7) return false

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
                return this.firstRRN.join('') + '-' + this.secondRRN.join('')
                }
            },

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

        .pop-address-search { background-color:#ECECEC; }
        .pop-address-search .pop-address-search-inner .search-wrap { background-color:#DCF3F4; }
        .pop-address-search .pop-address-search-inner .wrap input { background-color:#FFFFFF; }
        .pop-address-search .pop-address-search-inner .wrap { background-color:#FFFFFF; }
        .pop-address-search .pop-address-search-inner .result table.data-col tbody tr:nth-child(odd) td {background:#FFFFFF}
        .pop-address-search .pop-address-search-inner .result table.data-col tbody tr:nth-child(even) td {background:#FFFFFF}

        .joinForm {
            width: 460px;margin: 0 auto;
        }
        .ul.join_box {
            border: 1px solid #ddd;background-color: #fff;
        }
        .checkBox, .checkBox>ul{position:relative;}
        .checkBox>ul>li{float: left;}
        .checkBox>ul>li:first-child{
            width:85%;
            padding:15px;
            top:50%;
            right:30px;
            margin-top: -12px;
        }
        .checkBox textarea{
            width: 96%;
            height:90px;
            margin: 0 2%;
            background-color: #f7f7f7;
            color: #888;
            border: none;
        }
        .footBtwrap{
            margin-top:15px;
        }
        .footBtwrap>li>button{
            display:block;
            width: 50%;
            height: 100%;
            pfont-size: 20px;
            text-align: center;
            line-height: 60px;
        }
        .fpmgBt1{
            background-color: #fff;
            color: #fff
        }
        .fpgmBt2{
            background-color: lightseagreen;
            color: #fff
        }
        .container{
            top: -80px;
        }
        input[id="chk"] {
            position: relative;
            margin-left: 20px;
        }
        textarea{
            width:700px; 
            height:150px; 
            resize:none;/* 크기고정 */ 
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

        .input { width: 70%; padding: 10px 20px; margin: 5px 0; box-sizing: 80px; border: solid 2px #cccccc; border-radius: 8px;  }

        input[type="text"] {width: 70%; padding: 10px 20px; margin: 5px 0; box-sizing: 80px; border: solid 2px #cccccc; border-radius: 8px; }

        input[type="tel"] { width: 70%; padding: 10px 20px; margin: 5px 0; box-sizing: 80px; border: solid 2px #cccccc; border-radius: 8px; }

        input[type="button"] {margin-left:15px;border-radius: 8px; border: solid 2px #cccccc;}

        input[type="submit"] {border-radius: 8px; border: solid 2px #cccccc;}

        input[type="email"] {width: 70%; padding: 10px 20px; margin: 5px 0; box-sizing: 80px; border: solid 2px #cccccc; border-radius: 8px;}

        div#selectbutton {
            text-align: center;
        }
       
    </style>

    