/**
 * Created by gaofei on 14/12/5.
 */
require(
    [
        'echarts',
        'jquery',
        'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
        'echarts/chart/bar'
    ],
    function (ec, $) {

        function chartlogic(ec, $) {

            var chart1 = ec.init(document.getElementById("mychart1"));
            //Start
            initMethod();

            //初始化方法
            function initMethod() {
                //数据查询地址
                var sql = "json/page1.js";

                //调用渲染方法
                renderChart(sql, chart1, test);
            }
            //data  数据
            //chartObeject 图表对象
            function test(data, chartObject) {
                var chartData = eval(data);
                chartObject.setTheme("dark");
                chartObject.setOption(chartData);
            }

            //交互事件
            $("select").change(datachange);
            //交互方法
            function datachange(event) {
                //事件操作
            }

            //渲染表格
            function renderChart(sql, _chart, successMethod/*可选*/, failMethod/*可选*/) {
                var request = $.ajax({
                        url: sql,
                        type: "get",
                        cache: false
                    }),
                    success = successMethod || _success,
                    fail = failMethod || _fail;

                request.done(function (data) {
                    success(data, _chart);
                });
                request.fail(function (data) {
                    fail(data, _chart);
                });
                //默认成功方法
                function _success(data, chartObject) {
                    alert(2);
                    var chartData = eval(data);
                    chartObject.setTheme("dark");
                    chartObject.setOption(chartData);
                }

                //默认失败
                function _fail(data, myChart) {
                    alert('系统小哥正在开小差，请重新登录');
                }
            }

        }

        return chartlogic(ec, $);
    }
);