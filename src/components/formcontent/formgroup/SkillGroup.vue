<template>
	<div class="skill-group" v-bind:class="{'has-border':(id !== 1)}" @submit.native.prevent>
		<el-form v-if="!saved" ref="form" :model="skillInfo" label-width="80px" label-position="left">
		  <el-form-item label="技能类型">
		    <el-input v-model="skillInfo.type"></el-input>
		  </el-form-item>
		  <el-form-item label="技能描述">
		    <el-input type="textarea" :rows="4" v-model="skillInfo.description"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="saveGroup">保存该条</el-button>
		    <el-button v-if="id !== 1" plain @click="$emit('delete-self',id)">删除该条</el-button>
		  </el-form-item>
		</el-form>
		
		<el-card v-if="saved" class="box-card" shadow="hover">
		  <el-row>
		  	<el-col :span="22"><p style="color:#909399">{{skillInfo.type}}...</p></el-col>
		  	<el-col style="padding-top:10px" :span="2"><el-button circle type="primary" icon="el-icon-edit" @click="editGroup"></el-button></el-col>
		  </el-row>
		</el-card>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        skillInfo: {
          type: '',
          description: '',
        },
        saved : false,
      };
    },
    props:['id'],
    methods: {
      saveGroup:function(){
      	if(this.skillInfo.type == '' || 
      	this.skillInfo.description == ''){
      		this.$message.error('请填写完整必填信息！');
      		return;
      	}
      	/******axios**********/


      	/********************/
      	this.saved = !(this.saved);
      },
      editGroup:function(){
      	this.saved = !(this.saved);
      },
    }
  }
</script>

<style>
.skill-group{
	width:70%;
	margin:20px auto;
	padding-top:25px;
}
.has-border{
	border-top:1px solid #DCDFE6;
}
</style>