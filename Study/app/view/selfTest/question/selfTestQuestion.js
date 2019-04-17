Ext.define('Study.view.selfTest.question.selfTestQuestion', {
	extend: 'Ext.tab.Panel',
    requires: [
               'Ext.layout.container.Card'
           ],	
	xtype : 'selfTestQuestion',
	title : '자기점검질문지',	
	/*html : '<H1> 자기점검질문지 </H1>'*/
		
		  defaults: {
		        bodyPadding: 15
		    },

		    items:[
		        {
		            title: '현재정보 입력',
		            xtype : 'STQuestions'
		        },		        {
		            title: '현재정보 입력2',
		            xtype : 'selfTestQuestionCurrent'
		        },
		        {
		            title: 'TTA 직무 역량',
		            html: '<H1> TTA 직무 역량 질문 </H1>'
		        },
		        {
		            title: 'SW 연구소 직무 역량',
		            html: '<H1> SW 연구소 직무 역량 </H1>'
		        }
		    ]		

		
});