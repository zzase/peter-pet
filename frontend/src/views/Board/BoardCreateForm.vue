<template>
<div class="wrapper">
      <parallax class="section page-header" :style="headerStyle">
          <div class="container">
        <div font-family="serif" style="color:darkgreen;">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1>Find Home<br>for Peter-Pet</h1>
          </div>
        </div>
          </div>
     </parallax>
   <div class="main main-raised">
      <div class="section">
          <div class="back">
          <img src="@/assets/img/Regist/white.jpg">
          </div>
	<div class="board"> 
		<h1>실종 게시글 작성하기</h1><br><br>

		<div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="70%" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>제목</th>
						<td><input type="text" v-model="subject" ref="subject" /></td>
					</tr>
					<tr>
						<th>내용</th>
						<td><textarea v-model="cont" ref="cont"></textarea></td>
					</tr>
				</table>
			</form>
        </div>
		</div>
      <div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
			<a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
		</div>	
   </div>

		
	</div>
    </div>
</template>

<script>
export default {
    props: {
    header: {
      type: String,
      default: require("@/assets/img/Board/board.jpg")
    }
    },
     computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

	data() { //변수 생성
		return{
			board_code:'news'
			,subject:''
			,cont:''
			,id:'admin'
			,form:'' //form 전송 데이터
		}
	}
    
	,methods:{
		fnList(){ //리스트 화면으로 이동 함수
			this.$router.push({path:'./list',query:this.body});
			
		}
		,fnAddProc() { //등록 프로세스
			if(!this.subject) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.subject.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = { //backend로 전송될 POST 데이터
				board_code:this.board_code
				,subject:this.subject
				,cont:this.cont
				,id:this.id
			} 
			
			this.$axios.post('http://localhost:3000/api/board',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('등록되었습니다.');
					this.fnList();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
			
		}
	}	
}
</script>

<style scoped>
	.tbAdd{
        border-top:1px solid #888;
        }
	.tbAdd th, .tbAdd td{
        border-bottom:1px solid #eee; 
        padding:5px 0;
        }
	.tbAdd td{
        padding:10px 10px; 
        box-sizing:border-box;
        }
	.tbAdd td input{
        width:100%;
         min-height:30px;
          box-sizing:border-box;
           padding:0 10px;
           }
	.tbAdd td textarea{
        width:100%;
         min-height:500px;
          padding:10px;
           box-sizing:border-box;
           }
	.btnWrap{
        position: relative;
        margin-bottom: 30%;
        text-align:center;
         margin:20px 0 0 0;
         }
	.btnWrap a{
        margin:0 10px;
        }
	.btnAdd {
        background:#43b984
        }
	.btnDelete{
        background:#f00;
        }
    .back {
        position: relative;
        height: 50%;
    }
    .board {
        z-index: 1;
        position: absolute;
        width: 120%;
        height: 120%;
        left: 25%;
        top: 15%;
    }
</style>