var connect = require('connect');  //创建连接
var bodyParser = require('body-parser');   //body解析
var serveStatic = require('serve-static');   //目录访问（静态文件访问）
var url = require("url");
var querystring = require("querystring");

var list=[
	{id:1,content:'手机1',status:false},
	{id:2,content:'手机2',status:false},
	{id:3,content:'电脑3',status:false},
	{id:4,content:'平板4',status:true},
	{id:5,content:'包包5',status:false},
	{id:6,content:'衣服6',status:false},
	{id:7,content:'玩具7',status:true}	 
];
var size = 2;//一页10条数据
var app = connect()
    .use(bodyParser.json())   //JSON解析
    .use(bodyParser.urlencoded({extended: true}))
    .use(serveStatic(__dirname))
	//use()方法还有一个可选的路径字符串，对传入请求的URL的开始匹配。
	//use方法来维护一个中间件队列
	.use(function (req, res, next) {
		//跨域处理
		// Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');  //允许任何源
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  //允许任何方法
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token');   //允许任何类型
		res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});    //utf-8转码
		next();  //next 方法就是一个递归调用
	})
	.use('/cart/list',function(req,res,next){
		let currentPage = 0;
		// console.log('query:',req)
		//获取返回的url对象的query属性值 
		var arg = url.parse(req.url).query;
		
		//将arg参数字符串反序列化为一个对象
		var params = querystring.parse(arg);

		if(params.currentPage){
			currentPage = params.currentPage;
		}
		console.log(currentPage)
		let nArr = list.slice(currentPage*size,currentPage*size+size);
		console.log(nArr)
		var result = {
			code:200,
			result:nArr,
		}
		res.end(JSON.stringify(result));		
		next();
	})
	.use('/cart/add',function(req,res,next){
		let content = req.body.content;
		let max =Math.max.apply(Math, list.map(function(o) {return o.id})); 
		let id = (max>0?max:0)+1;
		if(!content|| !id){
			res.end(JSON.stringify({code:400}));
			next();
		}
		
		list.unshift({
			id:id,
			content:content,
            status:false
		})
		 res.end(JSON.stringify(list))
		 next();
	})
	.use('/cart/del',function(req,res,next){
		if(!req.body.id) {
			res.end(JSON.stringify({code:400}))
			next()
		}
		// list.
		let index = list.findIndex(item=>{
			return item.id == req.body.id
		})
		if(index!=-1){
			list.splice(index,1)
		}
		res.end(JSON.stringify(list))
		next()
	})
	.use('/list/change',function(req,res,next){
		var id = req.body.id;
		var status = req.body.status;
		if(!id||!status){
			res.end(JSON.stringify({code:400}))
			next()
		}
		list.forEach(item=>{
			if(item.id== id){
				item.status = status
			}
		})
		res.end(JSON.stringify(list))
		next()
	})
	.use('/list/getPageCount',function(req,res,next){
		
		let count = Math.ceil(list.length/size);
		res.end(JSON.stringify(count))
		next()
	})

	// .use('/list/get', function(req, res, next) {
	// 	var data = {"code":200,"msg":"success"};
	// 	//var i = req.body.cur -1; //转化页数索引
	// 	//console.log(req.originalUrl, req.url);
	// 	console.log(req.url);  //'/?cur=1';
	// 	var str = req.url;
	// 	var index =str.lastIndexOf("=");
	// 	var i =str.substring(index+1,str.length)-1;//截取
	// 	var length = arr.length;
	// 	var pagenum = Math.ceil(length/size);  //向上 页数 
	// 	var arr2 =arr.slice(i*10,i*10+10);   //(start,end)  每页的数据
	// 	data.arr =arr2;
	// 	data.length = length;   //数组的长度
	// 	data.pagenum = pagenum;    //总的页数
    //     res.end(JSON.stringify(data));
	// 	next();
	// })
    .listen(3001);
console.log('Server started on port 3001.');