<template>
  <v-app>
    <v-main>
      <v-app-bar color="deep-purple accent-4" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Catalogo de pokemon</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn rounded small color="accent" @click="dialog = true">Registrarse</v-btn>
        <v-btn rounded small color="primary" @click="dialog2 = true" class="ml-1">Iniciar sesión</v-btn>
      </v-app-bar>

      <!-- Navegador de direccion a cada vista -->
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list>
          <v-list-item :to="{name:'Home'}" exact>
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{name:'Presentacion'}">
            <v-list-item-icon>
              <v-icon>home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Presentación</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- Finde navegador de direccion a cada vista -->
      <!-- Modal del registrate -->
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="550px">
          <v-card>
            <v-card-title class="justify-content-center">
              <span class="headline">Registrarse</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Nombre de usuario*"
                        :rules="[rules.required]"
                        v-model="nuevoUsuario.nombre"
                        type="text"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Primer apellido*"
                        :rules="[rules.required]"
                        v-model="nuevoUsuario.pApellido"
                        type="text"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Segundo apellido"
                        v-model="nuevoUsuario.sApellido"
                        type="text"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Correo electronico*"
                        :rules="[rules.required,rules.email]"
                        type="text"
                        required
                        v-model="nuevoUsuario.email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        :append-icon="show2 ? 'visibility' : 'visibility_off'"
                        :rules="[rules.required, rules.min]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Contraseña*"
                        class="input-group--focused"
                        @click:append="show2 = !show2"
                        v-model="contrasena"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="11" class="align-self-center">
                      <label>Esta de acuerdo con las Politicas de Privacidad y los Terminos y condiciones</label>
                    </v-col>

                    <v-col cols="1">
                      <v-checkbox
                        :rules="[v => !!v || '']"
                        v-model="nuevoUsuario.politica"
                        required
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-alert
                        v-if="nuevoUsuario.politica == false"
                        text
                        type="error"
                        elevation="1"
                      >Necesita aceptar las politica para continuar</v-alert>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <small>*Datos necesarios</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
              <v-btn color="blue darken-1" text @click="validate">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- Fin del modal de registrate -->
      <!-- Inicio de modal "Iniciar sesion" -->
      <v-row>
        <v-dialog v-model="dialog2" persistent max-width="550px">
          <v-card>
            <v-card-title class="justify-content-center">
              <span class="headline">Iniciar sesión</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form2" v-model="valid2" lazy-validation>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Correo electronico*"
                        :rules="[rules.required,rules.email]"
                        type="text"
                        required
                        v-model="ingreso.email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        :append-icon="show3 ? 'visibility' : 'visibility_off'"
                        :rules="[rules.required, rules.min]"
                        :type="show3 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Contraseña*"
                        class="input-group--focused"
                        @click:append="show3 = !show3"
                        v-model="contrasena"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="1">
                      <v-checkbox v-model="ingreso.mantener"></v-checkbox>
                    </v-col>
                    <v-col cols="10" class="align-self-center">
                      Desea mantener iniciada su sesión
                      </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog2 = false">Cerrar</v-btn>
              <v-btn color="blue darken-1" text @click="iniciar">Iniciar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- Fin de modal "Iniciar sesion" -->

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from "@/views/Home";
import Presentacion from "@/views/Presentacion";
import { db } from "../src/main";
export default {
  name: "App",

  components: {},

  data() {
    return {
      //seccion del modal "Registrate"

      valid: false,

      show2: false,
      contrasena: "",

      rules: {
        required: (value) => !!value || "Campo requerido.",
        min: (v) => v.length >= 8 || "Minimo 8 caracteres",
        email: (v) => /.+@.+/.test(v) || "El correo debe de ser valido",
      },
      nuevoUsuario: [
        {
          nombre: "",
          pApellido: "",
          sApellido: "",
          email: "",
          politica: false,
          contrasena: "",
          correoRepetido: null,
        },
      ],
      dialog: false,
      //fin de modal "Registrate"
      //inicio modal "iniciar sesión"
      dialog2: false,
      valid2: false,
      show3: false,
      ingreso: [
        {
          email: "",
          contrasena: "",
          mantener: false,
        },
      ],
      //fin modal "iniciar sesión"
      //
      drawer: false,
    };
  },
  methods: {
    async validate() {
      if (this.nuevoUsuario.politica == null) {
        this.nuevoUsuario.politica = false;
      }
      this.nuevoUsuario.correoRepetido = false;

      try {
        let valido = this.$refs.form.validate();
        this.nuevoUsuario.contrasena = this.contrasena;

        if (valido) {
          const correoR = await db.collection("usuarios").get();
          correoR.forEach((res) => {
            if (res.id == this.nuevoUsuario.email) {
              this.nuevoUsuario.correoRepetido = true;
            }
          });
          if (this.nuevoUsuario.correoRepetido == false) {
            this.guardarnuevoUsuario();
          }
          if (this.nuevoUsuario.correoRepetido == true) {
            alert("el correo que ingreso ya existe, ingrese uno nuevo");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async guardarnuevoUsuario() {
      this.dialog = false;
      const resDB = await db
        .collection("usuarios")
        .doc(this.nuevoUsuario.email)
        .set({
          nombre: this.nuevoUsuario.nombre,
          apellidoPaterno: this.nuevoUsuario.pApellido,
          apellidoMaterno: this.nuevoUsuario.sApellido,
          email: this.nuevoUsuario.email,
          contrasena: this.nuevoUsuario.contrasena,
        });
      this.nuevoUsuario.nombre = "";
      this.nuevoUsuario.pApellido = "";
      this.nuevoUsuario.sApellido = "";
      this.nuevoUsuario.email = "";
      this.nuevoUsuario.politica = null;
      this.contrasena = "";
      this.nuevoUsuario.contrasena = "";
      this.nuevoUsuario.correoRepetido = null;
      this.$refs.form.resetValidation();
    },
    async iniciar() {
      if (this.$refs.form2.validate()) {
        
      }
    },
  },
  computed: {},
};
</script>
