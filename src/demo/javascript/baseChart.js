/**
 * Created by gaofei on 14/12/9.
 */
define(['jquery'], function ($) {

    function baseOption(options) {

    }
    
    baseOption.fn = baseOption.prototype;

    baseOption.fn.getdata = function (sql) {
        var request = $.ajax({
            url: sql,
            type: "get",
            cache: false
        })
        return request;
    }

    baseOption.fn.lineAddSingleData = function (seriesData, selectedName, chartOption, defaultOption/*可选*/) {
        var sData;
        var option;
        for
        (
            var i = 0, lens = seriesData.name.length;
            i < lens;
            i++
        ) {
            if (seriesData.name[i] == selectedName) {
                sData = seriesData.data[i];
            }
        }

        var newdata = template(selectedName, sData);

        //当初始化添加数据时，引用默认defaultOption

        if (defaultOption) {
            option = defaultOption;
            option.xAxis[0].data = seriesData.xlist;
        } else {
            option = chartOption.getOption();
        }

        option.series.push(newdata);
        option.legend.data.push(newdata.name);
        chartOption.setOption(option,true);
        chartOption.setTheme("default");


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
    }
    baseOption.fn.lineRemoveSingleData = function (selectedData, chartOption) {
        var option = chartOption.getOption();
        for (var i = 0, lens = option.series.length; i < lens; i++) {

            if (option.legend.data[i] == selectedData) {
                option.legend.data.splice(i, 1);
                option.series.splice(i, 1);
                chartOption.setOption(option, true);
            }
        }
    }
    baseOption.fn.addAllData = function (data) {
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
    return new baseOption();

})
