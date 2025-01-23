export default function IdCard({
  lastName,
  firstName,
  gender,
  heigth,
  birth,
  picture,
}) {
  console.log(lastName, firstName);
  return (
    <div className="container">
      <div>
        <img src={picture} alt="imagen" />
      </div>
      <div>
        <ul>
          <li>First name: {firstName}</li>
          <li>Last name: {lastName}</li>
          <li>Gender: {gender}</li>
          <li> Heigth: {heigth}</li>
          <li>Birth: {birth.toLocaleDateString()}</li>
        </ul>
      </div>
    </div>
  );
}
