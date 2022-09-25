<template>
  <div class="container">
    <img src="" alt="logo">
    <div class="row">
        <div class="col-8">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="d-flex">
                    <router-link :to="{}" class="nav-link">Recent</router-link>
                    <router-link :to="{}" class="nav-link" style="margin-left: 15px;">Popular</router-link>
                </li>
            </ul>
        </div>
        <div class="col-4">
            <form class="d-flex">
                <a-input placeholder="Search..." class="me-2" />
                <i class="fa fa-search" style="margin-top: 7px; cursor: pointer;"></i>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>