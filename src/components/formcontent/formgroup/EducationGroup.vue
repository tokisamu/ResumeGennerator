<template>
	<div class="education-group" v-bind:class="{'has-border':(id !== 1)}" @submit.native.prevent>
		<el-form v-if="!saved" ref="form" :model="educationInfo" label-width="80px" label-position="left">
		  <el-form-item label="学校名称">
		    <el-input v-model="educationInfo.school"></el-input>
		  </el-form-item>
		  <el-form-item label="时间">
		    <el-col :span="12">
		      <el-date-picker type="year" placeholder="入学年份" v-model="educationInfo.start" style="width: 100%;"></el-date-picker>
		    </el-col>
		    <el-col :span="1" style="padding-left:5.5px">至</el-col>
		    <el-col :span="11">
		      <el-date-picker type="year" placeholder="毕业年份" v-model="educationInfo.end" style="width: 100%;"></el-date-picker>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="学历">
		    <el-select v-model="educationInfo.level" placeholder="请选择">
		      <el-option label="大专" value="大专"></el-option>
		      <el-option label="本科" value="本科"></el-option>
		      <el-option label="硕士" value="硕士"></el-option>
		      <el-option label="博士" value="博士"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="专业">
		    <el-input v-model="educationInfo.major"></el-input>
		  </el-form-item>
		  <el-form-item label="绩点">
		    <el-input v-model="educationInfo.gpa"></el-input>
		  </el-form-item>
		  <el-form-item label="主修课程">
		    <el-input type="textarea" :rows="3" v-model="educationInfo.course"></el-input>
		  </el-form-item>
		  <el-form-item label="在校荣誉">
		    <el-input type="textarea" :rows="3" v-model="educationInfo.prize"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="saveGroup">保存该条</el-button>
		    <el-button v-if="id !== 1" plain @click="$emit('delete-self',id)">删除该条</el-button>
		  </el-form-item>
		</el-form>
		
		<el-card v-if="saved" class="box-card" shadow="hover">
		  <el-row>
		  	<el-col :span="22"><p style="color:#909399">{{educationInfo.school}}/{{educationInfo.level}}/{{educationInfo.major}}....</p></el-col>
		  	<el-col style="padding-top:10px" :span="2"><el-button circle type="primary" icon="el-icon-edit" @click="editGroup"></el-button></el-col>
		  </el-row>
		</el-card>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        educationInfo: {
          school: '华东理工大学',
          start: '2010',
          end: '2011',
          level: '本科',
          major: 'cs',
          gpa: '4.0/4.0',
          course: '.....',
          prize: '.....'
        },
        saved : false,
      };
    },
    props:['id'],
    methods: {
      saveGroup:function(){
      	if(this.educationInfo.school == '' || this.educationInfo.start == '' || 
      	this.educationInfo.end == '' || this.educationInfo.level == '' || this.educationInfo.major == ''){
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
.education-group{
	width:70%;
	margin:20px auto;
	padding-top:25px;
}
.has-border{
	border-top:1px solid #DCDFE6;
}
</style>