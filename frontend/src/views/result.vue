<template>
    <div>
        <p>{{peterpet.name}}</p>
        <p>{{peterpet.gender}}</p>
        <p>{{peterpet.birth}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            peterpet: null,
        };
    },
    created() {
        this.$http.get('/api/pet')
        .then((res) => {
            const peterpet = res.data.peterpet;
            if(peterpet) this.peterpet = peterpet;
        })
        .catch((err)=> {
            console.error(err);
        });
    }
}
</script>
