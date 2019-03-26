Ext.define('Study.view.selfTest.question.selfTestQuestionCurrent', {
	extend: 'Ext.form.Panel',
	xtype : 'selfTestQuestionCurrent',
	scrollable: true,
	items :[{
		xtype: 'container',
        layout: 'hbox',
        margin: '0 0 10',
        items : [{
        	xtype : 'fieldset',
        	flex : 1,
            items:[{
	    	    xtype: 'textfield',
	            name: 'userName',
	            fieldLabel: '귀하의 이름은?',
	            width : '30%' 
	            	
           },
           {
               xtype: 'checkboxgroup',
               
               fieldLabel: 'Q1) 귀하의 직위는 무었입니까?',
               labelWidth: 300,
               /*labelStyle: 'width:30%',*/
               columns: 1,
               vertical: true,    
            
               items: [
                   {boxLabel: '수석/부장 (20년차 이상)' , name: 'Q1_1'},
                   {boxLabel: '책임/차장 (10~19년차)' , name: 'Q1_2'},
                   {boxLabel: '선임/과장 (6~9년차)'   , name: 'Q1_3'},
                   {boxLabel: '전임/대리 (3~5년차)'   , name: 'Q1_4'},
                   {boxLabel: '원/사원 (1~2년차)'    , name: 'Q1_5'}
               ] 
        	   
           },
           {
               xtype: 'checkboxgroup',
               fieldLabel: 'Q2) 현재 BMT 팀에서 귀하가 수행하고 있는 역할를 모두 체크해 주세요',
               labelWidth: 300,
               /*labelStyle: 'width:30%',*/
               columns: 1,
               vertical: true,    
             
               items: [
                   {boxLabel: '품질책임' , name: 'Q3_1'},
                   {boxLabel: '기술책임' , name: 'Q3_2'},
                   {boxLabel: '시험관리원'   , name: 'Q3_3'},
                   {boxLabel: '시험원'   , name: 'Q3_4'},
                   {boxLabel: '기타'    , name: 'Q3_5'}
               ] 
        	   
           },
           {
               xtype: 'checkboxgroup',
               fieldLabel: 'Q3) 현재 BMT 팀에서 귀하가 수행하고 있는 역할를 모두 체크해 주세요',
               labelWidth: 300,
               /*labelStyle: 'width:30%',*/
               columns: 1,
               vertical: true,    
            
               items: [
                   {boxLabel: '품질책임' , name: 'Q3_1'},
                   {boxLabel: '기술책임' , name: 'Q3_2'},
                   {boxLabel: '시험관리원'   , name: 'Q3_3'},
                   {boxLabel: '시험원'   , name: 'Q3_4'},
                   {boxLabel: '기타'    , name: 'Q3_5'}
               ] 
        	   
           },
           {
               xtype: 'checkboxgroup',
               fieldLabel: 'Q4) 현재 BMT 팀에서 당신이 수했을 했었거나, 수행하고 있는 시험외 내부관리를 모두 체크해 주세요',
               labelWidth: 300,
               /*labelStyle: 'width:30%',*/
               columns: 1,
               vertical: true,    
            
               items: [
                   {boxLabel: '행사기획' , name: 'Q3_1'},
                   {boxLabel: '위원회 운영' , name: 'Q3_2'},
                   {boxLabel: '교육관리'   , name: 'Q3_3'},
                   {boxLabel: '계약관리'   , name: 'Q3_4'},
                   {boxLabel: '실적관리'    , name: 'Q3_5'},
                   {boxLabel: '실적관리'    , name: 'Q3_5'},
                   {boxLabel: '예산관리'    , name: 'Q3_5'},
                   {boxLabel: '장비/시설관리'    , name: 'Q3_5'},
                   {boxLabel: '자료물품관리'    , name: 'Q3_5'}
               ] 
        	   
           },
           {
               xtype: 'checkboxgroup',
               fieldLabel: 'Q5) 현재 BMT 팀에서 당신이 수행을 했었거나 수행하고 있는 시험외 외부관리를 모두 체크해 주세요',
               labelWidth: 300,
               /*labelStyle: 'width:30%',*/
               columns: 1,
               vertical: true,    
            
               items: [
                   {boxLabel: '과제관리' , name: 'Q3_1'},
                   {boxLabel: '위탁용역관리' , name: 'Q3_2'},
                   {boxLabel: '제도관리'   , name: 'Q3_3'}
               ]         	   
           }]
        	
        }]

	}],
    buttons: [{
        text: 'Save',
        handler: 'onSaveFormClick'
    }, {
        text: 'Reset',
        handler: 'onResetFormClick' 
    }] 

});