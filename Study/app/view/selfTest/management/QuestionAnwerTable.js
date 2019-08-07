Ext.define('Study.view.selfTest.management.QuestionAnwerTable',{
    extend : 'Ext.panel.Panel',
    xtype : 'questionAnwerTable',
    controller : 'selfTestController',
    viewModel: 'managementViewModel',  
    layout : {
        type : 'hbox',
        pack : 'start',
        align: 'stretch'
    },
    defaults: {
        frame: true,
        //bodyPadding: 10
    },
    items :[{
        xtype : 'grid',
        title : '질문리스트',
        flex : 5,
        name : 'questionAnwerTableGrid',
        columnLines: true,
        viewConfig : {
            emptyText :'데이터가 없습니다.',
            enableTextSelection: true
        }, 
        plugins: [{
            ptype: 'cellediting',
            clicksToMoveEditor: 1,
            autoCancel: false
        }],
    
        default : {
            align : 'center'
        },
        tbar : [{
            xtype : 'fieldcontainer', 
            layout: 'hbox',            
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 50,
                msgTarget: 'side',
            },
            items : [/* {
                xtype : 'textfield',                
                name: 'name',
                beforeLabelTextTpl: [
                    '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>'
                ],
                fieldLabel: '이름',
                allowBlank: false ,
                anchor: '100%'                  
            }, */{
                xtype: 'combobox',                
                fieldLabel: '코드',
                name: 'qcode',
                reference : 'qcodeCombobox',  
                store: {
                    fields : ['code'], 
                    data : [
                        { code:'TD'},
                        { code:'INIT'},
                        { code:'SWD'},
                        { code:'TTAD'},
                        { code:'CTD'},                     
                        { code:'ISD'}                      
                    ]
                    //type: 'states'
                },
                valueField: 'code',
                displayField: 'code',
                typeAhead: true, 
                queryMode: 'local',  //remote
                
                // 데이터가 없는 경우에 emtpyText가 적용됨.
                emptyText: '코드를 선택하시오', 
                //valueNotFoundText : '코드를 선택하시오(VF)', 
                //아래 때문에 emptyText가 적용되지 않음
               /*  bind : {
                    value : '{qcodeCombobox}',                
                } */
                /* listener : {
                    change : function( obj, newValue, oldValue, eOpts ){
                        var view = obj.getView();
                        var viewModel = view.getViewModel();
                        viewModel.
                    }

                } */
            }]
        }, 
        '->',
        { 
            xtype : 'button',  
            text : '조회',
            handler : 'onSerachQuestionList'
        }],
        columns :{
            defaults : { 
                flex : 1,
                align : 'center',
                cellWrap : true
            },        
            items : [{
                text : 'qno',
                flex : 1,
                dataIndex : 'qno'
                },{
                text : '코드',
                flex : 1,
                dataIndex : 'code',
                renderer : function (value,record){
                    switch (value){
                        case "INIT" :
                            return "현재정보";
                        case "TTAD" :
                            return "TTA";
                        case "SWD" :
                            return "SW연구소";
                        case "CTD" :
                            return "팀/센터";
                        case "TD" :
                            return "기술";                                                                
                        case "ID" :
                            return "사업";
                        default :
                            return value;
                    }
                } 
                
            },{
                text : '부코드',
                flex: 1,
                dataIndex : 'subcode'
                
            },{
                text : '질문내용',
                flex: 3,
                dataIndex : 'question',
                align : 'left',
                editor :{
                    xtype : 'textfield',
                    name : 'subcode'                        
                }                    
            },{
                text : '가중치',
                flex: 1,
                dataIndex : 'weight',
                formatter : 'number("00.00")',
                editor :{
                    xtype : 'numberfield',
                    name : 'subcode' 

                }                    
            },{
                text : '답변상세',
                xtype : 'widgetcolumn',    		
                widget : {
                    xtype : 'button',
                    name : 'detailButton',
                    text : '질문상세',
                    handler : 'onClickecQuestion'
                }		       		
            }]             
        },
        store : {
            field : ['qno','code','subcode','question','weight'],
            autoLoad : false,
            proxy : { 
                type : 'ajax',
                anctionMethods : {
                    read : 'GET' 
                },
                url : Ext.manifest.api_url + '/tta/selftest/question.do',
/*                 extraParams : { 
                    code : 'INIT'
                }, */
                reader :{
                    type : 'json',
                    rootProperty : 'data'
                }
            }  
        } 
/*         listeners : {
            cellclick: 'onClickecQuestion' 
                           
        }
              */
    },{
        xtype : 'grid',
        name : 'answerListGrid',
        reference : 'answerListGrid-Ref',
        flex : 3,
        title : '답볍리스트',
        columnLines: true,
        viewConfig : {
            emptyText :'오른쪽 질문을 클릭해 주세요',
            enableTextSelection: false
        },            
        columns : {
            defaults : {
                align : 'center', 
                flex : 1,
                cellWrap : true
            },
            items : [{
                text : '번호',
                dataIndex: 'ano'
            },{
                text : '답변',
                flex : 3,
                dataIndex : 'answer',
                align : 'left'
            }]
        },
        store :  {
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
        }
 /*        bind : {
            store : '{AnswerList}'
        }
 */
    }]          
})

