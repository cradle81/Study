Ext.define('Study.store.TDQuestion', {
    //extend: 'Ext.data.BufferedStore', //페이징 처리때문에 버퍼스토어 사용하지 말자 //reload와 연관이 있는듯..
	extend: 'Ext.data.Store',
    alias: 'store.tdquestion',
    storeId : 'tdquestion',
    autoLoad : true,   
    fields: [
             'qno','question','answers'
    ], 
    proxy : {
		 type : 'ajax',
		 actionMethods :{
			 read : 'GET'  
		 }, 
		 //url : '/tta/test/json.do',
		 url : Ext.manifest.api_url+'/tta/selftest/tdquestion.do',		 
		 reader: {
			 type : 'json',
			 rootProperty : 'data'
		 }
	}    
});
   