window.onload = function(){
    new Vue ({
        el:'#my',   //挂载元素
        data:{   //数据
            num:0,
            lists:[{title:'在线咨询123',icon:'icon-shenghuo',color:'#f95730'},
                    {title:'产品介绍',icon:'icon-11',color:'#fa69b9'},
                    {title:'活动动态',icon:'icon-jiazheng',color:'#49dacf'},
                    {title:'限时抢购',icon:'icon-jiaoyu',color:'#908cfd'},
                    {title:'活动动态',icon:'icon-jiajujiafang',color:'#92d85c'},
                    {title:'限时抢购',icon:'icon-licai',color:'#ecbe35'}],
            imges:['img/banner1.jpg',
                    'img/banner2.jpg',
                    'img/banner3.jpg',
                    'img/banner4.jpg',
                    'img/banner5.jpg']
        },
        mounted:function(){   //生命周期
            this.play();
        },
        methods:{   //方法
            autoPlay:function(){
               this.num++;
               if(this.num == this.imges.length){
                   this.num = 0;
               };
            },
            play:function(){
                //setInterval(函数体,时间);
                setInterval(this.autoPlay,2000);
            }
        }
    })
}
