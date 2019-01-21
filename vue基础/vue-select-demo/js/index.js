window.onload = function(){
    new Vue({
        el:'#my',
        data:{
            all:false,
            list:[
                {value:1,checked:true,title:'选项一'},
                {value:2,checked:false,title:'选项二'},
                {value:3,checked:false,title:'选项三'},
                {value:4,checked:false,title:'选项四'}
            ]
        },
        methods:{
            checkAll(){
                // this.all = !this.all;
                console.log('check all',this.all)
                this.list.forEach(element => {
                    element.checked = this.all;
                });
            },
            changeItem(){
                let cLength = 0;
                this.list.forEach(item=>{
                    if(item.checked){
                        cLength++;
                    }
                })
                // if(cLength == this.list.length){
                //     this.all = true;
                // }else{
                //     this.all = false;
                // }
                cLength==this.list.length?this.all = true:this.all = false;
            }
        }
    })
}