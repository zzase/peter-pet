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
                                                <md-field class="md-form-group" slot="inputs">
                                                    <div class="container">
                                                        <div class="md-layout">
                                                    <div class="md-layout-item md-size-66 md-xsmall-size-100 ">
                                                            <form method="post" action="upload" enctype="multipart/form-data">
                                                            <h3 class="info-title">사진등록</h3>
                                                            <div>
                                                            <!-- Styled -->
                                                            <b-form-file
                                                            v-model="file1"
                                                            :state="Boolean(file1)"
                                                            placeholder="Choose a file or drop it here..."
                                                            drop-placeholder="Drop file here..."
                                                            ></b-form-file>
                                                            <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
                                                            </div>
                                                            <br><br>
                                                                <input type="submit">
                                                                </form>
                                                        </div>
                                                    </div>         
                                                    </div>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                   
                                                    <label> <md-icon>face</md-icon>이름</label>
                                                    <md-input v-model="firstname"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label><md-icon>pets</md-icon>모색</label>
                                                      <div>
                                                        <md-autocomplete
                                                        v-model="selectedEmployee"
                                                        :md-options="employees"
                                                        md-layout="box"
                                                        md-dense>
                                                        <label>--견종을 선택해주세요--</label>
                                                        </md-autocomplete>
                                                      </div>
                                                      
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label for="label-a"><md-icon>wc</md-icon>성별</label>
                                                      <div>
                                                          <br>
                                                        <md-radio v-model="radio" :value="false">남자아이<md-icon>male</md-icon></md-radio><br>
                                                    <md-radio v-model="radio" value="my-radio">여자아이<md-icon>female</md-icon></md-radio>
                                                    </div>
                                                        <!-- <ul class="clearfix">
                                                        <li>남자아이<md-icon>male</md-icon></li>
                                                    <input type="checkbox" name="chkAll" id="chk" class="chkAll">
                                                        </ul>
                                                        <ul class="clearfix">
                                                        <li>여자아이<md-icon>female</md-icon></li>
                                                    <input type="checkbox" name="chkAll" id="chk" class="chkAll">
                                                        </ul> -->
                                                <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                     <md-datepicker v-model="selectedLabeled">
                                                        <label>생년월일을 입력해주세요</label>
                                                        </md-datepicker>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <md-datepicker v-model="selectedLabeled">
                                                        <label>입양날짜를 입력해주세요</label>
                                                        </md-datepicker>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label for="label-a"><md-icon>task_alt</md-icon>중성화 여부</label>
                                                    <div>
                                                    <br>
                                                        <md-radio v-model="radio" :value="false">중성화 O</md-radio><br>
                                                    <md-radio v-model="radio" value="my-radio">중성화 X</md-radio>
                                                    <md-input v-model="password"></md-input>
                                                    </div>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label> <md-icon>saved_search</md-icon>모색</label>
                                                    <div>
                                                        <md-autocomplete
                                                        v-model="selectedColor"
                                                        :md-options="colors"
                                                        md-layout="box"
                                                        md-dense>
                                                        <label>--모색을 선택해주세요--</label>
                                                        </md-autocomplete>
                                                      </div>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    
                                                   <md-field>
                                                <label>!--반려견의 특이사항에 대해 알려주세요--!</label>
                                                <md-textarea v-model="aboutme"></md-textarea>
                                                </md-field>
                                                </md-field>
                                                <label>접종내역</label>
                                                <md-field class="md-form-group" slot="inputs">
                                                    
                                                    <label for="name"><md-icon>medical_services</md-icon>접종내역</label> 
                                                    <br><br>
                                                <div>
                                                 <md-checkbox v-model="array" value="1">종합백신(홍역/간염/장염/기관지염/신장염) </md-checkbox>
                                                 <md-checkbox v-model="array" value="2">코로나 장염 백신</md-checkbox>
                                                 <md-checkbox v-model="boolean">켄넬코프 백신</md-checkbox>
                                                 <md-checkbox v-model="string" value="my-checkbox">광견병 백신</md-checkbox>
                                                 <md-checkbox v-model="boolean">구충제</md-checkbox>
                                                 <md-checkbox v-model="boolean">심장사상충 예방</md-checkbox>
                                                 <md-checkbox v-model="boolean">종합구충</md-checkbox>
                                                </div>
                                                </md-field>
                                                    <md-button slot="footer" class="md-success md-lg">
                                                    등록완료
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
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label><md-icon>person_outline</md-icon>이름</label>
                                                    <md-input v-model="name"></md-input>
                                                </md-field>
                                                 <md-field class="md-form-group" slot="inputs">
                                                    <label><md-icon>whatsapp</md-icon>연락처</label>
                                                    <form name="form-name" action="" method="post">
                                                        <input type='tel' name='phone1' />-<input type='tel' name='phone2' />-<input type='tel' name='phone3' />
                                                    </form>                                                
                                                    <md-input v-model="phonenumber" type="email"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    
                                                    <label><md-icon>email</md-icon>Email</label>
                                                    <md-input v-model="email" type="email"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label><md-icon>home</md-icon>주소</label>
                                                    <title>주소 입력 샘플</title>
                                                    <body>
                                                        <form name="form" id="form" method="post">
                                               <table >
                                               <colgroup>
                                                <col style="width:20%"><col>
                                                   </colgroup>
                                                      <tbody>
                                                        <tr>
                                                           <th>우편번호</th>
                                                       <td>
                                                           <input type="hidden" id="confmKey" name="confmKey" value=""  >
                                                          <input type="text" id="zipNo" name="zipNo" readonly style="width:100px">
                                                          <input type="button"  value="주소검색" onclick="goPopup();">
                                                       </td>
                                                        </tr>
                                                     <tr>
                                                       <th>도로명주소</th>
                                                   <td><input type="text" id="roadAddrPart1" style="width:85%"></td>
                                                    </tr>
                                                    <tr>
                                                           <th>상세주소</th>
                                                       <td>
                                                          <input type="text" id="addrDetail" style="width:40%" value="">
                                                          <input type="text" id="roadAddrPart2"  style="width:40%" value="">
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                             </form>
                                                    </body>
                                                    <md-input v-model="phonenumber" type="email"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label><md-icon>lock_outline</md-icon>주민등록번호</label>
                                                    <md-input v-model="password"></md-input>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                <form action="" id="joinForm">
                                                <ul class="join_box">
                                                    <li class="checkBox check01">
                                                        <ul class="clearfix">
                                                        <li>이용약관, 개인정보 수집 및 이용,
                                                            위치정보 이용약관(선택), 프로모션 안내
                                                            메일 수신(선택)에 모두 동의합니다.</li>
                                                            <li class="checkAllBtn">
                                                    <input type="checkbox" name="chkAll" id="chk" class="chkAll">
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="checkBox check02">
                                                         <ul class="clearfix">
                                                             <li>이용약관 동의(필수)</li>
                                                                <li class="checkBtn">
                                                                 <input type="checkbox" name="chk"> 
                                                             </li>
                                                        </ul>
                                                         <textarea name="" id="">여러분을 환영합니다.
                                                        피터펫 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 피터펫 서비스의 이용과 관련하여 피터펫 서비스를 제공하는 피터펫 주식회사(이하 ‘피터펫’)와 이를 이용하는 피터펫 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 피터펫 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                                        </textarea>
                                                    </li>
                                                    <li class="checkBox check03">
                                                        <ul class="clearfix">
                                                             <li>개인정보 수집 및 이용에 대한 안내(필수)</li>
                                                                  <li class="checkBtn">
                                                                    <input type="checkbox" name="chk">
                                                            </li>
                                                         </ul>
                                                        <textarea name="" id="">여러분을 환영합니다.
                                                        피터펫 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 피터펫 서비스의 이용과 관련하여 피터펫 서비스를 제공하는 피터펫 주식회사(이하 ‘피터펫’)와 이를 이용하는 피터펫 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 피터펫 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                                        </textarea>
                                                     </li>
                                                     <li class="checkBox check03">
                                                        <ul class="clearfix">
                                                            <li>위치정보 이용약관 동의(선택)</li>
                                                                <li class="checkBtn">
                                                                    <input type="checkbox" name="chk">
                                                                </li>
                                                        </ul>
                                                        <textarea name="" id="">여러분을 환영합니다.
                                                        피터펫 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 피터펫 서비스의 이용과 관련하여 피터펫 서비스를 제공하는 피터펫 주식회사(이하 ‘피터펫’)와 이를 이용하는 피터펫 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 피터펫 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                                                        </textarea>
                                                    </li>
                                                     <li class="checkBox check04">
                                                        <ul class="clearfix">
                                                            <li>이벤트 등 프로모션 알림 메일 수신(선택)</li>
                                                                <li class="checkBtn">
                                                                    <input type="checkbox" name="chk">
                                                                </li>                                                            
                                                        </ul>

                                                      </li>
                                                    </ul>
                                                  </form>
                                                </md-field>
                                                <md-button slot="footer" class="md-success md-lg">
                                                    동의
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
                                                     <div class="block">
                                                <div class="title">Without <code>:true-value</code> / <code>:false-value</code></div>
                                                <div class="input">
                                                <md-checkbox v-model="withoutSetValue">{{withoutSetValue|jsonStringify}}</md-checkbox>
                                                </div>
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
                                                <div class="block">
                                                <div class="title">Without <code>:true-value</code> / <code>:false-value</code></div>
                                                <div class="input">
                                                <md-checkbox v-model="withoutSetValue">{{withoutSetValue|jsonStringify}}</md-checkbox>
                                                </div>
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

        Vue.use(checkbox);
        Vue.use(VMdDateRangePicker);



        function setThumbnail(event){
		var reader = new FileReader();
		
		reader.onload = function(event){
			var img = document.createElement("img");
			img.setAttribute("src", event.target.result);
			img.setAttribute("class", "col-lg-6");
			document.querySelector("div#image_container").appendChild(img);
		};
		
		reader.readAsDataURL(event.target.files[0]);
	}

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
                    ]
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

       
        .pop-address-search { background-image: url(http://www.0000.com/img/backImg.png);}

        .pop-address-search .pop-address-search-inner .logo { background: url(http://www.0000.com/img/logo.png) no-repeat; background-position:center; }


        .pop-address-search { background-color:#ECECEC; }

        .pop-address-search .pop-address-search-inner .search-wrap { background-color:#DCF3F4; }

        .pop-address-search .pop-address-search-inner .wrap input { background-color:#FFFFFF; }

        .pop-address-search .pop-address-search-inner .wrap { background-color:#FFFFFF; }

        .pop-address-search .pop-address-search-inner .result table.data-col tbody tr:nth-child(odd) td {background:#FFFFFF}

        .pop-address-search .pop-address-search-inner .result table.data-col tbody tr:nth-child(even) td {background:#FFFFFF}

    </style>