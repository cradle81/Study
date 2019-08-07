Ext.define('Study.store.AnswerList', {
    extend: 'Ext.data.Store',
    alias: 'store.AnswerList',
    fields: [
             'qkey', 'akey', 'code' , 'subcode', 'ano', 'answer'
         ],
         autoLoad : false,
         proxy : { 
             type : 'ajax',
             anctionMethods : {
                 read : 'GET' 
             },
             url : Ext.manifest.api_url + '/tta/selftest/answers.do',
             
             reader :{
                 type : 'json',
                 rootProperty : 'data'
             }
         }  
});