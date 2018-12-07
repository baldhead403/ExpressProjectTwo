$(document).ready(function () {
    
    
    
    $("#submit").click(function () {
        let searchT= $("#searchTitle").val()
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchT}&type=video&key=${key}` 
        console.log(url)
        $.getJSON(url , function(data){
             player = data.items
            for (let i = 0; i < player.length; i++) {
               $("#playBack" + i).attr('src',"https://www.youtube.com/embed/" + player[i].id.videoId + "?autoplay=1").show()
                
            }  
        })

});
    $("#searchTitle").keyup(function (e) {
        let key =e.which;
        if (key==13) {
            
        }
    })
    });
    