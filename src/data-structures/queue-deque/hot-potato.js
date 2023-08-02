import Queue from "./queue.js";

function hotPotato(elementList, num) {
  const queue = new Queue();
  const elimitadedList = [];
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeqe());
    }
    elimitadedList.push(queue.dequeqe());
  }
  return {
    eliminated: elimitadedList,
    winner: queue.dequeqe()
  };
}

const names = ["João", "Pedro", "Lucas", "Maria", "Joana"];
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name} foi eliminado do jogo da Batata Quente!`);
});
console.log(`O vencedor foi: ${result.winner}`);
