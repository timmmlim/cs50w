function searchType(clicked_id){
    var button_id = clicked_id
    console.log(button_id)

    if (button_id == 'advanced_search'){
        location.href = "advanced.html"
    }

    else if (button_id == 'image_button'){
        document.getElementById('search_bar').action = "http://images.google.com/images";

        /* change img src */
        var img = document.getElementById('fake_logo');
        img.src = "notGoogleImg.jpg"
    }

    else{
        document.getElementById('search_bar').action = "https://google.com/search"; 

        /* change img src */
        var img = document.getElementById('fake_logo');
        img.src = "notGoogle.jpg"
    }


}   