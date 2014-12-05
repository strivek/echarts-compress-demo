/**
 * Created by gaofei on 14/12/5.
 */
require.config({
    paths: {
        echarts: '../dist/source',
        jquery: 'javascript/lib/jquery.min',
        demo: "javascript/"
    }
});
var bodyElem = document.getElementsByTagName("body")[0];
var chartName = bodyElem.getAttribute('data-chart');
require(['javascript/'+chartName]);