var results = '';
$('.col-md-1').each(function (item) {
    var $me = $(this);
    var name = $me.find('span').text().replace('×1','').replace('×0','');
    var git = $me.find('textarea').val();
    if(git)
        results += (name+' '+git+'\n');
})
console.log(results);
