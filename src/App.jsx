import { useState, useEffect } from "react";

function App() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    async function getContacts() {
      try {
        let fetchAPI = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        let jsonHolder = await fetchAPI.json();
        setContactData(jsonHolder);
      } catch (err) {
        console.log(err);
      }
    }
    getContacts();
  }, []);

  return (
    <>
      <h1>Contact List</h1>

      <div className="biglist">
        <div className="mainList">
          <h2>Contact Name</h2>
          {contactData.map((eachContact) => (
            <div key={eachContact.id} className="objects">
              {eachContact.name}
            </div>
          ))}
        </div>

        <div className="mainList">
          <h2>Email Address</h2>
          {contactData.map((eachContact) => (
            <div key={eachContact.id} className="objects">
              {eachContact.email}
            </div>
          ))}
        </div>

        <div className="mainList">
          <h2>Contact Name</h2>
          {contactData.map((eachContact) => (
            <div key={eachContact.id} className="objects">
              {eachContact.phone}
            </div>
          ))}
        </div>
      </div>

      {/* <table>
        <thead>
          <th>Contact Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
        </thead>
        {contactData.map((eachContact) => (
          <tr key={eachContact.id}>
            <td>{eachContact.name}</td>
            <td>{eachContact.email}</td>
            <td>{eachContact.phone}</td>
          </tr>
        ))}
      </table> */}
    </>
  );
}

export default App;
