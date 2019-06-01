
function get_access_token(){ 

     load_cookie = document.cookie;
     if(load_cookie.indexOf(':') == -1){
          load_cookie = null ;
     }
     if(load_cookie == null){
          url =  window.location.href ;
          if(url.includes('#')){
          split = url.split('#');
          more_split = split[1].split('=') ;
          access_token = more_split[1] ;   
          document.cookie = '{"at":${access_token} }';
          console.log(access_token);
          return access_token ;
     }else{
          get_token = JSON.parse(load_cookie);
          console.log("reached");
          console.log(get_token.at);
          return get_token.at;
          }  
     }
   
    
}
