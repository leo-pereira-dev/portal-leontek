<template>
  <v-col cols="12" sm="8" md="8" lg="12">
    <v-card
      class="justify-center"
      style="border: 1px solid grey; border-radius: 10px"
    >
      <v-container>
        <v-data-table
          :headers="headers"
          :items="filteredDesserts"
          class="elevation-1"
          :items-per-page="5"
          :search="search"
        >
          <template v-slot:top>
            <v-toolbar-title class="text-center show-mobile hidden-normal">Tarefas</v-toolbar-title>

            <v-toolbar flat>
              <v-toolbar-title class="hidden-mobile">Tarefas</v-toolbar-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Pesquisar"
                single-line
                hide-details
                class="mx-4"
              ></v-text-field>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="newTask" class="new-task-btn">
                <v-icon left class="ico-btn">mdi-plus</v-icon>
                <span class="new-task-text">Nova Tarefa</span>
              </v-btn>
            </v-toolbar>
          </template>
          <template v-slot:item="{ item }">
            <tr>
              <td>{{ truncateText(item.id, isMobile ? 2 : 20) }}</td>
              <td class="hidden-mobile">{{ item.dt_creation }}</td>
              <td>{{ truncateText(item.name, isMobile ? 9 : 20) }}</td>
              <td class="hidden-mobile">{{ item.status }}</td>
              <td>{{ truncateText(item.description, isMobile ? 10 : 20) }}</td>
              <td>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="editItem(item)"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Editar</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="deleteItem(item)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                  <span>Excluir</span>
                </v-tooltip>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      isMobile: false,
      headers: [
        { text: '#', align: 'start', sortable: false, value: 'id' },
        {
          text: 'Data de Criação',
          value: 'dt_creation',
          class: 'hidden-mobile',
        },
        { text: 'Nome', value: 'name' },
        { text: 'Status', value: 'status', class: 'hidden-mobile' },
        { text: 'Descrição', value: 'description', class: 'hidden-mobile' },
        { text: 'Ação', value: 'action' },
      ],
      desserts: [
        { id: "01", dt_creation: '05/12/2021', name: 'Tarefa 01', status: 'Ativo', description: 'Descrição 1' },
        { id: "02", dt_creation: '06/12/2021', name: 'Tarefa 02', status: 'Inativo', description: 'Descrição 2' },
        { id: "03", dt_creation: '07/12/2021', name: 'Tarefa 03', status: 'Ativo', description: 'Descrição 3' },
        { id: "04", dt_creation: '08/12/2021', name: 'Tarefa 04', status: 'Inativo', description: 'Descrição 4' },
        { id: "05", dt_creation: '09/12/2021', name: 'Tarefa 05', status: 'Ativo', description: 'Descrição 5' },
        { id: "06", dt_creation: '10/12/2021', name: 'Tarefa 06', status: 'Inativo', description: 'Descrição 6' },
        { id: "07", dt_creation: '11/12/2021', name: 'Tarefa 07', status: 'Ativo', description: 'Descrição 7' },
        { id: "08", dt_creation: '12/12/2021', name: 'Tarefa 08', status: 'Inativo', description: 'Descrição 8' },
        { id: "09", dt_creation: '13/12/2021', name: 'Tarefa 09', status: 'Ativo', description: 'Descrição 9' },
        { id: 10, dt_creation: '14/12/2021', name: 'Tarefa 10', status: 'Inativo', description: 'Descrição 10' },
        { id: 11, dt_creation: '15/12/2021', name: 'Tarefa 11', status: 'Ativo', description: 'Descrição 11' },
        { id: 12, dt_creation: '16/12/2021', name: 'Tarefa 12', status: 'Inativo', description: 'Descrição 12' },
        { id: 13, dt_creation: '17/12/2021', name: 'Tarefa 13', status: 'Ativo', description: 'Descrição 13' },
        { id: 14, dt_creation: '18/12/2021', name: 'Tarefa 14', status: 'Inativo', description: 'Descrição 14' },
        { id: 15, dt_creation: '19/12/2021', name: 'Tarefa 15', status: 'Ativo', description: 'Descrição 15' },
        { id: 16, dt_creation: '20/12/2021', name: 'Tarefa 16', status: 'Inativo', description: 'Descrição 16' },
        { id: 17, dt_creation: '21/12/2021', name: 'Tarefa 17', status: 'Ativo', description: 'Descrição 17' },
        { id: 18, dt_creation: '22/12/2021', name: 'Tarefa 18', status: 'Inativo', description: 'Descrição 18' },
        { id: 19, dt_creation: '23/12/2021', name: 'Tarefa 19', status: 'Ativo', description: 'Descrição 19' },
        { id: 20, dt_creation: '24/12/2021', name: 'Tarefa 20', status: 'Inativo', description: 'Descrição 20' },
      ],
    }
  },
  computed: {
    filteredDesserts() {
      if (!this.search) {
        return this.desserts
      }
      const searchLower = this.search.toLowerCase()
      return this.desserts.filter((dessert) => {
        return Object.values(dessert).some((value) =>
          String(value).toLowerCase().includes(searchLower)
        )
      })
    },
  },
  mounted() {
    this.updateIsMobile()
    window.addEventListener('resize', this.updateIsMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIsMobile)
  },
  methods: {
    updateIsMobile() {
      this.isMobile = this.$vuetify.breakpoint.width < 600
      console.log(this.isMobile)
    },
    truncateText(text, length) {
      text = text.toString() // Garantir que text seja uma string
      if (text.length <= length) {
        return text
      }
      return text.substring(0, length) + '...'
    },
    editItem(item) {
      // Lógica para editar item
    },
    deleteItem(item) {
      // Lógica para excluir item
    },
    newTask() {
      // Lógica para adicionar nova tarefa
    },
  },
}
</script>

<style>
@media (min-width: 600px) {
  .hidden-normal {
    display: none;
  }
}
@media (max-width: 600px) {
  .hidden-mobile {
    display: none;
  }
  .show-mobile {
    display: block;
  }
  .new-task-text {
    display: none;
  }
  .ico-btn {
    margin: 0 !important;
  }
}
</style>
