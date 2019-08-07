Ext.define('Study.view.selfTest.management.ResultScoreTable',{
    extend : 'Ext.panel.Panel',
    xtype : 'resultScoreTable',
    controller : 'selfTestController',
    layout : {
        type : 'hbox',
        pack : 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true,
        //bodyPadding: 10
    },      
    items : [
        {
            xtype : 'panel',
            flex : 1,
            //height : Ext.Element.getViewportHeight() / 2 ,
            //width : Ext.Element.getViewportWidth() / 2,
            title : '결과테이블',
            items : [{
                xtype : 'ResultScoreTableList'
            }]
        },{
            xtype : 'panel',
            flex : 1,           
            title : '결과화면',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },            
            items: [
                {
                    title: '역량 진단 결과',
                    flex:1,
                    margin: '0 10 0 0',
                    /*html: 'flex: 1'*/
                    xtype : 'selfTestResultRaderChart'                	     
                },
                { 
                    title: '성향 분석 결과',
                    flex:1,
                    margin: '0 10 0 0',
                    xtype : 'selfTestResultPieChart'
                }
            ]    
    
        }] 
})

