<template>
  <main>
    <img
      alt="Mood Tracker logo"
      class="logo"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />
    <p>
      This is a pet project for getting started with
      <a target="_blank" referrerpolicy="no-referrer" href="https://vuejs.org/"
        >Vue</a
      >, made by
      <a
        target="_blank"
        referrerpolicy="no-referrer"
        href="https://mariamorales.dev/"
        >María Morales</a
      >.
    </p>
    <p>
      The
      <a
        target="_blank"
        referrerpolicy="no-referrer"
        href="https://github.com/twitter/twemoji/blob/master/assets/svg/1f916.svg"
        >emoji graphics</a
      >
      are from the open source project
      <a
        target="_blank"
        referrerpolicy="no-referrer"
        href="https://twemoji.twitter.com/"
        >Twemoji</a
      >. The graphics are copyright 2022 Twitter, Inc and other contributors.
      The graphics are licensed under
      <a
        target="_blank"
        referrerpolicy="no-referrer"
        href="https://creativecommons.org/licenses/by/4.0/"
        >CC-BY 4.0</a
      >.
    </p>
  </main>
</template>

<style scoped>
main {
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--small);
  margin: 0 auto;
}

img {
  margin-bottom: 2em;
}

p {
  text-align: center;
  margin-bottom: 1em;
  line-height: 1.5em;
}

a {
  color: #f4900c;
}
</style>
