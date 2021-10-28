<template>
  <div ref="container">
    <!-- Messenger Wtyczka czatu Code -->
    <div id="fb-root"></div>

    <!-- Your Wtyczka czatu code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
    <entryTransition />
    <navigation />
    <div>
      <left-bar />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute('page_id', '243529612765166');
    chatbox.setAttribute('attribution', 'biz_inbox');

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v12.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  background: #21252a;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #18191d;
}
::-webkit-scrollbar-thumb {
  background: #21252a;
}
</style>
