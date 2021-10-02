<template>
    <div v-if="peterpet">
        <p>{{peterpet}}</p>
        <!-- <p>{{peterpet.gender}}</p>
        <p>{{peterpet.birth}}</p> -->
    </div>
    <div v-else>
        <h1>result</h1>
    </div>
</template>

<script>
export default {
    created() {
        this.$http.get('/api/pet')
        .then((res) => {
            const peterpet = res.data.pname;
            console.log(res.data);
            if(peterpet) {
                this.$store.commit("setPeterpet",peterpet);
            }else {
                this.$router.push({name:"test"});
            }
        })
        .catch((err)=> {
            console.error(err);
        });
    },
    computed : {
        peterpet() {return this.$store.getters.peterpet;}
    }
}
</script>
