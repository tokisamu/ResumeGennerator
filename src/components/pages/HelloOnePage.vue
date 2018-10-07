<template>
  <div class="hello">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="3" :offset="1"><b class="head-title"><i class="el-icon-document"></i>OnePage</b></el-col>
          <el-col :span="3" :offset="17">
            <el-button plain icon="el-icon-share"></el-button>
            <el-button plain type="primary" @click="centerDialogVisible=true">登录</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
          <p class="page-title">OnePage:快速创建属于你的精美简历</p>
          <p class="sub-title">只需选择一种建立风格，简单填写一页表单，就可以生成一页精美简历，让你在HR眼中脱颖而出。</p>
          <el-button >加入我们</el-button>
          <el-button  type="primary">尝试OnePage</el-button>
          <br/>
          <img src="../../assets/logo.png" class="page-img">
          
      </el-main>
    </el-container>
    <el-dialog title="登录" :visible.sync="centerDialogVisible" width="40%" center>
      <span>
        <el-form ref="form" :model="form" label-width="50px">
          <el-form-item label="账号">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">注册</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">登录</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'HelloOnePage',
  data() {
    return {
      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    color: #333;
    line-height: 60px;
  }
  
  .head-title{
    color:#909399;
    font-size:20px;
  }
  
  .page-title{
    color:#606266;
    font-size:50px;
    margin-bottom:10px;
  }

  .sub-title{
    color:#909399;
    font-size:30px;
    margin: 5px 340px;
    margin-bottom:30px;
  }

  .page-img{
    width:360px;
    height:360px;
    margin-top:25px;
  }

  .el-main {
    color: #333;
    text-align: center;
    padding-top:45px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
</style>
