Ext.define('Study.view.selfTest.question.TDQuestions', {
	extend: 'Ext.form.Panel',
	xtype : 'TDQuestions',
	scrollable: true,
    controller: 'selfTestController',	
    
    buttons: [{
        text: 'Save',
        handler: 'onSaveFormClick'
    }, {
        text: 'Reset',
        handler: 'onResetFormClick' 
    }],
    items : [{
    	xtype : 'grid',
    	title : '기술도메인 전문성측정',
    	columnLines : true,
    	store :{
    		autoLoad: true,
    		fields : [ 'qno', 'question', 'answer'],
    		data   : { items: [{
		    			qno:'Q1', 
		    			question: '당신은 대학교 재학 시 컴퓨터 공학 관련 수업을 어느정도 수준으로 수강을 하였나요?', 
		    			answers :[{answer : '전혀듣지않았다', answerNo: 'Q1_1', name:'Q1_1'},{
			    				answer : '기초개론정도', answerNo: 'Q1_2', name:'Q1_2'
				    			},{
				    				answer : '2+시스템구조', answerNo: 'Q1_3', name:'Q1_3'
				    			},{
				    				answer : '3+프로그래밍고급', answerNo: 'Q1_4', name:'Q1_4'
				    			},{
				    				answer : '모든정공', answerNo: 'Q1_5', name:'Q1_5'	
				    			}]
	    				}]    			
    		},
    		 proxy: {
		         type: 'memory',
		         reader: {
	             type: 'json',
	             rootProperty: 'items'
	         }
     }
    			
    	},
    	viewConfig:{
    		enableTextSelection : true
    	},
    	columns : [{
    		xtype : 'rownumberer'
    	},{
    		text : '질문번호',
    		flex : 1,
    		dataIndex: 'qno'
    	},{
    		text : '질문내용',
    		flex : 3,
    		dataIndex: 'question' ,
			renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
			    var q  = record.get('question')
			    var grid = this
			    var i ;
			    var crsize=40;
			    for (i=0;i< Math.floor(q.length/crsize) ;i++){
			    	q=insert(q,'<br/>',((i+1)*crsize))  	
			    }
			    return q;
			}    		
    	},{
    		text : '모른다 <------>매우잘한다',
			flex : 2,
			xtype : 'widgetcolumn',
			widget : {
				xtype: 'sliderfield',
				value : 50,
				increment : 25,
				minValue : 0,
				maxValue : 100, 
				bind : '{record.qno}' 
				
			},
			onWidgetAttach: function(col, widget, rec){
				console.log(widget);
			}
    	}]
    	
    		
    	
    }]		
});