<template>
	<div class="display-group" v-bind:class="{'has-border':(id !== 1)}" @submit.native.prevent>
		<el-form v-if="!saved" ref="form" :model="displayInfo" label-width="80px" label-position="left">
		  <el-form-item label="作品名称">
		    <el-input v-model="displayInfo.name"></el-input>
		  </el-form-item>
		  <el-form-item label="作品描述">
		    <el-input type="textarea" :rows="4" v-model="displayInfo.description"></el-input>
		  </el-form-item>
		  <el-form-item label="作品链接">
		    <el-input v-model="displayInfo.link"></el-input>
		  </el-form-item>
		  <el-form-item label="附件上传">
		  	<el-upload
			  class="upload-demo"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :before-remove="beforeRemove"
			  multiple
			  :limit="3"
			  :on-exceed="handleExceed"
			  :file-list="fileList">
			  <el-button size="small" plain>点击上传</el-button>
			  <div slot="tip" class="el-upload__tip">上传与作品相关的附件</div>
			</el-upload>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="saveGroup">保存该条</el-button>
		    <el-button v-if="id !== 1" plain @click="$emit('delete-self',id)">删除该条</el-button>
		  </el-form-item>
		</el-form>
		
		<el-card v-if="saved" class="box-card" shadow="hover">
		  <el-row>
		  	<el-col :span="22"><p style="color:#909399">{{displayInfo.name}}...</p></el-col>
		  	<el-col style="padding-top:10px" :span="2"><el-button circle type="primary" icon="el-icon-edit" @click="editGroup"></el-button></el-col>
		  </el-row>
		</el-card>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        displayInfo: {
          name: '',
          link: '',
          description: '',
        },
        saved : false,
      };
    },
    props:['id'],
    methods: {
      saveGroup:function(){
      	if(this.displayInfo.name=='' || this.displayInfo.description==""){
      		this.$message.error('请填写完整必填信息！');
      		return;
      	}
      	this.saved = !(this.saved);
      },
      editGroup:function(){
      	this.saved = !(this.saved);
      },
    }
  }
</script>

<style>
.display-group{
	width:70%;
	margin:20px auto;
	padding-top:25px;
}
.has-border{
	border-top:1px solid #DCDFE6;
}
</style>