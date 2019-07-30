Ext.define('Study.view.selfTest.result.selfTestResultTable', {
	extend: 'Ext.panel.Panel',	
	xtype : 'selfTestResultTable',
	title : '교육체게 자가진단결과표',	
    controller: 'selfTestController',

    width: 650,
    
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
   
    bodyPadding: 10,

    defaults: {
        frame: true,
        bodyPadding: 10
    },  
    
    items: [
            {
                title: '역량 진단 결과',
                flex:1,
                margin: '0 10 0 0',
                /*html: 'flex: 1'*/
                xtype : 'selfTestResultRaderChart'                	     
            },
            { 
                title: '성향 분석 결과',
                flex:1,
                margin: '0 10 0 0',
                xtype : 'selfTestResultPieChart'
            }
        ]    

/*    items: [{
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 500,
        legend: {
            docked: 'right'
        },
        store: {
            type: 'selfTestResult'
        },
        insetPadding: 20,
        interactions: ['rotate'],
        captions: {
            title: '자가점검 분석표',
            credits: {
                text: '한국정보통신기술협회 소프트웨어연구소 품질성능편가센서 \n' +
                    'by JungwonKim,LeeSangMin',
                align: 'left'
            }
        },
        axes: [{
            type: 'numeric',
            position: 'radial',
            grid: true,
            majorTickSteps: 4,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'angular',
            grid: true
        }],
        series: [{
            type: 'radar',
            title: '현재',
            angleField: 'name',
            radiusField: 'pr',
            style: {
                opacity: 0.40,
                lineWidth: 3
            },
            marker: true,
            highlightCfg: {
                radius: 6,
                fillStyle: 'yellow'
            }
        }, {
            type: 'radar',
            title: '권고',
            angleField: 'name',
            radiusField: 'rc',
            style: {
                opacity: 0.40,
                lineWidth: 3
            },
            marker: true,
            highlightCfg: {
                radius: 6,
                fillStyle: 'yellow'
            }
        }, {
            type: 'radar',
            title: '미래',
            angleField: 'name',
            radiusField: 'ft',
            style: {
                opacity: 0.40,
                lineWidth: 3
            },
            marker: true,
            highlightCfg: {
                radius: 6,
                fillStyle: 'yellow'
            }
        }]
    }]*/

});