import http from './Http';

export default {
  save(evolucao) {
    const { notificacaoId } = evolucao;
    return http.post(`/notificacoes/${notificacaoId}/evolucoes`, evolucao);
  },
  findByNotificacaoId(notificacaoId) {
    return http.get(`/notificacoes/${notificacaoId}/evolucoes`).then(({ data }) => data);
  },
  delete(notificacaoId, notificacaoEvolucaoId) {
    return http.delete(`/notificacoes/${notificacaoId}/evolucoes/${notificacaoEvolucaoId}`);
  },
};
