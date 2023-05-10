<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">List Item</h2>
    </div>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
            <template v-for="item in items" v-bind:key="item.name">
                <div class="text-xl font-medium text-black">{{ item.name }}</div>
                <p class="text-gray-500">{{ item.role }}</p>
            </template>
        </div>
    </div>
</template>
<script setup>
    const items = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
    },
    ]
</script>