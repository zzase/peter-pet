<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-99 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <form @submit.prevent="submit">
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Test</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">Or Be Classical</p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>imgUrl</label>
                <md-input v-model="peterpet.imgHash"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>이름</label>
                <md-input v-model="peterpet.name"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>생년월일</label>
                <md-input v-model="peterpet.birth"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>견종</label>
                <md-input v-model="peterpet.breedOfDog"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>성별</label>
                <md-input v-model="peterpet.gender"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>입양일</label>
                <md-input v-model="peterpet.adoptionDate"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>접종내역</label>
                <md-input v-model="peterpet.vaccinationHistory"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>특이사항</label>
                <md-input v-model="peterpet.notes"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>모색</label>
                <md-input v-model="peterpet.furColor"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>중성화 여부</label>
                <md-input v-model="peterpet.isNeutering"></md-input>
              </md-field>

              <md-button slot="footer" class="md-simple md-success md-lg" type="submit">
                Get Started
              </md-button>
            </login-card>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";


export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      peterpet:{
        name: null,
        imgHash: null,
        breedOfDog: null,
        gender: null,
        birth: null,
        adoptionDate: null,
        isNeutering: null,
        furColor: null,
        vaccinationHistory: null,
        notes: null
      },
    };
  },

  methods: {
    validCheck : function() {
      console.log(this.peterpet.name);
      if(this.peterpet.name) {
        console.log('success check valid');
      }
    },

    submit : async function() {
      const peterpet = this.peterpet;
      this.validCheck();
      this.$http.post('/api/pet',{peterpet},{"Content-Type":"application-json"})
      .then((res) => {
        console.log(res.data);
        this.$store.commit("setPeterpet",res.data.peterpet);
        this.$router.push({name : "result"});
        //this.$router.push('/pet',{peterpet: this.peterpet});
      })
      .catch((err)=>{
        console.error(err);
      });
    }
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
