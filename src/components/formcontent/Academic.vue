<template>
	<div class="education">
		<FormTitle>科研经历</FormTitle>
		<AcademicGroup v-for="idx in groupController" v-if="isDeleted(idx)" v-bind:id="idx" ref="work" v-on:delete-self="deleteGroup">
		</AcademicGroup>
		<div style="text-align:center">
			<el-popover
			    placement="right"
			    width="200"
			    trigger="hover"
			    content="添加一条学术经历">
				<el-button v-on:click="addGroup" circle icon="el-icon-plus" slot="reference" type="primary"></el-button>
			</el-popover>
		</div>
	</div>
</template>

<script>
import AcademicGroup from './formgroup/AcademicGroup';
import FormTitle from '../common/FormTitle';
export default{
	name:'Academic',
	components:{
		AcademicGroup,
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
			this.deleted.push(id);
			//console.log(this.deleted);
		},
		/*getEducationData:function(){
			var allWorkInfo = [];
			this.$refs.work.forEach(function(val){
				allWorkInfo.push(val.workInfo);
			})
			console.log(allEducationInfo);
			
		},*/
		isDeleted: function(val){
			for(var i=0;i<this.deleted.length;i++){
				if(val == this.deleted[i])
					return false;
			}
			return true;
		},
	}
}
</script>

<style scoped>
.float-button{
	position:fixed;
	right:4%;
	top:18%;
	height:55px;
	width:55px;
}
</style>