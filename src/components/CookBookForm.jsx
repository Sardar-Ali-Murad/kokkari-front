import React from "react";
import "./CookBookForm.css";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { BsFillCreditCardFill } from "react-icons/bs";
import { gift } from "./data";
import { countries } from "./data";

const CookBookForm = () => {
  let [shippingInfo, setShipingInfo] = React.useState(false);
  const cookbooks = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
  ];

  return (
    <div className="cookBookForMain">
      <h1 className="cookBookFormHeaders">
        Cookbook & Gift Certificate Order Form
      </h1>

      {/*  */}
      <div className="cookBookFormPart1">
        <p>
          We ship gift certificates and cookbooks to United States addresses
          only.{" "}
        </p>
        <p> Together they make a memorable gift. </p>
        <div>
          <h3>Cookbooks $40</h3>
          <p>Two cookbook maximum per order</p>
        </div>
        <TextField
          id="outlined-select-currency"
          select
          label="cookbook"
          defaultValue="EUR"
          helperText="Please select no. of cookBooks"
        >
          {cookbooks.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <div className="cookBookPart1Check">
          <input type="checkbox" />
          <p>
            {" "}
            Gift Wrap<span>+$3.50</span>{" "}
          </p>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="cookBookFormPart2">
        <div className="cookBookFormColumFlex">
          <h2>Gift Certificates $50</h2>
          <TextField
            id="outlined-select-currency"
            select
            label="gift"
            defaultValue="EUR"
            helperText="Please select no. of cookBooks"
          >
            {gift.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="cookBookFormColumFlex">
          <h2>Gift Certificates $100</h2>
          <TextField
            id="outlined-select-currency"
            select
            label="gift"
            defaultValue="EUR"
            helperText="Please select no. of cookBooks"
          >
            {gift.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="cookBookFormPart3">
        <i>
          {" "}
          Gift certificate orders placed by 12pm PST Monday thru Friday will be
          processed and sent the same day. Orders received after 12pm PST, over
          the weekend or on a holiday, will be processed and sent the next
          business weekday (Monday-Friday).
        </i>
        <i>
          {" "}
          Gift certificates purchased online will be shipped to the recipient
          via Federal Express or UPS and cannot be held at the restaurant for
          pickup. We cannot send gift certificates via US Mail or ship to a P.O
          Box.
        </i>
        <i>
          {" "}
          Gift certificates purchased online will be shipped to the recipient
          via Federal Express or UPS and cannot be held at the restaurant for
          pickup. We cannot send gift certificates via US Mail or ship to a P.O
          Box.
        </i>
        <div className="cookBookFormTextArea">
          <h3>Gift message (optional)</h3>
          <textarea className="textArea"></textarea>
          <p>0 of 75 max characters</p>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="cookBookPart4">
        <h3 className="billingInfo">Billing Information</h3>
        <div className="billingBoxes">
          <h5>Your Name</h5>

          <div className="cookBookFormTextFieldFlex">
            <div className="cookBookTextField">
              <p>First</p>
              <input placeholder="First" className="cookBookTextFields" />
            </div>
            <div className="cookBookTextField">
              <p>Last</p>
              <input placeholder="Last" className="cookBookTextFields" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="billingBoxes">
        <h5>Billing Address</h5>
        <div className="cookBookTextField">
          <p>Street Address</p>
          <input placeholder="Street Address" className="cookBookTextFields" />
        </div>
        <div className="cookBookTextField">
          <p>Address Line 2</p>
          <input placeholder="Address Line 2" className="cookBookTextFields" />
        </div>
        <div className="cookBookFormTextFieldFlex">
          <div className="cookBookTextField">
            <p>City</p>
            <input placeholder="City" className="cookBookTextFields" />
          </div>
          <div className="cookBookTextField">
            <p>State / Province / Region</p>
            <input placeholder="Country" className="cookBookTextFields" />
          </div>
        </div>
        <div className="cookBookFormTextFieldFlex">
          <div className="cookBookTextField">
            <p>ZIP / Postal Code</p>
            <input placeholder="Zip Code" className="cookBookTextFields" />
          </div>
          <div className="cookBookTextField">
            <p>Country</p>
            <select className="cookBookTextFields">
              {countries?.map((country) => {
                return (
                  <option>
                    <div>
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {country.label} ({country.code}) +{country.phone}
                    </div>
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div>
          <div className="cookBookTextField">
            <h5>Your Phone number</h5>
            <input placeholder="Phone" className="cookBookTextFields" />
          </div>
          <div className="cookBookTextField">
            <h5>Your Email</h5>
            <input
              placeholder="email@gmail.com"
              className="cookBookTextFields"
            />
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="cookBookPart5">
        <h2>Shipping Information</h2>
        <div className="billingBoxes">
          <h5>Mail To Name</h5>

          <div className="cookBookFormTextFieldFlex">
            <div className="cookBookTextField">
              <p>First</p>
              <input placeholder="First" className="cookBookTextFields" />
            </div>
            <div className="cookBookTextField">
              <p>Last</p>
              <input placeholder="Last" className="cookBookTextFields" />
            </div>
          </div>
        </div>

        <div className="shippingInfoMain">
          <div>
            <h4>Shipping Address</h4>
            <p>
              We ship gift certificates and cookbooks to United States addresses
              only.
            </p>
          </div>
          <div className="shippingInfoCheck">
            <input
              type="checkBox"
              value={shippingInfo}
              onChange={(e) => setShipingInfo(e.target.checked)}
            />
            <p>Same As Billing Address</p>
          </div>
        </div>

        {/*  */}
        {!shippingInfo && (
          <div className="billingBoxes">
            <h5>Billing Address</h5>
            <div className="cookBookTextField">
              <p>Street Address</p>
              <input
                placeholder="Street Address"
                className="cookBookTextFields"
              />
            </div>
            <div className="cookBookTextField">
              <p>Address Line 2</p>
              <input
                placeholder="Address Line 2"
                className="cookBookTextFields"
              />
            </div>
            <div className="cookBookFormTextFieldFlex">
              <div className="cookBookTextField">
                <p>City</p>
                <input placeholder="City" className="cookBookTextFields" />
              </div>
              <div className="cookBookTextField">
                <p>State / Province / Region</p>
                {/* <input placeholder="Country" className="cookBookTextFields" /> */}
                <select className="cookBookTextFields">
                  {countries?.map((country) => {
                    return (
                      <option>
                        <div>
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {country.label} ({country.code}) +{country.phone}
                        </div>
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="cookBookFormTextFieldFlex">
              <div className="cookBookTextField">
                <p>ZIP / Postal Code</p>
                <input placeholder="Zip Code" className="cookBookTextFields" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/*  */}

      <div className="cookBookPart6">
        <h3>Shipping and Tax</h3>
        <div className="cookBookPart6Content">
          <h4>Via FedEx Ground (5-7 days)</h4>
          <p> $15.00 </p>
          <h4>Require a Signature?</h4>
          <div className="cookBookPart6CheckFlex">
            <input type="checkBox" />
            <p>
              Yes. Signature Required (Gift certificates cannot be replaced if
              lost or stolen.)
            </p>
          </div>
          <h4>Sales Tax</h4>
          <p> $3.45 </p>
          <h4>Order Total</h4>
          <p> $708.45 </p>
        </div>
      </div>

      {/*  */}

      {/*  */}
      <div className="paymentDetailsMain">
        <h3>Payment Information</h3>
        <p className="paymentDetailsMainPara">
          Secure payments processed through Stripe. Your payment information is
          not saved or stored in our systems.{" "}
        </p>

        <div className="paymentDetailsMainCardInfo">
          <h4>Credit Card</h4>
          <div className="card">
            <p>Card Details</p>
            <div className="cardRelative">
              <BsFillCreditCardFill className="cardIcon" />
              <input placeholder="card Number" className="cardTextField1" />
              <input placeholder="MM / YY CVC" className="cardTextField2" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="paymentDetailsMainCardInfoLast">
        <p>Cardholder Name</p>
        <input className="cardHolderNameTextField" />
      </div>
      {/*  */}

      <button className="purchase">Purchase</button>
    </div>
  );
};

export default CookBookForm;
