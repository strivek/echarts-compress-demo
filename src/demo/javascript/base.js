define(['echarts','jquery'], function (ec,$) {

    function baseOption(options) {
        this.chartList = ['a', 'b', 'c', 'd'];
        this.sqlList = options.sqlList;
    }
    baseOption.fn = baseOption.prototype;

    baseOption.fn.renderChart = function () {

    }

})