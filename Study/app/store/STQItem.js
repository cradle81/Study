Ext.define('Study.store.STItem', {
    extend: 'Ext.data.Store',
    alias: 'store.STItem',

    fields: [
             'qno', 'question', 'answer'
         ],

         data: { items: [
             { qno: 'Q1', question: '당신의 직위는 무엇입니까?', answer: ['local','remote'] } 
/*             { qno: 'Q2', question: '현제 BMT 팀에서 귀하가 수행하고 있는 역할을 모두 체크해 주세요?', answer: '수석/부장 (20년차 이상)','책임/차장 (10~19년차)','선임/과장 (6~9년차)','전임/대리 (3~5년차)','원/사원 (1~2년차)'}*/
         ]},

         proxy: {
             type: 'memory',
             reader: {
                 type: 'json',
                 rootProperty: 'items'
             }
         }
});