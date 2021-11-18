// Zc176 Js & Coding By Kylin
$("#paylink").attr("href", "ciSPofjrtN9JT1FhIb.html");
$("#dlqlink").attr("href", "jw7C1x5UDU8zWXjlxE.html");
var myFullpage = new fullpage('#fullpage', {
    anchors: ['1', '2', '3', '4', '5'],
    menu: '#myMenu'
});

const tippyInstances = tippy('.li1', {
    content (reference) {
        const id = reference.getAttribute('zb-id');
        return '<img src="img2/zb_/' + id + '.png" alt="">';
    },
});
const singleton = tippy.createSingleton(tippyInstances, {
    animation: 'scale',
    allowHTML: true,
    followCursor: true,
    placement: 'right',
});

var music = document.getElementById("audio");
music.volume = 0.7;
music.muted = false;
music.play();

$("#music-btn").bind("click", function () {
    if (music.paused) {
        $("#music-btn i").removeClass("layui-icon-play");
        $("#music-btn i").addClass("layui-icon-pause");
        music.play();
    }
    else {
        $("#music-btn i").removeClass("layui-icon-pause");
        $("#music-btn i").addClass("layui-icon-play");
        music.pause();
    }
});

$(".more-game-btn").click(function () {
    $(".more-game").toggle();
    var text = $(this).text().trim();
    if (text == "更多游戏") {
        $(this).text("点击关闭");
        $(this).addClass("close")
    }
    else {
        $(this).text("更多游戏");
        $(this).removeClass("close")
    }
});

if (window.location.hostname == "www.zcmhj.com") {
    $(".more-game-btn").show();
}
else {
    setTimeout(function () {
        $(".more-game-btn").show();
    }, 30000)
}


layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#maps'
        , width: '450px'
        , height: '240px'
        //,anim: 'updown' //切换动画方式
    });

    carousel.render({
        elem: '#maps-2'
        , width: '450px'
        , height: '240px'
        //,anim: 'updown' //切换动画方式
    });
});
