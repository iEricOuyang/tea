import Mock from 'mockjs'
Mock.mock(/getTeaInfo\.json/, {
  'data':
    {
      imgUrl: 'static/zhanwei.jpg',
      teaIntroduce:'@cparagraph(1)',
      teaName: '@cword(2,4)',
      teaDescribe: '@cparagraph(50)'
    }
})