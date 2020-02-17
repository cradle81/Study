Ext.define('Study.view.selfTest.selfTestController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.selfTestController', 
    
    onPreview: function () {
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            return;
        }
        var chart = this.lookup('chart');
        chart.preview();
    },

    onRefresh: function () {
        var chart = this.lookup('chart');
        chart.getStore().refreshData();
    },

    onDataRender: function (v) {
        return v + '%';
    },

    onAxisLabelRender: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        //return layoutContext.renderer(label) + '점';
        return layoutContext.renderer(label)
    },
 
    onMultiAxisLabelRender: function (axis, label, layoutContext) {
        return label == 'TTA 직무역량' ? '' : label; 
    },
    onSeriesLabelRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('name') + ': ' + record.get(item.field) + '점');
    },
    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('category') + ': ' + record.get('score') + '점');
        
    },
    onSaveFormClick: function(btn) {
    	//checkbox를 찾아보자
    	var me = this;
    	var view = me.getView(); 
    	var grid = view.down('grid');
    	//var viewModel = view.getViewModel();    	
    	var checkBoxs = (Ext.ComponentQuery.query('checkboxgroup',grid));
    	var radioBoxs = (Ext.ComponentQuery.query('checkboxgroup',grid));
    	var form = view.getForm();
    	console.log("form",form);
    	console.log("view",view);
    	console.log("radioBox",radioBoxs);
    	console.log("radioBox",radioBoxs[0].getValue());
    	console.log("getValues()",form.getValues());
    	if (form.isValid()){
			Ext.Msg.alert({
                title: 'Submitted Values',
                message: 'The following will be sent to the server: <br />' +
                         form.getValues(true).replace(/&/g,', '),
                height: 200
            });
         
	      /*  Ext.Ajax.request({
	        	url : Ext.manifest.api_url+'/tta/bidinfo/selftest/sendForm.do',
	        	method : 'POST',
	        	headers : {'Content-Type':'application/json'},
	        	params : Ext.JSON.encode(form.getValues()),
	        	success : function(conn,response,options,eOpts){
	        		Ext.Msg.alert('결과', '성공');
	        	},
	        	failure : function(conn,response,options,eOpts){
	        		Ext.Msg.alert('실패', conn.responseText);
	        	}
	        	
	        	
	        })*/
    		
        }
        var tab = btn.up('tabpanel');
        console.log(tab);
        var item = tab.getActiveTab();
        console.log("Active item",item);

        var xtype = item.getXType();
        //var name = item.getName();
        
        console.log("xtype",xtype);  

        // form에 코드정보 삽입
        var code=''

        if (xtype == 'INITQeustions'){
            code = 'INIT';
        }else  if(xtype =='TDQuestions'){
            code = 'TD';
        }
            
        var param = form.getValues(true)+ "&CODE="+code;
        console.log( param ); 

         Ext.Ajax.request({
            url : Ext.manifest.api_url+'/tta/selftest/sendForm.do',
            method : 'POST',            
            params : Ext.JSON.encode(param),
            success : function(conn,response,options,eOpts){
                Ext.Msg.alert('결과', '성공');
            },
            failure : function(conn,response,options,eOpts){
                Ext.Msg.alert('실패', conn.responseText);
            }                        
        }) 
    		

    },
    onSerachQuestionList : function (btn){
        /* var me = this;
        var cb = me.lookupReference('qcodeCombobox');
        console.log(cb);
        var value = cb.getValue();
        Ext.Msg.alert('value',value);  */

        var me = this;
        var view = me.getView();
        var viewModel = view.getViewModel();
        //var parma = viewModel.get('qcodeCombobox');  //viewModel를 이용해서 가져오는 경우

        var qcodeCombobox = me.lookupReference('qcodeCombobox'); //vieModel을 사용하면 초기 vlaue값이 null이라서 emptyText가 동작하지 않음

        var param = qcodeCombobox.getValue();
 
        var answerGrid = me.lookupReference('answerListGrid-Ref');
        var answerStore = answerGrid.getStore();
        answerStore.removeAll();

        var grid = btn.up('grid'); 
        var store = grid.getStore();
        var proxy = store.getProxy()
        proxy.setExtraParam('code',param)
        store.load();

    },
/*     onClickecQuestion : function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
        var me = this;
        var view = me.getView();
        var viewModel = view.getViewModel();
        var answerGrid = me.lookupReference('answerListGrid-Ref');        
        var answerStore = answerGrid.getStore();
        var answerProxy = answerStore.getProxy();
        var qkey = record.get('qkey');
        answerProxy.setExtraParam('qkey',qkey);
        answerStore.load();

    }
  */
    onClickecQuestion : function(btn ) {
        var me = this;
        var view = me.getView();
        var viewModel = view.getViewModel();
        var answerGrid = me.lookupReference('answerListGrid-Ref');        
        var answerStore = answerGrid.getStore();
        var answerProxy = answerStore.getProxy();
        var record = btn.getWidgetRecord();
        var qkey = record.get('qkey');
        answerProxy.setExtraParam('qkey',qkey);
        answerStore.load();
    }
})
