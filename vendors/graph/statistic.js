
console.log('init_morris_charts');

if ($('#graph_bar').length){

    Morris.Bar({
        element: 'graph_bar',
        data: [
            {device: 'iPhone 4', geekbench: 380},
            {device: 'iPhone 4S', geekbench: 655},
            {device: 'iPhone 3GS', geekbench: 275},
            {device: 'iPhone 5', geekbench: 1571},
            {device: 'iPhone 5S', geekbench: 655},
            {device: 'iPhone 6', geekbench: 2154},
            {device: 'iPhone 6 Plus', geekbench: 1144},
            {device: 'iPhone 6S', geekbench: 2371},
            {device: 'iPhone 6S Plus', geekbench: 1471},
            {device: 'Other', geekbench: 1371}
        ],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });

}