Ext.define('Study.store.STQuestions', {
    extend: 'Ext.data.Store',
    alias: 'store.STQuestions',

    fields: [
             'qno', 'question', 'answer'
         ],

     data: { items: [
         { qno: 'Q1', question: '당신의 직위는 무엇입니까?', answer2 : [{boxLabel: '수석/부장 (20년차 이상)' , name: 'Q1_1'},
                            	    	                    {boxLabel: '책임/차장 (10~19년차)' , name: 'Q1_2'},
                            	    	                    {boxLabel: '선임/과장 (6~9년차)'   , name: 'Q1_3'},
                            	    	                    {boxLabel: '전임/대리 (3~5년차)'   , name: 'Q1_4'},
                            	    	                    {boxLabel: '원/사원 (1~2년차)'    , name: 'Q1_5'}
                            	    	                    ] ,answerType : 'combo',
                            	    	           answers : [{answer : '수석/부장 (20년차 이상)', answerNo: '1'},
                            	    	                      {answer : '책임/차장 (10~19년차))', answerNo: '2'},
                            	    	                      {answer : '선임/과장 (6~9년차)'   , answerNo: '3'},
                            	    	                      {answer : '전임/대리 (3~5년차)', answerNo: '4'},
                            	    	                      {answer : '원/사원 (1~2년차)', answerNo: '5'}]},
         { qno: 'Q2', question: '현재 BMT 팀에서 귀하가 수행하고 있는  역할을  모두 체크해 주세요?', answer2 :   [{boxLabel: '품질책임' , name: 'Q2_1'},
                                                    	    	                    {boxLabel: '기술책임' , name: 'Q2_2'},
                                                    	    	                    {boxLabel: '시험관리원'   , name: 'Q2_3'},
                                                    	    	                    {boxLabel: '시험원'   , name: 'Q2_4'},
                                                    	    	                    {boxLabel: '기타'    , name: 'Q2_5'}
                                                    	    	                    ], answerType : 'checkBox',
                    	    	                    answers : [{answer : '품질책임', answerNo: '1'},
                             	    	                      {answer : '기술책임', answerNo: '2'},
                             	    	                      {answer : '시험관리원'   , answerNo: '3'},
                             	    	                      {answer : '시험원', answerNo: '4'},
                             	    	                      {answer : '기타', answerNo: '5'}]},
	     { qno: 'Q3', question: '현재 BMT 팀에서 당신이 수행을 했었거나, 수행을 하고 있는 시험외 내부관리를 모두체크해 주세요', 
                    	    	                    answers : [{answer : '행사기획', answerNo: '1'},
                             	    	                      {answer : '위원회 운영', answerNo: '2'},
                             	    	                      {answer : '교육관리'   , answerNo: '3'},
                             	    	                      {answer : '계약관리', answerNo: '4'},
                     	    	                              {answer : '실적관리', answerNo: '5'},
                     	    	                              {answer : '예산관리', answerNo: '6'},
                      	    	                              {answer : '장비/시설관리', answerNo: '7'},
                     	    	                              {answer : '자료물품관리', answerNo: '8'}]},
                     	    	                              
                     	    	                    	     { qno: 'Q3', question: '현재 BMT 팀에서 당신이 수행을 했었거나, 수행을 하고 있는 시험외 내부관리를 모두체크해 주세요', 
                                  	    	                    answers : [{answer : '행사기획', answerNo: '1'},
                                           	    	                      {answer : '위원회 운영', answerNo: '2'},
                                           	    	                      {answer : '교육관리'   , answerNo: '3'},
                                           	    	                      {answer : '계약관리', answerNo: '4'},
                                   	    	                              {answer : '실적관리', answerNo: '5'},
                                   	    	                              {answer : '예산관리', answerNo: '6'},
                                    	    	                              {answer : '장비/시설관리', answerNo: '7'},
                                   	    	                              {answer : '자료물품관리', answerNo: '8'}]},
                                   	    	                  	     { qno: 'Q3', question: '현재 BMT 팀에서 당신이 수행을 했었거나, 수행을 하고 있는 시험외 내부관리를 모두체크해 주세요', 
                                              	    	                    answers : [{answer : '행사기획', answerNo: '1'},
                                                       	    	                      {answer : '위원회 운영', answerNo: '2'},
                                                       	    	                      {answer : '교육관리'   , answerNo: '3'},
                                                       	    	                      {answer : '계약관리', answerNo: '4'},
                                               	    	                              {answer : '실적관리', answerNo: '5'},
                                               	    	                              {answer : '예산관리', answerNo: '6'},
                                                	    	                              {answer : '장비/시설관리', answerNo: '7'},
                                               	    	                              {answer : '자료물품관리', answerNo: '8'}]},
                                               	    	                  	     { qno: 'Q3', question: '현재 BMT 팀에서 당신이 수행을 했었거나, 수행을 하고 있는 시험외 내부관리를 모두체크해 주세요', 
                                                          	    	                    answers : [{answer : '행사기획', answerNo: '1'},
                                                                   	    	                      {answer : '위원회 운영', answerNo: '2'},
                                                                   	    	                      {answer : '교육관리'   , answerNo: '3'},
                                                                   	    	                      {answer : '계약관리', answerNo: '4'},
                                                           	    	                              {answer : '실적관리', answerNo: '5'},
                                                           	    	                              {answer : '예산관리', answerNo: '6'},
                                                            	    	                              {answer : '장비/시설관리', answerNo: '7'},
                                                           	    	                              {answer : '자료물품관리', answerNo: '8'}]},                                               	    	                              
     ]},

     proxy: {
         type: 'memory',
         reader: {
             type: 'json',
             rootProperty: 'items'
         }
     }
});