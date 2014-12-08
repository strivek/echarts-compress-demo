define(['jquery'], function ($) {

    function baseOption(options) {

    }

    baseOption.fn = baseOption.prototype;

    baseOption.fn.renderChart = function (sql, chartObject,successMethod/*可选成功方法*/, failMethod/*可选失败方法*/) {
        console.log(sql);
        var request = $.ajax({
                url: sql,
                type: "get",
                cache: false
            }),
            success = successMethod || _success,
            fail = failMethod || _fail;

        request.done(function(data){
            success(chartObject,data);
        });
        request.fail(function(data){
            fail(chartObject,data);
        })

        //默认成功方法
        function _success(chart,data) {
            var chartData = eval(data);
            chart.setTheme("dark");
            chart.setOption(chartData);
        }
        //默认失败
        function _fail(data) {
            alert('系统小哥正在开小差，请重新登录');
        }
    }

    return new baseOption();

})