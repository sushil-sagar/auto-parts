// ShippingPolicy.jsx

import React from 'react';
import styles from './SHIPPINGPOLICY.module.css'; // Import the CSS module

const ShippingPolicy = () => {
  return (
    <div className={styles.shippingPolicy}>
      <h1>Shipping Policy</h1>
      <div className={styles.content}>
        {/* Add your shipping policy content here */}
        <p>
          The maximum time frame is 10-12 business days for the delivery of the part. It may extend longer than that if there is less availability of the part or the carrier, and we will keep the customer posted regarding the same via email and calls. We do not refund shipping. Some of the items we ship are sent LTL, and shipping can be expensive. Please be sure you are ordering the correct part. If you have any doubts, please call or email us to confirm the order.
        </p>
        {/* Other content... */}
        <h4 className={styles.redText}>
          Returning the part is the responsibility of the customer; you will be responsible for paying the return shipping, and the shipping charges are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </h4>
        <p>
        When your order is delivered, you will be asked to sign for the delivery. Maybe even before the driver has even opened up his truck to show you the shipment! Prior to signing the delivery receipt, you must inspect the shipment for damage. If there is any damage or suspected damage to the shipment, you must note it on the delivery receipt before signing, save all packaging materials, take a few photos of the damage, and notify Quality Auto Salvage immediately. Quality Auto Salvage will not authorize any credit or accept any return because of damage that happens in the shipping process that is not noted on the delivery receipt.
        </p>
        <h4 className={styles.redText}>
        YOUR SIGNING OF THE DELIVERY RECEIPT WITHOUT NOTING DAMAGE ON THE RECEIPT MEANS YOU ARE WAVING ALL RIGHTS TO FILE ANY CLAIM FOR SHIPPING DAMAGE!
        </h4>
        <p>
        We are not responsible for missing, damaged, or incorrect parts after 7 days, regardless of the party at fault. We are also not responsible for lost or stolen packages and all such claims must be processed through the shipping company. QUALITY AUTO SALVAGE, LLC is not responsible for items delivered to the address given at the time of sale according to tracking information but not taken into possession by the customer. Delivery acceptance is required for initiating any warranty claim. Parts refused at time of delivery will be subject to a twenty-five percent (25%) handling & restocking fee and the purchaser will pay for all shipping charges.
        </p>
        {/* Remaining content... */}
      </div>
    </div>
  );
}

export default ShippingPolicy;
