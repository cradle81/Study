Ext.define('Study.view.selfTest.result.selfTestResultPieChart', {
	extend: 'Ext.chart.PolarChart',	
	xtype : 'selfTestResultPieChart',
    controller: 'selfTestController',

    width: 650,
    reference: 'chart',
    width: '100%',
    height: 500,
    insetPadding: 40,
    innerPadding: 20,
    store: {
        type: 'selfTestResultPieChart'
    },
    legend: {
        docked: 'bottom'
    },
    interactions: ['rotate'],
    series: [{
        type: 'pie',
        angleField: 'score',
        label: {
            field: 'category',
            calloutLine: {
                length: 60,
                width: 3
                // specifying 'color' is also possible here
            }
        },
        highlight: true,
        tooltip: {
            trackMouse: true,
            renderer: 'onSeriesTooltipRender'
        }
        /*,
        highlight: true,
        tooltip: { 
            trackMouse: true, 
            renderer: 'onSeriesTooltipRender'
        }*/
    }]  
});