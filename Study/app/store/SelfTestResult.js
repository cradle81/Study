Ext.define('Study.store.SelfTestResult', {
    extend: 'Ext.data.Store', //페이징 처리때문에 버퍼스토어 사용하지 말자 //reload와 연관이 있는듯..
    alias: 'store.selfTestResult',
    autoLoad : false,
   // fields: ['tech', 'inst', 'team', 'swrnd', 'tta'],
    fields: ['name', 'pr', 'ft'],
    
    constructor: function (config) {
        config = config || {};

        config.data = [
           			
			                //present // recomand  // future
		   {name : '기술도메인  역량', pr: 0, rc: 0, ft: 0},
	       {name : '사업도메인 역량', pr: 0, rc: 0, ft: 0},
	       {name : '팀/센터 직무역량', pr: 0, rc: 0, ft: 0},
	       {name : 'SW연구소 직무역량', pr: 0, rc: 0, ft: 0},
	       {name : 'TTA 직무역량',  pr: 0, rc: 0, ft: 0}         

        ];

        this.callParent([config]);
    }
});