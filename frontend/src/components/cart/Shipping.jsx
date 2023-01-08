import React from "react";
import {Country, State} from 'country-state-city'
const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form >
          <div>
            <label>H.No.</label>
            <input
              type="text"
              placeholder="Enter House No."
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              required
            />
          </div>
          <div>
            <label>Country</label>
            <select>
             {
               Country && Country.getAllCountries().map((i)=>(
                             <option value={i.isoCode} key={i.isoCode}>
                                {i.name}
                             </option>
                ))
              }
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              {
               State && State.getStatesOfCountry("IN").map((i)=>(
                             <option value={i.isoCode} key={i.isoCode}>
                                {i.name}
                             </option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input
              type="number"
              placeholder="Enter Pincode"
              required
            />
          </div>
          <div>
            <label>Phone No.</label>
            <input
              type="number"
              placeholder="Enter Phone No."
              required
            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
