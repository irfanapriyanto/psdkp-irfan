import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataList',{
    state: () => ({
        dataList:[],
        id:0,
    }),
    actions: {
        addData(item){
            console.log(item);
            this.dataList.push({
                item,
                id:this.id++,
            })
        }
    }
})