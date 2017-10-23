<template>
  <el-select v-model="value" placeholder="请选择" @change="change">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      @change="change"
      >
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          value: '游戏',
          label: '游戏'
        }, {
          value: '婚纱摄影',
          label: '婚纱摄影'
        }],
        value: ''
      }
    },
    methods:{
      change (val) {
        this.$emit('selectChange',val)
      }
    }
  }
</script>
                
