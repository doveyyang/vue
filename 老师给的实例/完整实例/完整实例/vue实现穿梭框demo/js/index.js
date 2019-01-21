window.onload = function() {
    new Vue({
        el:'#my', //挂载元素
        data:{   //数据
            itemsL:[{name:'北京1',check:true},
                    {name:'北京2',check:false},
                    {name:'北京3',check:false},
                    {name:'北京4',check:false},
                    {name:'北京5',check:false},
                    {name:'北京6',check:false},
                    {name:'北京7',check:true}],  //左侧的数据
            itemsR:[],    //右侧的数据
        },
        methods:{   //方法
            addRight:function(){   //右侧添加数据
                var checkL = this.filterData(this.itemsL,true);
                this.itemsR = [...this.itemsR, ...checkL]; //es6扩展运算符
                this.itemsL = this.filterData(this.itemsL,false);
            },
            addLeft:function(){   //左侧添加数据
                var checkR = this.filterData(this.itemsR,true);
                this.itemsL = [...this.itemsL, ...checkR];  //es6扩展运算符
                this.itemsR = this.filterData(this.itemsR,false);
            },
            //公共方法
            filterData:function(data,type){
                return data.filter(function(v){
                    return type==true ? v.check: !v.check;
                });
            }
        }
    })
}