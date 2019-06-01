function get_access_token(){
   
    url =  window.location.href ;
    if(url.includes('#')){
        split = url.split('#');
        more_split = split[1].split('=') ;
        access_token = more_split[1] ;   
        console.log(access_token) ;
   }else{
        console.log('Not Here') ;
   }
    
}