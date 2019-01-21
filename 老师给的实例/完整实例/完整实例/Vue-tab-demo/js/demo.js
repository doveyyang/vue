window.onload = function(){
    new Vue({  //构建实例
        el:'#my',
        data:{  //数据
            num:2,//默认值
            num2:0,
            title:['标题一1','标题二2','标题三3','标题四4','标题三3','标题四4'],
            con:['1111','222','3333','4444','5555','6666'],
            lists:[{title:'新闻',con:'新闻内容'},
                    {title:'主页',con:'主页内容'},
                    {title:'抢购',con:'抢购内容'},
                    {title:'活动',con:'活动内容'},
                    {title:'新闻',con:'新闻内容'}]

        },
        methods: {   //方法
            change:function(index){
                this.num = index;
            },
            change2:function(index){
                this.num2 = index;

            }
        }

    })
}