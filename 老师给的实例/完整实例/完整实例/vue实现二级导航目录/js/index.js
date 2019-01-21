window.onload = function(){
    new Vue({  //构建vue实例
        el:'#my',   //挂载元素 element
        data:{  //数据
            name:'abc',
            age:18,
            arr:[1,2,3,4],
            obj:{name:'aaa',id:1},  //json 双引号 "name"
            items:[
                    {name:'运动服务1',
                    isSubShow:true,
                    subItems:[
                        {name:'新品1-1'},
                        {name:'新品1-2'},
                        {name:'新品1-3'}]
                    },
                    {name:'运动服务2',
                    isSubShow:false,
                    subItems:[
                        {name:'新品2-1'},
                        {name:'新品2-2'},
                        {name:'新品2-3'}]
                    },
                    {name:'运动服务3',
                    isSubShow:false,
                    subItems:[
                        {name:'新品3-1'},
                        {name:'新品3-2'},
                        {name:'新品3-3'}]
                    },
                    {name:'运动服务4',
                    isSubShow:false,
                    subItems:[
                        {name:'新品4-1'},
                        {name:'新品4-2'},
                        {name:'新品4-3'}]
                    }
                ]
        },
        methods:{   //方法
            curShow:function(item){
                this.items.forEach(function(v){   //this vue实例
                    v.isSubShow = false;
                });  //循环数据，将isSubShow变更为false
                item.isSubShow = !item.isSubShow ;
            }
        }
    })
}