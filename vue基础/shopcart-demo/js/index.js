window.onload=function(){
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    new Vue({
        el:'#my',
        data:{
            content:'',
            list:[
                {content:'heheda',status:false},
                {content:'heheda1',status:true},
                {content:'heheda2',status:false},
                {content:'heheda3',status:true}
            ],
            allstatus:false
        },
        methods:{
            del(index){
                axios.post('http://localhost:3001/cart/del',{id:index})
                .then(res=>{
                    this.update();
                }).catch(error=>{
                    console.error(error)
                })
            },
            add(){
                if(this.content.trim() == '')return;
                axios.post('http://localhost:3001/cart/add',{content:this.content})
                .then(res=>{
                    this.update();
                    this.content="";
                }).catch(error=>{
                    console.error(error)
                })
                
            },
            update(){
                axios.get('http://localhost:3001/cart/list')
                .then(res=>{
                    if(res.data&&res.data.result){
                        this.list = res.data.result;
                        
                        
                    }
                }).catch(error=>{
                    console.error(error)
                })
            },
            changeStatus(id,status){
                axios.post('/list/change',{id:id,status:status})
                .then(res=>{                    
                    this.update();
                }).catch(error=>{
                    console.error(error)
                })
            },
            changeAllStatus(status){
                this.list.forEach(element => {
                    this.changeStatus(element.id,status)
                    // element.status = status
                });
            }

        },
        mounted(){
           this.update();

        },
        watch:{
            list(newValue,oldValue){
                let tcount = 0;
                this.list.forEach(item=>{
                    if(item.status) tcount++;
                })
                this.allstatus = tcount==this.list.length;
               
            }
        }
    })   
}