
package servidor_web_socket_turbo_flyer;

import java.io.File;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import javax.swing.JTextArea;

/**
 *
 * @author Ana
 */
public class Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo { 
    
    private final Socket socket;
    JTextArea jTextArea_01;
    
    String caminhoArquivo = null;
    String protocolo = null;
            
    public Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( Socket socket, JTextArea jTextArea_012, String caminhoArquivo2, String protocolo2) {
        this.jTextArea_01 = jTextArea_012;
        this.socket = socket;
        this.caminhoArquivo = caminhoArquivo2;
        this.protocolo = protocolo2;
        
        inicio();
    } 
    
    private void inicio(){  try{ 
                
        //abre o arquivo pelo caminho
            File arquivo = new File(caminhoArquivo);
            byte[] conteudo;
            //status de sucesso - HTTP/1.1 200 OK
            String status = protocolo + " 200 OK\r\n";
            //se o arquivo não existe então abrimos o arquivo de erro, e mudamos o status para 404
            if (!arquivo.exists()) {
                String url_dir = System.getProperty("user.dir") + "/00_Externo";
                
                status = protocolo + " 404 Not Found\r\n";
                arquivo = new File( url_dir + "/404.html");
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