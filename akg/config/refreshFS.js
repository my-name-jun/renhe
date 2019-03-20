/**
 * Created by gthowe on 17/3/20.
 */
/**
 * 基于iphone375宽度的基准做制作，把body的font-size按比例设置成约等于10px
 * 设置字体大小用单位em  1em=10px,1.4em=14px....以此类推
 * @type {string}
 */


if (document.body.clientWidth < 750) {
    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 40 + 'px';
} else if (document.body.clientWidth > 750 && document.body.clientWidth < 970) {
    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 70 + 'px';
    // document.getElementsByTagName("body")[0].style.width = "750px";
    document.getElementsByTagName("body")[0].style.margin = "0 auto";
} else {
    document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 120 + 'px';
    // document.getElementsByTagName("body")[0].style.width = "970px";
    document.getElementsByTagName("body")[0].style.margin = "0 auto";
}

$(window).resize(function () {
    if (document.body.clientWidth < 750) {
        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 40 + 'px';
    } else if (document.body.clientWidth > 750 && document.body.clientWidth < 970) {
        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 70 + 'px';
        // document.getElementsByTagName("body")[0].style.width = "750px";
        document.getElementsByTagName("body")[0].style.margin = "0 auto";
    } else {
        document.getElementsByTagName("body")[0].style.fontSize = document.body.clientWidth / 120 + 'px';
        // document.getElementsByTagName("body")[0].style.width = "970px";
        document.getElementsByTagName("body")[0].style.margin = "0 auto";
    }

})


