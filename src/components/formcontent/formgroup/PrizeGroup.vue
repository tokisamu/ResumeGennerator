<template>
	<div class="prize-group" v-bind:class="{'has-border':(id !== 1)}" @submit.native.prevent>
		<el-form v-if="!saved" ref="form" :model="PrizeInfo" label-width="80px" label-position="left">
		  <el-form-item label="类型">
		    <el-radio-group v-model="PrizeInfo.option">
		      <el-radio label="竞赛"></el-radio>
		      <el-radio label="证书"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="竞赛名称">
		    <el-input v-model="PrizeInfo.name"></el-input>
		  </el-form-item>
		  <el-form-item label="成绩">
		    <el-input v-model="PrizeInfo.result"></el-input>
		  </el-form-item>
		  <el-form-item label="附件上传">
		  	<el-upload
			  class="upload-demo"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :before-remove="beforeRemove"
			  multiple
			  :limit="1"
			  :on-exceed="handleExceed"
			  :file-list="fileList">
			  <el-button size="small" plain>点击上传</el-button>
			  <div slot="tip" class="el-upload__tip"></div>
			</el-upload>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="saveGroup">保存该条</el-button>
		    <el-button v-if="id !== 1" plain @click="$emit('delete-self',id)">删除该条</el-button>
		  </el-form-item>
		</el-form>
		
		<el-card v-if="saved" class="box-card" shadow="hover">
		  <el-row>
		  	<el-col :span="22"><p style="color:#909399">{{PrizeInfo.option}}/{{PrizeInfo.name}}/{{PrizeInfo.result}}...</p></el-col>
		  	<el-col style="padding-top:10px" :span="2"><el-button circle type="primary" icon="el-icon-edit" @click="editGroup"></el-button></el-col>
		  </el-row>
		</el-card>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        PrizeInfo: {
          option: '',
          name: '',
          result: '',
        },
        saved : false,
      };
    },
    props:['id'],
    methods: {
      saveGroup:function(){
      	if(this.PrizeInfo.option == '' || this.PrizeInfo.name == '' || 
      	this.PrizeInfo.result == ''){
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
.prize-group{
	width:70%;
	margin:20px auto;
	padding-top:25px;
}
.has-border{
	border-top:1px solid #DCDFE6;
}
</style>