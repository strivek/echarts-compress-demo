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
            var sql = "json/page1.js";

            base.renderChart(sql, myChart);

            //交互事件
            $("select").change(datachange);
            //交互方法
            function datachange(event) {
                //事件操作
            }
        }

        return chartlogic(ec, $);
    }
);