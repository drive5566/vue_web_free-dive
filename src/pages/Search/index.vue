<template>
  <div>
    <typeNav />
    <div class="main">
      <div class="py-container">
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="">全部結果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchParams.categoryName">
              {{ searchParams.categoryName
              }}<i @click="removecategoryName"> X</i>
            </li>

            <li class="with-x" v-if="searchParams.keyWord">
              {{ searchParams.keyWord }}<i @click="removekeyWord"> X</i>
            </li>

            <li class="with-x" v-if="searchParams.trademark">
              {{ searchParams.trademark.split(":")[1]
              }}<i @click="removeTrademark"> X</i>
            </li>

            <li
              class="with-x"
              v-for="(attrValue, index) in searchParams.props"
              :key="index"
            >
              {{ attrValue.split(":")[1] }}<i @click="removeAttr(index)"> X</i>
            </li>
          </ul>
        </div>

        <SearchSelector />

        <div class="details">
          <div class="sui-navbar">
            <div class="navbar-inner">
              <ul class="sui-nav">
                <li :class="{ active: isOne }" @click="changeOrder('1')">
                  <a>綜合</a>
                  <span
                    class="material-symbols-outlined"
                    v-show="isDesc && isOne"
                    >expand_less</span
                  >
                  <span
                    class="material-symbols-outlined"
                    v-show="isAsc && isOne"
                    >expand_more</span
                  >
                </li>
                <li :class="{ active: isTwo }" @click="changeOrder('2')">
                  <a>價格</a>
                  <span
                    class="material-symbols-outlined"
                    v-show="isDesc && isTwo"
                    >expand_less</span
                  >
                  <span
                    class="material-symbols-outlined"
                    v-show="isAsc && isTwo"
                    >expand_more</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="good in goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="`/Detail/${good.id}`">
                      <img :src="good.defaultImg" alt="" />
                    </router-link>
                    
                  </div>
                  <div class="price">
                    <strong>
                      <em>$</em>
                      <i>{{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a href="item.html" title="下單就送會員卡">{{
                      good.title
                    }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人評價</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html">加入購物車</a>
                    <a href="javascript:void(0)">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <MyPagination :pageNo="searchParams.pageNo" :pageSize="searchParams.pageSize" :total="total" :continues="5" @getPageNo="getPageNo"/>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import SearchSelector from "./SearchSelector";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  name: "MySearch",
  components: {
    SearchSelector,

  },
  data() {
    return {
      // 帶給服務器參數
      searchParams: {
        category1Id: "",
        categoryName: "",
        keyWord: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  beforeMount() {
    // console.log(this.$route.query);
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  mounted() {
    this.getData();
    this.$bus.$on("getTrademark", (trademark) => {
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.getData();
    });
    this.$bus.$on("getAttr", (attrs, attrValue) => {
      let props = `${attrs.attrId}:${attrValue}:${attrs.attrName}`;
      if (this.searchParams.props.indexOf(props) == -1) {
        this.searchParams.props.push(props);
      }
      this.getData();
    });
  },
  computed: {
    ...mapGetters(["goodsList"]),
    ...mapState({
      total:state=>state.search.searchList.total
    }),
    isOne() {
      return this.searchParams.order.indexOf("1") != -1;
    },
    isTwo() {
      return this.searchParams.order.indexOf("2") != -1;
    },
    isAsc() {
      return this.searchParams.order.indexOf("asc") != -1;
    },
    isDesc() {
      return this.searchParams.order.indexOf("desc") != -1;
    },
  },
  methods: {
    //項服務器發請求獲取search數據，根據參數不同，數據進行調整
    getData() {
      this.$store.dispatch("getSearchList", this.searchParams);
    },
    removecategoryName() {
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.getData();
      //修改地址欄
      if (this.$route.params) {
        this.$router.push({ name: "Search", params: this.$route.params });
      }
    },
    changeOrder(flag) {
      let originOrder = this.searchParams.order;
      let originFlag = this.searchParams.order.split(":")[0];
      let originSort = this.searchParams.order.split(":")[1];
      let newOrder = "";
      if (flag == originFlag) {
        if (originSort == "asc") {
          newOrder = `${originFlag}:${(originSort = "desc")}`;
        } else {
          newOrder = `${originFlag}:${(originSort = "asc")}`;
        }
        this.searchParams.order = newOrder;
        this.getData()
        console.log(originOrder, flag, originFlag, originSort);
      } else if (flag != originFlag) {
        originFlag = flag;
        if (originSort == "asc") {
          newOrder = `${originFlag}:${(originSort = "desc")}`;
        } else {
          newOrder = `${originFlag}:${(originSort = "asc")}`;
        }
        this.searchParams.order = newOrder;
        this.getData()

      }
    },

    removekeyWord() {
      this.searchParams.keyWord = undefined;
      if (this.$route.query) {
        this.$router.push({ name: "Search", query: this.$route.query });
      }
      this.getData();
      this.$bus.$emit("clear");
    },

    removeTrademark() {
      this.searchParams.trademark = undefined;
      this.getData();
    },

    removeAttr(index) {
      this.searchParams.props.splice(index, 1);
      this.getData();
    },

    getPageNo(pageNo){
      this.searchParams.pageNo = pageNo
      this.getData()
    }
  },
  // 監聽實例身上屬性變化
  watch: {
    $route() {
      // 再次發請求整理參數
      Object.assign(this.searchParams, this.$route.query, this.$route.params);
      // 再次發AJAX請求
      this.getData();
    },
  },
};
</script>
  
  <style scoped>
.main {
  width: 1000px;
  margin: auto;
}
.bread {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.sui-tag {
  display: flex;
  margin: 0 5px;
}
.sui-tag li {
  margin: 0 5px;
  background-color: rgb(235, 234, 234);
  padding: 3px;
}

.sui-nav {
  display: flex;
  background-color: rgb(235, 234, 234);
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.sui-nav a {
  display: block;
  padding: 2px;
}

.sui-nav li {
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.yui3-g {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.yui3-u-1-5 {
  width: 19%;
  margin-top: 30px;
  padding: 10px;
}

.p-img img {
  width: 150px;
  margin: auto;
  display: block;
}

.price {
  margin-top: 40px;
  margin-bottom: 5px;
  font-size: 20px;
  color: rgb(199, 5, 5);
}

.attr {
  margin-bottom: 20px;
}
.attr a {
  font-size: 12px;
  display: block;
  line-height: 16px;
  word-break: break-all;
}

.command {
  font-size: 14px;
  color: rgb(175, 174, 174);
}

.command span {
  color: rgb(2, 2, 141);
}

.commit {
  margin-bottom: 15px;
}

.operate {
  display: flex;
  justify-content: space-between;
}

.operate a {
  border: 1px solid;
  /* display: block; */
  padding: 5px 10px;
  font-size: 14px;
}

.with-x i {
  cursor: pointer;
}

.active {
  background-color: red;
}
.active a,
span {
  color: #fff;
  line-height: 47px;
}
</style>
  
  