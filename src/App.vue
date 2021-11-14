<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
      <router-view name="header"></router-view>
      <!-- aタグで切り替えを行おうとするとサーバーにデータを取ってこようとしてしまう ex)localhost:8080/usersにアクセスしようとしてしまう-->
      <!-- それではSPAの意味がないのでrouter-linkタグを使用すること。to="URL"を指定する -->
      <!-- router-linkタグを使用するとlocalhost:8080のままデータを取ってくることができる -->
      <!-- 開発ツールではaタグ表記になる -->

      <!-- active-class:アクティブな場合のみ与えれるクラスのこと -->
      <!-- アクティブとは：to=""で指定した値を含む場合は全てアクティブとされる。つまりto="/"の場合/fooでも/barでもactiveになる -->

      <!-- もし/の場合のみactive-classを適用させたい場合は、exact属性をつければ完全一致の場合のみactiveになる -->
      <router-link
        to="/"
        class="link"
        exact
        active-class="link--active"
      >Home</router-link>
      <router-link 
        to="/users"
        class="link"
        active-class="link--active"
        exact
      >Users</router-link>

      <!-- view-routerをApp.vueにて使えるようにするためにrouter-viewというコンポーネントを追加する -->
      <!-- router-viewは今回だとHome.vueかUsers.vueに置き換わっている -->
      <!-- 例えばrouter-viewがHome.vueに置き換わっている状態でHome.vueにrouter-viewコンポーネントを書いても動かない。 -->
      <router-view></router-view>
      <router-view name="footer"></router-view>

  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 30px;
}
</style>
