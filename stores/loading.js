import { defineStore } from "pinia";

export const useLoadingStore = defineStore('loading',{
    state:()=>({
        progress:0,
        loading:false,
    }),
    actions:{
        updateProgress(value){
            this.progress = Math.min(value, 100);
            if(this.progress >= 100){
                this.isComplete = true;
            }
        }
    }
})