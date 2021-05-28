$(document).ready(function () {
    $(".main-image").css({
        "top": "-10000px",
    });
});


$(".item").on('click', (e) => {
    $("#pause-btn").css("display", "none")
    url = $(e.target.parentElement).css("background-image")
    indexStart = url.indexOf('("')
    indexEnd = url.indexOf('")')
    url = url.substring(indexStart + 2, indexEnd)
    $("#display-image").attr("src", url);
    $(".main-image").animate({
        top: "0",
        left: "0"
    }, 600);
    setTimeout(() => $(".item").css("display", "none"), 400)

})

$(".close-main").on('click', () => {
    $(".item").css("display", "block")
    $("#audio").trigger("play")
    $(".video").trigger("pause")
    $(".video").css("display", "none")
    $("#display-image").css("display", "block")
    number = Math.floor(Math.random() * 4) + 1;
    switch (number) {
        case 1:
            $(".main-image").animate({
                top: "-1080px"
            }, 600);
            break
        case 2:
            $(".main-image").animate({
                left: "-1920px"
            }, 600);
            break
        case 3:
            $(".main-image").animate({
                left: "1920px"
            }, 600);
            break
        case 4:
            $(".main-image").animate({
                top: "1080px"
            }, 600);
            break
    }
})

$("#closeup4").on('click', () => {
    $("#pause-btn").css("display", "block")
    $("#audio").trigger("pause")
    $(".video").css("display", "block")
    $(".video").trigger("play")
    $(".control-buttons").css("display", "none")
    $("#display-image").css("display", "none")
})

$("#video-sick").on('click', () => {
    $("#pause-btn").css("display", "block")
    $("#audio").trigger("pause")
    $(".video").css("display", "block")
    $(".video").trigger("play")
    $(".control-buttons").css("display", "none")
    $("#display-image").css("display", "none")
})


$("#video1").on('click', () => {
    $("#display-image").css("display", "none")
    $("#segundo-video").css("display", "none")
    
    $("#audio").trigger("pause")
    
    $("#pause-btn").css("display", "block")
    
    $("#primer-video").css("display", "block")
    $("#primer-video").trigger("play")
    $(".control-buttons").css("display", "none")
})

$("#video2").on('click', () => {
    $("#display-image").css("display", "none")
    $("#primer-video").css("display", "none")
    
    $("#audio").trigger("pause")
    
    $("#pause-btn").css("display", "block")
    
    $("#segundo-video").css("display", "block")
    $("#segundo-video").trigger("play")
    $(".control-buttons").css("display", "none")
})

$(".video").hover(() => {
    let video = $(".video").get(0);
    $(".control-buttons").css("display", "block")
}, () => {
    if (!$(".control-buttons").is(":hover")) {
        $(".control-buttons").css("display", "none")
    }
    $(".control-buttons").hover(() => {}, () => {
        $(".control-buttons").css("display", "none")
    })
})

$(".control-buttons").on('click', () => {
    let video = $(".video").get(0);

    if (video.paused) {
        $(".video").trigger('play')
        $("#play-btn").css("display", "none")
        $("#pause-btn").css("display", "block")
    } else {
        $(".video").trigger('pause')
        $("#play-btn").css("display", "block")
        $("#pause-btn").css("display", "none")
    }

})