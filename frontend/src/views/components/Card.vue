       <template> 
          <div id="app1">
              <div class="card">
              <img id ="card" src="@/assets/img/Regist/card.png" @click="modal = false" style="cursor:pointer;"> 
              </div>
              <div class="number">
                <p>{{peterpet.did}}</p>
              </div>
                <div class="name">
                  <p> {{ peterpet.name }} </p>
                </div>
                <div class="number">
                  <p> {{ peterpet.registerNumber }} </p>
                </div>
                <div class="imghash">
                  <p> {{ peterpet.imgHash }} </p>
                </div>
                <div class="birth">
                  <p> {{ peterpet.birth }} </p>
                </div>
                <div class="gender">
                  <p> {{ peterpet.gender }} </p>
                </div>
                <div class="breedOfDog">
                  <p> {{ peterpet.breedOfDog }} </p>
                </div>
                <div class="furColor">
                  <p>{{ peterpet.furColor }} </p>
                </div>
                <div class="adoptionDate">
                  <p> {{ peterpet.adoptionDate }} </p>
                </div>
                <div class="isNeutering">
                  <p> {{ peterpet.isNeutering }} </p>
                </div>
                <div class="vaccinationHistory">
                  <p> {{ peterpet.vaccinationHistory }} </p>
                </div>
                <div class="notes">
                  <p> {{ peterpet.notes }} </p>
                </div>
             </div>
             </template>