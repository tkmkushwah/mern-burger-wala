import React from "react";
import photo from '../../assets/founder.jpg'

const Users = () => {
  const arr=[1,2,3,4]

  return (
    <section className="tableClass">
    
        <main>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Since</th>
              </tr>
            </thead>

            <tbody>
                 {arr.map((i)=>(
                   <tr key={i}>
                    <td>#4545635sd</td>
                    <td>Tikam singh</td>
                    <td>
                      <img src={photo} alt="User" />
                    </td>
                    <td>Admin</td>
                    <td>{"27-Dec-2022"}</td>
                  </tr>
                 ))}
                
            </tbody>
          </table>
        </main>
    
    </section>
  );
};

export default Users;
