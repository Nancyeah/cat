<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-5"><hr /></div>
      <div class="col-md-1">购物车</div>
      <div class="col-md-5"><hr /></div>
    </div>
    <div class="row bgColor">
      <div class="col-md-6">商品信息</div>
      <div class="col-md-2">商品金额</div>
      <div class="col-md-2">商品数量</div>
      <div class="col-md-1">总金额</div>
      <div class="col-md-1">编辑</div>
    </div>
    <div class="row">
      <div class="col-md-1"><input type="radio" /></div>
      <div class="col-md-2" style="float: left;"><img src="../../static/image/bosi.jpg" alt=""></div>
      <div class="col-md-3" style="float: left;">
        <br />
        <span>波斯猫</span>
        <br />
        <br />
        <span>赠送：《如何成为合格的铲屎官》</span>
      </div>
      <div class="col-md-2" style="text-align: center;">
        <br /><br />$200
      </div>
      <div class="col-md-2" style="text-align: center;">
        <br /><br />
        <a id="sub" href="javascript:">-</a>
        <input type="text" readonly style="width: 50px;" id="count" />
        <a id="add" href="javascript:" @click="add">+</a>
      </div>
      <div class="col-md-1" style="text-align: center;">
        <br /><br />
        <span>0.00</span>
      </div>
      <div class="col-md-1" style="text-align: center;">
        <br /><br />
        <a href="">删除</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cart"
    }
</script>

<style scoped>
  @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
  .bgColor{
    background-color: grey;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
