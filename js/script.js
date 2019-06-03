




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

function create_graph(){
    
      access_token = get_access_token();
      if(access_token == null ){
          document.getElementById("loader").hidden = false ;
          document.getElementById("graph").hidden = true ;
          document.getElementById("btn").hidden = false ;
           }

 
          new Chart(document.getElementById("canvas"), {
               type: 'line',
               data: {
                 labels: ['filter1','filter2' , 'filter3','filter4'],
                 datasets: [{ 
                     data: [100,120,110,125],
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











