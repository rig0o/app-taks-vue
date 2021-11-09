<template>
    <table class="table table-sm">
        <thead>
            <tr>
                <td>Nombre</td>
                <td>Descripción</td>
                <td>Opciones</td>
            </tr>
        </thead>
        <tbody id="tasks">
            <tr v-for="(tarea, index) in tareas" :key="index" >
                <td>{{tarea.title}}</td>
                <td>{{tarea.description}}</td>
                <td>Modifical - Eliminar</td>
            </tr>
        </tbody>
    </table>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { getTask } from "@/api/TaskService";
import { Task } from "@/interfaces/Task";

export default defineComponent({
    name : 'tabla',
    data(){
        return{
            tareas: [] as Task[]
        };
    },
    methods:{
        async getAll(){
            const res = await getTask();
            this.tareas = res.data
        },
    },
    mounted(){
        this.getAll();
    },
});
</script>
