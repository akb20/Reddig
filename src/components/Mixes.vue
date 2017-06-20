<template>
  <div class="subreddit-wrapper">
    <div class="media-item" v-for="post in posts">
      <p class="title">{{ post.data.title }}</p>
      <a class="link" target="_blank" :href="post.data.url">
        {{ post.data.domain }}
      </a>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  created() {
    this.getPosts()

    window.addEventListener('scroll', this.handleScroll)
  },

  data() {
    return {
      posts: [],
      postsLoading: false,
      nextPage: null
    }
  },

  methods: {
    getPosts(page) {
      this.postsLoading = true

      var url = 'https://www.reddit.com/r/mixes/top.json?limit=30&count=30'

      if (page != null) {
        url = 'https://www.reddit.com/r/mixes/top.json?limit=30&count=30&after=' + page
      }

      axios.get(url)
        .then(response => {
          this.posts = this.posts.concat(response.data.data.children)

          this.nextPage = response.data.data.after

          this.postsLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    },

    handleScroll() {
      if (document.body.scrollHeight - window.innerHeight - document.body.scrollTop <= 5) {
        if (this.nextPage != null) {
          this.getPosts(this.nextPage)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.subreddit-wrapper {
  width: 900px;
  margin: 20px auto;
}

.media-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #f6f6f6;
  .title {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 10px 0;
  }
  .link {
    font-size: .9rem;
    color: #E24B74;
  }
}
</style>