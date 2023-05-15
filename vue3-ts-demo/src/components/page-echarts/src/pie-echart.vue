<template>
  <div class="pie-echart"><BaseEchart :option="option"></BaseEchart></div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
import type { INameEchartValueType } from '../types/index'
import BaseEchart from './base-echart.vue'
interface IProps {
  pieData: INameEchartValueType[]
}

const props = defineProps<IProps>()
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
