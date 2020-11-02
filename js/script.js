$(document).ready(function() {
    let item, title, author, publisher, bookLink, bookImg;
    let outputList = document.getElementById("list-output");
    let bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    let placeHdr = '<img src="http://via.placeholder.com/250">';
    let searchData;

    $("#search-btn").click(function() {
        outputList.innerHTML = "";
        searchData = $("#search-input").val();

        if(searchData === "" || searchData === null) {
            displayError();
        } else {
            $.ajax({
                url: bookUrl + searchData,
                dataType: "json",
                success: function(bookName) {
                    console.log(bookName)
                    if(Response.totalItem === 0) {
                        alert("Нет результатов! Попробуйте снова");
                    } else {
                        // $("title").css('margin-top: 10px');
                        $(".book-list").css('display: block');
                    }
                }
            
            })
        }
        $("search-input").val("")
    });

    function displayResults(nameBook) {
        for(let i = 0; i < nameBook.items.length; i+=2) {
            item1 = response.items[i];
            title1 = item1.volumeInfo.title;
            author1 = item1.volumeInfo.authors;
            publisher1 = item1.volumeInfo.publisher;
            bookLink1 = item1.volumeInfo.previewLink;
            bookIsbn = item1.volumeInfo.industryIdentifiers[1].identifier
            bookImg1 = (item1.volumeInfo.imageLinks) ? item1.volumeInfo.imageLinks.thumbnail : placeHldr;

            item2 = response.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookLink2 = item2.volumeInfo.previewLink;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHldr ;

            outputList.innerHTML += '<div class="row mt-4">' +
                                formatOutput(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn) +
                                formatOutput(bookImg2, title2, author2, publisher2, bookLink2, bookIsbn2) +
                                '</div>';

            console.log(outputList);
        }
    }
})