function get_access_token(){ 

     load_cookie = document.cookie;
     if(load_cookie.indexOf(':') == -1){
          url =  window.location.href ;
          if(url.includes('#')){
          split = url.split('#');
          more_split = split[1].split('=') ;
          access_token = more_split[1] ;
          cookie_json = {'at' : access_token };   
          document.cookie = JSON.stringify(cookie_json);
          console.log(access_token);
          return access_token ;
      }else{
           return null ;           
      }
     }
     else if(load_cookie.indexOf(':') != -1){
          get_token = JSON.parse(load_cookie);
          console.log("reached");
          console.log(get_token.at);
          return get_token.at;
          }
     else{
          return null ;
          }  
     
}

function graph(dataset,filters){
  new Chart(document.getElementById("canvas"), {
    type: 'line',
    data: {
      labels: filters,
      datasets: [{ 
          data: dataset,
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
       responsive: true,
      title: {

        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  function if_exists(ele,ar){
     exists = false ;
     for(items in ar){
       if(ele == items){
         exists = true;
         break ;
       }

     } 
     return exists ;
  }
    
    function create_rand_color(length,ar){
         rand_color = getRandomColor() ;
      if(length > 1){   
         if(if_exists(rand_color,ar) == false ){
            colors.push(rand_color) ;
            create_rand_color(length-1 , ar) ;
         }else{
           create_rand_color(length,ar) ;
         }
      }
      return ar ;
    }




function create_graph(){
    
      access_token = get_access_token();
      if(access_token == null ){
          document.getElementById("loader").hidden = false ;
          document.getElementById("graph").hidden = true ;
          document.getElementById("btn").hidden = false ;
           }else{
           
         
            var request = new XMLHttpRequest();
            request.open('GET',"https://api.instagram.com/v1/users/self/media/recent/?access_token="+access_token,true) ;
            request.onload = function() {
            var data = JSON.parse(this.response)
    
            if (request.status >= 200 && request.status < 400) {
              // callback(data.data[0].values[0].value);    
              console.log('data') ;  
            }
             
            else {
             console.log('error') ;
              }
            }
    
            request.send()
       
    




           }

          
      
      
          


      }











