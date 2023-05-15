<template>
  <div class="base-echart">
    <div ref="chartDom" class="chart-content"></div>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
import ChinaJSON from '../data/china.json'
interface IProps {
  option: EChartsOption
}

echarts.registerMap('china', ChinaJSON as any)
const props = defineProps<IProps>()
var chartDom = ref<HTMLElement>()

onMounted(() => {
  const myChart = echarts.init(chartDom.value!, 'light', {
    renderer: 'canvas'
  })
  watchEffect(() => {
    myChart.setOption(props.option)
  })
})
</script>

<style lang="less" scoped>
.chart-content {
  height: 300px;
}
</style>
