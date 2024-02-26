var table;

function _table(dt = 'ride') {
    window.localStorage.setItem('htable', dt);

    $('table').hide();
    $('#'+dt).show();
    table = $('#'+dt).DataTable({
        "pagingType": "full_numbers",
        "pageLength": 10,
        "language": {
            "lengthMenu": "<h1>History</h1>",
            "search": "",
            "info": "",
            "paginate": {
                "previous": "",
                "next": ""
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },
            "emptyTable": "No data available in table"
        },
        "scrollX": true,
        "columnDefs": [
            {
                "targets": "_all",
                "className": "dt-nowrap"
            }
        ]
    });

    var $searchInput = $('div.dataTables_filter input');
    var $dt = $('div.dataTables_filter');
    $searchInput.attr("placeholder", "Search");
    var $addTitleButton = $('<button id="right-sidebar" class="btn btn-primary ml-1 filter"><i class="fa fa-filter"></i></button>');
    var $rideTitleButton = $('<button id="ride-button" onclick="loadtable(`ride`)" data-id="ride" class="opacity-0 btn btn-primary mr-2 ride">Rides</i></button>');
    var $tripTitleButton = $('<button id="trip-button" onclick="loadtable(`trip`)" data-id="trip" class="opacity-0 btn btn-primary trip">Trips</button>');
    // var $appliedfilters = $('<button id="trip-button" class="tableBtn trip">Trips</button>');
    // $dt.after($appliedfilters);


    $searchInput.before($rideTitleButton);
    $searchInput.before($tripTitleButton);
    $searchInput.after($addTitleButton);

    // Add the search icon to the input field
    $searchInput.css('background-image', 'url("../../assets/img/site/search.png")');
    $searchInput.css('background-position', '98% 50%');
    $searchInput.css('background-repeat', 'no-repeat');
    $searchInput.css('padding', '0.375rem 0.75rem');
    $searchInput.css('line-height', '1.8');

    $('.dataTable tr th').css('text-align', 'left');
    $('.dataTable th').css('color', '#A8A8BD');
    $('.dataTable th').css('font-weight', 'normal');
    $('.dataTable td').css('padding', '10px');
    $('.dataTable td').css('color', '#4B4B4D');

    table.cells().nodes().to$().addClass('custom-bg-color');
    function updatePagination() {
        var paginationControls = $('.dataTables_paginate').clone();
        $('.dataTables_paginate').css('display', 'none');
        // $('#customBottom').empty().append(paginationControls);
    }

    updatePagination();

    table.off('draw.dt');

    table.on('draw.dt', function () {
        updatePagination();
    });

    function attachCustomPaginationHandlers() {
        $('#custom-previous').on('click', function() {
            table.page('previous').draw('page');
        });

        $('#custom-next').on('click', function() {
            table.page('next').draw('page');
        });
    }
    
    attachCustomPaginationHandlers();
    $('button[data-id="'+dt+'"]').removeClass('opacity-0');
}
var which_table = window.localStorage.getItem('htable') || 'ride';
_table(which_table);

$(document).ready(function() {
    
    window.localStorage.setItem('htable', 'ride')
    
    // Attach a click event to the 3-dot menu icon in the action column
    $('#example tbody').on('click', '.three-dots', function (e) {
      e.stopPropagation(); // Prevent row selection when clicking the menu icon

      // Get the corresponding DataTable row
      var row = table.row($(this).closest('tr'));

      // Find the menu within the row
      var menu = row.node().querySelector('.menu-action');

      // Hide all other menus and toggle the visibility of the menu
      $('.menu-action').not(menu).hide();
      $(menu).toggle();
    });

    // Close the menu when clicking outside of it
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.menu-action').length) {
        $('.menu-action').hide();
      }
    });

    // jQuery Version
    $("#sidebar").simplerSidebar({
      toggler: "#right-sidebar",
      quitter: ".close",
      align:"right",
      open:false,
      freezePage:true,
      width: 500,
      mask: {
        css: {
          overflow: 'auto'
        },
      },
    });

    var randomCode = generateRandomCode(18); // Generate 8-character random code
    $('.custom-search-input').val(randomCode);
});

$( "#filterTags" ).submit(async function( event ) {
    event.preventDefault();
    var $searchInput = $('div.dataTables_length');
    let filter = '';
    let data = [$('#f_when').val(), $('#f_latest_by').val()];
    data.forEach(function(item) {
       if (!item) return true;
       console.log({item});
       filter =+ `<li>${item}</li>`;
        // $('.filterTags').html(`<ul><li>${item}</li></ul>`);
    });
});

$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});

// modals
// Quick Demo JS
function openModal() {
  document.getElementById('card-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('card-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close the modal if the overlay is clicked
window.onclick = function (event) {
    if (event.target === document.getElementById('card-modal')) {
        closeModal();
    }
     if ($('.popr_container_bottom').length > 0) {
        $('.data-table').css('z-index', '-1'); 
    } else {
        console.log("Element does not exist.");
        $('.data-table').css('z-index', '');
    }

};

function generateRandomCode(length) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        code += chars[randomIndex];
    }
    return code;
}

$('.copy').click(function(){
    var codeToCopy = $('.custom-search-input').val();
    navigator.clipboard.writeText(codeToCopy)
        .then(function() {
            // alert('Code copied to clipboard!');
        })
        .catch(function(err) {
            console.error('Failed to copy: ', err);
        });
});

$('a.demo').click(function(event) {
    if ($('.popr_container_bottom').length > 0) {
        $('.data-table').css('z-index', '-1'); 
    } else {
        $('.data-table').css('z-index', ''); 
    }
});

function loadtable(tab = 'ride'){
     window.localStorage.setItem('htable', tab);
     location.reload();
}