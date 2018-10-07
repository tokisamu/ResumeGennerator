<template>
<div style="width: 100%;height: 100%">
<div class="ColorHeader">
	<div class="basicInformation">
		<p style="font-size: 30px;text-decoration:underline;">{{information.name+' '+information.pinyin}}</p>
		<p style="font-size: 20px">{{'求职意向： '+information.jobType}}</p>
		<p style="color:#c0c0c0 ;font-size: 20px">给我一个机会，还您一个惊喜</p>
	</div>
	<div class="myphoto">
		<img src="../../assets/logo.png" height="180" width="144">
	</div>
	<div class="contactInformation">
		<p>{{'电话： '+information.phone}}</p>
		<p>{{'邮箱： '+information.email}}</p>
		<p>{{'地址： '+information.city}}</p>
	</div>
</div>
<div style="display: -webkit-box;">
	<div style="width: 25%;background-color: white;color: rgb(65,73,76); padding: 2%">
		<span style="color: orange;font-size: 16px; font-weight: 800">关于我</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">ABOUT ME</span>
		<span style="font-size: 10px; color: white; box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<br>
		<div class="ColorContent">
			<el-row>
  				<el-col :span="6">
  					{{"姓名："+information.name}}
  				</el-col>
  				<el-col :span="6">
  					{{"现居："+information.city}}
  				</el-col>
			</el-row>
			<el-row>
  				<el-col :span="6">
  					{{"性别："+information.sex}}
  				</el-col>
  				<el-col :span="12">
  					{{"专业："+information.major}}
  				</el-col>
			</el-row>
			<el-row>
  				<el-col :span="8">
  					{{"生日："+information.birthday}}
  				</el-col>
			</el-row>
			<el-row>
  				<el-col :span="12">
  					{{"毕业院校："+information.school}}
  				</el-col>
			</el-row>
		</div>
		<span style="color: orange;font-size: 16px; font-weight: 800">教育经历</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">EDUCATION</span>
		<span style="font-size: 10px; color: white; box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<div>
			<el-main class="ContentNormal">
			<el-row :gutter="1" class="ContentHeader">
  				<el-col :span="6">{{information.start+"-"+information.end}}</el-col>
  				<el-col :span="8">{{information.school}}</el-col>
			  	<el-col :span="8">{{information.major}}</el-col>
			</el-row>
			<br/>
			<ul style="padding:0">
				<li style="color: black">
					<span class="ContentHeader">
						成绩排名:&nbsp&nbsp
					</span>
					<span class="ContentNormal">
						{{information.gpa}}
					</span>
				</li>
				<li style="color: black">
					<span class="ContentHeader">
						主修课程:&nbsp&nbsp
					</span>
					<span class="ContentNormal">{{information.major}}</span>
				</li>
				<li style="color: black;"><span class="ContentHeader">荣耀奖励:&nbsp&nbsp</span></li>
			</ul>
			<p style="white-space: pre-line; line-height: 25px">{{information.prize}}</p>
			</el-main>
		</div>
		<br>

		<span style="color: orange;font-size: 16px; font-weight: 800">专业技能</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">SKILL</span>
		<span style="font-size: 10px; color: white; box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<br>
		<div>
			<el-container>
				<el-main class="ContentNormal">
					<span v-for="work in information.skillInfo">
						<li style="color: black;"><span class="ContentHeader">{{work.type}}</span></li>
						<div style="white-space: pre-line; line-height: 25px">&nbsp&nbsp&nbsp&nbsp&nbsp{{work.description}}</div>
					</span>
				</el-main>
			</el-container>
		</div>

		<span style="color: orange;font-size: 16px; font-weight: 800">获奖及证书</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">PRIZE</span>
		<span style="font-size: 10px; color: white; box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<br>
	</div>
	<div style="float:left;width: 25%;background-color: rgb(65,73,76);color: white;padding: 2%;">
		<span style="color: orange;font-size: 16px; font-weight: 800">实习经历</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">WORK EXPERIENCE</span>
		<span style="font-size: 10px; color: rgb(65,73,76); box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<br>
		<el-container>
			<el-main>
				<span v-for="work in information.workInfo">
					<el-row :gutter="20" class="ContentHeader2">
		  				<el-col :span="6">{{work.start+"-"+work.end}}</el-col>
		  				<el-col :span="8">{{work.company}}</el-col>
					  	<el-col :span="8">{{work.job}}</el-col>
					</el-row>
					<div style="white-space: pre-line; line-height: 25px">{{work.description}}</div>
				</span>
			</el-main>
		</el-container>
		<span style="color: orange;font-size: 16px; font-weight: 800">学术经历</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">ACADEMIC EXPERIENCE</span>
		<span style="font-size: 10px; color: rgb(65,73,76); box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<el-main>
			<el-row :gutter="20" class="ContentHeader2">
	  				<el-col :span="6">科研类型</el-col>
	  				<el-col :span="8">项目名称</el-col>
				  	<el-col :span="8">担任工作</el-col>
			</el-row>
			<span v-for="work in information.academicInfo">
				<el-row :gutter="20" style="line-height: 25px">
	  				<el-col :span="6">{{work.option}}</el-col>
	  				<el-col :span="8">{{work.name}}</el-col>
				  	<el-col :span="8">{{work.duty}}</el-col>
				</el-row>
				<div style="white-space: pre-line; line-height: 25px">{{work.description}}</div>
			</span>
		</el-main>
		<span style="color: orange;font-size: 16px; font-weight: 800">校园经历</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">SCHOOL EXPERIENCE</span>
		<span style="font-size: 10px; color: rgb(65,73,76); box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<br>
		<el-container>
			<el-main>
				<el-row :gutter="20" class="ContentHeader2">
		  				<el-col :span="6">经历类型</el-col>
		  				<el-col :span="8">名称</el-col>
					  	<el-col :span="8">担任工作</el-col>
				</el-row>
				<ul style="padding: 0">
					<span v-for="work in information.schoolInfo">
						<el-row :gutter="20" style="line-height: 25px">
			  				<el-col :span="6">{{work.option}}</el-col>
			  				<el-col :span="8">{{work.name}}</el-col>
						  	<el-col :span="8">{{work.duty}}</el-col>
						</el-row>
						<div style="white-space: pre-line; line-height: 25px">{{work.description}}</div>
					</span>
				</ul>
			</el-main>
		</el-container>
		<span style="color: orange;font-size: 16px; font-weight: 800">自我评价</span>
		<span style="font-size: 10px; color: orange; box-sizing: content-box;  border-bottom: 3px solid orange;">SELF-ASSESSMENT</span>
		<span style="font-size: 10px; color: rgb(65,73,76); box-sizing: content-box;  border-bottom: 3px solid orange;">
			{{xiahuaxian}}
		</span>
		<p style="white-space: pre-line; line-height: 25px">{{information.selfComment}}</p>
	</div>
</div>
<div class="ColorFooter">
</div>
</div>
</template>

<script>
export default{
	name:'ColorfulResumeDemo',
	components:{
		
	},
	data(){
		return{
			xiahuaxian:'///////////////////////////////////////////////////////////画空白下划线',
			information:{
	        	name:'宋歌',
	        	pinyin:'Song Ge',
	        	sex:'男',
	        	age:'21',
	        	birthday:'1997/11/6',
	        	city:'上海',
	        	phone:'13818415318',
	        	email:'sg_ecust@126.com',
	        	school: '华东理工大学',
	        	jobType:'全栈工程师',
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
.ColorContent
{
	padding: 20px;
	padding-bottom: 40px;
}
.ContentHeader2
{
	color: white;
	font-size: 14px;
	line-height: 0px;
	font-family: "微软雅黑", "宋体", Arial;
	font-weight: 800;
	line-height: 25px;
}
.ColorHeader
{
	color: rgb(65,73,76);
	width: 58%;
	height: 400px;
	background-image: url(../../assets/header.png);
	background-size: 100% 100%;
}
.ColorFooter
{
	width: 58%;
	height: 200px;
	background-image: url(../../assets/footer.png);
	background-size: 100% 100%;
}
.basicInformation
{
	float: left;
	padding: 5%;
	padding-bottom: 0;
}
.contactInformation
{
	color: white;
	margin-left: 35%;
	margin-top: 5%;
	float: left;
	padding: 5%;
	padding-bottom: 0;
}
.myphoto
{
	position: absolute;
	top: 17%;
	left: 52%;
}
</style>
