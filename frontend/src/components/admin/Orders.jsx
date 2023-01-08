import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";


const Orders = () => {
  const orders=[1,2,3,4]
  return (
    <section className="tableClass">
        <main>
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Status</th>
                <th>Item Qty</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>User</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              
               { orders.map((i) => (
                  <tr key={i}>
                    <td>#4984reoioje</td>
                    <td>Processing</td>
                    <td>
                      
                    </td>
                    <td>₹{46}</td>
                    <td>Tikam singh</td>
                    <td></td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>

                      <button >
                        <GiArmoredBoomerang />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
    </section>
  );
};

export default Orders;
