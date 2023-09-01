export default function getDataAttack(obj) {
  const result = [];
  const { special } = obj;
  special.forEach((prop) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = prop;
    result.push({
      id, name, description, icon,
    });
  });
  return result;
}
