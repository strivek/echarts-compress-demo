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
        //相当于 base=new baseOption(); 可用于调用方法

        function chartlogic(ec, $) {
            //用变量myChart存储图表
            var myChart = ec.init(document.getElementById("mychart1"));
            var sql = "json/mutiselect.js";
            //数据 series
            var series;
            var defaultList = ['北京', '上海', '广州'];
            //配置
            var config = {
                //提示框
                tooltip: {
                    trigger: 'axis'
                },
                //图标
                legend: {
                    data: []
                },
                //工具栏
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
                //X轴
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    }
                ],
                //Y轴
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: []
            };
            //执行初始化

            var request = base.getData(sql);

            eventBind();


            request.done(function (chartData) {
                series = eval(chartData);
                addMutiData(series,defaultList,myChart,config)
            });
            request.fail(function(){
                alert("程序小哥正在加紧修复中");
            });

            function addMutiData(totallist,addList,chart,option) {
                $(addList).each(function (index, elem) {
                    base.lineAddSingleData(series, elem, myChart, config);
                });
            }

            function eventBind() {
                //交互事件
                //当改变时调用
                $(".m-filter-gf input").change(function () {
                    // console.log($(this).val()+$(this).is(":checked"));
                    var status = $(this).is(":checked"),
                        selected = $(this).val();
                    //如果这个input是被选择的调用lineAddSingleData(series, selected, myChart)，否则调用base.lineRemoveSingleData(selected, myChart);
                    status ? base.lineAddSingleData(series, selected, myChart) : base.lineRemoveSingleData(selected, myChart);
                });
            }
        }

        return chartlogic(ec, $);
    }
)
;