<template>
	<div class="basic-info" >
		<FormTitle>基本信息</FormTitle>
		<div style="text-align:center">
			 <el-popover
			    placement="right"
			    title="头像上传"
			    width="200"
			    trigger="hover"
			    content="请上传jpg格式的证件照，且大小不超过3M~~">
				<el-upload
				  slot="reference"
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-popover>
		</div>
		<div class="form-area">
			<el-row>
				<el-col :span="3" :offset="3" style="padding-top:5px">姓&#12288;&#12288;名</el-col>
				<el-col :span="13"><el-input placeholder="" v-model="basicInfoData.name"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="3" :offset="3" style="padding-top:5px">性&#12288;&#12288;别</el-col>
				<el-col :span="13" style="margin-top:5px;margin-bottom:10px">
				    <el-switch
				      v-model="basicInfoData.sex"
					  active-text="男"
					  inactive-text="女"
					  active-value="男"
					  active-color="#409EFF"
					  inactive-color="#409EFF"
					  inactive-value="女">
					</el-switch>				
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="3" :offset="3" style="padding-top:5px" >生&#12288;&#12288;日</el-col>
				<el-col :span="13">
					<el-popover
					    placement="right"
					    width="100"
					    trigger="click"
					    content="建议格式：1997/06/08">
						<el-input placeholder="" slot="reference" v-model="basicInfoData.birthday"></el-input>
					</el-popover>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="3" :offset="3" style="padding-top:5px">城&#12288;&#12288;市</el-col>
				<el-col :span="13">
					<el-popover
					    placement="right"
					    width="100"
					    trigger="click"
					    content="填写您现在居住的城市">
						<el-input placeholder="" slot="reference" v-model="basicInfoData.city"></el-input>
					</el-popover>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="3" :offset="3" style="padding-top:5px">手机号码</el-col>
				<el-col :span="13"><el-input placeholder="" v-model="basicInfoData.phone"></el-input></el-col>
			</el-row>
			<el-row>
				<el-col :span="3" :offset="3" style="padding-top:5px">常用邮箱</el-col>
				<el-col :span="13"><el-input placeholder="" v-model="basicInfoData.email"></el-input></el-col>
			</el-row>
		</div>
		<div style="text-align:center">
			<el-button type="primary" plain round>保存</el-button>
		</div>
	</div>

</template>

<script>
import FormTitle from '../common/FormTitle';
export default{
	name:'BasicInfo',
	components:{
		FormTitle
	},
	data() {
      return {
        imageUrl: '',
        basicInfoData:{
        	name:'宋歌',
        	sex:'男',
        	birthday:'1997/11/6',
        	city:'上海',
        	phone:'13818415318',
        	email:'sg_ecust@126.com'
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 3;

        if (!isJPG) {
          this.$message.error('请上传JPG格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过3MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<style scoped>
	.ele-select{
		width:1000px;
	}
	.form-area{
		padding:5px 30px;
	}
	.el-row{
		margin-bottom:15px;
	}
    .avatar-uploader{
        border: 1px dashed #DCDFE6;
    	border-radius: 6px;
    	cursor: pointer;
		position: relative;
    	overflow: hidden;
    	width:120px;
    	border-radius: 60px;
    	margin:10px auto;
		margin-top:2px;
  	}
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 60px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 60px;
    display: block;
  }
</style>