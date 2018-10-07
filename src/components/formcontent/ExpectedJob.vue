<template>
	<div class="expected-job" @submit.native.prevent>
		<FormTitle>期望工作</FormTitle>
		<el-form class="formGroup" ref="expectedInfo" label-width="80px" label-position="left">
		  <el-form-item label="求职岗位" >
			  	<el-popover
			    placement="right"
			    width="200"
			    trigger="click"
			    content="若有多个期望岗位,用'/'隔开。如：前端开发/JAVA开发">
			    	<el-input slot="reference" v-model="expectedInfo.job"></el-input>
			    </el-popover>
		  </el-form-item>
		  <el-form-item label="求职公司">
		    <el-input v-model="expectedInfo.company"></el-input>
		  </el-form-item>
		  <el-form-item label="实习/工作">
		    <el-radio-group v-model="expectedInfo.option">
		      <el-radio label="短期实习"></el-radio>
		      <el-radio label="长期实习"></el-radio>
		      <el-radio label="正式工作"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  
		  <el-form-item label="期望薪水">
		    <el-input v-model="expectedInfo.salary"></el-input>
		  </el-form-item>
		  <el-form-item label="到岗日期">
		  	<el-popover
			    placement="right"
			    width="100"
			    trigger="click"
			    content="建议格式：1997/06/08">
		    	<el-input v-model="expectedInfo.date" slot="reference"></el-input>
			</el-popover>
		  </el-form-item>
		</el-form>
		<div style="text-align:center">
			<el-button type="primary" plain round>保存</el-button>
		</div>
	</div>
</template>

<script>
import FormTitle from '../common/FormTitle';
export default{
	name:'ExpectedJob',
	components:{
		FormTitle,
	},
	data(){
		return{
			expectedInfo:{
				job:'前端开发/JAVA开发',
				company:'google中国',
				option:'短期实习',
				salary:'22k',
				date:'2020/02/02'
			}
		}
	}
}
</script>

<style scoped>
.formGroup{
	width:70%;
	margin:30px auto;
}
</style>