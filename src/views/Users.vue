<template>
  <div>
    <h1>Users</h1>
    <!-- パラメータを変えただけだとライフサイクルが変化しないので注意 -->
    <!-- 対策としてはwatchを設定する方法がある -->
      <router-link to="/users/1">ユーザー1</router-link>
      <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <!-- router.jsにてusers/の後に指定したものを$route.param.〇〇という形で書くと表示できる -->
    <!-- <h1>User No. {{$route.params.id}}</h1> -->

    <!-- $route.param.〇〇だと再利用性が低いのでpropsを使用する -->
    <!-- 具体的にはrouter.jsのrouter-linkを設定している箇所の第三引数にprops: trueをつける -->
    <h1>User No. {{ id }}</h1>

    <router-link :to="'/users/' + (Number(id) -1) + '/profile'">前のユーザー</router-link>
    <!-- to属性を動的に指定する(v-bindを使用する) -->
    <!-- 次のユーザーへのボタンを作成したい時 -->
    <!-- idの計算がstring型になってしまいうまくいかないので下記のようにキャストするとうまくいく -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile' ">次のユーザー</router-link>
    <!-- 上と同じ機能を名前付きルートを使用すると下記のようになる。今回はidが何かわからないためparams:{}の形でidを指定すると動く -->
    <!-- query:{}で?で繋げるURLを作成できる -->
    <router-link :to="{ name: 'users-id-profile', params: {id: (Number(id) + 1) }, query:{lang: 'ja'} }">次のユーザー</router-link>
    <router-view></router-view>
    <router-view name="header"></router-view>
  </div>
</template>

<script>
export default {
  // propsをimport
  props:["id"],
//   watch: {
//     $route(to, from) {
//       console.log(to)
//       console.log(from)
//     }
//   },
}
</script>
