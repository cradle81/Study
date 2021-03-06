/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Study.view.bidinfo.bidinfoController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.bidinfoList',
    
/*    search : function(btn){
    	var store = new stroe
    } */

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    search : function(btn){
    	var me = this;
    	var view = me.getView(); 
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore(view['xtype']);
    	//var store = viewModel.getStore('bidinfoList');
    	var proxy = store.getProxy();    	
    	var radio = me.lookupReference('searchType-ref');
    	
    	var checkBox = view.down('checkbox');    	
    	
    	
    	var fromDate =  Ext.Date.format(viewModel.get("fromDate"),'Y/m/d');
    	var toDate =  Ext.Date.format(viewModel.get("toDate"),'Y/m/d');
    	var instName = viewModel.get("instNm");
    	var keyword = viewModel.get("keyword");
    	var endDate = viewModel.get("endDate");
    	var searchType = radio.items.get(0).getGroupValue()
    	
    	//var isExtMatch = checkBox.items.get(0).getValue();
    	//console.log(isExtMatch);
    		
    	
    	//searchViewModel을 찾아보자
    	var searchHistoryGrid = view.down('grid[title=검색기록]');
    	var searchHistoryGridviewModel = searchHistoryGrid.getViewModel();
    	var searchHistoryStore = searchHistoryGridviewModel.getStore('searchHistoryStore');
    
    	
    	 
    	
    	
   	
    	//(getGroupValue ) If this radio is part of a group, it will return the selected value
    	//console.log(radio.items.get(0).getGroupValue()); 
    	
    	
    	//console.log(view.getForm().findField('searchType'));
    	//console.log(view.getForm().findField('searchType').getValue());
    	
    	/*
    	var params = {
    			instNm : viewModel.get("instNm"),
    			keyword : viewModel.get("keyword"),
    			fromDate : Ext.Date.format(viewModel.get("fromDate"),'Y/m/d'),
    			toDate : Ext.Date.format(viewModel.get("toDate"),'Y/m/d') 

    	}
    	store.load({ 
		params : params
	    }); */
    	    	
    	//store.reload(); // reload로 호출하면 page처리때문에 6개번 호출된다.
    	
    	 if (viewModel.get("instNm") == "" && viewModel.get("keyword") == "")
    	 {
    		 Ext.Msg.alert('경고', '발주기관 혹은 키워드 하나를 반드시 입력하세요', Ext.emptyFn);
    	 }
    	 else
    	{
    		    proxy.setExtraParam("instNm", viewModel.get("instNm"));
    		    proxy.setExtraParam("isExctMatch", checkBox.getValue());
    	    	proxy.setExtraParam("keyword", viewModel.get("keyword"));
    	    	proxy.setExtraParam("fromDate", Ext.Date.format(viewModel.get("fromDate"),'Y/m/d'));
    	    	proxy.setExtraParam("toDate", Ext.Date.format(viewModel.get("toDate"),'Y/m/d'));
    	    	proxy.setExtraParam("searchType", radio.items.get(0).getGroupValue());
    	        store.load();    
    	        
   			  
				var showType=''; 
			    if (searchType =='p')
			    	showType='사전공고';
				else
					showType='본공고';  
				
			 
    	        searchHistoryStore.add({time: Ext.Date.format(new Date(),'H:i:s'), 
    	        instName: instName, keyword: keyword ,searchType : searchType , showType : showType,  
    	        schedule : false, fromDate : Ext.Date.format(viewModel.get("fromDate"),'C')}); 
    	}
    	

    	/*Ext.Ajax.request({
    		url : 'http://localhost:8080/tta/test/json.do',
    		method : 'GET',
    		params : params,
    		success : function(res){
    			var result = Ext.decode(res.responseText);
    			console.log(result);
    			
    			//우선 200코그다 아니더라고 우선 직어주자;
    			viewModel.getStore(view['xtype']).reload();
    			if (result['Code']==200){ 
    				viewModel.getStore(view['xtype']).reload();    				
    			}
    		} 
    		  
    	})*/

    	
    	 
    },
    
    onLoadData : function(obj){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	//view['xtype'] == 'bidinfoList'
    	var store = viewModel.getStore(view['xtype']);
    	//var store = viewModel.getStore('bidinfoList');
    	
    	store.load(); 
    },
    
    
    setGridHeight : function(obj){
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()- 350);
    },
    
    keyPress : function(field,event){
        if (event.getKey() == event.ENTER){
        	this.search();
        	} 
    },
/*    cellClicked : function(table, td, cellIndex, record, tr, rowIndex, e, eOpts ){    	    	
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore(view['xtype']);    	  
		//console.log(store.getAt(cellIndex).get('link'));
		window.open(store.getAt(cellIndex).get('link'));
    	
    	
	}*/
    
    gotoDetail : function(btn){
		var record = btn.getWidgetRecord();
		window.open(record.get('link'));	
	},	 
    regMointoringSchedule : function(obj){    
    	//gird를 찾고
    	var me = this;
    	var view = me.getView(); 
    	var searchHistoryGrid = view.down('grid[title=검색기록]');
    	var viewModel = searchHistoryGrid.getViewModel();
    	
    	
    	//selModel을 찾고
    	var searchHistoryGridSelModel = searchHistoryGrid.getSelectionModel();    	
    	
    	//선택한 배열이 넘어온다 여기서는 single이기 때문에 선택을 하면 1개의 record가 넘어오고 선택하지 않으면 []이 넘어온다.
    	var selectionSearchHistoryGridSelModel = searchHistoryGridSelModel.getSelection();  

    	
    	if (selectionSearchHistoryGridSelModel.length != 0)
		 {
	    	 this.dialog = view.add({
	    		 xtype : 'regMointoringSchedule',
	    		 reference : 'regMointoringSchedule-ref',
	    		 viewModel : {
	    			 data : {
	    				 instName : selectionSearchHistoryGridSelModel[0].get('instName'),
	    			     keyword : selectionSearchHistoryGridSelModel[0].get('keyword'),
	    			     searchType : selectionSearchHistoryGridSelModel[0].get('searchType'),
	    			     fromDate : selectionSearchHistoryGridSelModel[0].get('fromDate')
	    			 },
	    			 formulas : {
	    				 showType : function(get){
	    					 var type = get('searchType');
	    					 
	    					 if (type =='p')
	    						 return '사전공고';
	    					 else
	    						 return '본공고'; 
	    				 }
	    			 }/*,
	    			 stores : {
	    				 bmtuserlist : {
    			    		type: 'bmtuserlist' 
    			    	}
    			    }  */
	    	   
	    		 },
	    		 session : true
	    	 })
	    	 this.dialog.show();
		 }
    	else{
    		Ext.Msg.alert("경고","검색히스토리 아이템을 선택하지 않았습니다.");
    	}
    	 
    	 
    	 

    	//Ext.widget('regMointoringSchedule');
    	  /*Ext.create({
              xtype: 'regMointoringSchedule'
          });*/
    },
    actionRegMonitoringSchedule: function(btn){
    	//KitchenSink.toast('Button Click','You clicked the "{0}" button.', btn.displayText || btn.text);
    	//gird를 찾고
   /* 	var me = this; 
    	var view = me.getView('regMointoringSchedule');
    	var view2 = me.getView('bidinfoList');
    	console.log(view.getViewModel()); 
    	console.log(view2.getViewModel()); 
    	
    	console.log(searchHistoryGrid);
//    	var viewModel = searchHistoryGrid.getViewModel();
    	console.log(viewModel.get("instName"));
    	console.log(viewModel.get("keyword"));*/
    	
    	 var me = this;
    	 var fieldset = me.lookupReference('regMonfieldSet-ref');
    	 var selector = me.lookupReference('regMonMulSelctor-ref');
    	 var store = selector.getStore();
    	 var data = store.getData();
    	 
    	 console.log(store);
    	 console.log(data); 
    	 
    	 var users = [];
    	 store.each(function(record) {
    		 var user = new Object();
    		 user.name = record.get('name');
    		 user.email = record.get('email');
    		 users.push(user);
//    		 emails.push(record.get('email'));
    	 },this);
         // data.getValues('email','data');
    	 
         var keyword = fieldset.down('textfield[name=keyword]').getValue();
         var instName = fieldset.down('textfield[name=instName]').getValue();
         var endDate = fieldset.down('datefield').getValue();
         var searchType = fieldset.down('textfield[name=searchType]').getValue();
         var fromDate = fieldset.down('textfield[name=fromDate]').getValue();

         
         var MonInfo = new Object();
         MonInfo.keyword = keyword; 
         MonInfo.instName = instName;
         MonInfo.users= users;
         MonInfo.endDate=Ext.Date.format(endDate,'C'); 
         MonInfo.fromDate=fromDate;
         MonInfo.searchType=searchType;
         

        
        // var jsonData = Ext.encode(Ext.pluck(store.data.items, 'data')); 
        var jsonData = Ext.JSON.encode(MonInfo);
        console.log(jsonData);   

         var view = me.getView(); 
      	Ext.Ajax.request({ 
     		url : Ext.manifest.api_url+'/tta/bidinfo/regSchedule.do',
	 		method : 'POST',
	 		jsonData: jsonData, 
	 		success : function(res){
	 			    Ext.Msg.alert("정보", "정상처리되었습니다.");
	 				view.destroy(); 
	 				/*Ext.Msg.alert("정보", "정상처리되었습니다.");	 		    	
	 		    	var view = me.getView(); 	 				
	 				var ref = view.lookupReference('regMointoringSchedule-ref');
	 				console.log(ref);*/	 		
	 		}, 
	 		failure: function(response, opts) {
	 	        console.log('server-side failure with status code ' + response.status);
	 	        Ext.Msg.alert("정보", "오류가 발생하셨습니다.");
	 			
	 			view.destroy(); 
	 	     }
 		  
 	    })         
 		                
          
         //console.log(store); 
       //  var multiselector = regform.down('multiselector');
       //  console.log(multiselector); 
    	 
    },
    searchHistorycellClick : function(obj, td, cellIndex, record, tr, rowIndex, e, eOpts ){
	    	//gird를 찾고
	    	var me = this;
	    	var view = me.getView(); 
	    	
	    	var searchHistoryGrid = view.down('grid[title=검색기록]');
	    	var viewModel = searchHistoryGrid.getViewModel();
	    	
	    	
	    	//selModel을 찾고, 그러나  크게 의미 없음
	    	/*var searchHistoryGridSelModel = searchHistoryGrid.getSelectionModel();    	
	    	var selectionSearchHistoryGridSelModel = searchHistoryGridSelModel.getSelection();*/
	    	
	    	// viewModel에 셋팅
	    	this.instName=record.get("instName");
	    	this.keyword=record.get("keyword");
	    	console.log(record.get("instName"));
	    	console.log(record.get("keyword"));
	    	console.log(viewModel);
	    	viewModel.set('instName','한국정보통신기술협회');
	    	viewModel.notify();
	    	console.log(viewModel);
	    	/*viewModel.set('instName',record.get("instName"));
	    	viewModel.set('keyword',record.get("keyword"));*/
	    	 
	    	
		},
	   showRegMonitoringSchedule : function(obj,eOpts){	
		    	//gird를 찾고
		      var me = this;
		      var view = me.getView(); 
		    	
		      var searchHistoryGrid = view.down('grid[title=검색기록]');
		   	  var viewModel = searchHistoryGrid.getViewModel();
		    	
	    	 
			  var instNameTextfield = obj.down('textfield[name=instName]');
			  var keywordTextfield = obj.down('textfield[name=keyword]');
			  instNameTextfield.setValue(viewModel.get('instName'));
			  keywordTextfield.setValue(viewModel.get('keyword'));
			  
			  console.log(instNameTextfield);
			  console.log(keywordTextfield);		  
	   }
	
		
    
});
