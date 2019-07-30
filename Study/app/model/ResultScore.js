Ext.define('Study.model.ResultScore', {
    extend: 'Ext.data.Model',
    fields : [{
        name : 'name'
    },{
        name : 'datetime',
        type : 'date'
    },{
        name : 'c_ttad'
    },{
        name : 'c_swd'
    },{
        name : 'c_isd'
    },{
        name : 'c_ctd'
    },{
        name : 'c_td'
    },{
        name : 's_ttad'
    },{
        name : 's_swd'
    },{
        name : 's_isd'
    },{
        name : 's_ctd'
    },{
        name : 's_td'
    },{
        name : 'f_ttad'
    },{
        name : 'f_swd'
    },{
        name : 'f_isd'
    },{
        name : 'f_ctd'
    },{
        name : 'f_td'
    },{
        name : 'mt'
    },{
        name : 'rt'
    }],
    
    idProperty : 'key'    
}); 