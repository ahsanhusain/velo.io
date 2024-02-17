$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});

let count = 100; //define you data lenght here data.length
if (count <= 1) {
    $('.blog-paginate')[0].style.setProperty('display', 'none', 'important');
}
const urlParams = new URLSearchParams(window.location.search);
const currentPage = parseInt(urlParams.get('page')) || 1; // Parse the page number as an integer
console.log({count});
function indexes(selector, page, range){
    if (page > 1){
        $(selector).append('<li class="page-item"><a class="page-link btn text-decoration-none" style="border-radius: 10px;border: 1px solid;" href="../common/rating.html?page=' + (page-1) + '">Previous</a></li>');
    }

    for (let i = 1; i <= count; i++){
        if (i == 1 && page - range > 1){
            $(selector).append('<li class="page-item"><a class="page-link btn text-decoration-none" href="../common/rating.html?page=1">1</a></li>'); // Always show the first page

            if (page - range > 2){
                $(selector).append('<li class="page-item disabled"><a class="page-link btn text-decoration-none" href="#">...</a></li>');
            }
        }

        if (i >= page - range && i <= page + range){
            if (i != page){
                $(selector).append('<li class="page-item"><a class="page-link btn text-decoration-none" href="../common/rating.html?page=' + i + '">' + i + '</a></li>');
            } else {
                $(selector).append('<li style="border-radius: 10px;" class="page-item bg-primary"><a class="page-link text-white btn text-decoration-none" href="../common/rating.html?page=' + i + '">' + i + '</a></li>');
            }
        }

        if (i == count && page + range < count){
            if (page + range < count - 1){
                $(selector).append('<li class="page-item disabled"><a class="page-link btn text-decoration-none" href="#">...</a></li>');
            }
            $(selector).append('<li class="page-item"><a class="page-link btn text-decoration-none" href="../common/rating.html?page=' + count + '">' + count + '</a></li>');
        }
    }

    if (page < count){
        $(selector).append('<li class="page-item"><a class="page-link btn text-decoration-none" style="border-radius: 10px;border: 1px solid;" href="../common/rating.html?page=' + (page+1) + '">Next</a></li>');
    }
}

indexes('.pag1', currentPage, 2); 