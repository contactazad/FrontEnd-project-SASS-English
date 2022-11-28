$(document).ready(function () {
    var ownVideos = $(".video-por");
    $.each(ownVideos, function (i, video) {                
        var frameContent = $(video).contents().find('body').html();
        if (frameContent) {
            $(video).contents().find('body').html(frameContent.replace("autoplay", ""));
        }
    });

    $('#search').keyup(function(){
        var searchfield = $('#search').val();
        
        var myExp = new RegExp(searchfield , "i");
        $.getJSON('datajson.json',function(data){
            var output = '<ul class="searchresult">';
            $.each(data,function(key,val){
                if(val.name.search(myExp) != -1){
                    output += '<li>'
                    output += '<h2>' + val.name + '</h2>'
                    output += '<p>' + val.bio + '</p>'
                    output += '<img src ="assets/images/portfolio/search/' + val.img + '" width=100   alt =""  title="" >'
                    output += '</li>'
                }
                else{
                    output = '<span></span>'
                }
            })
            output += '</ul>'
            $('#result').html(output)
        })
    })



});



