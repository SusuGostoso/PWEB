// tabela.js

function montarTabela(data, idDiv, camposExibidos, nomesCamposExibidos) {
   const div = document.getElementById(idDiv);

   const table = document.createElement("table");
   table.classList.add("tabela");

   // Cria o cabeçalho da tabela
   const thead = document.createElement("thead");
   const headerRow = document.createElement("tr");

   nomesCamposExibidos.forEach(nome => {
      const th = document.createElement("th");
      th.textContent = nome;
      headerRow.appendChild(th);
   });

   thead.appendChild(headerRow);
   table.appendChild(thead);

   // Cria o corpo da tabela
   const tbody = document.createElement("tbody");

   data.forEach(item => {
      const row = document.createElement("tr");

      camposExibidos.forEach(campo => {
         const cell = document.createElement("td");
         cell.textContent = item[campo] || ""; // Verifica se o campo existe no item
         row.appendChild(cell);
      });

      tbody.appendChild(row);
   });

   table.appendChild(tbody);

   div.innerHTML = "";
   div.appendChild(table);
}
