Ext.define('Study.view.selfTest.question.INITQeustions', {
	extend: 'Ext.form.Panel',
	xtype : 'INITQeustions',
	scrollable: true,
    controller: 'selfTestController',
    
   // viewModel: 'questionViewModel', 
    
    buttons: [{
        text: 'Save',
        handler: 'onSaveFormClick'
    }, {
        text: 'Reset',
        handler: 'onResetFormClick' 
    }],
    items : [{
    	xtype : 'grid',
    	title : '현재 상태 입력',
    	columnLines : true,  	
		store : {
			fields : [ 'qno', 'question', 'answers'],
			autoLoad : true,
			proxy : {
				type : 'ajax', 
				actionMethods : { 
					read : 'GET'
				},
				url : Ext.manifest.api_url+'/tta/selftest/question.do',
				extraParams : {
					code: 'INIT'
				},
				reader : {
					type : 'json',
					rootProperty : 'data'
				}
				
			}
		},
			
    	viewConfig:{
    		enableTextSelection : true
    	},
    	columns : [{
    		xtype : 'rownumberer'
    	},{
    		text : '번호',
    		flex : 1,
    		dataIndex: 'qno'
    	},{
    		text : '질문',
    		flex : 4,
    		dataIndex: 'question' ,
    		cellWrap : true

    	},{
			text : '답변',
    		flex : 3 ,
    		xtype : 'widgetcolumn', 
    		headerWrap : true,
    		cellWrap : true,
    		widget : {
				 xtype: 'checkboxgroup',
	             vertical: true,    
	             labelWidth: 100,
	             labelStyle: 'width:30%',
				 columns: 2,
				 listeners :{
					change : function(obj,newValue, oldValue, eOpts ){
						console.log(obj);
						console.log(newValue,oldValue);
					}
				}
    		}, 
         	onWidgetAttach: function(col, widget, rec){ 
				var answerlist=rec.get('answers')
				var items=[] 
				//widget.add(rec.get('answer2'))
				var i ; 
				for (i=0;i<answerlist.length;i++){  	            	
					var item=new Object()
					item.boxLabel=answerlist[i].answer
					item.name=rec.get('qno');    	         
					item.inputValue= answerlist[i].akey;   	
					items.push(item);    	            	
				} 			              
				widget.add(items);
         	}    		
    	}]
    }]		
});