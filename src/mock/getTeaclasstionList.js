import Mock from 'mockjs'
Mock.mock(/getTeaclasstionList\.json/, {
  'data|8':[
    {
      teaclasstionName:'@cword(2,4)',
      teaclasstionId:'@integer(0,10)'
    }
  ]
})