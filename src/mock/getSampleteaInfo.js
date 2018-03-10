import Mock from 'mockjs'
Mock.mock(/getSampleteaInfo\.json/, {
  'data':
    {
      sampleteaId: '@integer(1,10)',
      sampleteaImg: 'dist/static/img/zhanwei.jpg',
      sampleteaDescribe:'@cparagraph(10)',
      sampleteaName: '@cword(2,4)'    
    }
})