
export default function showAttackType(obj) {

  const { special } = obj;
  special.forEach(element => {
    const { id, name, description = 'Описание недоступно', icon } = element;
    return special;

  });

  console.log(special);
}