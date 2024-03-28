const usersAPI = [
    { id: 1, nome: "Joao", ativo: true },
    { id: 2, nome: "Junior", ativo: false },
    { id: 3, nome: "Mariana", ativo: true },
    { id: 4, nome: "Pedro", ativo: false },
    { id: 5, nome: "Gabriel", ativo: true }
  ];

  const buscarUsers = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(usersAPI);
      }, 1000); 
    });
  };
  
  const filtrarUsers = async () => {
    try {

      const users = await buscarUsers();
  
      const usersAtivos = users.filter(user => user.ativo === true);
  
      return usersAtivos;
    } catch (error) {
      console.error('Erro ao filtrar usuários:', error.message);
      return [];
    }
  };
  
  (async () => {
    try {
      const usersFiltrados = await filtrarUsers();
  
      if (usersFiltrados.length > 0) {
        console.log('Usuários ativos:', usersFiltrados);
      } else {
        console.log('Nenhum usuário ativo encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar e filtrar usuários:', error.message);
    }
  })();
  