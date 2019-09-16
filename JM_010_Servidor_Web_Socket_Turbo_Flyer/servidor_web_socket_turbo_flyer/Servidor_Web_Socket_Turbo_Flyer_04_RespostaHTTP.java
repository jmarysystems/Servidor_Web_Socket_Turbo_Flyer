/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servidor_web_socket_turbo_flyer;

import java.io.IOException;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 *
 * @author NewUser
 */
public class Servidor_Web_Socket_Turbo_Flyer_04_RespostaHTTP {

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
     * @return the codigoResposta
     */
    public int getCodigoResposta() {
        return codigoResposta;
    }

    /**
     * @param codigoResposta the codigoResposta to set
     */
    public void setCodigoResposta(int codigoResposta) {
        this.codigoResposta = codigoResposta;
    }

    /**
     * @return the mensagem
     */
    public String getMensagem() {
        return mensagem;
    }

    /**
     * @param mensagem the mensagem to set
     */
    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    /**
     * @return the conteudoResposta
     */
    public byte[] getConteudoResposta() {
        return conteudoResposta;
    }

    /**
     * @param conteudoResposta the conteudoResposta to set
     */
    public void setConteudoResposta(byte[] conteudoResposta) {
        this.conteudoResposta = conteudoResposta;
    }

    /**
     * @return the cabecalhos
     */
    public Map<String, List> getCabecalhos() {
        return cabecalhos;
    }

    /**
     * @param cabecalhos the cabecalhos to set
     */
    public void setCabecalhos(Map<String, List> cabecalhos) {
        this.cabecalhos = cabecalhos;
    }

    /**
     * @return the saida
     */
    public OutputStream getSaida() {
        return saida;
    }

    /**
     * @param saida the saida to set
     */
    public void setSaida(OutputStream saida) {
        this.saida = saida;
    }
        
    private String protocolo;
    private int codigoResposta;
    private String mensagem;
    private byte[] conteudoResposta;
    private Map<String, List> cabecalhos;
    private OutputStream saida;

    public Servidor_Web_Socket_Turbo_Flyer_04_RespostaHTTP(String protocolo, int codigoResposta, String mensagem) {
        this.protocolo = protocolo;
        this.codigoResposta = codigoResposta;
        this.mensagem = mensagem;
    }

    /**
     * Envia os dados da resposta ao cliente.
     *
     * @throws IOException
     */
    public void enviar() throws IOException {
        //escreve o headers em bytes
        getSaida().write(montaCabecalho());
        //escreve o conteudo em bytes
        getSaida().write(getConteudoResposta());
        //encerra a resposta
        getSaida().flush();
    }

    /**
     * Insere um item de cabeçalho no mapa
     *
     * @param chave
     * @param valores lista com um ou mais valores para esta chave
     */
    public void setCabecalho(String chave, String... valores) {
        if (getCabecalhos() == null) {
            cabecalhos = new TreeMap<>();
        }
        getCabecalhos().put(chave, Arrays.asList(valores));
    }

    /**
     * pega o tamanho da resposta em bytes
     *
     * @return retorna o valor em bytes do tamanho do conteudo da resposta
     * convertido em string
     */
    public String getTamanhoResposta() {
        return Arrays.toString(getConteudoResposta()).length() + "";
    }

    /**
     * converte o cabecalho em string.
     *
     * @return retorna o cabecalho em bytes
     */
    private byte[] montaCabecalho() {
        return this.toString().getBytes();
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder();
        str.append(getProtocolo()).append(" ").append(getCodigoResposta()).append(" ").append(getMensagem()).append("\r\n");
        for (Map.Entry<String, List> entry : getCabecalhos().entrySet()) {
            str.append(entry.getKey());
            String stringCorrigida = Arrays.toString(entry.getValue().toArray()).replace("[", "").replace("]", "");
            str.append(": ").append(stringCorrigida).append("\r\n");
        }
        str.append("\r\n");
        return str.toString();
    }
    
}
