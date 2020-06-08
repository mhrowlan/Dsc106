Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'How Frequently have you Engaged in the Following Behavior in the Past Year? '
    },
    subtitle: {
        text: 'In 2018, 7,976 UCSD Students Responded...'
    },
    xAxis: {
        categories: ['Skipped or Cut Size of Meal', 'Worried about My Debt and Financial Circumstances'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Students',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    colors:['#9b54a0','	#e79aac','#abd9ec','#3cb2e2ff','#c394c6', '#e92754ff'],
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            },
            column: {
                colorByPoint: true
            }
          
        },
   
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        //verticalAlign: 'middle',
        x: 10,
        y: -120,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Never',
        data: [2562, 1007]
    }, {
        name: 'Rarely',
        data: [1863,1078]
    }, {
        name: 'Occasionally',
        data: [1717,1497]
    }, {
        name: 'Somewhat Often',
        data: [746,1234]
    } ,{
        name: 'Often',
        data: [587,1268]
    }, {
        name: 'Very Often',
        data: [503,1890]
    }
    ]
});
