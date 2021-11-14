// Vue-routerを使用するために以下の二つをimport
import Vue from 'vue';
import Router from 'vue-router';
// 表示したいコンポーネントをimport
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderUsers from './views/HeaderUsers.vue';
import HeaderHome from './views/HeaderHome.vue';
import FooterHome from './views/FooterHome.vue';
import FooterUsers from './views/FooterUsers.vue';


// Vue.use()でプラグインを適用することとなる
// プラグイン：グローバルな機能を提供するもの。Vue全体に影響を与えるもの
Vue.use(Router);

// routeをマッピングしてあげる{path'', component: }
// これをmain.jsで使えるようにするためにexport defaultをつける
// Vue-routerで表示したいコンポーネントをかく
export default new Router({
  // mode: "history"と追加するとURLの#を消すことができる。
  mode:"history",
  routes:[
    {path:'/',
    // 複数のrouter-viewを指定したい場合には、componentsと定義して中身をオブジェクト形式で決める。
    components: {
      // defaultの場合つまり/にアクセスした際のrouter-viewに名前が何も書いてない場合はHome。つまり./views/Home.vueが表示される
      default: Home,
      // router-viewのnameがheaderと定義されている場合かつ/にアクセスした際はHeaderHomeつまり./views/HeaderUsers.vueが表示される
      header: HeaderHome,
      footer: FooterHome,
    }},
    // /users/〇〇のようなルートを作成したい場合は「/ :適当」と設定する
    // 第三引数：props:trueを設定すると再利用性の高いrouter-linkができる

    // /users/id/posts /users/id/profileのようなURLの指定をしたいときは第四引数にchildren: []と取ってあげてその中に入れ子構造で書くとできる
    // 子供の方は頭に/があるとエラーになるので注意。一方で親は頭に/がないとエラーになる。
    {path:'/users/:id',
    components: {
      // 名前付きビュー
      // defaultつまりrouter-viewタグのnameがついていない場合。かつusers/:idを含むURLにアクセスした際はUsersつまり./views/Users.vueを表示する
      default: Users,
      // outer-viewタグのnameがheaderでありかつusers/:idを含むURLにアクセスした際は./views/HeaderHome.vueを表示する
      header: HeaderUsers,
      footer: FooterUsers,
    },
    // 名前付きビューの場合propsもオブジェクト形式にする必要がある
    props: {
      default: true,
      header: false,
      footer: false,
    },
    children: [
      {path: "posts", component: UsersPosts},
      // name : '名前'と書くことで名前付きルートを作成でき、この名前を使ってルートを作成できる
      {path: "profile", component: UsersProfile, name: "users-id-profile"},
    ]},
    {
      // リダレクト処理の書き方
      // *で上に当てはまらないものは全て/にいく。これは一般的かなと。
      path: "*",
      // path: "test",
      redirect: {path: "/"}
    }
  ],
});
