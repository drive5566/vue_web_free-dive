<template>
          <!-- 底部模塊製作 -->
          <footer class="footer" id="footer">


            <div class="mod_help">
                <dl>
                    <dt>好站連結</dt>
                    <dd><a href="https://www.windy.com/?24.939,121.542,5" target="_blank">天氣預報</a> </dd>
                    <dd><a href="https://www.cwb.gov.tw/V8/C/" target="_blank">氣象局</a> </dd>
                </dl>
                <dl>
                    <dt>潛水系統</dt>
                    <dd><a href="https://www.aidainternational.org/" target="_blank">AIDA</a> </dd>
                    <dd><a href="https://www.padi.com/zh-hant" target="_blank">PADI</a> </dd>
                    <dd><a href="https://www.divessi.com/tw/home" target="_blank">SSI</a> </dd>
                </dl>

                <dl>
                    <dt>幫助</dt>
                    <dd><img src="./img/qrcode_69196010_b8dade90e8743cf20b8b09df24debd11.png" alt=""></dd>

                </dl>
            </div>

            <div class="mod_copyright">
                <div class="links"></div>
                <div class="copyright">
                    網站股份有限公司提供 註冊編號：交觀綜9999號 旅遊專線電話：0800-000-123 地址：基隆海底路
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

<style lang="scss" scoped>


.footer{
    max-width: 100%;
    padding:50px 0px;
    
}

.mod_service{
    height: 80px;
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
    border-top: 1px solid hsl(0, 0%, 0%,.2);
    padding-top: 20px;
    padding-left: 50px;
    display: flex;
    justify-content: center;
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