<template>
  <div>    
       <a class="d-flex flex-row ml-4"  href="https://github.com/Cesar269" target="_blank">
        <img class="icon" src="@/assets/github-brands.svg" />
        <p>Cesar269 - github</p>
      </a>
  </div>
</template>

<script>
export default {
  name: "actions",
  props: {},
};
</script>
<style>
img.icon {
  width: 28px;
  border: initial;
  transition: none;
  margin: 0px;
  padding: 0px;
  box-shadow: initial;
  
}
img.icon:hover {
  box-shadow: none;
}
p {
  text-decoration: none;
  color: black;
  width: 21vw;
}

</style>