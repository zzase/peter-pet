<template>
	<div class="post-list-page">
		<BoardList></BoardList>
		<post-list :posts="posts"/>
	</div>
</template>

<script>  
import BoardList from '@/components/board/BoardList.vue'
import api from '@/api'

export default {
	data() {
		return {
			posts: []
		}
	},
	name: 'BoardListPage',
	components: { BoardList },

	created () {
		api.get('/posts')
		.then(res => {
			this.posts = res.data
		})
	}
}
</script>

<style>
.post-list-page {
	position: relative;
	left: 30%;
}