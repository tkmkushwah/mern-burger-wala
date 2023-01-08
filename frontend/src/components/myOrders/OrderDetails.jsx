import React from "react";
const OrderDetails = () => {
  return (
    <section className="orderDetails">
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
            </p>
            <p>
              <b>Phone</b>
            </p>
          </div>

          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status</b>
            </p>
            <p>
              <b>Placed At</b>
            </p>
            <p>
              <b>Delivered At</b>
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment Method</b>
            </p>
            <p>
              <b>Payment Reference</b>
            </p>
            <p>
              <b>Paid At</b>
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>₹{44}
            </p>
            <p>
              <b>Shipping Charges</b>₹{187}
            </p>
            <p>
              <b>Tax</b>₹{16}
            </p>
            <p>
              <b>Total Amount</b>₹{1815}
            </p>
          </div>

          <article>
            <h1>Ordered Items</h1>
            <div>
              <h4>Cheese Burger</h4>
              <div>
                <span></span> 
                <span></span>
              </div>
            </div>
            <div>
              <h4>Veg Cheese Burger</h4>
              <div>
                <span></span> 
                <span></span>
              </div>
            </div>
            <div>
              <h4>Burger Fries</h4>
              <div>
                <span></span>
                <span></span>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 800,
                }}
              >
                Sub Total
              </h4>
              <div
                style={{
                  fontWeight: 800,
                }}
              >
                ₹{588}
              </div>
            </div>
          </article>
        </main>
    </section>
  );
};

export default OrderDetails;
