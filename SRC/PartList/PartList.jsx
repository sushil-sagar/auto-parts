import React from 'react';
import Image from '../assets/bg17.webp';
import styles from './PartListPage.module.css';

const partList = [
    'BUMPER ASSEMBLY FRONT',
    'FENDER- LEFT AND RIGHT',
    'GRILLE',
    'HEADER PANEL ASSEMBLY',
    'HOOD',
    'RADIATOR CORE SUPPORT',
    'SPOILER/VALANCE- FRONT',
    'BUMPER ASSEMBLY-REAR',
    'DECKLID/TAIL GATE',
    'FRONT DOORS',
    'REAR DOORS',
    'SIDE VIEW MIRRORS',
    'HEADLIGHT DOOR/COVER',
    'HEADLIGHT ASSEMBLY',
    'TAILIGHT ASSEMBLY',
    'FRONT LAMP',
    'HIGH MOUNTED STOP LAMP',
    'ENGINE',
    'AC COMPRESSOR',
    'AIR FLOW METER',
    'AIR INJECTION PUMP',
    'ALTERNATOR',
    'CARBURATOR',
    'CATALYTIC CONVERTER',
    'COI/IGNITOR',
    'DISTRIBUTOR',
    'ENGINE OIL COOLER',
    'EXHAUST MANIFOLD',
    'FAN BLADE',
    'FAN CLUTCH',
    'FUEL INJECTION PARTS',
    'FUEL PUMP',
    'INTERCOOLER',
    'POWER STEERING PUMP',
    'STARTER MOTOR',
    'THROTTLE BODY ASSEMBLY',
    'TURBOCHARGER/SUPERCHARGER',
    'VACUUM PUMP',
    'BELL HOUSING',
    'CLUTCH MASTER CYLINDER',
    'CLUTCH SLAVE CYLINDER',
    'OVERDRIVE UNIT',
    'TORQUE CONVERTER',
    'TRANSAXLE HOUSING',
    'TRANSFER CASE ASSEMBLY',
    'TRANSFER CASE MOTOR',
    'COIL/AIR SPRING',
    'FRONT AXLE BEAM(2WD)',
    'HUB',
    'INDEPENDENT REAR SUSPENSION ASSEMBLY',
    'STRUT',
    'SUSPENSION COMPRESSOR/PUMP',
    'SUSPENSION CROSSMEMBER/K FRAME',
    'TORSION BAR',
    'UPPER CONTROL ARM- FRONT AND REAR',
    'LOWER CONTROL ARM- FRONT AND REAR',
    'KNEE ASSEMBLY',
    'LEAF SPRING- FRONT AND REAR',
    'LOADED BEAM AXLE',
    'REAR KNUCKLE/STUB AXLE',
    'SHOCK ABSORBER',
    'SPINDLE/ KNUCKLE- FRONT',
    'STABILIZER BAR',
    'STEERING COLUMN',
    'STEERING GEAR/RACK AND PINION',
    'POWER STEERING PUMP',
    'IGNITION SWITCH AND KEY',
    'BACK GLASS',
    'DOOR GLASS-FRONT AND REAR',
    'DOOR VENT GLASS-FRONT AND REAR',
    'QUARTER GLASS',
    'ROOF GLASS',
    'ANTI LOCK BRAKE PARTS',
    'BRAKE MASTER CYLINDER',
    'HUBS- LOCKING AND NON LOCKING',
    'POWER BRAKE BOOSTERS',
    'CLUTCH MASTER AND SLAVE CYLINDER',
    'AXLE ASSMEBLY- FRONT AND REAR',
    'AXLE HOUSING',
    'AXLE SHAFT',
    'CARRIER ASSEMBLY',
    'DIFFRENCIAL ASSEMBLY',
    'DIFFRENCIAL CASE',
    'RING GEAR AND PINION',
    'DRIVE SHAFT- FRONT AND REAR',
    'AIF FLOW METER',
    'CARBURATOR',
    'FUEL INJECTION PARTS',
    'FUEL PUMP',
    'FUEL SENDING UNIT',
    'THROTTLE BODY',
    'ANTENNA',
    'INFO/GPS/TV SCREEN',
    'RADIO/AUDIO',
    'SPEEDOMETER CLUSTER',
    'CONVERTIBLE TOP LIFT',
    'CONVERTIBLE TOP MOTOR',
    'ROOF ASSEMBLY',
    'ROOF MOTOR',
    'SUNROOF PANEL ASSEMBLY',
    'WIPER MOTOR-FRONT AND REAR',
    'AC COMPRESSOR AND CLUTCH',
    'AC CONDENSER',
    'AC EVAPORATOR AND HOUSING',
    'AC SELECTOR/TEMPERATURE CONTROL',
    'BLOWER MOTOR',
    'HEATER ASSEMBLY',
    'HEATER CORE',
    'RADIATOR SHROUD',
    'RADIATOR/CONDENSER FAN ASSEMBLY',
    'RADIATORS',
    'DOOR ASSEMBLY- FRONT AND REAR',
    'DOOR ELECTRICAL SWITCH',
    'DOOR WINDOW REGULATOR- FRONT AND REAR',
    'DOOR VENT REGULATOR',
    'QUARTER WINDOW REGULATOR',
    'ELECTRIC DOOR MOTOR',
    'ELECTRONIC CONTROL MODULE',
    'CHASSIS CONTROL MODULE',
    
    ];

const PartListPage = () => {
  // Splitting the partList into four equal parts for four columns
  const partsInColumns = [
    partList.slice(0, Math.ceil(partList.length / 4)),
    partList.slice(Math.ceil(partList.length / 4), Math.ceil((2 * partList.length) / 4)),
    partList.slice(Math.ceil((2 * partList.length) / 4), Math.ceil((3 * partList.length) / 4)),
    partList.slice(Math.ceil((3 * partList.length) / 4)),
  ];

  return (
    <div className={styles['part-list-container']}>
      <div className={styles['top-section']}>
        <img src={Image} alt="Quality Auto Salvage" className={styles['image-top']} style={{height:'30vh'}} />
        <h1 className={styles['image-text']}>WE CARRY HUGE STOCK QUALITY AUTO SALVAGE IN OUR STORE.</h1>
      </div>
      <div className={styles['bottom-section']}>
        <h2>Search by Part Type</h2>
        <div className={styles['part-columns']}>
          {partsInColumns.map((column, columnIndex) => (
            <div key={columnIndex} className={styles['part-column']}>
              <ul className={styles['part-list']}>
                {column.map((part, index) => (
                  <li key={index} className={styles['part-item']}>{part}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartListPage;
