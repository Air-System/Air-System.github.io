var _ = {
    "system":{
        "boot":function(object){
            _.system.file.new("JSON://","screen","folder");
            _.system.file.new("JSON://screen/","object","folder");
            _.system.file.edit("JSON://screen/object",object);
            _.system.file.new("JSON://","version","array");
            _.system.file.edit("JSON://version",[2021,10,5,2]);
        },
        "file":{
            "parsing":function(URL){
                URL = URL.replace(/json:\/\//gi,"_.file.")
                return URL.replace(/\//gi,".inner.");
            },
            "new":function(URL,name,type){
                var res = _.system.file.parsing(URL);
                res = res + name;
                var data = {
                    "name":name,
                    "type":type,
                    "lastEdit":_.system.date()
                };
                eval(res + "=" + JSON.stringify(data));
                if(type = "folder"){
                    eval(res + ".inner = {}")
                }
            },
            "edit":function(URL,inner){
                var res = _.system.file.parsing(URL);
                eval(res + ".inner = inner")
            },
        },
        "screen":{
            "add":function(inner,object){
                object.innerHTML += inner;
            }
        },
        "date":function(){
            var res = new Date();
            return [
                res.getFullYear(),
                res.getMonth(),
                res.getDay(),
                res.getHours(),
                res.getMinutes(),
                res.getSeconds(),
                res.getMilliseconds()
            ];
        }
    },
    "file":{}
};