const VueApp=new window.Vue({el:"#app",data:{curPage:page,err:{},myBlog:!1,posts:!1},components:{"alert-box":window.httpVueLoader("/js/module/AlertBox.vue"),"nav-bar":window.httpVueLoader("/js/module/NavBar.vue")},methods:{Ajax:function(val,callback){const that=this;if(typeof axios!=="undefined"){axios.get(val.url).then(function(response){response.data=that.cleanse(response.data);if(val.alert){response.data.alert=!0}
if(response.data===null){that.Alert({errmsg:"Nothing returned from the server",errno:!1})}
else if(typeof val.data.alert!=="undefined"&&val.data.alert==!0&&response.data.errno!==0){that.Alert(response.data)}
callback(response.data)}).catch(function(error){console.log(error.response)
if(typeof error.response!=="undefined"){that.Alert({alert:!0,msg:error.response.statusText+" - Error Code: "+error.response.status,no:!1})}
console.error(error)})}
else{console.error("axios not loaded");this.myBlog=!1}},Alert:function(data){const that=this;that.err=data;window.setTimeout(function(){that.err={alert:!1}},3000)},cleanse:function(val){if(typeof val==="string"){val=JSON.parse(val)}
return val},initblog:function(){const that=this;that.Ajax({data:!1,url:"/data.json"},function(result){if(typeof result.posts!=="undefined"){that.posts=result.posts}})},},mounted(){const init="init"+this.curPage;if(typeof this[init]==="function"){this[init]()}},template:"#temp-app"})
