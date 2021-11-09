<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">App de tareas</a>
    </div>
  </nav>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">Crear tarea</div>
          <div class="card-body">
            <form id="task-form" @submit.prevent="saveTask() ">
              <div class="form-group">
                <input
                  type="text"
                  v-model="task.title"
                  id="title"
                  placeholder="Nombre"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <textarea
                  id="description"
                  v-model="task.description"
                  cols="30"
                  rows="10"
                  class="form-control"
                  placeholder="Descripción de la tarea"
                ></textarea>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <table class="table table-sm">
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Descripción</td>
              <td>Opciones</td>
            </tr>
          </thead>
          <tbody id="tasks">
            <tr v-for="(tarea, index) in tareas" :key="index">
              <td>{{ tarea.title }}</td>
              <td>{{ tarea.description }}</td>
              <td><button @click="deleteTask(tarea._id)" class="btn btn-danger"> Eliminar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import barra from "./components/Navbar.vue";
//import tabla from "./components/tablaTareas.vue";
//import carta from "./components/formTarea.vue";

import { Task } from "@/interfaces/Task";
import { addTask,deleteTask,getTask } from "@/api/TaskService";

export default defineComponent({
  name: "App",
  data(){
    return{
        task:{} as Task,
        tareas: [] as Task[]
    };
  },
  mounted(){
    this.getAll();
  },
  methods:{
    async saveTask(){
      const res = await addTask(this.task);
      console.log(res);
      this.getAll();
      this.task.title= "";
      this.task.description= "";
    },
    async getAll(){
      const res = await getTask();
      this.tareas = res.data
    },
    async deleteTask(id: string){
      const res = await deleteTask(id);
      console.log(res);
      this.getAll();
    }
  },
});
</script>

<style>
</style>
