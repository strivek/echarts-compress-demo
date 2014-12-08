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

            $("html").on("saveData", function (event, chartData) {
                series = chartData;
            })


            function initData(chart, data) {
                var _data = eval(data)
                chart.setOption(_data.option);

                $("html").trigger("saveData", _data.data);
            }

            base.renderChart(sql, myChart, initData);

            //交互事件
            $(".m-filter-gf input").change(function () {
                // console.log($(this).val()+$(this).is(":checked"));
                var status = $(this).is(":checked"),
                    selected = $(this).val(),
                    template = {
                    name: '城市3',
                    type: 'line',
                    stack: '总量',
                    data: [220, 532, 1001, 134, 90, 230, 210]
                };
                template.name =selected;

                status ? addData(template) : removeData(template);
            });
            //交互方法
            function addData(dataKey) {
                var option = myChart.getOption();
                option.series.push(dataKey);
                option.legend.data.push(dataKey.name);
                myChart.setOption(option);


            }

            function removeData(dataKey) {
                //搜索获取的数据
                //移除
            }
        }

        return chartlogic(ec, $);
    }
);