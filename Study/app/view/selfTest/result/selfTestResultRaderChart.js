Ext.define('Study.view.selfTest.result.selfTestResultRaderChart', {
	extend: 'Ext.chart.PolarChart',	
	xtype : 'selfTestResultRaderChart',
    controller: 'selfTestController',

    requires: [
        'Ext.chart.theme.Blue'
        
    ],
    width: 650, 
    reference: 'resultChart',
    width: '80%',
    height: 500,
    legend: {
        docked: 'right'
    },
    store: {
        type: 'selfTestResult'
    },    
    insetPadding: 20, 
    animation: {
        duration: 200 
    },   
    //theme: 'Blue', 
    interactions: ['rotate'], 
    //interactions: ['rotate'],
    sprites: [{
        type: 'text',
        text: 'Data: BMT Team 2019',
        fontSize: 10,
        x: 40,
        y: 20
    }, {
        type: 'text',
        text: 'Source: http://ttabmt.go.kr',
        fontSize: 10,
        x: 40,
        y: 30 
    }],
    axes: [{ 
        type: 'numeric',
        position: 'radial',
        grid: true,
        minimum: 0,
        maximum: 100,
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
        /*style: {
            opacity: 0.40,
            lineWidth: 3
        },*/
        // style: {
        //     lineWidth: 5,
        //     fillStyle: 'none'
        // },   
        style: {
            fillStyle: 'rgb(235, 227, 199)',
            opacity: 0.7,
            lineWidth: 0.5
        },     
        //marker: true, 
        marker: {
            radius: 4,
            size: 4,
            fillStyle: 'rgb(237, 225, 178)'
        },
        highlightCfg: { 
            radius: 6,
            //fillStyle: 'yellow'
            fillStyle: 'rgb(237, 225, 178)'
        },
        tooltip: {
            trackMouse: true,
            renderer: 'onSeriesLabelRender'
        }
    }, {
        type: 'radar',
        title: '권고',
        angleField: 'name',
        radiusField: 'rc',
        hidden: true,
/*        style: {
            opacity: 0.40,
            lineWidth: 3
        },*/
        // style: {
        //     lineWidth: 5,
        //     fillStyle: 'none'
        // },
        style: {
            fillStyle: 'rgb(194,214,240)', 
            opacity: 0.5,
            lineWidth: 0.5
        },         
        // marker: true,
        /* highlightCfg: {
            radius: 6,
            fillStyle: 'yellow'
        }, */
        marker: {
            radius: 4,
            size: 4,
            fillStyle: 'rgb(69,109,159)'
        },        
        tooltip: {
            trackMouse: true,
            renderer: 'onSeriesLabelRender'
        }
    }, {
        type: 'radar', 
        title: '미래',
        angleField: 'name',
        radiusField: 'ft',
        hidden: true,    //true 시 기본 표시가 안되게끔 할 수 있지만 스크립트 오류가 발생하여 찜찜
/*        style: {
            opacity: 0.40, 
            lineWidth: 3
        },*/
        // style: {
        //     lineWidth: 5,
        //     fillStyle: 'none'
        // },  
        style: {
            fillStyle: 'rgb(235, 171, 171)',
            opacity: 0.2,
            lineWidth: 0.5
        },                   
        //marker: true,
        marker: {
            radius: 4,
            size: 4,
            fillStyle: 'rgb(235, 148, 148)'
        },
        tooltip: {
            trackMouse: true,
            renderer: 'onSeriesLabelRender'
        } /*         
        highlightCfg: {
            radius: 6,
            //fillStyle: 'yellow'
            fillStyle: 'rgb(235, 148, 148)'
        } */

    }]
});