Ext.define('Study.view.selfTest.question.selfTestQuestion', {
	extend: 'Ext.tab.Panel',
    requires: [
               'Ext.layout.container.Card'
           ],	
	xtype : 'selfTestQuestion',
	activeTab: 0,
	title : '자기점검질문지',	
		  defaults: {
		        bodyPadding: 15
		    },

		    items:[
				{
					// 이상하게 첫번째 탭은 form.getValue가 동작하지 않음
					title: '안내문구', 
					html : '<H1> 자가 점검 질문지 입니다.</H1> </br> 그럼 시작합니다. !!!!',
					hidden: true
		        },
		        {
					title: '현재정보입력(CS)',
					name : 'CS' ,
		            xtype : 'INITQeustions'
		        },{
					title: '기술도메인전문성(TD)',
					name : 'TD' ,
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