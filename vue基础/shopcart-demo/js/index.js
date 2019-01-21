window.onload=function(){
    new Vue({
        el:'#my',
        data:{
            content:'',

            list:[
                {content:'heheda',status:false},
                {content:'heheda1',status:true},
                {content:'heheda2',status:false},
                {content:'heheda3',status:true}
            ]
        },
        methods:{
            del(index){
                console.log('del:',index)
                this.list.splice(index,1)
            },
            add(){
                if(!this.content)return;
                this.list.unshift({
                    content:this.content,
                    status:false
                })
                this.content=""
            }

        }
    })   
}