$('#search').keyup(function(){
    var searchfield = $('#search').val();
    
    var myExp = new RegExp(searchfield , "i");
    $.getJSON('datajson.json',function(data){
        var output = '<ul class="searchresult">';
        $.each(data,function(ker,val){
            if(val.name.search(myExp) != -1){
                output += '<li>'
                output += '<h4>' + val.name + '</h4>'
                output += '<a href ="#" >' + val.bio + '</a>'
                output += '<img src ="assets/images/portfolio/search/' + val.img + '" width=100   alt =""  title="" >'
                output += '</li>'
            }
            
            // if(val.name.search(myExp) != 1){
            //     output += '<p></P>'
            
            // }
    
        })
        
        output += '</ul>'
        $('#result').html(output)

        
        
        
    })
})