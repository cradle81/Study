/**
 * This class is the view model for the Main view of the application.
 */


Ext.define('Study.view.machineinfo.QuestionViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.managementViewModel',
     
    data : {
         qcodeCombobox : '' //초기 디폴트는 INIT으로 셋팅
    },
    stores : {
        AnswerList : {
            type : 'AnswerList'
        }
    }
}); 


