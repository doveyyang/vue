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
            allstatus:false,
            pageTotal:1,
            currentPage:0,

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
                axios.get('http://localhost:3001/cart/list',{params:{currentPage:this.currentPage}})
                .then(res=>{
                    console.log(res)
                    if(res.data&&res.data.result){
                        this.list = res.data.result;
                    }
                }).catch(error=>{
                    console.error(error)
                })

                //获取总页数
                axios.get("http://localhost:3001/list/getPageCount")
                .then(res=>{       
                    console.log('pageTotal:',res)
                    this.pageTotal = res.data;

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
            },
            goto(c){
                console.log(c)
                this.currentPage = c-1;
                this.update();
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
               
            },
            currentPage(newValue,oldValue){
                if(newValue<0){
                    this.currentPage =0;
                   
                }
                if(newValue>=this.pageTotal){
                    this.currentPage = this.pageTotal-1;
                }
                this.update()
            }
        }
    })   
}