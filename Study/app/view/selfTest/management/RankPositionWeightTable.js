Ext.define('Study.view.selfTest.management.RankPositionWeightTable',{
    extend : 'Ext.panel.Panel',
    xtype : 'RankPositionWeightTable',
    controller : 'selfTestController', 
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },   
    width : 600,
    defaults: {
        frame: true,
        //bodyPadding: 10
    },    
    items : [{
        xtype : 'panel',
        flex : 1,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },          
        items : [{
            xtype : 'grid',
            title : '직위가중치표',
            name : 'positionTable',
            columnLines : true,
            height : Ext.Element.getViewportHeight() / 2 ,
            tbar : [ 
                {
                    xtype : 'button',
                    text : '조회',
                    handler : function(btn) {
                        
                        var grid = btn.up('grid[name=positionTable]');
                        console.log(grid);
                        var store = grid.getStore();
                        store.load(); 
                    }        
                },{
                    xtype : 'button',
                    text : '수정',
                },{
                    xtype : 'button',
                    text : '저장',
                }
            ],
            selModel: {
                type: 'checkboxmodel',
                mode : 'MULTI'		            
            }, 	    
            columns : [{
                text : '직위',
                flex : 1,
                dataIndex : 'position'                         
            },{
                text : 'TTA 직무역량',
                flex : 1,
                dataIndex : 'ttad',
                formatter : 'number("0.00")'           
            },{
                text : '소프트웨어 연구소 직무역량',
                flex : 1,
                dataIndex : 'swd',
                formatter : 'number("0.00")'           
            },{
                text : '사업도메인 직무역량',
                flex : 1,
                dataIndex : 'isd',
                formatter : 'number("0.00")'
            },{
                text : '팀/센터 직무역량',
                flex : 1,
                dataIndex : 'ctd',
                formatter : 'number("0.00")'
            },{
                text : '기술도메인 직무역량',
                flex : 1,
                dataIndex : 'td',
                formatter : 'number("0.00")'
            }],
            store : {
                fields : ['position','code','ttad','swd','id','ctd','td'],
                autoLoad : false,
                proxy : {
                    type : 'ajax',
                    anctionMethods : {
                        read : 'GET'
                    },
                    url : Ext.manifest.api_url + '/tta/selftest/positionWeight.do',
                    extraParams : {
                        
                    },
                    reader :{
                        type : 'json',
                        rootProperty : 'data'
                    }
                }
            }                            
        },{
            xtype : 'grid',
            title : '직책가중표',
            name : 'rankTable',
            columnLines : true,
            tbar : [ 
                {
                    xtype : 'button',
                    text : '조회',
                    handler : function(btn) {
                        
                        var grid = btn.up('grid[name=rankTable]');
                        console.log(grid);
                        var store = grid.getStore();
                        store.load();
                    }        
                },{
                    xtype : 'button',
                    text : '수정',
                },{
                    xtype : 'button',
                    text : '저장',
                }
            ], 
            selModel: {
                type: 'checkboxmodel',
                mode : 'MULTI'		            
            }, 	    
            columns : [{
                text : '직책',
                flex : 1,
                dataIndex : 'rank'
            },{
                text : 'TTA 직무역량',
                flex : 1,
                dataIndex : 'ttad',
                formatter : 'number("0.00")'           
            },{
                text : '소프트웨어 연구소 직무역량',
                flex : 1,
                dataIndex : 'swd',
                formatter : 'number("0.00")'           
            },{
                text : '사업도메인 직무역량',
                flex : 1,
                dataIndex : 'isd',
                formatter : 'number("0.00")'
            },{
                text : '팀/센터 직무역량',
                flex : 1,
                dataIndex : 'ctd',
                formatter : 'number("0.00")'
            },{
                text : '기술도메인 직무역량',
                flex : 1,
                dataIndex : 'td',
                formatter : 'number("0.00")'
            }],
            store : {
                fields : ['rank','code','ttad','swd','id','ctd','td'],            
                autoLoad : false,
                proxy : {
                    type : 'ajax',
                    anctionMethods : {
                        read : 'GET'
                    },
                    url : Ext.manifest.api_url + '/tta/selftest/rankWeight.do',
                    extraParams : { 
                        
                    },
                    reader :{
                        type : 'json',
                        rootProperty : 'data'
                    }
                }
            }                 
        }]
    },{
        xtype : 'panel', 
        flex : 1,
        items : [{
            xtype : 'grid',
            title : '직무가중표',
            name : 'workTaskTable',
            height : Ext.Element.getViewportHeight() / 2 ,
            columnLines : true,
            tbar : [ 
                {
                    xtype : 'button',
                    text : '조회',
                    handler : function(btn) { 
                        
                        var grid = btn.up('grid[name=workTaskTable]');
                        console.log(grid);
                        var store = grid.getStore();
                        store.load();
                    }                    
                },{
                    xtype : 'button',
                    text : '수정',
                },{
                    xtype : 'button',
                    text : '저장',
                }
            ],    
            selModel: {
                type: 'checkboxmodel',
                mode : 'MULTI'		            
            }, 	
            columns : [{
                text : '업무',
                flex : 1,
                dataIndex : 'task'
                
            },{
                text : '카타고리',
                flex : 1,
                dataIndex : 'category',
                renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
                    var category  = record.get('category')
                    

                    if (category == "External")
                    {
                        return "외부업무";
                    }
                    else if(category=='Internal')
                    {
                        return "내부업무";
                    }
                    else if(category=="Technical")
                    {
                        return '기술업무'
                    } 
                }
            },{
                text : '타입',
                flex : 1,
                dataIndex : 'type'
            },{
                text : '관리자성향',
                flex : 1,
                dataIndex : 'mt',
                formatter : 'number("0.00")'
            },{
                text : '연구자성향',
                flex : 1,
                dataIndex : 'rt',
                formatter : 'number("0.00")'
            }],
            
            store : {
                fields : ['task','category','code','type','mt','rt'],
                autoLoad : false,
                proxy : {
                    type : 'ajax',
                    anctionMethods : {
                        read : 'GET' 
                    },
                    url : Ext.manifest.api_url + '/tta/selftest/workTaskWeight.do',
                    extraParams : { 
                        
                    },
                    reader :{
                        type : 'json',
                        rootProperty : 'data'
                    }
                }
            }                 
        }]        
    }] 
 
})