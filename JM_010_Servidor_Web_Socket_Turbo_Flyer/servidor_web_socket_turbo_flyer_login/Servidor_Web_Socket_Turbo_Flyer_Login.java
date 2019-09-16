
package servidor_web_socket_turbo_flyer_login;

import br.com.jmary.home.jpa.JPAUtil;
import java.io.File;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.TimeZone;
import javax.persistence.Query;
import javax.swing.JTextArea;
import usuarios_do_sistema_beans.UsuarioSistema;

/**
 *
 * @author Ana
 */
public class Servidor_Web_Socket_Turbo_Flyer_Login { 
    
    private final Socket socket;
    JTextArea jTextArea_01;
    
    String caminhoArquivo = null;
    String protocolo = null;
    
    String login = null;
    String senha = null;
            
    public Servidor_Web_Socket_Turbo_Flyer_Login( Socket socket, JTextArea jTextArea_012, String caminhoArquivo2, String protocolo2, String login2, String senha2) {
        this.jTextArea_01 = jTextArea_012;
        this.socket = socket;
        this.caminhoArquivo = caminhoArquivo2;
        this.protocolo = protocolo2;
        this.login = login2;
        this.senha = senha2;
        
        verificar_login();
    } 
    
    private void verificar_login(){  
        
        boolean usuario_e_senha_ok = false;
        
        try{             
           
            List<UsuarioSistema> UsuarioSistema = null;
                try{ 
                    Query q = JPAUtil.em().createNativeQuery("SELECT * FROM JM.USUARIO_SISTEMA", UsuarioSistema.class );
                    List<UsuarioSistema> lista_Banco = q.getResultList();   
                    UsuarioSistema = lista_Banco;
                }catch( Exception e ){ }
                
                try{
                    jTextArea_01.append( "************Usuário Procurado: " + this.login + "\n" );
                    jTextArea_01.append( "************Senha Procurada: " + this.senha + "\n" );
                }catch( Exception e ){ }
        
                String rbusca = null; try{ rbusca = UsuarioSistema.get(0).getLogin(); }catch( Exception e ){}
                if( rbusca != null ){
                    
                    for (int it = 0; it < UsuarioSistema.size(); it++){
                        
                        jTextArea_01.append( "************Usuário e Senha Pesquisado: " + UsuarioSistema.get(it).getEmailRecuperacao() + " - " + UsuarioSistema.get(it).getSenha() + "\n" );
                        
                        if( login.equalsIgnoreCase( UsuarioSistema.get(it).getEmailRecuperacao() ) ){
                            
                            if( senha.equalsIgnoreCase( UsuarioSistema.get(it).getSenha()) ){
                                
                                usuario_e_senha_ok = true;
                                break;
                            }
                        }                        
                    }
                }
        } catch( Exception e ){} 
        
        if( usuario_e_senha_ok == false ){
            
            String url_dir = System.getProperty("user.dir") + "/00_Externo";
            
            caminhoArquivo = url_dir + "/login_usuario_ou_senha_invalido.html";
            
            jTextArea_01.append( "************Usuário procurado não encontrado: " + this.login + " - " + this.senha + "\n" );

            criar_ou_lincar_arquivo();
        }
        else if( usuario_e_senha_ok == true ){
            
            String url_dir = System.getProperty("user.dir") + "/00_Externo";
            
            caminhoArquivo = url_dir + "/home.html";
            
            jTextArea_01.append( "************Usuário encontrado: " + this.login + " - " + this.senha + "\n" );
            
            criar_ou_lincar_arquivo();
        }
    } 
    
    private void criar_ou_lincar_arquivo(){  try{ 
        
        File arquivo = null; try{ arquivo = new File(caminhoArquivo); }catch( Exception e){}
               
        if( arquivo != null ){
            
            enviar_arquivo(arquivo);
        }
    } catch( Exception e ){} }
    
    private void enviar_arquivo(File arquivo){  try{ 
                
        //abre o arquivo pelo caminho
            byte[] conteudo;
            //status de sucesso - HTTP/1.1 200 OK
            String status = protocolo + " 200 OK\r\n";
            //se o arquivo não existe então abrimos o arquivo de erro, e mudamos o status para 404
            if (!arquivo.exists()) {
                status = protocolo + " 404 Not Found\r\n";
                
                String url_dir = System.getProperty("user.dir") + "/00_Externo";            
                caminhoArquivo = url_dir + "/404.html";   
                
                arquivo = new File( caminhoArquivo );
            }
            conteudo = Files.readAllBytes(arquivo.toPath());
            
            //cria um formato para o GMT espeficicado pelo HTTP
            SimpleDateFormat formatador = new SimpleDateFormat("E, dd MMM yyyy hh:mm:ss", Locale.ENGLISH);
            formatador.setTimeZone(TimeZone.getTimeZone("GMT"));
            Date data = new Date();
            //Formata a dara para o padrao
            String dataFormatada = formatador.format(data) + " GMT";
            //cabeçalho padrão da resposta HTTP
            String header = status
                    + "Location: https://localhost:8000/\r\n"
                    + "Date: " + dataFormatada + "\r\n"
                    + "Server: MeuServidor/1.0\r\n"
                    + "Content-Type: text/html\r\n"
                    + "Content-Length: " + conteudo.length + "\r\n"
                    + "Connection: close\r\n"
                    + "\r\n";
            //cria o canal de resposta utilizando o outputStream
            OutputStream resposta = socket.getOutputStream();
            //escreve o headers em bytes
            resposta.write(header.getBytes());
            //escreve o conteudo em bytes
            resposta.write(conteudo);
            //encerra a resposta
            resposta.flush();
            
            jTextArea_01.append( "*************** Arquivo enviado: " + caminhoArquivo + "\n" );
        
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