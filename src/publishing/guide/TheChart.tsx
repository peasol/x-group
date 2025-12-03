// src/publishing/guide/TheChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

function TheChart() {
  const xDates = [
    new Date('2024-12-01').getTime(),
    new Date('2025-02-01').getTime(),
    new Date('2025-04-01').getTime(),
    new Date('2025-06-01').getTime(),
    new Date('2025-08-01').getTime(),
    new Date('2025-10-01').getTime(),
  ];

  const series = [
    { name: '현재 필지', data: xDates.map((x, i) => [x, [5,10,15,20,18,36][i]]) },
    { name: '상위 5%', data: xDates.map((x, i) => [x, [5,11,17,22,20,40][i]]) },
    { name: '상위 10%', data: xDates.map((x, i) => [x, [5,10,16,21,19,38][i]]) },
    { name: '전체 평균', data: xDates.map((x, i) => [x, [5,9,14,19,16,36][i]]) },
  ];

  const options: ApexOptions = {
    chart: { type: 'area', toolbar: { show: false }, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    colors: ['#8b5cf6','#f59e0b','#3b82f6','#6b7280'],
    stroke: { width: [3,2,2,2], dashArray: [0,4,4,6] },
    fill: {
      type: ['gradient', 'solid', 'solid', 'solid'],
      gradient: { shadeIntensity: 1, inverseColors: false, opacityFrom: 0.8, opacityTo: 0.6, stops: [0, 100] },
      opacity: [1, 0, 0, 0]
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: (value) => `${new Date(value).getMonth()+1}월`
      }
    },
    yaxis: {
      min:0, max:40, tickAmount:5,
      labels:{ formatter:(val)=>Math.round(val).toString() },
      title:{ text:'생구중 (g)' }
    },
    grid:{ borderColor:'#e5e7eb', strokeDashArray:5 },
    tooltip:{ shared:true },
    annotations: {
      yaxis: [
        {
          y: 18,
          borderColor: '#94a3b8',
          strokeDashArray: 5,
          label: {
            text: '상품급 (18g 이상)',
            position: 'left',
            offsetX: 90,
            style: { color: '#64748b', background: 'transparent' }
          }
        },
        {
          y: 26,
          borderColor: '#94a3b8',
          strokeDashArray: 5,
          label: {
            text: '특품급 (26g 이상)',
            position: 'left',
            offsetX: 90,
            style: { color: '#64748b', background: 'transparent' }
          }
        }
      ],
      xaxis: [
        {
          x: xDates[2],
          borderColor: '#ff0000',
          strokeDashArray: 5,
          label: { 
            text: '현재', 
            orientation: 'horizontal', 
            offsetY: -10, 
            style: { color: '#ff0000', background: '#fff' } 
          }
        }
      ]
    },
    legend:{ show:false }
  };

  return (
    <div className="pub-guide">
      <h1>차트 <small>TheChart</small></h1>
      <h2>차트</h2>
      <div className="chart-box">
        <div className="top">
          <h2>생구중 변화 예측</h2>
          <p>건조 후 무게 기준</p>
        </div>
        <div className="chart-area">
          <Chart options={options} series={series} type="area" height={300} />
        </div>
        <div className="items-wrap">
          <div className="item"><div className="t1">30g</div><div className="t2">현재 필지</div></div>
          <div className="item"><div className="t1">36g</div><div className="t2">상위 5%</div></div>
          <div className="item"><div className="t1">24g</div><div className="t2">상위 10%</div></div>
          <div className="item"><div className="t1">18g</div><div className="t2">전체 평균</div></div>
        </div>
      </div>
    </div>
  );
}

export default TheChart;
