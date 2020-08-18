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


        api.addToList(thinkfulApi, { method: "POST", headers: { "Content-Type": 'application/json' }, body: JSON.stringify(params) }).then(function (data) {
            console.log("Added", data);
            api.getListItems(`${thinkfulApi}?${params}`).then(function (data) {
                render(data);
            });
        });


    })




    function render(jsonData) {
        let htmlTemplate = [];
        console.log(jsonData);
        for (let i = 0; i < jsonData.length; i++) {
            htmlTemplate.push(`
                <h3>${jsonData[i].name}</h3>
            `)
        }
        $(".results").html(htmlTemplate);

    }

}

$(main);