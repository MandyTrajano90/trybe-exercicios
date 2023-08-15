import ModuleDetails from './module-details';
import Title from './Title';

function calculateAge(birthday: string): number {
  const [day, month, year] = birthday.split('/');
  const birthDate = new Date(+year, +month - 1, +day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}

function HelloWorld() {
  const name = 'John Connor';
  const birth = '11/02/1989';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}
export default HelloWorld;
