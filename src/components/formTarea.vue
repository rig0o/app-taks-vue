<template>
    <div class="card">
        <div class="card-header">Crear tarea</div>
        <div class="card-body">
            <form id="task-form" @submit.prevent="saveTask()">
                <div class="form-group">
                    <input type="text" v-model="task.title" id="title" placeholder="Nombre" class="form-control">
                </div>
                <div class="form-group">
                    <textarea id="description" v-model="task.description" cols="30" rows="10"
                    class="form-control" placeholder="Descripción de la tarea"
                    ></textarea>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from "@/interfaces/Task";
import { addTask } from "@/api/TaskService";

export default defineComponent({
    data(){
        return{
            task:{} as Task,
        };
    },
    methods:{
        async saveTask(){
            const res = await addTask(this.task);
            console.log(res);
        }
    }
});
</script>
