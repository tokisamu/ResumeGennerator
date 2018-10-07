<template>
	<div class="self-comment">
		<FormTitle>自我评价</FormTitle>
		<el-row>
			<el-col :offset="3" :span="18"><p style="font-size:12px;color:#909399">简单评价、介绍一下自己作为其他材料的补充，不要超过200字哦~</p></el-col>
		</el-row>
		<el-row>
			<el-col :offset="3" :span="18"><el-input type="textarea" :rows="6" :maxlength="200" v-model="selfComment.content"></el-input></el-col>
		</el-row>
		<div style="text-align:center;margin-top:40px">
			<el-button type="primary" plain round>保存</el-button>
		</div>
	</div>
</template>

<script>
import FormTitle from '../common/FormTitle';
export default{
	name:'SelfComment',
	components:{
		FormTitle,
	},
	data(){
		return{
				selfComment:{
					content:'',
				}
			}
	
	}
}
</script>

<style scoped>

</style>