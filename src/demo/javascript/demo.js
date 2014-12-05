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

        function chartlogic(ec,$){

            var myChart = ec.init(document.getElementById("mychart1"));
            //Start
            initMethod();

            //初始化方法
            function initMethod() {
                //数据查询地址
                var sql = "json/page1.js";

                //调用渲染方法
                renderChart(sql);
            }

            //交互事件
            $("select").change(datachange);
            //交互方法
            function datachange(event) {
                //事件操作
            }

            //渲染表格
            function renderChart(sql, successMethod/*可选*/, failMethod/*可选*/) {
                var request = $.ajax({
                        url: sql,
                        type: "get",
                        cache: false
                    }),
                    success = successMethod || _success,
                    fail = failMethod || _fail;

                request.done(success);
                request.fail(fail);
                //默认成功方法
                function _success(data) {
                    var chartData = eval(data);
                    myChart.setTheme("dark");
                    myChart.setOption(chartData);
                }

                //默认失败
                function _fail(data) {
                    alert('系统小哥正在开小差，请重新登录');
                }
            }

        }

     return chartlogic(ec,$);
    }
);