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

            var myChart = ec.init(document.getElementById("mychart1"));
            var sql = "json/mutiselect.js";
            var series;
            var config = {
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
            };

            init();


            function init() {
                //var request = getData(sql);
                var request = base.getdata(sql);
                request.done(function (chartData) {
                    series = eval(chartData);

                    var defaultList =['北京','上海','深圳'];
                    $(defaultList).each(function(index,elem){
                        base.lineAddSingleData(series,elem,myChart,config);
                    });
                });

                request.fail(function (data) {
                    alert("数据小哥正在维修，请稍后访问");
                })

                function addAllData(data) {
                    var legendList = data.name,
                        xAxisList = data.xlist,
                        seriesList = [];

                    for (var i = 0, lens = data.name.length; i < lens; i++) {
                        seriesList.push(template(data.name[i], data.data[i]));
                    }
                    function template(name, data) {
                        var obj = {
                            name: '',
                            type: 'line',
                            data: []
                        };
                        obj.name = name;
                        obj.data = data;
                        return obj;
                    }
                    config.legend.data = legendList;
                    config.series = seriesList;
                    config.xAxis[0].data = xAxisList;
                    myChart.setTheme("default");
                    myChart.setOption(config, true);
                }

                eventBind();
            }

            function eventBind() {
                //交互事件
                $(".m-filter-gf input").change(function () {
                    // console.log($(this).val()+$(this).is(":checked"));
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