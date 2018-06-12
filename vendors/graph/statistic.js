Morris.Bar({
    element: 'graph_bar',
    data: [
        {device: '合格', geekbench: 100},
        {device: '不合格', geekbench: 200},
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