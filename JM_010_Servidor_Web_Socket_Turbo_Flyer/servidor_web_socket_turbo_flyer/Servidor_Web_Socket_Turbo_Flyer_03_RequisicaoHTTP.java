package servidor_web_socket_turbo_flyer;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import javax.swing.JTextArea;

/**
 *
 * @author NewUser
 */
public class Servidor_Web_Socket_Turbo_Flyer_03_RequisicaoHTTP {
        
    private String protocolo;
    private String recurso;
    private String metodo;
    private boolean manterViva = true;
    private long tempoLimite = 3000;
    private Map<String, List> cabecalhos;
    
    InputStream entrada;
    static JTextArea jTextArea_01;
    
    public Servidor_Web_Socket_Turbo_Flyer_03_RequisicaoHTTP( InputStream entrada2, JTextArea jTextArea_012 ) {
        
        jTextArea_01 = jTextArea_012;
        entrada = entrada2;
        
        lerRequisicao();
    }

    private void lerRequisicao(){

        try{
            
            BufferedReader buffer = new BufferedReader(new InputStreamReader(entrada));
            System.out.println("Requisição: ");
            /* Lê a primeira linha
            contem as informaçoes da requisição
            */
            String linhaRequisicao = ""; try{ linhaRequisicao = buffer.readLine(); }catch( Exception e){}
             //quebra a string pelo espaço em branco
            String[] dadosReq = null; try{ dadosReq = linhaRequisicao.split(" "); }catch( Exception e){}

            //pega o metodo
            this.setMetodo(dadosReq[0]);
            //pega o caminho do arquivo
            this.setRecurso(dadosReq[1]);
            jTextArea_01.append( "Requisicao - Recurso: " + dadosReq[1] + "\n" );
            //pega o protocolo
            this.setProtocolo(dadosReq[2]);
            String dadosHeader = buffer.readLine();
            //Enquanto a linha nao for nula e nao for vazia
            while (dadosHeader != null && !dadosHeader.isEmpty()) {
            
                jTextArea_01.append( "Requisicao: " + dadosHeader + "\n" );
                System.out.println(dadosHeader);
                String[] linhaCabecalho = dadosHeader.split(":");
                this.setCabecalho(linhaCabecalho[0], linhaCabecalho[1].trim().split(","));
                dadosHeader = buffer.readLine();
            }
        
            //se existir a chave Connection no cabeçalho
            if (this.getCabecalhos().containsKey("Connection")) {
                //seta o manterviva a conexao se o connection for keep-alive
                this.setManterViva(this.getCabecalhos().get("Connection").get(0).equals("keep-alive"));
            }
        }catch( Exception e){}
    }
    
    //getters e setters vão aqui
    /**
     * @return the protocolo
     */
    public String getProtocolo() {
        return protocolo;
    }

    /**
     * @param protocolo the protocolo to set
     */
    public void setProtocolo(String protocolo) {
        this.protocolo = protocolo;
    }

    /**
     * @return the recurso
     */
    public String getRecurso() {
        return recurso;
    }

    /**
     * @param recurso the recurso to set
     */
    public void setRecurso(String recurso) {
        this.recurso = recurso;
    }

    /**
     * @return the metodo
     */
    public String getMetodo() {
        return metodo;
    }

    /**
     * @param metodo the metodo to set
     */
    public void setMetodo(String metodo) {
        this.metodo = metodo;
    }

    /**
     * @return the manterViva
     */
    public boolean isManterViva() {
        return manterViva;
    }

    /**
     * @param manterViva the manterViva to set
     */
    public void setManterViva(boolean manterViva) {
        this.manterViva = manterViva;
    }

    /**
     * @return the tempoLimite
     */
    public long getTempoLimite() {
        return tempoLimite;
    }

    /**
     * @param tempoLimite the tempoLimite to set
     */
    public void setTempoLimite(long tempoLimite) {
        this.tempoLimite = tempoLimite;
    }

    /**
     * @return the cabecalhos
     */
    public Map<String, List> getCabecalhos() {
        return cabecalhos;
    }

    /**
     * @param chave
     * @param valores
     */
    public void setCabecalho(String chave, String... valores) {
        if (getCabecalhos() == null) {
            cabecalhos = new TreeMap<>();
        }
        getCabecalhos().put(chave, Arrays.asList(valores));
    }
    
}
