<template>
<div class="wrapper">
      <parallax class="section page-header" :style="headerStyle">
     </parallax>
   <div class="main main-raised">
      <div class="section">
		  <h1>Neverland Board</h1>
	<div class="post-list-page">
		
	<div>
		<table>
			<colgroup>
			<col style="width: 15%:"/>
			<col style="width: 60%;"/>
			<col style="width: 10%;"/>
			<col style="width: 20%;"/>
			</colgroup>
			<thead>
				<tr>
					<th style="border: 1px solid gray;"> number </th>
					<th style="border: 1px solid gray;"> title </th>
					<th style="border: 1px solid gray;"> writer </th>
					<th style="border: 1px solid gray;"> date </th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="post in posts" :key="post.id">
                    <td scope="col">{{ board.id }}</td>
                    <td scope="col">
                        <router-link :to="{ name: 'BoardListPage' }">{{ board.title }}</router-link>	
                        [{{ post.comments.length }}]
                    </td>
                    <td scope="col">{{ board.user.name }}</td>
                    <td scope="col">{{ board.createdAt }}</td>
                    
                    
				</tr>
			</tbody>
		</table>
	</div>
	</div>
	  </div>
   </div>
</div>
			
</template>

<script>
export default {
	name: 'BoardList',
    porps: {
        posts: {
            type: Array
        }
    }
}
</script>

<style>
.post-list-page {
	position: relative;
	text-align: center;
    
}
</style>