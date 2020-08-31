
function lw() {
	var res = {};
	var d = [];
	var des_desc = parseDom(getResCode(), 'head&&meta,3&&content').replace(getUrl() + "/", "");

	var des_pic = parseDom(getResCode(), 'body&&.myui-content__thumb&&img&&data-original');

	var tabs = parseDom(getResCode(), 'body&&.nav-tabs&&Html').match(/href=[\s\S]*?<\/a/g);

	var conts = parseDom(getResCode(), 'body&&Html').match(/class=\"myui-content__list[\s\S]*?<\/ul>/g);

	d.push({
		title: '共有' + conts.length + '条线路',
		desc: des_desc.split(':')[1],
		pic_url: des_pic,
		url: getUrl(),
		col_type: 'pic_1'
	});

	for (var i = 0; i < conts.length; i++) {
		var list = conts[i].match(/<a[\s\S]*?<\/a>/g);
		if (list != null) {
			d.push({
				title: tabs[i].split(">")[1].split("<")[0],
				col_type: 'text_1'
			});
			for (var j = 0; j < list.length; j++) {
				d.push({
					title: list[j].split('>')[1].split('<')[0],
					url: 'https://www.xinshipai.vip' + list[j].split('href="')[1].split('"')[0] + '@lazyRule=html&&.embed-responsive&&script&&Html.js:eval(input);decodeURIComponent(player_data.url)'
				});
			}
		}
	}
	res.data = d;
	setHomeResult(res);
