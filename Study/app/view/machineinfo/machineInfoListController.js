/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('Study.view.machineinfo.machineInfoListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.machineInfoListController',                         
    
    onLoadData : function(obj){
    	var me = this;
    	var view = me.getView();
    	var viewModel = me.getViewModel();
    	var store = viewModel.getStore('machineInfoList');
    	var proxy = store.getProxy();
    	proxy.setExtraParam("x86", "x86");
    	proxy.setExtraParam("power", "power");
    	proxy.setExtraParam("sparc", "sparc");
    	proxy.setExtraParam("itanium", "itanium");
    	store.load(); 
    },
    setGridHeight : function(obj){
    	console.log("setGridHeight");
    	obj.down("grid").setHeight(Ext.Element.getViewportHeight()- 350);
    },
    checkAll : function (obj,newValue, oldValue, eOpts){
		var checkgroup = obj.nextSibling("checkboxgroup");
		var collection = checkgroup.items;
		if(obj.getValue() == true)
		{
			collection.each(function(item){
				item.setValue(true);
			});
		}
		else{
			collection.each(function(item){
				item.setValue(false);
			});
		}
			
			
	},
	reloadData : function (obj,newValue, oldValue, eOpts){
		
		console.log(obj);
		console.log(newValue, oldValue)
		
		var me = this;
		var view = me.getView();
		var viewModel = view.getViewModel();
		var store = viewModel.getStore('machineInfoList');
		var proxy = store.getProxy();
		
		
		if (newValue.x86){
			proxy.setExtraParam("x86", newValue.x86);
		}
		else
		{
		proxy.setExtraParam("x86", "");
		}
			
		if (newValue.power){
			proxy.setExtraParam("power", newValue.power);
		}
		else
		{
			proxy.setExtraParam("power", "");
		}		
		if (newValue.sparc){
			proxy.setExtraParam("sparc", newValue.sparc);
		}
		else
		{
			proxy.setExtraParam("sparc", "");
		}			
		if (newValue.itanium){
			proxy.setExtraParam("itanium", newValue.itanium);
		}	 
		else
		{
			proxy.setExtraParam("itanium", "");
		}			
		store.load()

	},
    getMachineList :  function (obj,newValue, oldValue, eOpts){

		var me = this;
		var view = me.getView();
		var viewModel = view.getViewModel();
		var store = viewModel.getStore('machineInfoList');
	
		var proxy = store.getProxy();
		if ( newValue == true)
		{
			
			console.log(obj.getName())
		store.load()
		}
		
		
		
		//console.log(obj);
		//console.log(newValue, oldValue);
		
		
/*		Ext.Msg.confirm("확인내용", "정말삭제하시겠습니까?", function(btnText){
			if(btnText == 'no'){
				Ext.Msg.alert("정보", "취소되었습니다.");
				
			}
			else if (btnText == 'yes'){

				var record = btn.getWidgetRecord();				
				var threadName = record.get('threadName');
				
				console.log(threadName);
				
		     	Ext.Ajax.request({ 
		     		url : 'http://localhost:8080/tta/bidinfo/delSchedule.do',
			 		method : 'POST',
			 		params:  {
			 			threadName : threadName 
			 		},
			 		success : function(res){
			 			    Ext.Msg.alert("정보", "정상처리되었습니다. - "+threadName);
			 				store.load(); 	 		 			    
	 		
			 		}, 
			 		failure: function(response, opts) {			 	        
			 	        Ext.Msg.alert("정보", "오류가 발생하셨습니다. - " + threadName);
			 	     }
		 		   
		 	    })
			}  
		},this);*/
		

    	
    }
  
});
