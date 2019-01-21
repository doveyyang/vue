window.onload = function(){
    var vm =new Vue({
        el:'#my',
        data:{
            checkAll: {name:'全选',check:false},
            lists:[{name:'小米',check:true},
                    {name:'华为1',check:false},
                    {name:'华为2',check:false},
                    {name:'华为3',check:false},
                    {name:'华为4',check:false}]
        },
        methods: {
            checkAllChange:function(){
                //var self = this;
                // self.lists.forEach(function(item){
                //     item.check = self.checkAll.check;
                // });
                // this.lists.forEach(item =>{
                //     item.check = this.checkAll.check;
                // })
                vm.lists.forEach(function(item){
                    item.check = vm.checkAll.check;
                });
            },
            curChange:function(){
                //true的状态
                var curTure = this.lists.filter(function(item){
                    return item.check ==true;
                });
                //选中的状态与总长度比较
                // if(curTure.length == this.lists.length){
                //     this.checkAll.check = true;
                // }else {
                //     this.checkAll.check = false;
                // }
                curTure.length == this.lists.length ? this.checkAll.check = true : this.checkAll.check = false ;
            }
        }
    })
}