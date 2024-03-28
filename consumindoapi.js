const apiTeste = {
    users: {
      'junior': { nome: 'Junior Ferreira', idade: 30, email: 'junior@gmail.com' },
      'mariana': { nome: 'Mariana Ferreira', idade: 25, email: 'mariana@gmail.com' }
    },
    async buscarUser(username) {
      return new Promise(resolve => {
        setTimeout(() => {
            resolve(this.users[username] || null);
        }, 1000); 
      });
    }
  };
  
  async function buscarDadosUser(username) {
    try {
      const user = await apiTeste.buscarUser(username);
      if (user) {
        return user;
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error.message);
      return null;
    }
  }
  
  (async () => {
    const username = 'junior';
    const dadosUser = await buscarDadosUser(username);
    
    if (dadosUser) {
      console.log('Dados do usuário:', dadosUser);
    } else {
      console.log('Usuário não encontrado.');
    }
  })();
  