<template>
    <div>
      <!--头部导航-->
      <div class="header">
        <img src="../../static/image/cloud.jpg">
        <span>猫咪们欢迎您！</span>
        <div class="hoverColor">
          <div class="nav icon">
            <ul>
              <li><a href=""><i>&#xe601;</i>首页</a></li>
              <li><a href=""><i>&#xe659;</i>图片</a></li>
              <li><a href=""><i>&#xe607;</i>视频</a></li>
              <li><a href="shoppingCar.html"><i>&#xe656;</i>购物车</a></li>
            </ul>
          </div>
        </div>
        <div class="zd">
          <ul>
            <li><a href="">注册</a></li>
            <li><a href="">登录</a></li>
          </ul>
        </div>
      </div>
      <!--中间内容-->
      <div class="main" id="main">
        <!--子菜单-->
        <!--div class="sub-menu">
                <div class="inner-box">
                    <div class="sub-inner-box">
                        <div class="title">猫咪小百科</div>
                        <div class="sub-row">
                            <a href="">猫咪的性格</a>
                        </div>
                    </div>
                </div>
            </div-->
        <!--图片左边的导航菜单-->
        <div class="menu-box">
          <div class="menu-content">
            <div class="menu-item">
              <a href="">
                <span>猫咪小百科</span>
                <i>&#xe62b;</i>
              </a>
            </div>
            <div class="menu-item">
              <a href="">
                <span>家有一猫如有一宝</span>
                <i>&#xe62b;</i>
              </a>
            </div>
            <div class="menu-item">
              <a href="">
                <span>猫咪品种、价格</span>
                <i>&#xe62b;</i>
              </a>
            </div>
            <div class="menu-item">
              <a href="">
                <span>新手铲屎官小妙招</span>
                <i>&#xe62b;</i>
              </a>
            </div>
            <div class="menu-item">
              <a href="">
                <span>售后服务</span>
                <i>&#xe62b;</i>
              </a>
            </div>
          </div>
        </div>
        <!--图片轮播-->
        <div id="banner" class="banner">
          <ul>
            <li v-for="(img, index) in imgArray" :key="index">
              <a href="">
                <img :src='img' />
              </a>
            </li>
          </ul>
          <!--a href="">
            <div class="banner-slide slide1 slide-active"><img src="../../static/image/1.jpg"></div>
          </a>
          <a href="">
            <div class="banner-slide slide2"><img src="../../static/image/2.jpg"></div>
          </a>
          <a href="">
            <div class="banner-slide slide3"><img src="../../static/image/6.jpg"></div>
          </a>
          <a href="">
            <div class="banner-slide slide4"><img src="../../static/image/cat4.png"></div>
          </a>
          <a href="">
            <div class="banner-slide slide5"><img src="../../static/image/cat1.png"></div>
          </a>
          <a href="">
            <div class="banner-slide slide6"><img src="../../static/image/cat3.png"></div>
          </a-->
        </div>
        <!--图片上的按钮-->
        <a href="javascript:void(0)" class="button prev" id="button prev"></a>
        <a href="javascript:void(0)" class="button next" id="button next"></a>
        <!--图片上的圆点坐标-->
        <div class="dots" id="dots">
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--底部内容-->
      <div class="footer">
        <div class="foot">
          <ul>
            <li>帮助</li>
            <li>举报</li>
            <li>用户反馈</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import "../../static/js/script";
    export default {
        name: "catIndex"
    }
</script>

<style scoped>
  @import "../../static/css/style.css";
</style>
