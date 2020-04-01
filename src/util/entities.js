const entities = {
  orders: {
    urls: {
      get: '/deliveries',
      show: '/deliveries/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text', id: 1 },
      { field: 'product', label: 'Produto', type: 'text', id: 2 },
      { field: 'recipient.name', label: 'Destinatário', type: 'text', id: 3 },
      { field: 'deliveryman', label: 'Entregador', type: 'deliveryman', id: 4 },
      { field: 'recipient.city', label: 'Cidade', type: 'text', id: 5 },
      { field: 'recipient.state', label: 'Estado', type: 'text', id: 6 },
      { field: 'status.text', label: 'Status', type: 'status', id: 7 },
    ],
    labels: {
      find: 'Busca por destinatários',
      textCreate: 'Cadastro de encomendas',
      textEdit: 'Edição de encomendas',
    },
  },

  deliveryman: {
    urls: {
      get: '/deliveryman',
      show: '/deliveryman/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'avatar.url', label: 'Foto', type: 'avatar' },
      { field: 'name', label: 'Nome', type: 'text' },
      { field: 'email', label: 'Email', type: 'fulltext' },
    ],
    labels: {
      find: 'Busca por entregadores',
      textCreate: 'Cadastro de entregador',
      textEdit: 'Edição de entregador',
    },
  },
  recipient: {
    urls: {
      get: '/recipient',
      show: '/recipient/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'name', label: 'Nome', type: 'text' },
      { field: 'address', label: 'Endereço', type: 'fulltext' },
    ],
    labels: {
      find: 'Busca por destinatários',
      textCreate: 'Cadastro de destinatário',
      textEdit: 'Edição de destinatário',
    },
  },
};

export default entities;
