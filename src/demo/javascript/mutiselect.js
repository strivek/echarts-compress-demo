/**
 * Created by gaofei on 14/12/5.
 */
require(
    [
        'echarts',
        'jquery',
        'base',
        'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
    ],
    function (ec, $, base) {

        function chartlogic(ec, $) {

            var myChart = ec.init(document.getElementById("mychart1")),
                sql = "json/mutiselect.js",
                series,
                config = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
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
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: []
                },
                defaultList = ['北京', '上海', '广州'];
            init();


            function init() {
                //var request = getData(sql);
                var request = base.getdata(sql);
                request.done(function (chartData) {
                    series = eval(chartData);

                    //添加数据
                    $(defaultList).each(function (index, elem) {
                        base.lineAddSingleData(series, elem, myChart, config);
                    });
                });

                request.fail(function (data) {
                    alert("数据小哥正在维修，请稍后访问");
                })
                eventBind();
            }

            function eventBind() {

                $(".m-filter-gf input").change(function () {

                    var status = $(this).is(":checked"),
                        selected = $(this).val();

                    status ? base.lineAddSingleData(series, selected, myChart) : base.lineRemoveSingleData(selected, myChart);
                });
            }
        }
        return chartlogic(ec, $);
    }
)
;