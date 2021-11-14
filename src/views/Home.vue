<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersページにいく</button>
  </div>
</template>

<script>

export default {
  // this.$router.push('行きたいページ')と書くと遷移できる.
  // 下のようにpath:"users"みたいにオブジェクト形式で書くことも可能
  methods: {
    toUsers() {
      //  this.$router.push('users')
      //  this.$router.push({path: "users"})
      this.$router.push({
        name:"users-id-profile",
        params: {id: 1},
      })
    }
  }
}
</script>
