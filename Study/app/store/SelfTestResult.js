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
		   {name : '기술도메인  역량', pr: 50, rc: 86, ft: 100},
	       {name : '사업도메인 역량', pr: 68, rc: 87, ft: 100},
	       {name : '팀/센터 직무역량', pr: 38, rc: 88, ft: 100},
	       {name : 'SW연구소 직무역량', pr: 59, rc: 80, ft: 100},
	       {name : 'TTA 직무역량',  pr: 38, rc: 77, ft: 100}         

        ];

        this.callParent([config]);
    }
});