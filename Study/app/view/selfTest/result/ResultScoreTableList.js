Ext.define('Study.view.selfTest.result.ResultScoreTableList',{
    extend : 'Ext.panel.Panel',
    xtype : 'ResultScoreTableList',
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
    items :[{
        xtype : 'grid',
        title : '결과리스트',
        flex : 1,
        name : 'resultScoreListGrid',
        tbar : [{ 
            xtype : 'button', 
            text : '조회',
            handler : function(btn){
                var grid = btn.up('grid[name=resultScoreListGrid]');
                console.log(grid);
                var store = grid.getStore();
                store.load();  
            }
        }],
        columns :[{
            text : '이름',
            flex : 1,
            dataIndex : 'name'
        },{
            text : '등록시간',
            flex : 1,
            dataIndex : 'datetime'
        },{
            text : 'TTA 직무역량',
            flex : 1,
            dataIndex : 'c_ttad'
        },{
            text : 'SW연구소 직무역량',
            flex: 1,
            dataIndex : 'c_swd'
        },{
            text : '사업도메인 직무역량',
            flex : 1,
            dataIndex : 'c_isd'
        },{
            text : '팀/센터 직무역량',
            flex : 1,
            dataIndex : 'c_ctd'
        },{
            text : '기술도메인 직무역량',
            flex : 1,
            dataIndex : 'c_td'
        },{
            text : '관리자성향',
            flex : 1,
            dataIndex : 'mt'
        },{
            text : '연구개발성향',
            flex : 1,
            dataIndex : 'rt'
        },{
            text : '권고: TTA 직무역량',
            flex : 1,
            dataIndex : 's_ttad',
            hidden : true
        },{
            text : '권고:SW연구소 직무역량',
            flex: 1,
            dataIndex : 's_swd',
            hidden : true
        },{
            text : '권고:사업도메인 직무역량',
            flex : 1,
            dataIndex : 's_isd',
            hidden : true
        },{
            text : '권고:팀/센터 직무역량',
            flex : 1,
            dataIndex : 's_ctd',
            hidden : true
        },{
            text : '권고:기술도메인 직무역량',
            flex : 1,
            dataIndex : 's_td',
            hidden : true
        },{
            text : '최종 : TTA 직무역량',
            flex : 1,
            dataIndex : 'f_ttad',
            hidden : true
        },{
            text : '최종 :SW연구소 직무역량',
            flex: 1,
            dataIndex : 'f_swd',
            hidden : true
        },{
            text : '최종 :사업도메인 직무역량',
            flex : 1,
            dataIndex : 'f_isd',
            hidden : true
        },{
            text : '최종 :팀/센터 직무역량',
            flex : 1,
            dataIndex : 'f_ctd',
            hidden : true
        },{
            text : '최종 :기술도메인 직무역량',
            flex : 1,
            dataIndex : 'f_td',
            hidden : true
        }],
        store : {
            field : ['name','datetime','c_ttad','c_swd','c_isd','c_ctd','c_td','mt','rt','s_ttad','s_swd','s_isd','s_ctd','s_td'],
            model: 'Study.model.ResultScore',
            autoLoad : false,
            proxy : { 
                type : 'ajax',
                anctionMethods : {
                    read : 'GET' 
                },
                url : Ext.manifest.api_url + '/tta/selftest/resultStoreList.do',
                extraParams : { 
                    
                },
                reader :{
                    type : 'json',
                    rootProperty : 'data'
                }
            }
        }, 
        listeners : {
            cellclick: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
               // selectionchangese: function(grid, record, eOpts ) {
            
                var rst = this.up('resultScoreTable');
                var raderchart = rst.down('selfTestResultRaderChart'); 
                var piechart = rst.down('selfTestResultPieChart'); 
                var raderchartStore = raderchart.getStore();

                var piechartStore = piechart.getStore();

                piechartStore.loadData([
                    { category: '관리자 성향', score: record.get('mt')},
                    { category: '연구개발 성향', score: record.get('rt') }]
                )


                raderchartStore.loadData([
                    {name : '기술도메인  역량', pr: record.get('c_td'), rc: record.get('s_td'), ft: record.get('f_td')},
                    {name : '사업도메인 역량', pr: record.get('c_isd'), rc: record.get('s_isd'), ft: record.get('f_isd')},
                    {name : '팀/센터 직무역량', pr: record.get('c_ctd'), rc: record.get('s_ctd'), ft: record.get('f_ctd')},
                    {name : 'SW연구소 직무역량', pr: record.get('c_swd'), rc: record.get('s_swd'), ft: record.get('f_swd')},
                    {name : 'TTA 직무역량',  pr: record.get('c_ttad'), rc: record.get('s_ttad'), ft: record.get('f_ttad')}    
                ]);
            } 
        }
             
    }]          
})

