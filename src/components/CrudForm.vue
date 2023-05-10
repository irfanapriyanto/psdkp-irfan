
<template>
<!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
-->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Form Input</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#">
                <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                    <input v-model="name" id="name" name="name" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                </div>

                <div>
                <div class="flex items-center justify-between">
                    <label for="posisi" class="block text-sm font-medium leading-6 text-gray-900">Posisi</label>
                </div>
                <div class="mt-2">
                    <input v-model="posisi" id="posisi" name="posisi" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                </div>

                <div>
                <button @click="saveData()"  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";
// import {useDataStore} from '../stores/psdkp'
export default {
    setup() {
        const name = ref("");
        const posisi = ref("");

        // const store = useDataStore()

        function saveData(){
            let item = {
                name: name,
                posisi : posisi,
            }
            console.log(item);
            // store.addData(item)
        }

        return {name,posisi,saveData};
    },
}
</script>
  