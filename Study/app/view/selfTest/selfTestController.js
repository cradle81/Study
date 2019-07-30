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
       
    	

    	
    }
    

})