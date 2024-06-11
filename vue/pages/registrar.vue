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

        <h4 class="justify-center text-center">Cadastro</h4>
        <v-sheet class="mx-auto" max-width="300">
          <v-form
            ref="form"
            @submit.prevent="submit"
            style="padding-bottom: 20px !important"
          >
            <v-text-field
              v-model="nome"
              :rules="nomeRules"
              :error-messages="nomeInvalid ? [erroNomeMsg] : []"
              label="Nome"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              :error-messages="emailInvalid ? [erroEmailMsg] : []"
              label="Email"
              @blur="validateEmail"
            ></v-text-field>
            <v-text-field
              v-model="telefone"
              :rules="telefoneRules"
              label="Telefone"
              v-mask="'(##) # ####-####'"
              placeholder="(__) _ ____-____"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Senha"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-btn
              :loading="loading"
              class="mt-2 my-4"
              color="primary"
              @click="register"
              block
            >Registrar</v-btn>
            <v-btn
              :loading="loading"
              class="mt-2 my-4"
              color="#AD1C12"
              block
              @click="$goToPage('/login')"
            >Voltar</v-btn>
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
      title: 'Registrar'
    }
  },
  data() {
    return {
      loading: false,
      nomeInvalid: false,
      erroNomeMsg: '',
      emailInvalid: false,
      erroEmailMsg: '',
      nome: '',
      email: '',
      password: '',
      telefone: '',
      emailError: '',
      timeout: null,
      nomeRules: [
        (v) => !!v || 'Campo obrigatório.',
        (v) => (v && v.length >= 4) || 'Insira um nome válido',
      ],
      emailRules: [
        (v) => !!v || 'Campo obrigatório.',
        (v) => /.+@.+\..+/.test(v) || 'Insira um email válido.',
        (v) => !/\s/.test(v) || 'Email não deve conter espaços em branco.'
      ],
      telefoneRules: [
        (v) => !!v || 'Campo obrigatório.',
        (v) =>
          (v && v.length >= 6) || 'Senha deve ter pelo menos 6 caracteres.',
      ],
      passwordRules: [
        (v) => !!v || 'Campo obrigatório.',
        (v) =>
          (v && v.length >= 6) || 'Senha deve ter pelo menos 6 caracteres.',
        (v) => !/\s/.test(v) || 'Senha não deve conter espaços em branco.'
      ],
      showPassword: false, // Variável para controlar se a senha está visível ou oculta
    }
  },

  methods: {
    // Component
    async register() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) return
      const formData = {
        name: this.nome,
        email: this.email,
        telefone: this.telefone,
        password: this.password,
      }

      try {
        this.loading = true
        await this.$registerUser(formData)
        this.loading = false
        this.$showToast('Registro realizado com sucesso', this.$toastify, '')
        this.$router.push('/login')
      } catch (error) {
        this.loading = false

        // Verificar o tipo de erro retornado pela API
        if (error.message.includes('Email')) {
          this.emailInvalid = true
          this.erroEmailMsg = error.message
        } else if (error.message.includes('nome')) {
          this.nomeInvalid = true
          this.erroNomeMsg = error.message
        } else {
          this.$showToast('Erro desconhecido.', this.$toastify, 'Error')
        }
      }
    },

    async submit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) return

      this.loading = true

      await register()

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
