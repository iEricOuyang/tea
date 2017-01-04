<template>
  <div class="nsr-loading-center">
    <i class="fa fa-spinner fa-spin">
    </i>
  </div>
</template>

<script>
  module.exports = {
    name:'loading',
    props:{
      renderEndText:{
        default: false
      },
      isEndText:{
        default: ''
      }
    },
  }
</script>
<style type="text/css">
  .nsr-loading-center{
    text-align:center;
    margin: 10px auto 10px auto;
    color: #929292;
    height: 100%;
    font-size:50px;
  }
  .nsr-loading-hiden{
    display: none;
  }
  @-webkit-keyframes fa-spin{
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        transform: rotate(359deg);
    }
  }
  @-moz-keyframes fa-spin{
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        transform: rotate(359deg);
    }
  }
  @-o-keyframes fa-spin{
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        transform: rotate(359deg);
    }
  }
  @keyframes fa-spin{
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        transform: rotate(359deg);
    }
  }

  .fa-spin {
    -webkit-animation: fa-spin 2s infinite linear;
    -moz-animation: fa-spin 2s infinite linear;
    -o-animation: fa-spin 2s infinite linear;
    animation: fa-spin 2s infinite linear;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .fa-spinner:before {
    content: "\F110";
  }
</style>
