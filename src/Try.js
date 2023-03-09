// import { render } from "react-dom";

// Creating a List array method generating a list for us
function NavLink() {
  const appList = ["Home", "About", "Services", "Contact"];
  const myList = appList.map((item) => <p> {item}</p>);

  return <div>{myList}</div>;
}
export default function Header() {
  const x = 5;
  return (
    <div>
      <h2>
        {" "}
        {x > 10
          ? "My First navbar using React Js Components"
          : "I will make it till the End"}
      </h2>
      <NavLink />
    </div>
  );
}
// creating a table example using react jsx (js Xml)
// const myTable = (
//   <div>
//     <h1> i am trying a table head </h1>
//     <table>
//       <tr>
//         {" "}
//         <th> name </th>{" "}
//       </tr>
//       <tr>
//         {" "}
//         <td> Anne </td>{" "}
//       </tr>
//       <tr>
//         {" "}
//         <td> John </td>{" "}
//       </tr>
//     </table>
//   </div>
// );

// const x = 5;
// const myTernary = (
//   <h1> {x > 10 ? "Hello Ternary" : "Well Ternary not working"}</h1>
// );

// export { navLink, myTable, myTernary };
