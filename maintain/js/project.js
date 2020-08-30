var project = {}
project.newTab = function (param) {
    var tabs = $('#tabs').length == 0 ? parent.$('#tabs') : $('#tabs')

    tabs.tabs('add', {
        id: param.id,
        title: param.title,
        closable: true,
        width: '100%',
        content: `<iframe src="${param.url}" style="width:100%;height:99%;border:none;"/>`,
        tools: [{
            iconCls: 'icon-mini-refresh',
            handler: function () {
                var currentTab = tabs.tabs('getSelected');
                tabs.tabs('update', {
                    tab: currentTab,
                    options: {
                        content: currentTab.panel('options', 'content'),
                    }
                });
            }
        }
        ]
    });
}



project.huoWuLeiXing = function (value) {
    debugger
    if(isNaN(value) || value ==null)
        return ''
    if(value == 1)
        return '服装'
    else if(value == 2)
        return '食品'
   return ''
}

project.baoZhuangFangShi = function (value) {
    debugger
    if(isNaN(value) || value ==null)
        return ''
    if(value == 1)
        return '木箱'
    else if(value == 2)
        return '纸箱'
   return ''
}

project.xiangXing = function (value) {
    debugger
    if(isNaN(value) || value ==null)
        return ''
    if(value == 1)
        return '20小箱'
    else if(value == 2)
        return '40大箱'
    else if(value == 3)
        return '40高箱'
    else if(value == 4)
        return '45高箱'
   return ''
}

project.gongNeng = function (value) {
    debugger
    if(isNaN(value) || value ==null)
        return ''
    if(value == 1)
        return '普通'
    else if(value == 2)
        return '短板'
    else if(value == 3)
        return '短板自卸'
    else if(value == 4)
        return '冷柜'
    else if(value == 5)
        return '开顶'
    else if(value == 6)
        return '罐式'
    else if(value == 7)
        return '脚架折叠'
    else if(value == 8)
        return '板框折叠'
    else if(value == 9)
        return '挂衣'
   return ''
}

project.xiangShuUnit = function (value) {
    debugger
    if(isNaN(value) || value ==null)
        return ''
    if(value == 1)
        return '个'
    else if(value == 2)
        return '组'
   return ''
}

project.goodsTypes = [
    {
        id:'1',
        name:'服装',
        sons:[
            {
                id:'11',
                name:'服装11'
            },{
                id:'12',
                name:'食品12'
            }
        ]
    },{
        id:'2',
        name:'食品',
        sons:[
            {
                id:'21',
                name:'服装21'
            },{
                id:'22',
                name:'食品22'
            }
        ]
    }
]

