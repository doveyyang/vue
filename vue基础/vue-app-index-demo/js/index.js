window.onload = function(){
    new Vue({
        el:'#my',
        data:{
            bannercount:0, //当前的banner位置
            banner_url:['./img/banner1.jpg','./img/banner2.jpg','./img/banner3.jpg','./img/banner4.jpg','./img/banner5.jpg'],
            num:0,
            lists:[{title:'在线咨询123',icon:'icon-jine',color:'#f95730'},
                    {title:'产品介绍',icon:'icon-jieshao',color:'#fa69b9'},
                    {title:'活动动态',icon:'icon-xianshiqianggou',color:'#49dacf'},
                    {title:'限时抢购',icon:'icon-dongtai',color:'#908cfd'},
                    {title:'活动动态',icon:'icon-zaixianzixun',color:'#92d85c'},
                    {title:'限时抢购',icon:'icon-huodong',color:'#ecbe35'}],
        },
        methods:{
            start(){
                console.log('start',this.num)
                let that = this;
                let inte =  setInterval(function(){
                    that.bannercount++;
                    if(that.bannercount==5){
                        that.bannercount =0;
                    }
                },2000)
            }
        },
        mounted:function(){
            this.start();
        }

    })
}