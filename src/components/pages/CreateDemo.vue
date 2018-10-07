<template>
	<div class="create-demo">
		<el-container>
		  <el-aside width="15%">
		  	<h4 style="color:white;margin-left:22px"><i class="el-icon-menu"></i>简历构成</h4>
		  	<el-menu
		      default-active="1"
		      class="el-menu-vertical">
				<el-menu-item index="1">
			        <router-link to="BasicInfo" slot="title">
			        	<i :class="isfinished[0]?'el-icon-success':'el-icon-edit'"></i>
			        	基本信息
			        </router-link>
			        <el-tag class="necessary-tag" size="small">必填</el-tag>
			    </el-menu-item>
			    <el-menu-item index="2">
			    	<router-link to="expectedjob" slot="title">
				        <i :class="isfinished[1]?'el-icon-success':'el-icon-edit'"></i>
				        期望工作
			    	</router-link>
			        <el-tag class="necessary-tag" size="small">必填</el-tag>
			    </el-menu-item>
			    <el-menu-item index="3">
			    	<router-link to="education" slot="title">
				        <i :class="isfinished[2]?'el-icon-success':'el-icon-edit'"></i>
				        教育经历
				    </router-link>
			        <el-tag class="necessary-tag" size="small">必填</el-tag>
			    </el-menu-item>
			    <el-menu-item index="4">
			    	<router-link to="work" slot="title">
				        <i :class="isfinished[3]?'el-icon-success':'el-icon-edit'"></i>
				        工作经历
				    </router-link>
			    </el-menu-item>
			    <el-menu-item index="5">
			    	<router-link to="academic" slot="title">
				        <i :class="isfinished[4]?'el-icon-success':'el-icon-edit'"></i>
				        学术经历
			    	</router-link>
			    </el-menu-item>
			    <el-menu-item index="6">
			    	<router-link to="school" slot="title">
				        <i :class="isfinished[5]?'el-icon-success':'el-icon-edit'"></i>
				        校园经历
				    </router-link>
			    </el-menu-item>
			    <el-menu-item index="7">
			        <router-link to="prize" slot="title">
			        	<i :class="isfinished[6]?'el-icon-success':'el-icon-edit'"></i>
			        	竞赛证书
			        </router-link>
			    </el-menu-item>
			    <el-menu-item index="8">
			    	<router-link to="skill" slot="title">
				        <i :class="isfinished[7]?'el-icon-success':'el-icon-edit'"></i>
				        技能特长
			    	</router-link>
			    </el-menu-item>
			    <el-menu-item index="9">
			        <router-link to="worksdisplay" slot="title">
			        	<i :class="isfinished[8]?'el-icon-success':'el-icon-edit'"></i>
			        	优秀作品
			        </router-link>
			    </el-menu-item>
			    <el-menu-item index="10">
			        <router-link to="selfcomment" slot="title">
			        	<i :class="isfinished[9]?'el-icon-success':'el-icon-edit'"></i>
			        	自我评价
			        </router-link>
			    </el-menu-item>
		  	</el-menu>
		  </el-aside>
		  <el-container style="margin-right:10%;margin-left:27%" >
		    <el-header height="90px">
		      <el-row>
				<el-col :span="4" >
					<div>
					  <el-button type="text" icon="el-icon-view" >预览</el-button> 
					  <el-button type="text"icon="el-icon-download" >下载</el-button>
					</div>
				</el-col>
				<el-col :span="2" :offset="4"><div style="padding-top:7px">简历名称：</div></el-col>
				<el-col :span="4"><el-input placeholder="我的简历" size="small" suffix-icon="el-icon-edit"></el-input></el-col>
				<el-col :span='2' :offset="8"><el-button type="text" size="medium">简历仓库<i class="el-icon-caret-right el-icon--right"></i></el-button></el-col>
			  </el-row>
			  <el-row style="margin-top:5px">
			  	<el-col :span="3"><el-tag size="mini">完善度：可提交</el-tag></el-col>
			  	<el-col :span="18"><el-progress :percentage="70"></el-progress></el-col>
			  </el-row>
		    </el-header>
		    <el-main><router-view></router-view></el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
export default{
	name:"CreateDemo",
	data() {
	    return {
	      isfinished:[1,0,0,0,0,1,1,0,1,0],
	    }
	 },
	 methods:{

	 }
}
</script>




<style scoped>
  .create-demo{
  	margin-top:40px;
  }
  .el-menu-verticle{

  }
  .el-icon-success{
  	color:#67C23A;
  }
  .necessary-tag{
  	float:right;
  	margin-top:12px;
  }

  a{
  	text-decoration:none;
  	color:#303133;
  	display:block;
  }
  .router-link-active {
    color:#409EFF;
    display:block;
  }
  .el-aside {
  	height:624px;
  	position: fixed;
  	background-color:#409EFF;
    color: #333;
    margin-left:10%;
	margin-right:2%;
	box-shadow:0px 0px 8px #DCDFE6;
	border-radius:6px;
  }

  .el-header{
  	box-shadow:0px 0px 8px #DCDFE6;
  	border-radius:6px;
	padding-top:12px;
  	margin-bottom:8px;
  }
  
  .el-main {
    color: #333;
	box-shadow:0px 0px 8px #DCDFE6;
	border-radius:6px;
  }

  
  body > .el-container {
    margin-bottom: 40px;
  }

</style>