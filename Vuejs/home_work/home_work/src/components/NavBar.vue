<template>
  <nav class="navbar navbar-expand-sm bg-success">
    <div class="pl-5 container-fluid  ">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link text-light" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="/contect">Contect</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavigationPage',
};
</script>

<style>
  ul{
    margin-left: 40px;
  }
</style>