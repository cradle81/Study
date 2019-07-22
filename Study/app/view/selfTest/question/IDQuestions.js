Ext.define('Study.view.selfTest.question.IDQuestions', {
	extend: 'Ext.form.Panel',
	xtype : 'IDQuestions',
	scrollable: true,
    controller: 'selfTestController',
    
    viewModel: 'questionViewModel', 
    
    buttons: [{
        text: 'Save',
        handler: 'onSaveFormClick'
    }, {
        text: 'Reset',
        handler: 'onResetFormClick' 
    }],
    items : [{
    	xtype : 'grid',
    	title : '사업도메인전문성',
    	columnLines : true,
  	
/*    	store :{
    		autoLoad: true,
    		fields : [ 'qno', 'question', 'answers'],
    		data   : { items: [{
		    			qno:'Q1', 
		    			question: '당신은 대학교 재학 시 컴퓨터 공학 관련 수업을 어느정도 수준으로 수강을 하였나요?', 
		    			answers :[{answer : '전혀듣지않았다', ano: '1', akey:'Q1_1'},{
			    				answer : '기초개론정도', ano: '2', akey:'Q1_2'
				    			},{
				    				answer : '기초개론+시스템구조', ano: '3', akey:'Q1_3'
				    			},{
				    				answer : '기초개론+시스템구조+프로그래밍고급', ano: '4', akey:'Q1_4'
				    			},{
				    				answer : '모두 전공함', ano: '5', akey:'Q1_5'	
				    			}]
	    				},{
		    			qno:'Q2', 
		    			question: '당신은 리눅스 운영체제를 운영하는데 있어 어느정도 수준입니까?', 
		    			answers :[{answer : '전혀 모른다.', ano: '1', akey:'Q2_1'},{
			    				answer : ' 리눅스를 설치하여 사용해 본적이 있다', ano: '2', akey:'Q2_2'
				    			},{
				    				answer : '시험에 필요한  패키지를 필요 시 설치 및 빌드하여 사용 할 수 있다.', ano: '3', akey:'Q2_3'
				    			},{
				    				answer : '시험에 필요한 관련 설정 및 구성을 충분히 시간내에 요구사항에 맞게끔 구성 할 수 있다.(메일서버, 스토리지 구성, 10G 스위치 설정 등등)', ano: '4', name:'Q2_4'
				    			},{
				    				answer : '리눅스 운영체제는 시험에 운영하는데 전혀 문제가 되지 않는다', ano: '5', akey:'Q2_5'	
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
    			 
    	}, */
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
					code: 'TD'
				},
				reader : {
					type : 'json',
					rootProperty : 'data'
				}
				
			}
		},
			
    	// form getValue()동작하지 않음
/*    	bind : {
    		store : '{tdquestionList}' 
    	},*/
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
		/*	renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
			    var q  = record.get('question')
			    var grid = this
			    var i ;
			    var crsize=40;
			    for (i=0;i< Math.floor(q.length/crsize) ;i++){
			    	q=insert(q,'<br/>',((i+1)*crsize))  	
			    }
			    return q;
			}    	*/	
    	},{
			text : '답변',
    		flex : 3 ,
    		xtype : 'widgetcolumn',
    		headerWrap : true,
    		cellWrap : true,
    		widget : {
				 xtype: 'radiogroup',
	             vertical: true,    
	             labelWidth: 100,
	             labelStyle: 'width:30%',
	             columns: 1,
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
		            	item.boxLabel=answerlist[i].ano + ') ' +answerlist[i].answer
		            	//item.name= answerlist[i].name   	            			            	
		            	item.name= rec.get('qno');
		            	item.inputValue= answerlist[i].akey;
		            	items.push(item);    	            	
		            } 			             
		            widget.add(items); 
         	}    		
    	}/*,{
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
    	}*/]
    	
    		
    	
    }]		
});