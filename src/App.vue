<template>
  <div id="app">
    <!--Element UI初始化测试
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <div class="block">
    <span class="demonstration">显示默认颜色</span>
    <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    </span>
    </div>
    <br/>
    <div class="block">
      <span class="demonstration">hover 显示颜色</span>
    <span class="wrapper">
    <el-button :plain="true" type="success" @click.natave="test">成功按钮</el-button>
    <el-button :plain="true" type="warning">警告按钮</el-button>
    <el-button :plain="true" type="danger">危险按钮</el-button>
    <el-button :plain="true" type="info">信息按钮</el-button>
    </span>
    </div>
    <hr>
    <div>
      <span>图表显示</span>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    -->
    <hr>
<!--布局测试-->
    <div>
      <el-header style="height:100px;border:2px soild #ee;background-color:#67C23A">
        
      </el-header>
      <el-container style="height: 600px; border: 1px solid #eee">
        <!--左边栏-->
        <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1']">  <!--默认展示的菜单-->

              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>一级标题（可下拉）</template>
                  <el-menu-item-group>
                    <template slot="title">二级标题（不可点击）</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="二级标题2（不可点击）">
                  </el-menu-item-group>
              
                <el-submenu index="1-4">
                  <template slot="title">三级菜单（可下拉）</template>
                    <el-menu-item index="1-4-1">四级菜单（不可下拉）</el-menu-item>
                </el-submenu>
            </el-submenu>
    </el-menu>
        </el-aside>
         <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{name}}</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
      </el-container>
    </div>  
    <!--按钮测试-->
    <hr>
    <div>
      <el-button type='success'  @click="test">成功按钮</el-button>
      <el-button type='primary' icon='el-icon-edit'>原始按钮</el-button>
      <el-button type='primary' :loading='true'>加载中</el-button>
      <el-button type='primary'  @click="func1">停止加载</el-button>
    </div>
  </div>

</template>


<script>
export default {
  data () {
    const item={date:'2018/8/7',name:'杨鑫',address:'温江区'} //定义数据
    return {
      name:'杨鑫',
      msg: 'Use Vue 2.0 Today!',
      tableData:Array(5).fill(item)    //填充表格数据
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000,
        load:true
      })
    },
    test(){
      alert("点了成功按钮");
      console.log("点击了成功按钮");
    },
    func1(){
      this.load='false'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
