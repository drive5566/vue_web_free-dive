<template>
          <!-- 底部模塊製作 -->
          <footer class="footer" id="footer">


            <div class="mod_help">
                <dl>
                    <dt>購物指南</dt>
                    <dd><a href="#">購物流程</a> </dd>
                    <dd><a href="#">會員介紹</a> </dd>
                    <dd><a href="#">生活旅行</a> </dd>
                    <dd><a href="#">常見問題</a> </dd>
                    <dd><a href="#">購物指南</a> </dd>
                </dl>
                <dl>
                    <dt>配送方式</dt>
                    <dd><a href="#">上門自提</a> </dd>
                    <dd><a href="#">限時抵達</a> </dd>
                    <dd><a href="#">配送查詢</a> </dd>
                    <dd><a href="#">配送收費</a> </dd>
                    <dd><a href="#">海外配送</a> </dd>
                </dl>
                <dl>
                    <dt>支付方式</dt>
                    <dd><a href="#">或到付款</a> </dd>
                    <dd><a href="#">在限支付</a> </dd>
                    <dd><a href="#">分期付款</a> </dd>
                    <dd><a href="#">郵局匯款</a> </dd>
                    <dd><a href="#">公司轉帳</a> </dd>
                </dl>
                <dl>
                    <dt>售後服務</dt>
                    <dd><a href="#">售後政策</a> </dd>
                    <dd><a href="#">價格保護</a> </dd>
                    <dd><a href="#">退款說明</a> </dd>
                    <dd><a href="#">退換貨</a> </dd>
                    <dd><a href="#">取消訂單</a> </dd>
                </dl>
                <dl>
                    <dt>特色服務</dt>
                    <dd><a href="#">奪寶島</a> </dd>
                    <dd><a href="#">DIY裝機</a> </dd>
                    <dd><a href="#">延保服務</a> </dd>
                    <dd><a href="#">會員卡</a> </dd>
                </dl>
                <dl>
                    <dt>幫助中心</dt>
                    <dd><img src="./img/qrcode_69196010_b8dade90e8743cf20b8b09df24debd11.png" alt=""></dd>

                </dl>
            </div>

            <div class="mod_copyright">
                <div class="links"></div>
                <div class="copyright">
                    網站股份有限公司提供 註冊編號：交觀綜9999號 旅遊專線電話：0800-000-123 地址：台北市區街9號7樓
                </div>
            </div>
        </footer>
        <!-- 底部模塊製作 end -->
</template>

<script>
export default {
    name:'MyFooter'
}
</script>

<style>
.footer{
    max-width: 100%;

    background-color: rgb(202, 202, 202);
    padding:50px 0px;
    
}

.mod_service{
    height: 80px;
    border-bottom: 1px solid #ccc;
}
.mod_service ul{
    display: flex;
}


.mod_service ul li{
    width: 300px;
    height: 50px;
    padding-left: 35px;
    
}

.mod_service ul li h5{
    float: left;
    width: 50px;
    height: 50px;
    /* background: url(../img/2019121918295413.png) -50px; */
    margin-right: 8px;
    border-radius: 25px;
}
.mod_service ul li h4{
    font-weight: 700;
    font-size: 14px;
    margin: 10px 0 5px 0;
    
    
}
.mod_service ul li p{
    font-size: 12px;
    

}

.mod_service ul li div{
    margin-left: 5px;
}


.mod_help{
    height: 185px;
    border: 1px solid;
    padding-top: 20px;
    padding-left: 50px;
    display: flex;
    /* float: left; */
}
.mod_help dl dt{
    font-size: 16px;
    margin-bottom: 10px;
}
.mod_help dl dd{
    font-size: 14px;
    margin-bottom: 5px;

}
.mod_help dl dd a:hover{
    border-bottom: 2px solid;
    font-weight: 700;
}
.mod_help dl {
    /* float: left; */
    width: 200px;
}

.mod_copyright{
    text-align: center;
    padding-top: 20px;
}

dd img{
    max-width: 100%;
    width: 100px;
}
</style>