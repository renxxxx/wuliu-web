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



project.fengXianChengShou = function (value) {
    debugger
    if(isNaN(value) || value ==null)
        return ''
    if(value < 40)
        return '低'
    else if(40<= value && value < 60 )
        return '中'
    else if(60<= value && value < 79)
        return '中高'
    else if(80<=  value && value <= 100)
        return '高'
   return ''
}