<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-btn class="mx-3">texto</v-btn>
                <v-btn class="primary mx-2">texto</v-btn>
                <v-btn dark color="blue mx-2">texto</v-btn>
                <v-btn color="secondary" text>Sin fondo</v-btn>
                <v-btn class="warning mx-2" small>texto</v-btn>
                <v-btn class="warning mx-1" :disabled="true">texto</v-btn>
                <v-btn class="mx-1" fab>
                <v-icon>forum</v-icon>
                </v-btn>
                <v-btn class="mx-1" fab large>
                <v-icon>forum</v-icon>
                </v-btn>
                 <v-btn class="mx-1" fab small>
                <v-icon>forum</v-icon>
                </v-btn>
                 <v-btn class="mx-1" large outlined>
                     forum
                <v-icon class="ml-1">forum</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>



    </v-container>
</template>

<script>
export default {
    
}
</script>