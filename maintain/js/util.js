var util = {}



util.prettyFileSize = function (size) {
    if (!size)
        return "";

    var num = 1024.00; //byte

    if (size < num)
        return size + "B";
    if (size < Math.pow(num, 2))
        return (size / num).toFixed(2) + "KB"; //kB
    if (size < Math.pow(num, 3))
        return (size / Math.pow(num, 2)).toFixed(2) + "MB"; //M
    if (size < Math.pow(num, 4))
        return (size / Math.pow(num, 3)).toFixed(2) + "GB"; //G
    return (size / Math.pow(num, 4)).toFixed(2) + "TB"; //T
}

util.queryStringObject = function(queryString) {
    if (!queryString)
        queryString = window.location.search.substr(1);
    if (queryString.startsWith('?'))
        queryString=queryString.substr(1)
    const queryList = queryString.split('&')
    let result = {}
    queryString && queryList.map((item) => {
        let keyValue = item.split('=')
        result[keyValue[0]] = decodeURIComponent(keyValue[1])
    })
    return result
}

util.attr=function(obj,keyChain){
    debugger
    if(!obj || !keyChain)
      return null;
     var keys= keyChain.split('.')
     var obj1 = obj;
     for(var i in keys){
         if(keys[i].indexOf('[')>=0){
            var key=keys[i].substring(0,keys[i].indexOf('['));
            var index = keys[i].substring(keys[i].indexOf('[')+1,keys[i].indexOf(']'));
            obj1=obj1[key];
            if(obj1==null || obj1==undefined)
                return null
            if(obj1.length<=index)
                return null
            obj1=obj1[index];
         }else {
            obj1=obj1[keys[i]];
            if(obj1==null || obj1==undefined)
                return null
         }
     }
     return obj1;
}

util.trim=function(value){
    debugger
    if(!value)
        return '';
    return value.trim();
}

