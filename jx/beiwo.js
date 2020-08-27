
function lw() {
    var res = {};
    var d = [];
    var html = getResCode();
    var tabs = parseDom(html, 'body&&Html').match(/"stui-pannel__head[\s\S]*?<\/h3/g);
    var conts = parseDom(html, 'body&&Html').match(/\"stui-content__playlist[\s\S]*?<\/ul>/g);

    d.push({
        title: '共有' + conts.length + '条线路',
        desc: parseDomForHtml(html, '.desc--span&&Text'),
        pic_url: parseDom(html, '.lazyload&&data-original'),
        url: getUrl(),
        col_type: 'pic_1'
    });

    for (var i = 0; i < conts.length; i++) {
        var list = conts[i].match(/<a[\s\S]*?<\/a>/g);
        if (list != null) {
            d.push({
                title: parseDomForHtml(tabs[i], 'h3&&Text'),
                col_type: 'text_1'
            });
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: list[j].split('>')[1].split('<')[0],
                    url: parseDom(list[j], 'a&&href') + `@lazyRule=html&&.stui-player__video&&script&&Html.js:eval(input);var url = player_data.url;try{url.indexOf("m3u8")>-1?url:fetch('https://www.bei5dy.com/'+fetch('https://www.bei5dy.com/jx.php?id='+url,{headers:{'User-Agent':'Mozilla/5.0','Referer':'https://www.bei5dy.com'},method:'GET'}).match(/var u="(.*?)"/)[1],{headers:{'User-Agent':'Mozilla/5.0','Referer':'https://www.bei5dy.com'},method:'GET'}).match(/video src="(.*?)"/)[1]}catch(e){}`,
                    col_type: list.length > 2 ? 'text_3' : 'text_2'
                });
            }
        }
    }
    res.data = d;
    setHomeResult(res);
}
