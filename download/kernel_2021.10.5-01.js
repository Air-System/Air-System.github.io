var $ = {
    "system":{
        "boot":function(object){
            $.system.file.new("JSON://","screen","folder");
            $.system.file.new("JSON://screen/","object","folder");
            $.system.file.edit("JSON://screen/object",object);
        },
        "file":{
            "parsing":function(URL){
                URL = URL.replace(/json:\/\//gi,"$.file.")
                return URL.replace(/\//gi,".inner.");
            },
            "new":function(URL,name,type){
                var res = $.system.file.parsing(URL);
                res = res + name;
                var data = {
                    "name":name,
                    "type":type,
                    "lastEdit":$.system.time()
                };
                eval(res + "=" + JSON.stringify(data));
                if(type = "folder"){
                    eval(res + ".inner = {}")
                }
            },
            "edit":function(URL,inner){
                var res = $.system.file.parsing(URL);
                eval(res + ".inner = inner")
            }
        },
        "time":function(){
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
    "file":{
    }
};