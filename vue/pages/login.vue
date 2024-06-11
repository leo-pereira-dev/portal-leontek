<template>
  <v-col cols="12" sm="8" md="8" lg="6">
    <v-card class="justify-center" style="border: 1px solid grey; border-radius: 10px;">
      <div>
        <div class="logo d-flex justify-center">
          <VuetifyLogo></VuetifyLogo>
        </div>
        <h1 class="justify-center text-center" style="margin: -50px 0 10px 0">
          Leontek
        </h1>

        <h4 class="justify-center text-center">Login</h4>
        <v-sheet class="mx-auto" max-width="300">
          <v-form
            ref="form"
            @submit.prevent="submit"
            style="padding-bottom: 20px !important"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              :error-messages="emailError"
              label="Email"
              @blur="validateEmail"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              :rules="passwordRules"
              label="Senha"
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-btn
              :loading="loading"
              class="mt-2 my-4"
              color="primary"
              type="submit"
              block
              >Login</v-btn
            >
            <v-btn
              class="mt-2 my-4"
              color="#AD1C12"
              block
              @click="$goToPage('/registrar')"
              >Registrar</v-btn
            >
          </v-form>
        </v-sheet>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  head() {
    return {
      title: 'Login'
    }
  },
  data() {
    return {
      loading: false,
      email: '',
      password: '',
      emailError: '',
      timeout: null,
      showPassword: false,
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 6) || 'Password must be at least 6 characters',
      ],
    }
  },

  methods: {
    async submit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) return

      this.loading = true

      // Simular uma chamada de API
      setTimeout(() => {
        this.loading = false
        alert('Form submitted successfully!')
      }, 2000)
    },

    async validateEmail() {
      const email = this.email
      this.emailError = ''

      if (!email) {
        this.emailError = 'Email is required'
        return
      }

      if (!/.+@.+\..+/.test(email)) {
        this.emailError = 'Email must be valid'
        return
      }

      // Validação assíncrona simulada
      this.emailError = 'Checking...'
      clearTimeout(this.timeout)

      this.timeout = setTimeout(async () => {
        if (email === 'johnleider') {
          this.emailError = 'User name already taken. Please try another one.'
        } else {
          this.emailError = ''
        }
      }, 1000)
    },
  },
}
</script>

<style>
.logo {
  margin-bottom: 20px;
}

.toastify-progress-bar {
  width: 100%;
  height: 4px;
  background-color: #99d99b;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: progressBarAnimation linear;
  animation-fill-mode: forwards;
}

@keyframes progressBarAnimation {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
/* Estilos para campos de formulário com preenchimento automático */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #1e1e1e inset !important; /* Altere a cor de fundo conforme necessário */
  color: white !important; /* Defina a cor do texto como branco */
}

/* Estilos para o texto dentro dos campos de formulário */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-text-fill-color: white !important; /* Defina a cor do texto como branco */
}
</style>
