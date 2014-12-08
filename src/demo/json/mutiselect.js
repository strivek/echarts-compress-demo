/**
 * Created by gaofei on 14/12/8.
 */
option = {
    data: {
        "城市1": [120, 432, 1101, 134, 90, 230, 210],
        "城市2": [220, 532, 1001, 134, 90, 230, 210],
        "城市3": [320, 632, 901, 134, 90, 230, 210],
        "城市4": [420, 732, 701, 134, 90, 230, 210],
        "城市5": [520, 832, 601, 134, 90, 230, 210],
        "城市6": [620, 932, 401, 134, 90, 230, 210],
        "城市7": [720, 332, 501, 134, 90, 230, 210],
        "城市8": [820, 232, 301, 134, 90, 230, 210]
    },
    option: {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['城市1', '城市2']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '城市1',
                type: 'line',
                stack: '总量',
                data: [120, 432, 1101, 134, 90, 230, 210]
            },
            {
                name: '城市2',
                type: 'line',
                stack: '总量',
                data: [220, 532, 1001, 134, 90, 230, 210]
            }
        ]
    }
}