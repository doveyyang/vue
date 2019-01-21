window.onload= function(){
    new Vue({   //构建vue实例
        el:'#my',   //挂载元素  element
        data:{     //数据
            msg:'hello world',
            lists:[{name:'化妆品',state:'已采购'},
                    {name:'包包',state:'未采购'},
                    {name:'手机',state:'已采购'},
                    {name:'衣服',state:'未采购'}]
        },
        methods:{   //方法
            add:function(){
                if(this.msg == "") return;
                this.lists.unshift({name:this.msg,state:'未采购'});
                this.msg ='';  
            },
            del:function(index){
                this.lists.splice(index,1);   //index位置   1个数
            }
        }
    })
}