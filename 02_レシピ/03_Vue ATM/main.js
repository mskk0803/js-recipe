new Vue({
el:"#app",
data:{
    nyuryokukingaku:0,
    zandaka:0,
},
methods:{
    nyukin:function(){
        this.zandaka += Number(this.nyuryokukingaku);
    }
}
})