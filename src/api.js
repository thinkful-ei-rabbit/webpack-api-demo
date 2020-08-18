 let api ={
    makeRequest:function(...args){
        return fetch(...args).then(function(response){
            return response.json();
        }).then(function(jsonData){
           return jsonData;
        });
    },
    addToList: function(...args){
        console.log(...args);
        return this.makeRequest(...args)
    },

    getListItems: function(...args){
        return this.makeRequest(args);
    }
 }

 export default api;

