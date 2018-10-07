<template>
	<div class="previewBackground">
		<div class="informationBox">
			<div style="padding: 30px;">
				<center><img src="../../assets/logo.png" height="120" width="120" style="background-color: white; border-radius: 50%"></img></center>
			    <center><p style="font-size: 24px; font-weight: 800">{{name}}</p></center>
			    <center><p style="font-size: 17px; letter-spacing: 3px">{{city+"|"+level+"|"+school}}</p></center>
			</div>
			<div style="background-color: white; height: 100px;padding-top:40px">
				<center><el-button round style="background-color: black;color: white;font-size: 18px">Download Resume</el-button></center>
			</div>
		</div>
		<ColorfulResumeDemo style="margin-left:25%; box-shadow: 0px 0px 7px #606266;"></ColorfulResumeDemo>
	</div>
</template>
<script>
//import AcademicGroup from './formgroup/AcademicGroup';
import PlainResumeDemo from './PlainResumeDemo';
import ColorfulResumeDemo from './ColorfulResumeDemo';
export default{
	name:'preview',
	components:{
		PlainResumeDemo,
		ColorfulResumeDemo
	},
	data(){
		return{
			name:'宋歌',
			city:'上海',
			school:'华东理工大学',
			level:'本科',
		}
	}
}
</script>
<style>
	.previewBackground
	{
		background-color: #fff8dc;
	}
	.informationBox
	{
		position: fixed;
		align-content: center;
		background-color:#afeeee;
		border-radius: 0px solid;
		box-shadow: 0px 0px 3px #606266;
		float: left;
		opacity: 1;
		margin: 30px;
	}
</style>