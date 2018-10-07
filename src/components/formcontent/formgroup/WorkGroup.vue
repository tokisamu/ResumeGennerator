<template>
	<div class="work-group" v-bind:class="{'has-border':(id !== 1)}" @submit.native.prevent>
		<el-form v-if="!saved" ref="form" :model="workInfo" label-width="80px" label-position="left">
		  <el-form-item label="公司名称">
		    <el-input v-model="workInfo.company"></el-input>
		  </el-form-item>
		  <el-form-item label="职位名称">
		    <el-input v-model="workInfo.job"></el-input>
		  </el-form-item>
		  <el-form-item label="起止时间">
		    <el-col :span="12">
		      <el-date-picker type="year" placeholder="" v-model="workInfo.start" style="width: 100%;"></el-date-picker>
		    </el-col>
		    <el-col :span="1" style="padding-left:5.5px">至</el-col>
		    <el-col :span="11">
		      <el-date-picker type="year" placeholder="" v-model="workInfo.end" style="width: 100%;"></el-date-picker>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="工作/实习">
		    <el-radio-group v-model="workInfo.option">
		      <el-radio label="实习"></el-radio>
		      <el-radio label="工作"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="工作描述">
		    <el-input type="textarea" :rows="4" v-model="workInfo.description"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="saveGroup">保存该条</el-button>
		    <el-button v-if="id !== 1" plain @click="$emit('delete-self',id)">删除该条</el-button>
		  </el-form-item>
		</el-form>
		
		<el-card v-if="saved" class="box-card" shadow="hover">
		  <el-row>
		  	<el-col :span="22"><p style="color:#909399">{{workInfo.company}}/{{workInfo.job}}/{{workInfo.option}}...</p></el-col>
		  	<el-col style="padding-top:10px" :span="2"><el-button circle type="primary" icon="el-icon-edit" @click="editGroup"></el-button></el-col>
		  </el-row>
		</el-card>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        workInfo: {
          company: '',
          start: '',
          end: '',
          option: '',
          job: '',
          description: '',
        },
        saved : false,
      };
    },
    props:['id'],
    methods: {
      saveGroup:function(){
      	if(this.workInfo.company == '' || this.workInfo.start == '' || 
      	this.workInfo.end == '' || this.workInfo.option == '' || this.workInfo.job == ''){
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
.work-group{
	width:70%;
	margin:20px auto;
	padding-top:25px;
}
.has-border{
	border-top:1px solid #DCDFE6;
}
</style>