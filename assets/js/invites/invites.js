var table;

function _table(dt = 'booked') {
    window.localStorage.setItem('itable', dt);

    $('table').hide();
    $('#'+dt).show();
    table = $('#'+dt).DataTable({
        "pagingType": "full_numbers",
        "pageLength": 10,
        "language": {
            "lengthMenu": "<h1>Invitation For Ride</h1>",
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
    var $addTitleButton = $('<button id="right-sidebar" onclick="window.open(`./create-trip.html`,`_self`)" class="btn btn-primary ml-2 filter"><i class="fa fa-plus"></i></button>');
    var $bookTitleButton = $('<button id="ride-button" onclick="loadtable(`booked`)" data-id="booked" class="_tab btn btn-primary ml-2 opacity-0 booked">Booked</i></button>');
    var $cancelTitleButton = $('<button id="ride-button" onclick="loadtable(`cancel`)" data-id="cancel" class="_tab btn btn-primary ml-2 opacity-0 cancel">Cancel</i></button>');
    var $pendingTitleButton = $('<button id="trip-button" onclick="loadtable(`pending`)" data-id="pending" class="_tab btn btn-primary ml-2 opacity-0 pending">Pending</button>');

    // var $appliedfilters = $('<button id="trip-button" class="tableBtn trip">Trips</button>');
    // $dt.after($appliedfilters);


    $searchInput.before($bookTitleButton);
    $searchInput.before($cancelTitleButton);
    $searchInput.before($pendingTitleButton);
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
var which_table = window.localStorage.getItem('itable') || 'booked';
_table(which_table);

$(document).ready(async function() {
    window.localStorage.setItem('itable', 'booked')
    // Attach a click event to the 3-dot menu icon in the action column
    $('#booked tbody').on('click', '.three-dots', function (e) {
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
});

$('.demo').popr({
  'speed': 200,
  'mode': 'bottom'
});

// // Close the modal if the overlay is clicked
window.onclick = function (event) {
     if ($('.popr_container_bottom').length > 0) {
        $('.data-table').css('z-index', '-1'); 
    } else {
        $('.data-table').css('z-index', '');
    }

};

$('a.demo').click(function(event) {
    if ($('.popr_container_bottom').length > 0) {
        $('.data-table').css('z-index', '-1'); 
    } else {
        $('.data-table').css('z-index', ''); 
    }
});

function loadtable(tab = 'booked'){
     window.localStorage.setItem('itable', tab);
     location.reload();
}


function openModal() {
  document.getElementById('card-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('card-modal').style.display = 'none';
  document.body.style.overflow = 'auto';
}