<template>
  <div>
    <group>
      <x-input placeholder="搜索点什么吧" placeholder-align="center" :height="20"></x-input>
    </group>
    <panel :footer="footer" :list="list" :type="type" @on-click-item="handleShowDetail()"></panel>
  </div>
</template>
<script>
  export default {
    name: 'news',
    /* eslint-disable */
    data() {
      return {
        type: '5',
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: ''
        }, {
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: ''
        }, {
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: ''
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        footer: {
          title: '更多',
          url: 'http://vux.li'
        }
      }
    },
    methods: {
      handleShowDetail() {
        this.$router.push({path: '/newsDetail'})
      }
    }
  }
</script>
