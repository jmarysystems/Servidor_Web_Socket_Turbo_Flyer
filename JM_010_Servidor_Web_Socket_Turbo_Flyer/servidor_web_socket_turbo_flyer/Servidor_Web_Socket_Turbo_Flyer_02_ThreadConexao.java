/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package servidor_web_socket_turbo_flyer;

import java.io.File;
import java.io.IOException;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JTextArea;

/**
 *
 * @author Ana
 */
public class Servidor_Web_Socket_Turbo_Flyer_02_ThreadConexao extends Thread { 
    
    private final Socket socket;
    private boolean conectado;
    JTextArea jTextArea_01;
            
    public Servidor_Web_Socket_Turbo_Flyer_02_ThreadConexao( Socket socket, JTextArea jTextArea_012 ) {
        jTextArea_01 = jTextArea_012;
        this.socket = socket;
    } 
                
    @Override
    public void run(){  
        synchronized ( this ) {
            try{            
                conectado = true;
                //imprime na tela o IP do cliente 
                //System.out.println( "\n\n\n" ); 
                //System.out.println( socket.getInetAddress() );       
                jTextArea_01.append( "\n\n\n" + "============================================================================" );
                jTextArea_01.append( "\n" + "Cliente Conectado - IP: " + socket.getInetAddress().toString() + "\n" );
            } catch (Exception ex) {}
            
            requisicao();
        }  
    }  
    
    Servidor_Web_Socket_Turbo_Flyer_03_RequisicaoHTTP requisicao;
    private void requisicao(){    synchronized ( this ){ try{ 
        
        requisicao = new Servidor_Web_Socket_Turbo_Flyer_03_RequisicaoHTTP( socket.getInputStream(), jTextArea_01 );
                        
        try{ inicio_while(); } catch (Exception ex) {}
        
    } catch( Exception e ){} } }
    
    private void inicio_while(){    synchronized ( this ){ 
                       
        //if (socket.isConnected()) {
        //while(conectado){
            try {
                
                //se a conexao esta marcada para se mantar viva entao seta keepalive e o timeout
                if (requisicao.isManterViva()) {
                    socket.setKeepAlive(true);
                    socket.setSoTimeout((int) requisicao.getTempoLimite());
                } else {
                    //se nao seta um valor menor suficiente para uma requisicao
                    socket.setSoTimeout(300);
                }
                
                String[] dadosReq = null;         try{ dadosReq = requisicao.getRecurso().split("/"); jTextArea_01.append( "\n" + "Recurso - " + requisicao.getRecurso() );       }catch( Exception e){}
                String status_do_comando = null;  try{ status_do_comando = dadosReq[0];               jTextArea_01.append( "\n" + "status_do_comando - " + status_do_comando );   }catch( Exception e){}
                String comando = null;            try{ comando = dadosReq[1];                         jTextArea_01.append( "\n" + "comando - " + comando );                       }catch( Exception e){}
                                                
                String extencao = null;       
                String extencaoUP = null;
                try{ 
                    extencao = requisicao.getRecurso().substring( requisicao.getRecurso().lastIndexOf('.') + 1 ); 
                    extencaoUP = extencao.toUpperCase();
                    
                    jTextArea_01.append( "\n" + "Extenção - " + extencaoUP );
                }catch( Exception e){}
                
                File arquivo = null;
                String enderecoDoRecursoSolicitado = null;
                try{ 
                        
                    String url_dir = System.getProperty("user.dir") + "/00_Externo";
                    enderecoDoRecursoSolicitado = url_dir + requisicao.getRecurso();
                    arquivo = new File( enderecoDoRecursoSolicitado );
                                        
                }catch( Exception e){}
                                
                if( extencaoUP.equalsIgnoreCase( "JPG" ) ){
                    
                    resposta( arquivo );
                    
                    jTextArea_01.append( "\n" + "Resposta - Arquivo - " + enderecoDoRecursoSolicitado );
                    jTextArea_01.append( "\n" + "Opção - " + "if( extencaoUP.equalsIgnoreCase( \"JPG\" ) ){{ \n" );
                }
                else if( extencaoUP.equalsIgnoreCase( "PNG" ) ){
                    
                    resposta( arquivo );
                    
                    jTextArea_01.append( "\n" + "Resposta - Arquivo - " + enderecoDoRecursoSolicitado );
                    jTextArea_01.append( "\n" + "Opção - " + "else if( extencaoUP.equalsIgnoreCase( \"PNG\" ) ){ \n" );
                }
                else if( extencaoUP.equalsIgnoreCase( "JS" ) ){
                    
                    resposta( arquivo );
                    
                    jTextArea_01.append( "\n" + "Resposta - Arquivo - " + enderecoDoRecursoSolicitado );
                    jTextArea_01.append( "\n" + "Opção - " + "else if( extencaoUP.equalsIgnoreCase( \"JS\" ) ){ \n" );
                }
                else{
                    
                    if( status_do_comando != null ){
                        
                        if( status_do_comando.equalsIgnoreCase("SIM") ){
                        
                        }
                        else if( status_do_comando.equalsIgnoreCase("NAO") ){
                        
                        }
                        else{
                            
                            String url_dir = System.getProperty("user.dir") + "/00_Externo/html/login/";
                            requisicao.setRecurso("login.html");
                            enderecoDoRecursoSolicitado = url_dir + requisicao.getRecurso();
                            arquivo = new File( enderecoDoRecursoSolicitado );
                            
                            jTextArea_01.append( "\n" + "Resposta - Arquivo - " + enderecoDoRecursoSolicitado );
                            
                            resposta( arquivo );
                        } 
                    } 
                    else{
                            
                        String url_dir = System.getProperty("user.dir") + "/00_Externo/html/login/";
                        requisicao.setRecurso("login.html");
                        enderecoDoRecursoSolicitado = url_dir + requisicao.getRecurso();
                        arquivo = new File( enderecoDoRecursoSolicitado );
                            
                        jTextArea_01.append( "\n" + "Resposta - Arquivo - " + enderecoDoRecursoSolicitado );
                        
                        resposta( arquivo );
                    }
                }
                
            } catch (Exception ex) {
                ex.printStackTrace();
                //quando o tempo limite terminar encerra a thread
                if (ex instanceof SocketTimeoutException) {
                    try {
                        
                        File arquivo = new File("404.html");
                        resposta( arquivo );
                        
                        jTextArea_01.append( "\n" + "} catch (Exception ex) { - " + "Fim do tempo da Sessão" );
                        
                        jTextArea_01.append( "\n" + "//////////////////////////////////////////////////////" );
                    
                        conectado = false;
                        socket.close();
                    } catch (IOException ex1) {
                        Logger.getLogger(Servidor_Web_Socket_Turbo_Flyer_02_ThreadConexao.class.getName()).log(Level.SEVERE, null, ex1);
                    }
                }
                else{
                    
                    jTextArea_01.append( "\n" + "///// FIM FIM FIM /////////ERRO: " + ex.getMessage());
                }
            }
        //}  
    }
    }
        
    private void resposta( File arquivo ){    synchronized ( this ){ try{ 

        //se o arquivo existir então criamos a reposta de sucesso, com status 200
        if (arquivo.exists()) {
            
            jTextArea_01.append( "\n" + "///// ARQUIVO EXISTE ///////// " + arquivo.getName() + "\n" );
            
            Servidor_Web_Socket_Turbo_Flyer_04_RespostaHTTP resposta = new Servidor_Web_Socket_Turbo_Flyer_04_RespostaHTTP(requisicao.getProtocolo(), 200, "OK");
            
            try{ responder( arquivo, resposta); } catch (Exception ex) {}
            
        } else {
            
            jTextArea_01.append( "\n" + "///// ARQUIVO NÃO EXISTE ///////// " + arquivo.getName() + "\n" );
            //se o arquivo não existe então criamos a reposta de erro, com status 404
            Servidor_Web_Socket_Turbo_Flyer_04_RespostaHTTP resposta = new Servidor_Web_Socket_Turbo_Flyer_04_RespostaHTTP(requisicao.getProtocolo(), 404, "Not Found");
            arquivo = new File("404.html");
            
            try{ responder( arquivo, resposta); } catch (Exception ex) {}
        }
        
    } catch( Exception e ){} } }
    
    private void responder( File arquivo, Servidor_Web_Socket_Turbo_Flyer_04_RespostaHTTP resposta ){    synchronized ( this ){ try{ 

        //cria o canal de resposta utilizando o outputStream
        resposta.setSaida(socket.getOutputStream());
        resposta.enviar();      
        
        jTextArea_01.append( "\n" + "///// RESPONDIDO ///////// " + arquivo.getName() + "\n" );
    } catch( Exception e ){
    
        jTextArea_01.append( "\n" + "///// ERRO AO RESPONDER ///////// " + e.getMessage() + "\n" );
    } } }
                                            
    /******************Executar Teste*************************************  
     * @param args************************
    public static void main(String[] args) {            
          
        ControleThread_Print t1 = new ControleThread_Print(13); 
        
        t1.setName("ControleThread_Print");   
        
        t1.start();  
    }
    /******************Executar Teste*************************************/
    
}