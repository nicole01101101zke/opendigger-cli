
$(function(){


  init();

})
function init(){

// ['厦门第一医院','厦门中山医院','厦门中医院','厦门第五医院',];

  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
  var name = 'X-lab2017/open-digger';
  
  var data1 = ["2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10", "2021-10-raw", "2021-11", "2021-12", "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"];
  var data2 = [10, 23, 33, 37, 41, 42, 49, 52, 58, 62, 67, 71, 72, 74, 78, 79, 86, 89, 94, 99, 201, 204, 208, 209, 211, 218, 228, 237, 246, 249, 250, 258, 270, 276, 278, 281];
  var data3 = ["2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03", "2021-04", "2021-06", "2021-07", "2021-08", "2021-09", "2021-11", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"];
  var data4 = [4, 8, 9, 11, 21, 25, 28, 30, 32, 35, 36, 37, 38, 42, 43, 44, 46, 49, 52, 54, 57, 66, 69, 71, 73, 77, 81, 86, 89, 91];
  var data5 = ["2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10", "2021-10-raw", "2021-11", "2021-12", "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"];
  var data6 = [4.5, 9.41, 15, 21.31, 31.27, 41.879999999999995, 48.16, 52.3, 56.739999999999995, 60.99999999999999, 67.46, 72.3, 76.23, 79.57000000000001, 82.57000000000001, 85.41000000000001, 88.30000000000001, 91.63000000000001, 96.34, 101.21000000000001, 107.27000000000001, 111.03000000000002, 115.17000000000002, 122.84000000000002, 132.01000000000002, 140.54000000000002, 150.50000000000003, 162.34000000000003, 176.99000000000004, 196.35000000000002, 216.25000000000003, 256.73, 278.78000000000003, 297.57000000000005, 315.99000000000007, 330.2900000000001];
  var data7 = ["2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10", "2021-10-raw", "2021-11", "2021-12", "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"];
  var data8 = [35.29, 78.31, 106.84, 137.23000000000002, 214.44, 269.24, 291.67, 305.91, 336.33000000000004, 356.26000000000005, 396.80000000000007, 413.51000000000005, 425.87000000000006, 429.87000000000006, 443.87000000000006, 445.2800000000001, 464.2200000000001, 490.5300000000001, 516.6100000000001, 533.6500000000001, 578.8700000000001, 601.6800000000001, 626.5400000000001, 676.2800000000001, 716.58, 752.63, 798.36, 855.4200000000001, 912.7500000000001, 971.2100000000002, 1027.41, 1150.72, 1189.78, 1242.21, 1291.13, 1321.5600000000002];
  var data9 = ["2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03", "2021-04", "2021-06", "2021-07", "2021-08", "2021-09", "2021-11", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"];
  var data10 = [4, 8, 9, 11, 21, 25, 28, 30, 32, 35, 36, 37, 38, 42, 43, 44, 46, 49, 52, 54, 57, 66, 69, 71, 73, 77, 81, 86, 89, 91];
  var data11 = ["2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03", "2021-04", "2021-06", "2021-07", "2021-08", "2021-09", "2021-11", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12", "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06"];
  var data12 = [4, 8, 9, 11, 21, 25, 28, 30, 32, 35, 36, 37, 38, 42, 43, 44, 46, 49, 52, 54, 57, 66, 69, 71, 73, 77, 81, 86, 89, 91];
  
  var graphData = {
    "nodes": [["a", 1], ["b", 2]],
    "edges": [["a", "b", 3]]
};

// 转换为 ECharts 需要的节点和边格式
var nodes = graphData.nodes.map(node => ({
    name: node[0],
    value: node[1],
    symbolSize: node[1] * 10  // 根据节点的权重值设置节点大小
}));

var edges = graphData.edges.map(edge => ({
    source: edge[0],
    target: edge[1],
    value: edge[2]
}));



    //Star数
    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption( {
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}个"
       },
       legend: {
        data:data2,
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : data1,
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "个"
                  },
              },
          }
      ],
      series : [
          {
              name:name,
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:data2
          }
      ]

    })

    //fork数
    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption( {
      color:["#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}个"
       },
       legend: {
        data:data4,
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : data3,
              axisLine:{
                   lineStyle:{
                       color: '#ff7f50'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#ff7f50'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "人"
                  },
              },
          }
      ],
      series : [
          {
              name:'厦门中山医院',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:data4
          }
      ]

    })


    //openrank
    var lineChart3 = echarts.init(document.getElementById('lineChart3'));
    lineChart3.setOption( {
      color:["#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}个"
       },
       legend: {
        data:data6,
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : data5,
              axisLine:{
                   lineStyle:{
                       color: '#32cd32'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#32cd32'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value
                  },
              },
          }
      ],
      series : [
          {
              name:'厦门中山医院',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:data6
          }
      ]

    })

    //Activity
    var lineChart4 = echarts.init(document.getElementById('lineChart4'));
    lineChart4.setOption( {
      color:["#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}"
       },
       legend: {
        data:data8,
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : data7,
              axisLine:{
                   lineStyle:{
                       color: '#da70d6'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#da70d6'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value
                  },
              },
          }
      ],
      series : [
          {
              name:'厦门中山医院',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:data8
          }
      ]

    })

    // 使用 ECharts 创建力导向图
var forceChart1 = echarts.init(document.getElementById('forceChart1'));

forceChart1.setOption({
    series: [
        {
            type: 'graph',
            layout: 'force',
            roam: true,
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 5
                }
            },
            nodes: nodes,
            edges: edges
        }
    ]
});


}
