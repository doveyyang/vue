window.onload = function(){
    // console.log('test');
    new Vue({
        el:'#my',
        data:{
            num:0,
            title:['在线咨询','产品介绍','会员介绍','我的详情'],
            content:['内容一','内容二','内容三','内容四']
        },
        methods:{
            play(index){
                this.num = index;
            }
        },

    })
}