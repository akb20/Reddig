<template>
  <div class="site-nav">
    <div class="wrapper">
      <p id="logo">
        <router-link to="/" exact>Reddig</router-link>
      </p>
      <nav>
        <router-link to="/indieheads" exact class="nav-link">Indieheads</router-link>
        <router-link to="/listen" exact class="nav-link">Listen to this</router-link>
        <router-link to="/mixes" exact class="nav-link">Mixes</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.site-nav {
  background-color: #f6f6f6;
  .wrapper {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #logo a {
    text-decoration: none;
    color: #333;
    background-color: #f6f6f6;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .nav-link {
    color: #333;
    text-decoration: none;
    margin-left: 1rem;
    text-transform: uppercase;
  }
  .router-link-active {
    color: white;
    background-color: #E24B74;
    padding: 5px 10px;
    border-radius: 4px;
  }
}
</style>