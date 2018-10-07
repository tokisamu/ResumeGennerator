<template>
<div class="ResumeDemo">
	<el-container>
		<el-main style="font-size:16px;">
			<p style="color: #5e94f3;">{{information.age+"岁/"+information.level+"/"+information.city}}</p>
			<p style="font-size:22px; font-weight: 800">{{information.name}}</p>
			<p>{{"手机："+information.phone+" 邮箱："+information.email}}</p>
		</el-main>
		<el-aside width="200x">
			<img src="../../assets/logo.png" height="120" width="96">
		</el-aside>
	</el-container>
	<div style="opacity: 0.4">
		<hr></hr>
	</div>
	<el-container>
		<el-main class="ContentNormal">
			<p class="LittleTitile">教育背景</p>
			<el-row :gutter="1" class="ContentHeader">
  				<el-col :span="3"><el-tag type="info" size="small">{{information.start+"-"+information.end}}</el-tag></el-col>
  				<el-col :span="3"><el-tag type="info" size="small">{{information.school}}</el-tag></el-col>
			  	<el-col :span="3"><el-tag type="info" size="small">{{information.major}}</el-tag></el-col>
			</el-row>
			<br/>
			<ul style="padding:0">
				<li style="color: #5e94f3">
					<span class="ContentHeader">
						成绩排名:&nbsp&nbsp
					</span>
					<span class="ContentNormal">
						{{information.gpa}}
					</span>
				</li>
				<li style="color: #5e94f3;">
					<span class="ContentHeader">
						主修课程:&nbsp&nbsp
					</span>
					<span class="ContentNormal">{{information.major}}</span>
				</li>
				<li style="color: #5e94f3;"><span class="ContentHeader">荣耀奖励:&nbsp&nbsp</span></li>
			</ul>
			<p style="white-space: pre-line; line-height: 25px">{{information.prize}}</p>
		</el-main>
	</el-container>
	<div style="opacity: 0.4">
		<hr></hr>
	</div>
	<el-container>
		<el-main class="ContentNormal">
			<p class="LittleTitile">实习经历</p>
			<span v-for="work in information.workInfo">
				<el-row :gutter="20" class="ContentHeader">
	  				<el-col :span="6">{{work.start+"-"+work.end}}</el-col>
	  				<el-col :span="10">{{work.company}}</el-col>
				  	<el-col :span="4">{{work.job}}</el-col>
				</el-row>
				<div style="white-space: pre-line; line-height: 25px">{{work.description}}</div>
			</span>
		</el-main>
	</el-container>
	<div style="opacity: 0.4">
		<hr></hr>
	</div>
	<el-container>
		<el-main class="ContentNormal">
			<p class="LittleTitile">学术经历</p>
			<el-row :gutter="20" class="ContentHeader">
	  				<el-col :span="6">科研类型</el-col>
	  				<el-col :span="10">项目名称</el-col>
				  	<el-col :span="4">担任工作</el-col>
			</el-row>
			<span v-for="work in information.academicInfo">
				<el-row :gutter="20" style="line-height: 25px">
	  				<el-col :span="6">{{work.option}}</el-col>
	  				<el-col :span="10">{{work.name}}</el-col>
				  	<el-col :span="4">{{work.duty}}</el-col>
				</el-row>
				<div style="white-space: pre-line; line-height: 25px">{{work.description}}</div>
			</span>
		</el-main>
	</el-container>
	<div style="opacity: 0.4">
		<hr></hr>
	</div>
	<el-container>
		<el-main class="ContentNormal">
			<p class="LittleTitile">校园经历</p>
			<el-row :gutter="20" class="ContentHeader">
	  				<el-col :span="6">经历类型</el-col>
	  				<el-col :span="10">名称</el-col>
				  	<el-col :span="4">担任工作</el-col>
			</el-row>
			<span v-for="work in information.schoolInfo">
				<el-row :gutter="20" style="line-height: 25px">
	  				<el-col :span="6">{{work.option}}</el-col>
	  				<el-col :span="10">{{work.name}}</el-col>
				  	<el-col :span="4">{{work.duty}}</el-col>
				</el-row>
				<div style="white-space: pre-line; line-height: 25px">{{work.description}}</div>
			</span>
		</el-main>
	</el-container>
	<div style="opacity: 0.4">
		<hr></hr>
	</div>
	<el-container>
		<el-main class="ContentNormal">
			<p class="LittleTitile">技能特长</p>
			<span v-for="work in information.skillInfo">
				<li style="color: #5e94f3;"><span class="ContentHeader">{{work.type}}</span></li>
				<div style="white-space: pre-line; line-height: 25px">&nbsp&nbsp&nbsp&nbsp&nbsp{{work.description}}</div>
			</span>
		</el-main>
	</el-container>
	<div style="opacity: 0.4">
		<hr></hr>
	</div>
	<el-container>
		<el-main class="ContentNormal">
			<p class="LittleTitile">优秀作品</p>
			<span v-for="work in information.displayInfo">
				<el-row :gutter="20" style="line-height: 25px">
	  				<el-col :span="2" class="ContentHeader">{{work.name+": "}}</el-col>
	  				<el-col :span="10">
	  					<div class="WorkLink">
	  						<a href="https://www.baidu.com/">{{work.link}}</a>
	  					</div>
	  				</el-col>
				</el-row>
				<div style="white-space: pre-line; line-height: 25px">{{work.description}}</div>
			</span>
		</el-main>
	</el-container>
	<div style="opacity: 0.4">
		<hr></hr>
	</div>
	<el-container>
		<el-main class="ContentNormal">
			<p class="LittleTitile">自我评价</p>
			<p style="white-space: pre-line; line-height: 25px">{{information.selfComment}}</p>
		</el-main>
	</el-container>
</div>
</template>

<script>
import FormTitle from '../common/FormTitle';
export default{
	name:'PlainResumeDemo',
	components:{
		
	},
	data(){
		return{
			information:{
	        	name:'宋歌',
	        	sex:'男',
	        	age:'21',
	        	birthday:'1997/11/6',
	        	city:'上海',
	        	phone:'13818415318',
	        	email:'sg_ecust@126.com',
	        	school: '华东理工大学',
	            start: '2010',
	            end: '2011',
	            level: '本科',
	            major: '计算机科学',
	            gpa: '4.0/4.0',
	            course: '电子技术，数据库，操作系统，C++程序设计',
	            prize: '国家奖学金\n ... \n ...',
	            workInfo: [{
		            company: '百度',
		            start: '2010',
		            end: '2011',
		            option: '实习',
		            job: '前端开发',
		            description: '........................................................................',
		         	}
		         ],
	            academicInfo: [{
	            option: '论文',
	            name: '《REST开发思想》',
	            duty: '第一作者',
	            description: '....',
				}],
				schoolInfo: [{
	            option: 'py',
	            name: 'pypy',
	            duty: 'py',
	            description: 'ptyp',
	            }],
	            PrizeInfo: [{
	            option: '',
	            name: '',
	            result: '',
	            }],
	            skillInfo: [{
	            type: 'py',
	            description: 'pypy',
	            },
	            {
	            type: 'py',
	            description: 'pypy',
	            }],
	            displayInfo: [{
	            name: '百度',
	            link: 'https://www.baidu.com/',
	            description: '百度是我做的',
	            }],
	            selfComment:'我是一个大学生'
			}
		}
	}
}
</script>
<style>
.ResumeDemo{
	background-color: white;
	line-height: 5px;
	width:40%;
	margin:30px auto;
}
.LittleTitile
{
	font-size: 18px;
	line-height: 22px;
	font-family: "微软雅黑", "宋体", Arial;
	font-weight: 800;
	line-height: 25px;
}
.ContentHeader
{
	color: black;
	font-size: 14px;
	line-height: 0px;
	font-family: "微软雅黑", "宋体", Arial;
	font-weight: 800;
	line-height: 25px;
}
.ContentNormal
{
	color: black;
	font-size: 14px;
}
.WorkLink a:link { text-decoration: none;color: #5e94f3;font-size: 13px;}
.WorkLink a:active { text-decoration:blink}
.WorkLink a:hover { text-decoration:underline;color: red} 
.WorkLink a:visited { text-decoration: none;color: #5e94f3}
</style>
