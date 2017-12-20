import Mock from 'mockjs'
Mock.mock(/getTeaList\.json/, {
  'data|8':[
    {
      teaId: '@integer(1,10)',
      teaImg: '../../static/img/zhanwei.jpg',
      teaIntroduce:'@cparagraph(1)',
      teaName: '@cword(2,4)'
    }
  ]
})