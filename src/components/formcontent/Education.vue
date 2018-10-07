<template>
	<div class="education">
		<FormTitle>教育经历</FormTitle>
		<!-- <el-button class="float-button" circle @click="getEducationData">保存</el-button> -->
		<EducationGroup v-for="idx in groupController" v-bind:id="idx" v-if="isDeleted(idx)" ref="education" v-on:delete-self="deleteGroup"></EducationGroup>
		<div style="text-align:center">
			<el-popover
			    placement="right"
			    width="200"
			    trigger="hover"
			    content="添加一条教育经历">
				<el-button v-on:click="addGroup" circle icon="el-icon-plus" slot="reference" type="primary"></el-button>
			</el-popover>
		</div>
	</div>
</template>

<script>
import EducationGroup from './formgroup/EducationGroup';
import FormTitle from '../common/FormTitle';
export default{
	name:'Education',
	components:{
		EducationGroup,
		FormTitle
	},
	data(){
		return{
			groupController:[1],
			deleted:[0],
		}
	},
	methods:{
		addGroup:function(){
			var newi = this.groupController[this.groupController.length-1]+1;
			this.groupController.push(newi);
		},
		deleteGroup:function(id){
			/*var arr=this.groupController;
			for(var i=0;i<arr.length;i++)
				if(arr[i]==id){
					arr.splice(i,1);
					break;
				}*/
			this.deleted.push(id);
			//console.log(this.deleted);
		},
		getEducationData:function(){
			var allEducationInfo = [];
			this.$refs.education.forEach(function(val){
				allEducationInfo.push(val.educationInfo);
			});
			//console.log(allEducationInfo);
		},
		isDeleted: function(val){
			for(var i=0;i<this.deleted.length;i++){
				if(val == this.deleted[i])
					return false;
			}
			return true;
		},
	},

}
</script>

<style scoped>
/* .float-button{
	position:fixed;
	right:4%;
	top:18%;
	height:55px;
	width:55px;
} */
</style>