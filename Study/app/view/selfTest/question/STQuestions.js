Ext.define('Study.view.selfTest.question.STQuestions', {
	extend: 'Ext.form.Panel',
	xtype : 'STQuestions',
	scrollable: true,
    items : [{
        	xtype : 'grid',
	    	title: 'STQuestions', 
	    	columnLines : true,
	        store: {
	            type: 'STQuestions' // we'll define this next
	        },
	        /*bind : { 
	    		store : '{STQuestions}'
	    			
	    	},*/ viewConfig: {
	            enableTextSelection: true
	        },
    	 
	    	columns : [{
	    		xtype : 'rownumberer'
	    	},{
	    		text : '질문번호',
	    		flex : 1,
	    		dataIndex : 'qno'
	    	},{
	    		text : '질문내용',
	    		flex : 5,
	    		dataIndex : 'question'
	    	},{
	    		text : '답변',
	    		flex : 3,
	    		xtype : 'widgetcolumn',
    	        widget: {
    	            xtype: 'combo',
	                vertical: true,    
	                labelWidth: 100,
	                labelStyle: 'width:30%',
	                columns: 2,
    	            bind: '{record.mode}',
    	            store: [
    	               '수석/부장 (20년차 이상)','책임/차장 (10~19년차)','선임/과장 (6~9년차)','전임/대리 (3~5년차)','원/사원 (1~2년차)'	                    
    	            ]
    	        }
/*	       		widget : {
	                xtype: 'checkboxgroup',
	                vertical: true,    
	                labelWidth: 100,
	                labelStyle: 'width:30%',
	                columns: 2, 
	                items: [
	                    {boxLabel: '수석/부장 (20년차 이상)' , name: 'Q1_1'},
	                    {boxLabel: '책임/차장 (10~19년차)' , name: 'Q1_2'},
	                    {boxLabel: '선임/과장 (6~9년차)'   , name: 'Q1_3'},
	                    {boxLabel: '전임/대리 (3~5년차)'   , name: 'Q1_4'},
	                    {boxLabel: '원/사원 (1~2년차)'    , name: 'Q1_5'}
	                ] 
	       		}*/
	    	}]
        }]
});