/**
 * This class is the view model for the Main view of the application.
 */


Ext.define('Study.view.machineinfo.machineInfoListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.machineInfoListViewModel',
    
    stores : {
    	machineInfoList : {
    		type : 'machineList'
    	}	    
    }
    //TODO - add data, formulas and/or methods to support your view
});
