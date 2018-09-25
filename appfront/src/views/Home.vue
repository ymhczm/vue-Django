<template>
  <div class="wrapper">
    <el-container class="wrapper">
      <el-header class="wrapper_header">
        <div class="logo">Trading Desk</div>
        <div class="user-info">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <img class="user-logo" src="../static/images/philips.png">
                {{name}}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="loginout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container class="wrapper_content">
        <el-aside class="wrapper_aside" width="200px">
          <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#324157" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
            <template v-for="item in items">
              <template v-if="item.subs">
                <el-submenu :index="item.index" :key="item.key">
                  <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                  <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}</el-menu-item>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.index" :key="item.key">
                  <i :class="item.icon"></i>{{ item.title }}
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main class="wrapper_main">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
          </el-main>
          <el-footer class="wrapper_footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      name: 'iCart',
      url: '',
      items: [
        {
          icon: 'el-icon-setting',
          index: 'home',
          title: 'Basic Information'
        },
        {
          icon: 'el-icon-menu',
          index: '2',
          title: 'Basic',
          subs: [
            {
              index: 'hello',
              title: 'Task',
              key: '2.1'
            },
            {
              index: 'world',
              title: 'World',
              key: '2.2'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.url = '../static/images/philips.png'
  },
  mounted () {
    this.url = '../static/images/philips.png'
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        this.$cookie.set('username', '')
        this.$cookie.set('clientId', '')
        this.$cookie.set('url', '')
        this.$cookie.set('password', '')
        this.$router.push('/')
      }
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    width 100%
    height 100%
    .wrapper_header
      background rgb(36, 47, 66)
      line-height 60px
      .logo
        float left
        width 250px
        text-align center
        font-size 22px
        font-weight bolder
        color #ffffff
      .user-info
        float right
        padding-right 50px
        font-size 16px
        color #ffffff
        .el-dropdown-link
          position relative
          display inline-block
          padding-left 50px
          font-size 16px
          color #fff
          cursor pointer
          vertical-align middle
          .user-logo
            position absolute
            left 0
            top 10px
            width 40px
            height 40px
            border-radius 50%
    .wrapper_content
      width 90%
      margin 0 auto
      .wrapper_aside
        background #333
        overflow scroll
        .el-menu-vertical-demo
          height 100%
          background #324157
          border-right solid 1px #e6e6e6
          list-style none
          position relative
          margin 0
          padding-left 0
          text-align left
      .wrapper_main
        background #e9eef3
      .wrapper_footer
        background #b3c0d1
        line-height 60px
        text-align center
</style>
