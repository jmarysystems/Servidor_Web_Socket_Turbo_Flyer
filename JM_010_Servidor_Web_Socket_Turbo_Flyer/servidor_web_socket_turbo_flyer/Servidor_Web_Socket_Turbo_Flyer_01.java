package servidor_web_socket_turbo_flyer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import javax.swing.JTextArea;
import servidor_web_socket_turbo_flyer_login.Servidor_Web_Socket_Turbo_Flyer_Abrir_Subcomandos;
import servidor_web_socket_turbo_flyer_login.Servidor_Web_Socket_Turbo_Flyer_Login;

/**
 *
 * @author NewUser
 */
public class Servidor_Web_Socket_Turbo_Flyer_01 {
    
    JTextArea jTextArea_01;
    
    public Servidor_Web_Socket_Turbo_Flyer_01(int int_porta, JTextArea jTextArea_012) throws IOException {
                        
        jTextArea_01 = jTextArea_012;
        jTextArea_01.append( "Servidor Iniciado Com Sucesso! - " + "\n" );
        //iniciar(int_porta);
        inicio(int_porta);
    }
    
    private void inicio(int int_porta) { try{
        /* cria um socket "servidor" associado a porta 8000
          já aguardando conexões
        */
        ServerSocket servidor = new ServerSocket(8000);
        
        while (true) {
            try{
        //aceita a primeita conexao que vier
        Socket socket = servidor.accept();
        //verifica se esta conectado  
        if (socket.isConnected()) {
            
            String dataCadastro = ""; 
            try{
                //////////////////////////////////////////////////////////////////////////////
                Calendar calendar = Calendar.getInstance();
                java.util.Date now = calendar.getTime();
                java.sql.Timestamp currentTimestamp = new java.sql.Timestamp(now.getTime());                
                
                DateFormat dfmt = new SimpleDateFormat("dd.MM.yyyy HH:mm:ss");            
                try{ dataCadastro = dfmt.format(currentTimestamp);  }catch(Exception e){}
                //////////////////////////////////////////////////////////////////////////////
            } catch (Exception ex) {}
        
            //imprime na tela o IP do cliente
            jTextArea_01.append( "\n\n\nO computador "+ socket.getInetAddress() + " se conectou ao servidor - " + dataCadastro + "\n" );
            String url_dir = System.getProperty("user.dir") + "/00_Externo";
            
            //cria um BufferedReader a partir do InputStream do cliente
            BufferedReader buffer = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            
            /* Lê a primeira linha
             contem as informaçoes da requisição
             */
            String linha = buffer.readLine();
            //quebra a string pelo espaço em branco
            String[] dadosReq = linha.split(" ");
            try{
                for( int gg = 0; gg < dadosReq.length; gg++ ){
                    jTextArea_01.append( "Parametro: " + gg + " - " + dadosReq[gg] + "\n" );
                }
            } catch (Exception ex) {}
            //pega o metodo
            String metodo = dadosReq[0];
            //paga o caminho do arquivo
            String caminhoArquivo = dadosReq[1];
            jTextArea_01.append( "CaminhoArquivo: " + caminhoArquivo + "\n" );
            //pega o protocolo
            String protocolo = dadosReq[2];
            //Enquanto a linha não for vazia
            while (!linha.isEmpty()) {
                //imprime a linha
                jTextArea_01.append( linha + "\n" );
                //lê a proxima linha
                linha = buffer.readLine();
            }
            //se o caminho foi igual a / entao deve pegar o /index.html
            if (caminhoArquivo.equals("/")) {
                                                
                caminhoArquivo = url_dir + "/index.html";
                
                Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
            }
            else{
                String temp = caminhoArquivo;
                
                //quebra a string pelo espaço em branco
                String[] dadosReqsubcomando = temp.split("/");
                try{
                    for( int gg = 0; gg < dadosReqsubcomando.length; gg++ ){
                        jTextArea_01.append( "Parametro_Subcomando: " + gg + " - " + dadosReqsubcomando[gg] + "\n" );
                    }
                } catch (Exception ex) {}
                
                String status_do_comando = null;  try{ status_do_comando = dadosReqsubcomando[1]; jTextArea_01.append( "============== Status_do_comando: " + status_do_comando + "\n" ); }catch( Exception e){}
                                
                if( status_do_comando != null ){
                    
                    // Se houver comando
                    if( status_do_comando.equalsIgnoreCase("COMANDO") ){
                        
                        jTextArea_01.append( "============== Status_do_Subcomando: " + dadosReqsubcomando[2] + "\n" );
                        
                        //dadosReqsubcomando[2] - QUAL O COMANDO
                        //Ir para a classe de tratamento dos comandos
                        if( dadosReqsubcomando[2].equalsIgnoreCase("LOGIN") ){
                            
                            String user = dadosReqsubcomando[3];
                            String pass = dadosReqsubcomando[4];
                
                            Servidor_Web_Socket_Turbo_Flyer_Login Enviar = new
                                Servidor_Web_Socket_Turbo_Flyer_Login( socket, jTextArea_01, caminhoArquivo, protocolo, user, pass );
                        }
                        else{
                            
                            String subcomandorecebido = dadosReqsubcomando[2];
                            
                            String user = dadosReqsubcomando[3];
                            String pass = dadosReqsubcomando[4];
                            String loginefetuado = dadosReqsubcomando[5];
                            
                            Servidor_Web_Socket_Turbo_Flyer_Abrir_Subcomandos Abrir_Comandos = new
                                Servidor_Web_Socket_Turbo_Flyer_Abrir_Subcomandos( socket, jTextArea_01, caminhoArquivo, protocolo, user, pass, loginefetuado, subcomandorecebido );
                        }
                    }
                    // Se não houver comando
                    else{
                        
                        caminhoArquivo = url_dir + temp;    
                
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                            Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
                    }
                }
                else{
                    
                    caminhoArquivo = url_dir + "/index.html";
                
                    Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo Enviar = new
                        Servidor_Web_Socket_Turbo_Flyer_99_Enviar_Arquivo( socket, jTextArea_01, caminhoArquivo, protocolo );
                }
            }
            
        }
            } catch (IOException ex) {
        
                jTextArea_01.append( "\n" + "///// FIM FIM FIM 2 /////////ERRO: " + ex.getMessage());
            }
        }
    } catch (IOException ex) {
        
        jTextArea_01.append( "\n" + "///// FIM FIM FIM 1 /////////ERRO: " + ex.getMessage());
    }
    }
    
    private void iniciar(int int_porta) throws IOException {
        /* cria um socket "servidor" associado a porta 8000
            já aguardando conexões
        */
        ServerSocket servidor = new ServerSocket(int_porta);
        // servidor fica eternamente aceitando clientes...

        //executor que limita a criação de threads a 20
        ExecutorService pool = Executors.newFixedThreadPool(20);
        
        while (true) {
            //cria uma nova thread para cada nova solicitacao de conexao
            jTextArea_01.append( "\n New - pool.execute( new Servidor_Web_Socket_02_ThreadConexao( servidor.accept(), jTextArea_01 ) );" );
            pool.execute( new Servidor_Web_Socket_Turbo_Flyer_02_ThreadConexao( servidor.accept(), jTextArea_01 ) );
        }
    }
    
}
