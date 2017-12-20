import Mock from 'mockjs'
Mock.mock(/getTeatype\.json/, {
  'data|8':[
    {
      teatypeName:'@cword(2,4)',
      teatypeId:'@integer(0,10)'
    }
  ]
})