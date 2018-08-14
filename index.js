var firstapp = new Vue({
    el:"#app",
    data:{
        msg:"hello sparkle"
    }
});
firstapp.msg="you are more powerful than you think";
//
var app2 = new Vue({
    el:"#app-2",
    data:{
        msg2:'页面加载于：'+new Date().toLocaleTimeString()
    }
});
//v-if
var app3 = new Vue({
    el:"#app-3",
    data:{
        look:false
    }
});
//循环
var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {text:'vue'},
            {text:'angulars'},
            {text:'jQuery'},
            {text:"233"}
        ],
        mylist:[
            {text:"session"},
            {text:"cookie"},
            {text:"orea"}
        ]
    }
})
app4.todos.push({text:"C#"})
app4.mylist.push({text:"rice"})
//点击
var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"hello yx!?"
    },
    methods:{
        rmethod:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
//
var app6 = new Vue({
    el:"#app-6",
    data:{
        message:"文本框的内容在这里显示"
    }
})
//组件的使用
Vue.component('test',{
    template:"<li class='test1'>另外一个待办项</li>"
})
new Vue({
    el:'#app-7'
})

//组件的使用2
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el:'#app-8',
    data:{
        groceryList:[
            {id:0,text:'text1'},
            {id:1,text:'text2'},
            {id:2,text:'text3'}
        ]
    }
})
//实例
var adddata = {value:1};
adddata.value=34;
var app8 = new Vue({
    el:"#app-9",
    data:{
        dmsg:adddata.value
    },
    created:function(){
        console.log('value is '+this.value);
        //alert(this.value);
    }
})
//计算属性
var app10 = new Vue({
    el:"#app-10",
    data:{
        ormsg:"hello!"
    },
    computed:{                                            //计算属性nowmsg
        nowmsg:function(){
            return this.ormsg.split('').reverse().join('')
            //return new Date().toLocaleDateString()
        }
    }
})
//v-on事件监听
var app11 = new Vue({
    el:"#app-11",
    data:{
        c:0,
        inputtext:"输入框的内容"
    },
    methods:{
        count:function(){
            return this.c+=1;
        }
    }
})
//v-if组合练习
var app12 = new Vue({
    el:"#app-12",
    data:{
        logintype:"username"
    },
    //绑定一个v-on:click事件，点击按钮出发判断
    methods:{
        change:function(){
            if(this.logintype=="username"){
                return this.logintype='phone';
            }else if(this.logintype=="phone"){
                return this.logintype='email';
            }else{
                return this.logintype='username'
            }
        }
    }
})
//新一周上手练习
var app13 = new Vue({
    el:"#app-13",
    data:{
        addnum:0,
        alertmsg:""
    },
    methods:{
        add:function(){
            if(this.addnum>5 && !$.isnumeric(this.addnum)){
                
                this.addnum="已经输入了五次了"+this.addnum;
            }else{
                return this.addnum+=1;
            }
            
        }
    }
})
//遍历
var app14 = new Vue({
    el:"#app-14",
    data:{
        list1:[
            {value:"成都"},
            {value:"温江"},
            {value:"郫县"},
            {value:"都江堰"}
        ],
        obj:{
            name:"sparkle",
            age:21,
            msg:"use vue.js"
        }
    },
    methods:{
        addarray:function(){
            var newvalue = {value:"龙泉"};
            var index = "行政区划";
            Vue.set(this.obj,index,"龙泉驿");     //响应式添加对象属性
        }
    }
})
//函数中的return相当于是对象中的get属性
//计算属性深入了解
var app15 = new Vue({
    el:"#app-15",
    data:{
        firstname:"Tom",
        lastname:"Sam"
    },
    computed:{
        fullname:{
            get:function(){
                return this.firstname+' '+this.lastname         //计算属性的get
            },
            set:function(index){                                //计算属性的set
                var name = index.split(' ');
                this.firstname = name[0];
                this.lastname=name[name.length-1];
            }
        }
    }
})
//数组过滤排序操作
var app16 = new Vue({
    el:"#app-16",
    data:{
        nums:[1,2,3,4,5,6,7,8,9]
    },
    computed:{
        evenum:{
            get:function(){
                return this.nums.filter(function(num){
                    return num % 3==0
                })
            }
        }
    }
})
//
var app17 = new Vue({
    el:"#app-17"
})

//todolist练习！
Vue.component('todo-item',{
    template:'\
        <li>\
            {{title}}\
            <button v-on:click="$emit(\'remove\')">完成了</button>\
        </li>',
        props:['title']
})

var todolist = new Vue({
    el:"#todolist",
    data:{
        todos:[
            {id:0,title:"今天要做什么？"}           //初始化
        ],
        nextid:1                                //下一项的id
    },
    methods:{
        addlist:function(){
            this.todos.push({                   //向数组添加数据
                id:this.nextid++,
                title:this.modellist
            })
            this.modellist=''                   //清空输入框
        }
    }
})
//表单绑定
var app18 = new Vue({
    el:"#app-18",
    data:{
        state:[],                   //checkbox
        like:'',                    //radio
        select:'',                  //select
        select1:'',                 //select v-for
        options:[
            {text:"今天也要坚持学习",value:"学习"},
            {text:"以后也要好好生活",value:"生活"},
            {text:"一定要努力挣钱啊",value:"挣钱"}
        ]
    }
})
//组件的应用
Vue.component("button-count",{
    data:function(){
        return {
            count:0
        }
    },
    template:'<button v-on:click="count++">点击了{{count}}次</button>'
})
new Vue({
    el:"#app-19"                //声明组件绑定的元素id
})
//通过事件向父组件传递消息
var app19 = new Vue({
    el:"#app-20",
    data:{
        posts:[
            {id:1,title:"第一个标题"},
            {id:2,title:"第二个标题"},
            {id:3,title:"第三个标题"}
        ],
        postFontsize:1
    }
})
Vue.component("blog-post",{
    props:['posts'],
    template:'<div class="blog-post"><h4>{{x.title}}</h4><button v-on:click="$emit("enlarge-text")">字体变大</button></div>'
})