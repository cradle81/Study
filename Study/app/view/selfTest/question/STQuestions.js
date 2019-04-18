   insert = function insert(main_string, ins_string, pos) {
 	   if(typeof(pos) == "undefined") {
 	    pos = 0;
 	  }
 	   if(typeof(ins_string) == "undefined") {
 	    ins_string = '';
 	  }
 	   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
 	  }
    

Ext.define('Study.view.selfTest.question.STQuestions', {
	extend: 'Ext.form.Panel',
	xtype : 'STQuestions',
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
				title: 'STQuestions', 
				columnLines : true,
			    store: {
			        type: 'STQuestions' // we'll define this next
			    },viewConfig: {
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
					width : 450,
					dataIndex : 'question',
					variableRowHeight : true ,
					stripeRows :true,
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
					text : '답변',
					flex : 3,
					xtype : 'widgetcolumn',
					
					widget: 
					{
						// xtype: 'getXtypeFromServer' 
						 xtype: 'checkboxgroup',
			             vertical: true,    
			             labelWidth: 100,
			             labelStyle: 'width:30%',
			             columns: 2   			 
					 },
					
					 // 초기 로딩하면서 answer에 있는 데이터를 읽어서 checkBox에 items array를 add하면 그에 따른게 만들어짐
					 // 더 나아가서 colums나 vertical등 관련 설정을 할 수 있을까?
			        onWidgetAttach: function(col, widget, rec) 
			        {
				    	var answerlist=rec.get('answers')
				    	var items=[] 
			            //widget.add(rec.get('answer2'))
			            var i ; 
			            for (i=0;i<answerlist.length;i++){  	            	
			            	var item=new Object()
			            	item.boxLabel=answerlist[i].answer
			            	item.name=answerlist[i].answerNo    	            	
			            	items.push(item);    	            	
			            } 
			            widget.add(items) 
			        }  
				 }]  
			
    }]

});