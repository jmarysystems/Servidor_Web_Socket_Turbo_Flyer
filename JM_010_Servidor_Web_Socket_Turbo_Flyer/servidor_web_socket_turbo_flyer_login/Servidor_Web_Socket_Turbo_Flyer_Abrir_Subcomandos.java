
package servidor_web_socket_turbo_flyer_login;

import java.net.Socket;
import javax.swing.JTextArea;
import servidor_web_socket_turbo_flyer.Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo;

/**
 *
 * @author Ana
 */
public class Servidor_Web_Socket_Turbo_Flyer_Abrir_Subcomandos { 
    
    private final Socket socket;
    JTextArea jTextArea_01;
    
    String caminhoArquivo = null;
    String protocolo = null;
    
    String login = null;
    String senha = null;
    String loginefetuado = null;
    String subcomandorecebido = null;
            
    public Servidor_Web_Socket_Turbo_Flyer_Abrir_Subcomandos( Socket socket, JTextArea jTextArea_012, String caminhoArquivo2, String protocolo2, String login2, String senha2, String loginefetuado2, String subcomandorecebido2) {
        this.jTextArea_01 = jTextArea_012;
        this.socket = socket;
        this.caminhoArquivo = caminhoArquivo2;
        this.protocolo = protocolo2;
        this.login = login2;
        this.senha = senha2;
        this.loginefetuado = loginefetuado2;
        this.subcomandorecebido = subcomandorecebido2;
        
        loginefetuado();
    } 
    
    // verificar se o login foi efetuado
    private void loginefetuado(){ 
        try{
            String url_dir = System.getProperty("user.dir") + "/00_Externo";
                        
            if( loginefetuado.equalsIgnoreCase("sim") ){
                
                //if(verificar_se_usuario_tem_permissao){
                
                    //verificar_subcomandos();
                    caminhoArquivo = url_dir + "/" + subcomandorecebido.toLowerCase() + ".html";
                    
                    jTextArea_01.append( "************Subcomando verificado: " + this.login + " - " + this.senha + " - " + this.subcomandorecebido + "\n" );
                                
                    Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
                //}
            }
            else{
                
                caminhoArquivo = url_dir + "/login.html";
                
                Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
            }
        } catch( Exception e ){}    
    }
    
    private void verificar_subcomandos(){  
        try{                
            String url_dir = System.getProperty("user.dir") + "/00_Externo";
            
            if( subcomandorecebido.equalsIgnoreCase("cotacao_por_categoria") ){
                                        
                caminhoArquivo = url_dir + "/cotacao_por_categoria.html";
            
                jTextArea_01.append( "************Subcomando verificado: " + this.login + " - " + this.senha + " - " + this.subcomandorecebido + "\n" );
                                
                Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
            }
            else if( subcomandorecebido.equalsIgnoreCase("INDEX") ){
                
                caminhoArquivo = url_dir + "/index.html";
                
                jTextArea_01.append( "************Subcomando verificado: " + this.login + " - " + this.senha + " - " + this.subcomandorecebido + "\n" );
                
                Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
            }
            else if( subcomandorecebido.equalsIgnoreCase("produtos_de_f_l_v_cotacao") ){
                
                caminhoArquivo = url_dir + "/produtos_de_f_l_v_cotacao.html";
                
                jTextArea_01.append( "************Subcomando verificado: " + this.login + " - " + this.senha + " - " + this.subcomandorecebido + "\n" );
                
                Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
            }
            else{
                
                caminhoArquivo = url_dir + "/404_subcomando.html";
                
                jTextArea_01.append( "************404 Subcomando: " + this.login + " - " + this.senha + " - " + this.subcomandorecebido + "\n" );
                                
                Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
            }
        } catch( Exception e ){}  
    } 
                                                
    /******************Executar Teste*************************************  
     * @param args************************
    public static void main(String[] args) {            
          
        ControleThread_Print t1 = new ControleThread_Print(13); 
        
        t1.setName("ControleThread_Print");   
        
        t1.start();  
    }
    /******************Executar Teste*************************************/
    
}