import Mock from 'mockjs'
Mock.mock(/getAboutus\.json/, {
  'data':
    {
      aboutus: '@cparagraph(10)',
      corporateAddress: '重庆市渝北区金开大道西段15号',
      corporateMailbox:'@email()',
      corporateName: '海云数据',
      corporatePhone: '023-86348393',
      corporateTelephone: '+86 13365965031'       
    }
})