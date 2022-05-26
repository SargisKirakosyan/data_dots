function mySelect() {
    $('.count-select').prop('selectedIndex', 0);
    showDebt();
};

$(".toast").hide();
var data = {
    "years": [
        {
            "year": "2014",
            "debt_data": [
                {
                    "name": "Հայաստան",
                    "external": "74",
                    "government": "44",
                    "household": "17"
                },
                {
                    "name": "Վրաստան",
                    "external": "85",
                    "government": "36",
                    "household": "26"
                },
                {
                    "name": "Ռուսաստան",
                    "external": "29",
                    "government": "16",
                    "household": "16"
                }
                ]
        },
        {
            "year": "2015",
            "debt_data": [
                {
                    "name": "Հայաստան",
                    "external": "85",
                    "government": "49",
                    "household": "16"
                },
                {
                    "name": "Վրաստան",
                    "external": "110",
                    "government": "42",
                    "household": "27"
                },
                {
                    "name": "Ռուսաստան",
                    "external": "38",
                    "government": "17",
                    "household": "14"
                }
            ]
        },
        {
            "year": "2016",
            "debt_data": [
                {
                    "name": "Հայաստան",
                    "external": "94",
                    "government": "57",
                    "household": "16"
                },
                {
                    "name": "Վրաստան",
                    "external": "111",
                    "government": "45",
                    "household": "32"
                },
                {
                    "name": "Ռուսաստան",
                    "external": "40",
                    "government": "16",
                    "household": "14"
                }
            ]
        },
        {
            "year": "2017",
            "debt_data": [
                {
                    "name": "Հայաստան",
                    "external": "92",
                    "government": "59",
                    "household": "16"
                },
                {
                    "name": "Վրաստան",
                    "external": "115",
                    "government": "45",
                    "household": "33"
                },
                {
                    "name": "Ռուսաստան",
                    "external": "33",
                    "government": "16",
                    "household": "14"
                }
            ]
        },
        {
            "year": "2018",
            "debt_data": [
                {
                    "name": "Հայաստան",
                    "external": "88",
                    "government": "56",
                    "household": "19"
                },
                {
                    "name": "Վրաստան",
                    "external": "110",
                    "government": "45",
                    "household": "36"
                },
                {
                    "name": "Ռուսաստան",
                    "external": "28",
                    "government": "15",
                    "household": "16"
                }
            ]
        }
    ]
}

//$.ajax({
//    url: "./data.json",
//    type: 'GET',
//    dataType: 'json',
//    success: function (data) {
//        var select = $('.count-select');
//        for (key in data.years) {
//            var option = $('<option>');
//            option.val(key);
//            option.html(data.years[key].year);
//            select.append(option);
//        }
//        $(".countries").html(select);
//    },
//    error: function (data) {
//        console.log('Error!!!');
//    }
//});
var select = $('.count-select');
for (key in data.years) {
    var option = $('<option>');
    option.val(key);
    option.html(data.years[key].year);
    select.append(option);
}
$(".countries").html(select);





$(".arm").hover(
    function () {
        $(".toast-header strong").html(data.years[0].debt_data[0].name);
        $(".toast").show()
    },
    function () {
        $(".toast").hide()
    }
);
$(".geo").hover(
    function () {
        $(".toast-header strong").html(data.years[0].debt_data[1].name);
        $(".toast").show()
    },
    function () {
        $(".toast").hide()
    }
);
$(".rus").hover(
    function () {
        $(".toast-header strong").html(data.years[0].debt_data[2].name);
        $(".toast").show()
    },
    function () {
        $(".toast").hide()
    }
);

$(document).on('mousemove', function (e) {
    $(".toast").css({
        left: e.pageX + 50,
        top: e.pageY - 50
    });
});

$(".countries").on('change', function () {
    showDebt();
});

//function showDebt() {
//    $(".arm").empty();
//    $(".geo").empty();
//    $(".rus").empty();
//    $.ajax({
//        url: "./data.json",
//        method: 'GET',
//        dataType: 'json',
//        success: function (data) {
//            var option_val = $("select option:selected").val();
//            for (var i = 0; i < data.years[option_val].debt_data[0].external; i++) {
//                $(".arm").append("<div class='ball green'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[0].government; i++) {
//                $(".arm").append("<div class='ball blue'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[0].household; i++) {
//                $(".arm").append("<div class='ball red'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[1].external; i++) {
//                $(".geo").append("<div class='ball green'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[1].government; i++) {
//                $(".geo").append("<div class='ball blue'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[1].household; i++) {
//                $(".geo").append("<div class='ball red'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[2].external; i++) {
//                $(".rus").append("<div class='ball green'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[2].government; i++) {
//                $(".rus").append("<div class='ball blue'></div>");
//            }
//            for (var i = 0; i < data.years[option_val].debt_data[2].household; i++) {
//                $(".rus").append("<div class='ball red'></div>");
//            }
//            $(".arm .green").hover(
//                function () {
//                    $(".toast-body").html("Համախառն արտաքին պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[0].external + "&nbsp;%");
//                });
//            $(".arm .blue").hover(
//                function () {
//                    $(".toast-body").html("Պետական պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[0].government + "&nbsp;%");
//                });
//            $(".arm .red").hover(
//                function () {
//                    $(".toast-body").html("Տնային տնտեսությունների պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[0].household + "&nbsp;%");
//                }
//            );
//            $(".geo .green").hover(
//                function () {
//                    $(".toast-body").html("Համախառն արտաքին պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[1].external + "&nbsp;%");
//                });
//            $(".geo .blue").hover(
//                function () {
//                    $(".toast-body").html("Պետական պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[1].government + "&nbsp;%");
//                });
//            $(".geo .red").hover(
//                function () {
//                    $(".toast-body").html("Տնային տնտեսությունների պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[1].household + "&nbsp;%");
//                }
//            );
//            $(".rus .green").hover(
//                function () {
//                    $(".toast-body").html("Համախառն արտաքին պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[2].external + "&nbsp;%");
//                });
//            $(".rus .blue").hover(
//                function () {
//                    $(".toast-body").html("Պետական պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[2].government + "&nbsp;%");
//                });
//            $(".rus .red").hover(
//                function () {
//                    $(".toast-body").html("Տնային տնտեսությունների պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[2].household + "&nbsp;%");
//                }
//            );
//        },
//        error: function (data) {
//            console.log('Error!!!');
//        }
//    });
//}
function showDebt() {
    $(".arm").empty();
    $(".geo").empty();
    $(".rus").empty();
    var option_val = $("select option:selected").val();
    for (var i = 0; i < data.years[option_val].debt_data[0].external; i++) {
        $(".arm").append("<div class='ball green'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[0].government; i++) {
        $(".arm").append("<div class='ball blue'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[0].household; i++) {
        $(".arm").append("<div class='ball red'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[1].external; i++) {
        $(".geo").append("<div class='ball green'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[1].government; i++) {
        $(".geo").append("<div class='ball blue'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[1].household; i++) {
        $(".geo").append("<div class='ball red'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[2].external; i++) {
        $(".rus").append("<div class='ball green'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[2].government; i++) {
        $(".rus").append("<div class='ball blue'></div>");
    }
    for (var i = 0; i < data.years[option_val].debt_data[2].household; i++) {
        $(".rus").append("<div class='ball red'></div>");
    }
    $(".arm .green").hover(
        function () {
            $(".toast-body").html("Համախառն արտաքին պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[0].external + "&nbsp;%");
        });
    $(".arm .blue").hover(
        function () {
            $(".toast-body").html("Պետական պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[0].government + "&nbsp;%");
        });
    $(".arm .red").hover(
        function () {
            $(".toast-body").html("Տնային տնտեսությունների պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[0].household + "&nbsp;%");
        }
    );
    $(".geo .green").hover(
        function () {
            $(".toast-body").html("Համախառն արտաքին պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[1].external + "&nbsp;%");
        });
    $(".geo .blue").hover(
        function () {
            $(".toast-body").html("Պետական պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[1].government + "&nbsp;%");
        });
    $(".geo .red").hover(
        function () {
            $(".toast-body").html("Տնային տնտեսությունների պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[1].household + "&nbsp;%");
        }
    );
    $(".rus .green").hover(
        function () {
            $(".toast-body").html("Համախառն արտաքին պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[2].external + "&nbsp;%");
        });
    $(".rus .blue").hover(
        function () {
            $(".toast-body").html("Պետական պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[2].government + "&nbsp;%");
        });
    $(".rus .red").hover(
        function () {
            $(".toast-body").html("Տնային տնտեսությունների պարտք/ՀՆԱ&nbsp;" + data.years[option_val].debt_data[2].household + "&nbsp;%");
        }
    );
}