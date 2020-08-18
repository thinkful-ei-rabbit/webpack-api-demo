import $ from 'jquery';
import '../src/style.css';
import api from './api';



const apiKey = "AIzaSyBUVMGkiKxS_USo_EsFLpQW_i5DG-pN0Zs";
const thinkfulApi = "https://thinkful-list-api.herokuapp.com/terra/items";
function main() {
    $(".add").click(function () {
        console.log("Test", api);
        let item = $("#item").val();
        let params = {
            name: item
        };        

        let queryString = $.param(params);
        console.log(queryString);

       
        api.addToList(thinkfulApi,{method:"POST", headers:{"Content-Type":'application/json'}, body:JSON.stringify(params)}).then(function (data) {
            console.log("Added",data);
        });

        api.getListItems(apiRequest).then(function (data) {
            console.log(data);
        });
    })




    function render(jsonData) {
        let htmlTemplate = [];
        console.log(jsonData);
        for (let i = 0; i < jsonData.items.length; i++) {
            let video = jsonData.items[i].snippet;
            htmlTemplate.push(`
                <h3><a href="https://www.youtube.com/watch?v=${jsonData.items[i].id.videoId}">${video.title}</a></h3>
                <p>${video.description}</p>
                <img src="${video.thumbnails.default.url}" alt="">
            `)
        }
        $(".results").html(htmlTemplate);

    }

}

$(main);