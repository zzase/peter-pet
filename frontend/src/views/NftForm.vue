<template>
  <div class="wrapper">
    <parallax class="section page-header" :style="headerStyle"> </parallax>

    <div class="main main-raised">
       <div class="section">
           <div class="md-layout">
               <div class="d-container">
                   <div class="header">
           <h1> this is NFT page</h1>
                   </div>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>
           <br>

           <div class="dropdown">
               <h5>select your did*</h5>
                <!-- <select
                v-model="this.value"
                class="custom-select"
                v-bind:id="input_id"
                v-on:input="updateValue($event.target.value)"
                 >   
                <option v-for="(item, index) in items" :value="index"{{ item }}</option>
            </select> -->
           </div>
           <br>
           <br>
           <br>
           <br>

            <div class="health-record">
                <label class="health-r"> Please write down about health-record* </label>
            <b-form-textarea
                id="textarea-rows"
                placeholder="Tall textarea"
                rows="8"
            ></b-form-textarea>
            </div>
            <div class="description">
                <label class="description-dog"> Description about dog* </label>
            <b-form-textarea
                id="textarea-rows"
                placeholder="Tall textarea"
                rows="8"
            ></b-form-textarea>
            </div>
          </div>
        </div>
       </div>
     </div>
</div>
</template>
            


<script>


export default{
    name: "SelectBox",

    data() {
        return {
            
        };
    },
    props: ['value', 'items', 'input_id'],

    methods: {
        updateValue: function (value) {
                this.$emit('input', value);
    }
    },
    components: {
    },


}

</script>

<style>
.body {
    height: 100%;
    margin: 0px;
}
.d-container {
    position: relative;
    left: 47%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
}
.dropdown {
    z-index: 1;
    position:absolute;
    margin-top: 50px;
    margin-left: 100px;
    width: 1000px;
}
.health-record {
    position: absolute;
    width: 60%;
    margin-left: 330px;
}
.health-r {
    float: left;
}
.description {
    position: relative;
    width: 60%;
    margin-left: 330px;
    margin-top: 300px;
}
.description-dog {
    color: black;
    float: left;
}
</style>
