$(document).ready(function() {
        
    
}); 

function envia_form_login(){   
    try{
        var usr  = document.getElementById( "form_login_login" ).value;           
        var pass = document.getElementById( "form_login_senha" ).value;
    
        if( usr === "" || pass === "" ) {
            
            alert( "Informe o nome de Usuário e a Senha para logar!\n" + usr + " - " + pass  );
        }
        else{
            
            var urlxjm  = "COMANDO/LOGIN" + "/" + usr + "/" + pass;  
            
            $.ajax({
                type: "POST",
                url:  urlxjm,
                data: { paginasolicitada: "admin/topo/topo_index.jsp", cmd: "login", login: usr, senha: pass },
                        
                error: function(result){ 
                    alert( "Erro inesperado na requisição da página!"  ); 
                    $("#tudo").html(result);
                },
                
                //success: function(result){ document.getElementById( "central" ).innerHTML = result; }
                
                success: function(result){ 
                    $("#tudo").html(result); 
                    setarlogin( usr, pass, urlxjm )
                }
                
                //success: function(result){ document.getElementById( "tudo" ).innerHTML = result; } -- window.location.href = "";
                //timeout: ajaxTimeOut,
                //statusCode: { 404: function() { alert( "page not found" ); } }
            });
        }
        
    }catch(e){ alert( "Informe o nome de Usuário e a Senha 2!\n" + e  ); }  
}

function setarlogin(usr, pass, urlatual){   
    try{
        
        document.getElementById( "loginjm" ).value = usr;
        document.getElementById( "senhajm" ).value = pass;
        document.getElementById( "urlatual" ).value = urlatual;
        document.getElementById( "loginefetuado" ).value = "sim";
        
    }catch(e){ alert( "Informe o nome de Usuário e a Senha 2!\n" + e  ); }  
}

function enviar_subcomando_js(subcomando){   
    var loginjm  = null;           
    var senhajm = null;   
    var loginefetuado = null;   
        
    try{
        loginjm  = document.getElementById( "loginjm" ).value;           
        senhajm = document.getElementById( "senhajm" ).value;
        loginefetuado = document.getElementById( "loginefetuado" ).value;
            
        var urlxjm  = "COMANDO/" + subcomando +"/" + loginjm + "/" + senhajm + "/" + loginefetuado;  
           
        $.ajax({
            type: "POST",
            url:  urlxjm,
            data: { paginasolicitada: "admin/topo/topo_index.jsp", cmd: "COMANDO", login: loginjm, senha: senhajm },
                        
            error: function(result){ 
                alert( "Erro inesperado na requisição da página!"  ); 
                $("#tudo").html(result);
            },

            success: function(result){ 
                $("#tudo").html(result); 
            }
        });
        
    }catch(e){ alert( "Informe o nome de Usuário e a Senha 2!\n" + "/" + loginjm + "/" + senhajm + "/" + loginefetuado  ); }  
}

