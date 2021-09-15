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

                                                    <input type="tel" name="tlno" id="tlno" title="전화번호를 입력하세요." placeholder="010*-0000*-0000" pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}" maxlength="13">

<!-- 
                                                    <form name="form-name" action="" method="post">
                                                        <input type='tel' name='phone1' />-<input type='tel' name='phone2' />-<input type='tel' name='phone3' />
                                                    </form>                                                
                                                    <md-input v-model="phonenumber" type="email"></md-input> -->
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <label><md-icon>email</md-icon>Email</label>
                                                    <input type='email' name='userEmail' />
                                                   
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
                                                          <input type="text" id="zipNo" name="zipNo" readonly style="width:100px" v-model="addressInfo.zonecode">
                                                          <input type="button"  value="주소검색" @click="getPostalcode()">
                                                       </td>
                                                        </tr>
                                                     <tr>
                                                       <th>도로명주소</th>
                                                   <td><input type="text" id="roadAddrPart1" style="width:85%" v-model="addressInfo.roadAddress"></td>
                                                    </tr>
                                                    <tr>
                                                           <th>상세주소</th>
                                                       <td>
                                                          <input type="text" id="addrDetail" style="width:40%" v-model="addressInfo.buildingName">
                                                          <input type="text" id="roadAddrPart2"  style="width:40%" value="">
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                             </form>
                                                    </body>
                                                </md-field>
                                                <md-field class="md-form-group" slot="inputs">
                                                    <div id="app">
                                                    <input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="6" @input="firstRRNCheck($event.data)" v-model="firstRRNView" class="tf_register" placeholder="주민번호 앞자리"> -
                                                    <input type="text" pattern="[0-9]*" inputmode="numeric" maxlength="7" @input="secondRRNCheck($event.data)" v-model="secondRRNView" placeholder="OOOOOOO">
                                                    </div>
                                                    <label><md-icon>lock_outline</md-icon>주민등록번호</label>
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