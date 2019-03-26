Ext.define('Study.store.selfTestResultPieChart', {
    extend: 'Ext.data.Store', //페이징 처리때문에 버퍼스토어 사용하지 말자 //reload와 연관이 있는듯..
    alias: 'store.selfTestResultPieChart',

    fields: ['category', 'score' ],
    data: [
        { category: '관리자 성향', score: 100},
        { category: '연구개발 성향', score: 120 }
    ]
});