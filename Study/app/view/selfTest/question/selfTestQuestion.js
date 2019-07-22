Ext.define('Study.view.selfTest.question.selfTestQuestion', {
	extend: 'Ext.tab.Panel',
    requires: [
               'Ext.layout.container.Card'
           ],	
	xtype : 'selfTestQuestion',
	title : '자기점검질문지',	
		  defaults: {
		        bodyPadding: 15
		    },

		    items:[
		        {
		            title: '현재정보입력(SD)',
		            xtype : 'STQuestions'
		        },{
		            title: '기술도메인전문성(TD)',
		            xtype: 'TDQuestions'		        	
		        },
		        {
		            title: '사업도메인전문성(ID)',
		            xtype: 'IDQuestions'		        	
		        },
		        {
		            title: '팀/센터 직무 수행 역량(CTD)',
		            xtype: 'CTDQuestions'
		        },
		        {
		        	title : 'TTA 직무 수행 역량(TTAD)',
		        	xtype: 'TTADQuestions'
		        },
		        {
		            title: 'SW 연구소 직무 수행 역량(SWD)',
		            xtype: 'SWDQuestions'
		        }		        		       
		    ]
});