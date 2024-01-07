// WarrantyReturnPolicy.js
import React from 'react';
import styles from './warranty-return-policy.module.css';
import smallImage from '../../assets/guarantee.webp'; // Replace with your image file

const WarrantyReturnPolicy = () => {
    const handleCall = () => {
        // You can implement the logic for calling here
        // For web applications, you can use libraries like 'react-phone-call'
        // For mobile applications, you can use 'react-native-phone-call'
        // Here, I'll show an example of how you might implement the logic for web:
        window.location.href = 'tel:+18887202716';
    };
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img src={smallImage} alt="Small Image" className={styles.smallImage} />
        <div className={styles.titleContainer}>
          <h1>Warranty, Return & Refund Policy For Quality Auto Salvage</h1>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <h2>Our Warranty and Return Policy</h2>
        <p>
        This warranty covers defective parts and items sent incorrectly. We offer a 30 DAYS parts only warranty.
        </p>
        <p>
            <span>NO LABOR COSTS</span> are covered for any part sold by QUALITY AUTO SALVAGE, LLC. In the event that the part is defective we will first attempt to replace it and if a replacement cannot be sent we will issue a refund Return shipping costs will not be reimbursed. Upon contacting QUALITY AUTO SALVAGE, LLC please provide a detailed explanation as to why the part is being returned.

        </p>
        <p>
        All authorized returns must be unused and in their original condition, including all items and components that were included in the original package and cannot be disassembled, mounted, or damaged due to incorrect installation or user fault.
        </p>
        <h2>
        RETURN POLICY
        </h2>
        <p>
        A recycled part is a sound investment. However, we do offer a word of advice. Some parts may come with accessories attached. These parts are left on the main part assembly to aid in the installation process but are not covered in your limited warranty. For example, engines are sold as a long block assembly, which means they are only to include the main block and head(s). Major part assemblies are delivered with an installation checklist; these can (but are not limited to) engines, transmissions, transfer cases, axles, and ac compressors. If this required checklist is not completed and followed at the time of installation, your limited warranty is void. The checklist will list specific components that must be replaced at the same time as the installation of your part. Warranties do not cover any extra costs involved in the replacement of a defective part, including, but not limited to: labour charges, gaskets, seals, fluids, towing, rental car, hotel charges or waste disposal fees.
        </p>
        <p>
        Warranties are void if new seals, fluids, gaskets and filters are not replaced at the time of installation. Part failures due to lack of lubrication will void your limited warranty. Parts that have been altered, modified, disassembled, overheated, or damaged by misuse or accident subsequent to purchase voids your limited warranty. Parts that have been used for a non-OEM application, including but not limited to: off road use, racing use, farm use, or any use that is different than the original manufacturer’s intent voids your limited warranty. All guarantees shall be void if the part or parts are not returned to Quality Auto in the same condition in which they were sold or do not bear the identifying mark which appears on all of Quality Auto’s merchandise. Limited warranty is void if Overheat Indicator Tab(s) are removed, melted or altered.
        </p>
        <p>
        QUALITY AUTO SALVAGE, LLC is not responsible for any costs involved in the replacement of any defective part, labour or otherwise. Parts limited warranty does not cover the following items: The purchaser’s loss of time, inconvenience, loss of use of vehicle, towing expense, rental car, commercial loss or consequential damages AND/OR claims that are the result of accident, abuse, neglect or improper maintenance.
        </p>
        <p>
        Items modified or taken apart for testing will not be available for return. Items returned that are not the original part shipped will not be refunded. PARTS ARE UNIQUELY IDENTIFIED BY MARKINGS ON THE PART.
        </p>
        <p>
        As per our company’s policy if the customer has received a damaged or an incorrect part, we would request the customer to send the service documents or pictures explaining in detail the issue with the part, this can be validated only after the engine is <span> INSTALLED BY A CERTIFED AUTO REPAIR SHOP OR DEALERSHIP (ASE Certified mechanic at a Licensed Automotive Repair Facility).</span>
        After the received documents have been verified, we would go ahead and ship a replacement in case we are unable to relocate the part we would process a refund. All problem must be in writing via fax or email to verify a problem with a particular part or installation.
        </p>
        <p>
        If you receive a damaged part or an incorrect part, please notify our customer service department at 1-888-720- 2716 Ext 2. The item must be returned within 7 business days of the receipt of the RMA. The return address will be provided at the time we are contacted. Parts must be returned to the location address provided upon receiving RMA.
        </p>
        <p>
        All warranty claims must be filed within the warranty period and include diagnostic print-out from a Licensed Automotive Repair Facility (LARF) or Automotive Service Excellence (ASE) certified mechanic with unit installation invoice & receipts showing Recommended Installation/Replacement Procedures have been followed within 30 days of the warranty activation period. The complete purchase order details along with all paperwork and photo-copy image of all receipts can be emailed to vanessa@qualityautosalvages.com / info@qualityautosalvages.com . Improper engine or transmission installation or installation by a non- Automotive Service Excellence (ASE) Certified mechanic or non-Licensed Automotive Repair Facility (LARF) will void the warranty. In order for the warranty to be valid, standard “Recommended Installation/Replacement Procedures” must be followed. Failure to provide proof of these steps being taken will void the warranty.
        </p>
        <h2>
        SHIPPING POLICY
        </h2>
        <p>
        The maximum time frame is 10-12 business days for the delivery of the part. It may extend longer than that if there is less availability of the part or the carrier and we will keep the customer posted regarding the same via email and calls. We do not refund shipping. Some of the items we ship are sent LTL and shipping can be expensive. Please be sure you are ordering the correct part. If you have any doubts, please call or email us to confirm the order.
        </p>
        <p>
            <span>
            Returning the part is the responsibility of the customer you will be responsible for paying the return shipping and the shipping charges are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </span>
        </p>
        <p>
        When your order is delivered, you will be asked to sign for the delivery. Maybe even before the driver has even opened up his truck to show you the shipment! Prior to signing the delivery receipt, you must inspect the shipment for damage. If there is any damage or suspected damage to the shipment, you must note it on the delivery receipt before signing, save all packaging materials, take a few photos of the damage, and notify Quality Auto Salvage immediately. Quality Auto Salvage will not authorize any credit or accept any return because of damage that happens in the shipping process that is not noted on the delivery receipt.
        </p>
        <p>
            <span>
            YOUR SIGNING OF THE DELIVERY RECEIPT WITHOUT NOTING DAMAGE ON THE RECEIPT MEANS YOU ARE WAVING ALL RIGHTS TO FILE ANY CLAIM FOR SHIPPING DAMAGE! 
            </span> We are not responsible for missing, damaged, or incorrect parts after 7 days, regardless of the party at fault. We are also not responsible for lost or stolen packages and all such claims must be processed through the shipping company. QUALITY AUTO SALVAGE, LLC is not responsible for items delivered to the address given at the time of sale according to tracking information but not taken into possession by the customer. Delivery acceptance is required for initiating any warranty claim. Parts refused at time of delivery will be subject to a twenty-five percent (25%) handling & restocking fee and the purchaser will pay for all shipping charges.
        </p>
        <h2>
        REFUND POLICY
        </h2>
        <p>
        Once the item is returned by the customer, the part will be inspected and upon approval a credit request will be forwarded to accounting. Customer refunds are issued in 15-20 business days once the returned part has been verified and inspected.
        </p>
        <p>
        QUALITY AUTO SALVAGE, LLC will not authorize any credit or accept any return because of damage that happens in the shipping process that is not noted on the delivery receipt.
        </p>
        <p>
        In the event a part is returned that does not fit the specifications listed in this warranty QUALITY AUTO SALVAGE, LLC reserves the right to apply a 25% restocking fee and withhold shipping amounts in the refund.
        </p>
        <p>
        Items ordered for 'testing purposes only' or ordered incorrectly by the customer will not be available for return. Items returned after the warranty period will not be refunded and will be returned to sender. Parts must be received within 30 days of the original shipment delivery date in order to be accepted.
        </p>
        <p>
        Items returned that are not in the original condition shipped (excluding items damaged in shipping and verified by a QUALITY AUTO SALVAGE, LLC representative) will not be refunded.
        </p>
        <p>
        Returning the part is the responsibility of the customer you will be responsible for paying the return shipping. And the shipping charges are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>
        <p>
        Quality Auto will only issue refunds on part purchases within 30 days of original purchase date. Replacements, repairs, or price adjustments do part, extend your limited warranty. Purchaser must contact Quality Auto in writing within 7 days of warranty expiration date in order to file a claim. Purchaser is responsible for the cost to have defective parts professionally diagnosed. Quality Auto will make the final diagnosis as to the cause of the warranted part’s failure, no other party’s opinion shall override Quality Auto’s decision, and this decision will determine the validity of your limited warranty claim. Limited warranty is limited to the original purchaser and the original part only. Limited warranty is nontransferable. Quality Auto is not responsible for additional warranty coverage if parts are deemed defective upon original install. Quality Auto is not responsible for proper diagnosis of original need to repair purchaser’s vehicle. It is the responsibility of the purchaser to have their problem properly diagnosed before part purchase. THESE MATERIALS ARE PROVIDED WITHOUT ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT
        </p>
        <p>
        QUALITY AUTO SALVAGE, LLC reserves the right to replace any defective parts. When replacing a defective electrical part, only one replacement will be given. All refunds are subject to a 25% restocking fee. Quality Auto will issue a refund on a part only if the following conditions are met.
        </p>
        
            <p>1. The part bears the identifying mark which appears on all of Quality Auto’s merchandise.</p>
        <p>2. The part has not been altered, modified, disassembled, overheated or damaged.</p>
        <p>3. The customer has their original invoice.</p>
        <p>4. The part is not a custom body cut.</p>
        <p>5. The part is returned within 30 days of the original purchase date.</p>
        <p>6. All expedited, and air shipping charges are non-refundable.</p>
        <p>7. We do not accept returns on recycled tires.</p><br />
        <p><span>Below are some exceptions that will either void a warranty or are exceptions to our 30 day standard warranty</span></p>
        <p>
            <span>Engines</span> are sold as a long block assembly, which means they are only to include the main block and head(s). The manifolds, gaskets, seals, hoses, oil pan, timing belts and covers, fuel injection or carburetor, are not. However, we guarantee only the long block. Accessories such as but not limited to Turbos, Starters, air compressors, alternator, power steering pumps, optical distributors or electrical water pumps are usually not included nor under warranty in regard to the sale and/or warranty of an engine. If these parts are purchased separately, they will be under warranty. Other items that may need to be replaced are the water pump, distributor cap, spark plugs and wires and possibly timing chain. QUALITY AUTO SALVAGE LLC will not be held liable for these parts listed as they are considered high-wear parts.
        </p>
        <p>
        Some parts may come with accessories attached. These parts are left on the main part assembly to aid in the installation process, but are not covered in your limited warranty. Warranties do not cover any extra costs involved in the replacement of a defective part, including, but not limited to: labor charges, gaskets, seals, fluids, towing, rental car, hotel charges or waste disposal fees.
        </p>
        <p>
        Warranties are void if new seals, fluids, gaskets and filters are not replaced at the time of installation. Part failures due to lack of lubrication will void your limited warranty. Parts that have been altered, modified, disassembled, overheated, or damaged by misuse or accident subsequent to purchase voids your limited warranty. All guarantees shall be void if the part or parts are not returned to Quality Auto in the same condition in which they were sold or do not bear the identifying mark which appears on all of Quality Auto’s merchandise. Limited warranty is void if Overheat Indicator Tab(s) are removed, melted, or altered.
        </p>
        <p>
        Leaking gaskets or seals are not covered. We do not warranty on oil leaks/damage on engines or transmissions due to non-replaced seals, gaskets or filters.
        </p>
        <p><span>Instrument and Speedometer Clusters:</span>
         We do not guarantee mileage. For particular vehicles such as but not limited to Lexus, Audi, BMW, Mercedes and Cadillac the customer will be required to take the cluster to a dealership to have the unit reprogrammed. QUALITY AUTO SALVAGE, LLC will not return or refund any units until the customer can provide written documentation from an Authorized Dealer proving the part was reprogrammed and still not functioning properly.
        </p>
        <p><span>Carburetors:</span> We guarantee only the ability to be rebuilt.</p>
        <p><span>Rotors: </span>are guaranteed to be machinable only since normal use can leave them slightly warped. They will be guaranteed against cracks or non-machinable surface damage</p>
        <p>
            <span>Cylinder heads</span> are guaranteed to not be warped or cracked. Rings and valves may need to be re-machined.
        </p>
        <p>
        Orders of "<span>Block Only</span>" (Short or Long Block) are guaranteed to be rebuildable only.
        </p>
        <p><span>Electrical items such as engine computers and body control modules, transmission modules, transfer case modules</span><br />
        are only guaranteed to have the correct manufacturer part number and are not sold for testing purposes. All electrical items have a replacement warranty only. Up to one replacement will be sent in order to rectify a non-working module. Modules may need to be reset by the dealer. In the event this is required the part cannot be returned until verified by the dealer that the part has been reset properly. Electrical parts that have been modified in any way will not be refunded.
        </p>
        <p>
            <span>Body parts, fuse box, any type of wiring harness and cuts are non-refundable and sold AS-IS without any warranty expressed or implied.</span>
        
        </p>
        <p><span>truts</span> are sold with working condition warranty only. We do not guarantee to actual ride quality of the shocks or springs. We do guarantee that the springs and strut tower will be in working condition. However, shocks may need to be replaced to improve ride quality.
        </p>
        <p><span>Control</span> arms are guaranteed to be true and straight. Any rubber bushings or non-metal parts attached to control arms are not guaranteed.</p>
        <p><span>Bushings</span> and Ball Joints are not guaranteed on parts</p>
        <p>
            <span>Transmissions:</span> We guarantee that it will shift properly, gears to be good and bearings to be good. Thoroughly clean all components of the transmission including oil pan before assembly. Replace oil and filter in all automatic transmissions. You must replace ALL seals and gaskets prior to installation. Flush & flow test cooler and lines. Fully engage torque converter in front pump. Manual transmission you must install a new clutch, pressure plate, and slave cylinder. You must also have your fly wheel turned prior to installation. Fill and check fluid to insure proper levels. Leaking gaskets or seals are not covered. We do not warranty on oil leaks/damage on engines or transmissions due to non-replaced seals, gaskets or filters. Any failure due to transmission coolant lines not being flushed at the time of installation is not covered. Transmission may need to be relearned, reset or flashed by dealer AND may need electronic valve body replaced; this is not covered. External switches and sensors on transmissions are not covered.
        </p>
        <p>
            Seals in <span>turbos</span> are not guaranteed to be perfect. These seals may need replacing during the warranty period.
        </p>
        <p>
            <span>Doors</span> are complete assemblies however they are not guaranteed to come with such accessories as windows, window regulators, handles, hinges, or interior panels. We only guarantee the door shell.
        </p>
        <p>
        Other body parts such as hoods, fenders, bumpers, quarter panels, and header panels are not guaranteed to come with hinges, hood ornaments, latches, trim, headlights, or grilles.
        </p>
        <p>Specific <span>colors</span> may be requested for body parts, but a color match is not guaranteed. We recommend that body parts be repainted to match your vehicle. Body parts that do not match the color of your vehicle will not be available for return for that reason.</p>
        <p>
                    We stand behind our warranties and want to make you, our customer, at ease when purchasing a used auto part.
                    If you have any questions feel free to call us at{' '}
                    <a href="tel:+18887202716" onClick={handleCall}>
                        <strong>+1 (888) 720-2716</strong>
                    </a>
                </p>
      </div>
    </div>
  );
};

export default WarrantyReturnPolicy;
