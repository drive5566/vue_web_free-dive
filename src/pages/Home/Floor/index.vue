<template>
  <div class="floor">
    <div class="w one_floor">
      <div class="box_hd">
        <h3 id="floor1">家用電器</h3>
        <div class="tab_list">
          <ul>
            <li><a href="#">熱門</a>|</li>
            <li><a href="#">大家電</a>|</li>
            <li><a href="#">生活電器</a>|</li>
            <li><a href="#">廚房電器</a>|</li>
            <li><a href="#">季節電器</a>|</li>
            <li><a href="#">空氣/淨水</a>|</li>
            <li><a href="#">智慧電器</a>|</li>
          </ul>
        </div>
      </div>
      <div class="box_bd">
        <div class="tab_content">
          <div class="tab_list_item">
            <div class="col_210">
              <ul>
                <li><a href="#">第一電器</a></li>
                <li><a href="#">第二電器</a></li>
                <li><a href="#">第三電器</a></li>
                <li><a href="#">第四電器</a></li>
                <li><a href="#">第五電器</a></li>
                <li><a href="#">第六電器</a></li>
              </ul>

            </div>
            <div class="col_329">
              <div class="img">
                <img
                  src="./img/0B7EBF31-273B-4F7B-9FF5-557A3DAE7F26.jpeg"
                  alt=""
                />
              </div>
              <div class="hot">全台免運!!</div>
              <h2>大冰箱 超冰超大</h2>
              <div class="sell">
                <h3>$5566</h3>
                <p>已售出 1269</p>
              </div>
            </div>
            <div class="col_221">
              <div class="container-221">
                <div class="sell">
                  <p>超強小冰箱</p>
                  <h3>$5566</h3>
                </div>
                <div class="img">
                  <img src="./img/ECDC12E9F7.jpeg" alt="" />
                </div>
              </div>
              <div class="container-221">
                <div class="sell">
                  <p>超強小冰箱</p>
                  <h3>$5566</h3>
                </div>
                <div class="img">
                  <img src="./img/ECDC12E9F7.jpeg" alt="" />
                </div>
              </div>
            </div>

            <div class="col_221">
              <div class="container-221">
                <div class="sell">
                  <p>超強小冰箱</p>
                  <h3>$5566</h3>
                </div>
                <div class="img">
                  <img src="./img/ECDC12E9F7.jpeg" alt="" />
                </div>
              </div>
              <div class="container-221">
                <div class="sell">
                  <p>超強小冰箱</p>
                  <h3>$5566</h3>
                </div>
                <div class="img">
                  <img src="./img/ECDC12E9F7.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div class="col_221">
              <div class="container-221">
                <div class="sell">
                  <p>超強小冰箱</p>
                  <h3>$5566</h3>
                </div>
                <div class="img">
                  <img src="./img/ECDC12E9F7.jpeg" alt="" />
                </div>
              </div>
              <div class="container-221">
                <div class="sell">
                  <p>超強小冰箱</p>
                  <h3>$5566</h3>
                </div>
                <div class="img">
                  <img src="./img/ECDC12E9F7.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFloor",
  props: ["list"],

};
</script>

<style>
.floor .w {
  margin-top: 30px;
}

.box_bd {
  height: 361px;
  /* background-color: pink; */
}
.tab_list_item {
  display: flex;
}
.col_210 {
  width: 210px;
  height: 361px;
  text-align: center;
}
.col_329 {
  width: 329px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 15px;
  margin: 0 2px;
  border-left: 1px solid;
  border-right: 1px solid;
}
.col_329 img {
  width: 200px;
  max-width: 100%;
  margin: auto;
  display: block;
}
.hot {
  position: absolute;
  top: 160px;
  left: 0;
  background-color: red;
  color: #fff;
  padding: 10px;
  font-weight: 700;
}
.col_329 .img {
  width: 329px;
  height: 200px;
}

.sell {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.sell h3 {
  color: red;
  font-size: 22px;
}

.sell p {
  line-height: 22px;
  font-size: 14px;
}

.col_329 h2 {
  font-size: 26px;
}

.col_221 {
  width: 221px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 10px;
}

.col_221 img {
  width: 100%;
}

.container-221 {
  display: flex;
}

.container-221 .sell {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-221 h3 {
  font-size: 18px;
}

.col_219 {
  width: 219px;
  margin: 0 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  text-align: center;
  border-left: 1px solid;
  border-right: 1px solid;
}

.col_210 ul li {
  width: 85px;
  height: 34px;
  text-align: center;
  line-height: 33px;
  float: left;
  margin-right: 10px;
  border-bottom: 1px solid;
}

.col_210 ul {
  padding-left: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
}
.col_210 img {
  margin-top: 20px;
}

.col_210 ul li a {
  display: block;
}

.col_210 ul li a:hover {
  background-color: #000;
  color: #fff;
}

.bb {
  /* z-index: 999; */
  display: block;
}

.red {
  color: red;
}

.focus {
  width: 700px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.focus .arrow_l {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #000;
  color: #fff;
  padding: 10px;
  display: none;
  border-radius: 0 20px 20px 0;
  z-index: 99;
}

.focus .arrow_r {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background-color: #000;
  color: #fff;
  padding: 10px;
  display: none;
  border-radius: 20px 0 0 20px;
  z-index: 99;
}

.circle {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 300px;
}

.circle li {
  width: 10px;
  height: 10px;
  border: 1px solid;
  border-radius: 50%;
  margin: 10px;
  background-color: #fff;
}

.focus ul {
  width: 600%;
  position: absolute;
  top: 0;
  left: 0;
}

.focus ul li {
  float: left;
}

.black {
  background-color: #000 !important;
}
.fl .register {
  animation: flashing 1s infinite steps(1);
}

.box_hd {
  height: 30px;
  border-bottom: 2px solid #000;
  line-height: 30px;
}

.box_hd a:hover {
  color: red;
}
.box_hd h3 {
  float: left;
  font-size: 18px;
  color: red;
  font-weight: 400;
}

.tab_list {
  float: right;
  line-height: 30px;
}
.tab_list ul {
  display: flex;
}
.tab_list ul li a {
  padding: 0 15px;
}

.tab_list ul li a:hover {
  color: red;
}
</style>