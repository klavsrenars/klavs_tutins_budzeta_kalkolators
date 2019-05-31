//Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
//Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
//Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta
const incomeList = document.getElementById('all_income');
const expenseList = document.getElementById('all_expenses');
const totalBudget = document.getElementById('budget__value');

const budgetType = document.getElementById('add_type').value;
const budgetIncome = document.getElementById('add_description').value;
const budgetExpense = document.getElementById('add_value').value;

//Izveidot fukciju kas izmaina pieejamā budžeta vertību
const TotalBudget = (value) => {
  totalBudget.innerHTML = value;
};

//Izveidot funkciju kura izsaucot pievieno ienākumus vai izdevumus to html elemntu sarakstiem
const addItemToList = (list, type, description, value) => {
  const item = `
    <div class="list_item">
      <div class="list_description">${description}</div>
      <div class="list_value">${type ? '+' : '-'}${value}€</div>
    </div>
  `;
  list.insertAdjacentHTML('beforeend', item);
};

//Izsaukt fukciju kas pievieno Ienākumu sarakstam vertības
//Izsaukt fukciju kas pievieno izdevumu sarakstam vertības
//Izsaukt fukciju kas izmaina pieejamā budžeta vertību
addItemToList(incomeList, true, 'Alga2', 120);
addItemToList(expenseList, false, 'Degviela', 20);
TotalBudget(300);

//Izveidot fukciju kas isaucās pēc pogas "pievienot" nospiešanas
//fukcijai japarbauda vai apraksta un summas lauks ir aizpildīts, ja nav tad izvada paziņojumu par to ka kads no laukiem nav aizpildīts
const button = () => {
  console.log(budgetIncome);
};
