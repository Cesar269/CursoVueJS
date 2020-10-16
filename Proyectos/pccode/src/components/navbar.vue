<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home.vue' }"
          ><b-icon icon="house"></b-icon> Inicio</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
    export default{
        name:'navbar',
        props:{

        }
    }
</script>