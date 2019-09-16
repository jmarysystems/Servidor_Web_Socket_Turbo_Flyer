jQuery(document).ready(function(){
    
    $("#menuseta").addClass("menusetabackground_2");
    
    $("#menuseta").on("click",function(e){
        
        mostrarOcultarProp('menusetamostrarocultar_prop');
        
        if ( $("#menuseta").hasClass("menusetabackground_1") === true ){
            
            $("#menuseta").removeClass("menusetabackground_1");
            $("#menuseta").addClass("menusetabackground_2");
        }
        else if ( $("#menuseta").hasClass("menusetabackground_2") === true ){
            
            $("#menuseta").removeClass("menusetabackground_2");
            $("#menuseta").addClass("menusetabackground_1");
        }
    });
    
    function mostrarOcultarProp(classe){

        $("#topo_geral_prop").toggleClass(classe);
    }

});
    
jQuery(window).resize(function() {

    var browser_width2 = jQuery(window).width();

});