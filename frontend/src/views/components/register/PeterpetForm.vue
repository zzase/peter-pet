                 
                 
                 
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
                                                            <ImagePreview></ImagePreview>
                                                            <div>

                                                        <div class="form-group">
                                                        <input class="form-control form-control-user" type="file" 
                                                            name="product_image" id="product_image" v-on:change="setThumbnail(event);">
                                                        </div>
                                                        <div id="image_container"></div>
                                                                  
                                                            <!-- <b-form-file
                                                            v-model="file1"
                                                            :state="Boolean(file1)"
                                                            placeholder="Choose a file or drop it here..."
                                                            drop-placeholder="Drop file here..."
                                                            ></b-form-file>
                                                            <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div> -->
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
                                                    <label><md-icon>pets</md-icon>견종</label>
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


