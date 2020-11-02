$(document).ready(function() { 
    $("#search-btn").click(function() {
        let search = $("#search-input").val();

        if(search === '' || search === null) {
            $('#answer').text('Ошибка! Ввведите название книги!');
            $("#answer").css('color', 'red');
        } else {
            $('#answer').text('Результаты поиска:');
            $("#answer").css( 'color', '#000');

            let url = '';
            let img = '';
            let title = '';
            let author = '';

            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response) {
                console.log(response);

                for(i = 0; i < response.items.length; i++) {
                    title = $('<h4 id="title-card"> Название: '+ response.items[i].volumeInfo.title + '</h4');
                    author = $('<h3 id="author-card"> Автор: ' + response.items[i].volumeInfo.authors + '</h3');
                    img = $('<img id="img-card"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imgbutton">Read More</button></a>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;

                    img.attr('src', url);

                    title.appendTo("#list-output");
                    author.appendTo("#list-output");
                    img.appendTo("#list-output");


                }
            });
        }
        return false;
    });
})