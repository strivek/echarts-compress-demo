/**
 * Created by gaofei on 14/12/6.
 */
require.config({
    paths: {
        echarts: '../dist/source',
        jquery: 'javascript/lib/jquery.min',
        demo: "javascript/",
        base:'javascript/base'
    }
});
var bodyElem = document.getElementsByTagName("body")[0];
var chartName = bodyElem.getAttribute('data-chart');
require(['javascript/'+chartName]);