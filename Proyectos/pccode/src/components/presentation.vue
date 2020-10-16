<template>
  <div>
    <v-card class="mt-10">
      <div class="d-flex flex-row align-center">
        <img src="@/assets/avatar.jpg"  />
       <p>
            <b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit.
            Dolores molestias consequatur ab tempore repellat, asperiores
            ducimus enim laudantium magni, et fuga quisquam alias molestiae unde
            inventore optio. Similique, accusamus ducimus.
          </p>
        
      </div>
     <v-card-actions>
         <v-spacer>

         </v-spacer>
<actions/>
     </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import actions from '@/components/actions.vue'
export default {
  name: "presentation",
  components:{actions},
  props: {

  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Piazzolla:ital,wght@1,200&display=swap");
img {
  
  width: 40vw;
  border-radius: 50%;
  margin: 5vw;
  border: solid rgb(151, 149, 149);
  box-shadow: 5px 5px 5px gray;
  transition: .8s;
}
img:hover {
  filter: opacity(0.8);
    box-shadow: 5px 5px 10px gray;
}
p {
    width: 60vw;
  font-family: 'Piazzolla', serif;
  letter-spacing: 1px;
  padding: 1vh;
  margin: 1vh;
}
</style>