window.onload = function(){
    var vm = new Vue({
        el:'#my',  //挂载元素
        data:{    //数据
            items:[{name:'陈奕迅1',qq:'12345678',id:1},
                    {name:'陈奕迅2',qq:'2345436546',id:2},
                    {name:'陈奕迅3',qq:'5345435435',id:3},
                    {name:'陈奕迅4',qq:'54354354',id:4},
                    {name:'陈奕迅5',qq:'54435435',id:5},
                    {name:'陈奕迅6',qq:'5643634',id:6},
                    {name:'陈奕迅7',qq:'5435345',id:7},
                    {name:'陈奕迅8',qq:'2255255',id:8},
                    {name:'陈奕迅9',qq:'32643646',id:9}],
            selectorItems:[] ,   //已选择的数据
            flag:'hide'
        },
        methods:{   //方法
            addList:function(item){
                //id重复  filter()  过滤
                var idRepeat = vm.selectorItems.filter(function(v){
                    return v.id == item.id;
                });
                if(idRepeat.length>0) return;
                //push()   unshift()
                vm.selectorItems.push(item);
            },
            //删除  splice(index,1)   index表示删除的位置   1 删除的数量
            curDel:function(index){
                vm.selectorItems.splice(index,1)
            }
            
        }
    })
}