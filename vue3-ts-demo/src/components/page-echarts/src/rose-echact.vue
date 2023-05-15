<template>
  <div class="rose-echart"><BaseEchart :option="option"></BaseEchart></div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import { computed } from 'vue'
import type { INameEchartValueType } from '../types/index'
import BaseEchart from './base-echart.vue'
interface IProps {
  roseData: INameEchartValueType[]
}

const props = defineProps<IProps>()
const option = computed<EChartsOption>(() => {
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '种类',
        type: 'pie',
        radius: [10, 140],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          show: false
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
