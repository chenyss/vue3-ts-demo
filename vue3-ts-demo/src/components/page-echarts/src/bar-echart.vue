<template>
  <div class="bar-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import { computed } from 'vue'
import BaseEchart from './base-echart.vue'

export interface ILabelEchartValueType {
  values: string[]
  labels: string[]
}
const props = defineProps<ILabelEchartValueType>()
const option = computed<EChartsOption>(() => {
  return {
    title: {
      text: '支持鼠标滚动缩放'
    },
    grid: {
      bottom: '5%'
    },
    xAxis: {
      data: props.labels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      z: 10
    },
    yAxis: {
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

<style scoped></style>
