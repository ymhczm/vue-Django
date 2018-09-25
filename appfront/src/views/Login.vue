<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="login_title">Trading Desk</div>
      <div class="login_info">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0%" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="username" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <div class="login-btn">
              <el-button type="primary" @keyup.enter.native="entrance()" @click="submitForm('ruleForm')">登录</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户和密码必填。</p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import util from '@/lib/util'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }],
        username: [{
          required: true, message: '请输入用户名', trigger: 'blur'
        }]
      }
    }
  },
  created () {
    let isLogen = this.$cookie.get('username')
    // let clientId = this.$cookie.get('clientId')
    // 判断是否登录
    if (isLogen) {
      // if (clientId === '1') {
      this.$router.push('pcreate')
    }
  },
  methods: {
    submitForm (name) {
      console.log(util, 999)
      let self = this
      self.$refs[name].validate((valid) => {
        if (valid) {
          let url = '/api/show_books'
          util.ajax.get(url).then(function (res) {
            console.log(res)
          })
          // let url = '/api/logins/login?username=' + self.ruleForm.username
          // util.ajax.get(url).then(function (res) {
          //   if (res.data.msg === 'ok') {
          //     if (res.data.data.list.length === 0) {
          //       self.$message.warning({ message: '该用户暂无权限登录。' })
          //     } else {
          //       let clientId = res.data.data.list[0]['ID']
          //       let url = res.data.data.list[0]['url']
          //       self.$cookie.set('clientId', clientId, 30)
          //       self.$cookie.set('username', self.ruleForm.username, 30)
          //       self.$cookie.set('password', self.ruleForm.password, 30)
          //       self.$cookie.set('url', url, 30)
          //       if (clientId === 1) {
          //         self.$router.push('pcreate')
          //         self.$message.success('登录成功！')
          //       } else {
          //         self.$router.push('create')
          //         self.$message.success('登录成功！')
          //       }
          //     }
          //   } else {
          //     self.$message.warning({ message: '网络异常请稍后再试。。。。' })
          //   }
          // }).catch(function (err) {
          //   console.log(err)
          //   self.$message.warning({ message: '网络异常请稍后再试。。。。' })
          // })
        } else {
          self.$message.error({ message: '请完整填写信息。' })
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
 .login-wrap
    position: relative
    width: 100%
    height: 100%
    background: #242f42
    position: relative
    .login-content
      position: absolute
      width: 380px
      height: 300px
      top: 50%
      left: 50%
      margin-top: -186px
      margin-left: -190px
      .login_title
        width: 100%
        height: 60px
        box-sizing: border-box
        padding-bottom: 50px
        font-size: 30px
        line-height: 30px
        text-align: center
        color: #ffffff
      .login_info
        width: 380px
        height: 240px
        box-sizing: border-box
        padding:28px 40px
        background: #ffffff
        border-radius: 5px
        .login-btn
          text-align:center
          button
            width:100%
            height:36px
</style>
