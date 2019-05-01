Ext.define('Study.view.selfTest.selfTestController2', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.selfTestController2', 
    onSaveFormClick: function(btn) {
    	//checkbox를 찾아보자
    	var me = this;
    	var view = me.getView(); 
    	var grid = view.down('grid');
    	var viewModel = view.getViewModel();
    	var gridViewModel = grid.getViewModel();
    	var checkBoxs = view.down('checkboxgroup');
    	console.log(checkBoxs);
    	console.log(Ext.ComponentQuery.query('widgetcolumn',grid));
    	console.log(Ext.ComponentQuery.query('checkboxgroup'));
    	console.log(grid.getStore())
    	console.log(grid.getRecord())
    	//console.log(viewModel);
    	//console.log(gridViewModel);
    	//console.log(gridViewModel.getStore());
    	
    }

})