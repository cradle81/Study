Ext.define('Study.store.STQuestions', {
    extend: 'Ext.data.Store',
    alias: 'store.STQuestions',

    fields: [
             'qno', 'question', 'answer'
         ],

         data: { items: [
             { qno: 'Q1', question: '당신의 직위는 무엇입니까?', answer: '' },
             { qno: 'Q2', question: '현제 BMT 팀에서 귀하가 수행하고 있는 역할을 모두 체크해 주세요?', answer: '' }
         ]},

         proxy: {
             type: 'memory',
             reader: {
                 type: 'json',
                 rootProperty: 'items'
             }
         }
});