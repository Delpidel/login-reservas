const usuarios = [
    {
      quarto: "3234",
      cliente: "Alice Mendes da Silva",
      cpf: "123.456.789-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "5678",
      cliente: "Maria Souza",
      cpf: "987.654.321-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "9123",
      cliente: "Ana Oliveira",
      cpf: "555.444.333-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "4567",
      cliente: "Laura Ferreira",
      cpf: "222.333.444-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "7890",
      cliente: "Rafaela Costa",
      cpf: "777.888.999-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "2345",
      cliente: "Juliana Santos",
      cpf: "111.222.333-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "8901",
      cliente: "Fernanda Almeida",
      cpf: "444.555.666-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "1234",
      cliente: "Lucas Rodriguesf",
      cpf: "999.888.777-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "6789",
      cliente: "Pedro Henrique",
      cpf: "666.777.888-00",
      periodo: "20/08/2022-23/08/2025",
    },
    {
      quarto: "3456",
      cliente: "Beatriz Oliveira",
      cpf: "333.222.111-00",
      periodo: "20/08/2022-23/08/2025",
    },
  ];
  
  function criarTabelaUsuarios() {
    const tableBody = document.getElementById("table-body");
  
    // Limpar qualquer conteúdo anterior na tabela
    tableBody.innerHTML = "";
  
    // HTML das linhas da tabela
    const tabelaHTML = usuarios.map((usuario) => {
      return `
        <tr>
          <td>${usuario.quarto}</td>
          <td>${usuario.cliente}</td>
          <td>${usuario.cpf}</td>
          <td>${usuario.periodo}</td>
          <td>
            <button class="botao-cancelar" data-quarto="${usuario.quarto}">Cancelar reserva</button>
          </td>
        </tr>
      `;
    }).join(""); 
  
    // Adicionar a string de HTML ao corpo da tabela
    tableBody.innerHTML = tabelaHTML;
  
    // Botao "cancelar reserva"
    const cancelarButtons = document.getElementsByClassName("botao-cancelar");
    Array.from(cancelarButtons).forEach((button) => {
      button.addEventListener("click", () => {
        const numeroQuarto = button.dataset.quarto;
        cancelarReserva(numeroQuarto);
      });
    });
  }
  
  // Cancelar a reserva do usuário
  function cancelarReserva(numeroQuarto) {
   
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.quarto === numeroQuarto);
    if (usuarioIndex !== -1) {
      usuarios.splice(usuarioIndex, 1);
      criarTabelaUsuarios(); // Atualizar a tabela após cancelar a reserva
      alert(`Reserva do quarto ${numeroQuarto} cancelada.`);
    }
  }
  
  document.addEventListener("DOMContentLoaded", criarTabelaUsuarios);
  
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", () => {

    alert("Você foi desconectado. Redirecionando para a página de login...");
    
      window.location.href = "login.html";
  });