import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './formPage.css';

const FormPage = () => {
    const [formData, setFormData] = useState({
        year: '',
        makeModel: '', // Combined make and model selection
        part: '',
        name: '',
        email: '',
        contact: '',
        comments: '',
        zipCode: '',
        consent: false,
        captcha: '',
        state: '',
    });

    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    const captchaRef = useRef(null);

    // Function to generate random captcha text
    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';

        for (let i = 0; i < 5; i++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setCaptchaText(text);
    };

    // Function to handle user input
    const validateCaptcha = () => {
        if (userInput.toUpperCase() === captchaText.toUpperCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
            alert('Captcha does not match. Please try again.');
            setUserInput('');
            generateCaptcha();
        }
    };

    // Function to handle user input
    const handleUserInput = (e) => {
        setUserInput(e.target.value);
        if (e.target.value.toUpperCase() === captchaText.toUpperCase()) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    // Initialize CAPTCHA text on component mount
    useEffect(() => {
        generateCaptcha();
    }, []);



    const dummyYears = Array.from({ length: 74 }, (_, index) => 2024 - index); // Years from 1950 to 2023

    const dummyData = {
        'Brand A': {
            models: ['Model X1', 'Model X2', 'Model X3'],
        },
        'Brand B': {
            models: ['Model Y1', 'Model Y2', 'Model Y3'],
        },
        'Brand C': {
            models: ['Model Z1', 'Model Z2', 'Model Z3'],
        },
        // Add more brands and models
    };



    const dummyParts = ["A Pillar", "A Pillar Trim", "A/C Bracket", "A/C Compressor", "A/C Compressor Clutch Only", "A/C Condenser", "A/C Condenser Fan", "A/C Control Computer", "A/C Evaporator", "A/C Evaporator Housing only", "A/C Heater Control (see also Radio or TV Screen)", "A/C Hose", "A/C Wiring Harness", "Accelerator Cable", "Accelerator Parts", "Adaptive Cruise Projector", "Air Bag", "Air Bag Clockspring", "Air Bag Ctrl Module", "Air Box/Air Cleaner", "Air Cond./Heater Vents", "Air Flow Meter", "Air Pump", "Air Ride Compressor", "Air Shutter", "Air Tube/Resonator", "Alternator", "Alternator Bracket", "Amplifier/Radio", "Antenna", "Anti-Lock Brake Computer", "Anti-Lock Brake Pump", "Armrest", "Ash Tray/Lighter", "Audiovisual (A/V) (see also TV Screen)", "Automatic Headlight Dimmer", "Auto. Trans. Cooler", "Axle Actuator (4WD)", "Axle Assy Fr (4WD w. Housing)", "Axle Assy Rear (w. Housing)", "Axle Beam Front (2WD, incl I Beam Susp)", "Axle Beam Rear (FWD)", "Axle Flange", "Axle Housing Only", "Axle Shaft", "B Pillar Trim", "Back Door (above rear bumper)", "Back Door Glass", "Back Door Handle, Inside", "Back Door Handle, Outside", "Back Door Hinge", "Back Door Moulding", "Back Door Shell", "Back Door Trim Panel", "Back Glass", "Back Glass Regulator", "Back Glass Shock", "Backing Plate, Front", "Backing Plate, Rear", "Backup Camera", "Backup Light", "Battery", "Battery Cable", "Battery Terminal", "Battery Tray", "Bed, Pickup", "Bed Floor (Pickup)", "Bed Front Panel (Pickup)", "Bed Liner", "Bed Side, Pickup", "Bell Housing", "Belt Tensioner", "Blind Spot Camera", "Blower Motor", "Body Wiring Harness", "Brake/Clutch Pedal", "Brake Booster", "Brake Proportioning Valve", "Brake Rotor/Drum, Front", "Brake Rotor/Drum, Rear", "Brake Shoes/Pads", "Brush Guard", "Bumper Assy (Front) includes cover", "Bumper Assy (Rear) includes cover", "Bumper Bracket (Misc)", "Bumper Cover (Front)", "Bumper Cover (Rear)", "Bumper End Cap", "Bumper Energy Absorber (Front)", "Bumper Energy Absorber (Rear)", "Bumper Face Bar (Front)", "Bumper Face Bar (Rear)", "Bumper Filler Panel", "Bumper Guard (Front)", "Bumper Guard (Rear)", "Bumper Impact Strip", "Bumper Reinforcement (Front)", "Bumper Reinforcement (Rear)", "Bumper Shock", "Bumper Step Pad", "C Pillar Trim", "Cab", "Cab Back Panel", "Cab Clip, no cowl", "Cab Corner", "Cabin Air Filter", "Cabin Fuse Box", "Caliper", "Camera Projector", "Camshaft", "Camshaft Housing", "Carburetor (see also Throttle Body)", "Cargo Cover/Shade", "Cargo Lamp", "Carpet", "Carrier (see also Differential)", "Carrier Case", "CD Player/Radio", "Center Cap (Wheel)", "Center Pillar", "Charging Port Door Assembly", "Chassis Control Computer (not Engine)", "Clock", "Clockspring (Air Bag)", "Clutch Cable", "Clutch Disc", "Clutch Fork", "Clutch Master Cylinder", "Coil/Air Spring", "Coil/Igniter", "Column Switch", "Computer Box Engine", "Computer Box Not Engine", "Condenser", "Condenser/Radiator mtd. Cooling Fan", "Connecting Rod, Engine", "Console, Front", "Console, Rear", "Control Arm, Front Lower", "Control Arm, Front Upper", "Control Arm, Rear Lower", "Control Arm, Rear Upper", "Convertible Top", "Convertible Top Boot", "Convertible Top Lift", "Convertible Top Motor", "Convertible Windscreen", "Coolant Pump", "Cooling Fan (Rad and Con mtd.)", "Core (Radiator) Support", "Cowl", "Cowl Vent Panel", "Crank Pulley (Harmonic Balancer)", "Crankshaft", "Cruise Control Computer", "Cruise Control Servo/Regulator", "Cruise Speed Controler", "Cylinder Head (Engine)", "D Pillar", "Dash/Interior/Seat Switch", "Dash Bezel (see also Instrument or Radio Bezel)", "Dash Pad", "Dash Panel", "Dash Wiring Harness", "Deck Lid Assembly", "Deck Lid/Trunk Lid Shell", "Diesel Particulate Filter", "Differential Assembly (see also Carrier)", "Differential Case Only", "Differential Flange Only", "Distributor", "Door Back (door above rear bumper)", "Door Front", "Door Handle, Inside", "Door Handle, Outside", "Door Lock Striker", "Door Mirror Cover", "Door Outer Repair Panel, Back", "Door Outer Repair Panel, Front", "Door Outer Repair Panel, Rear", "Door Rear (side of vehicle)", "Door Shell, Back", "Door Shell, Front", "Door Shell, Rear", "Door Window Crank Handle", "Drag Link", "Drive-By-Wire", "Drive Shaft, Front", "Drive Shaft, Rear", "Driving Lamp Bezel", "EGR Valve", "Electric Door Motor (not Window)", "Electric Window Motor", "Electrical Part Misc", "Electronic Transmission Shifter", "Emblem", "Emergency Brake", "Engine", "Engine Block", "Engine Computer", "Engine Core", "Engine Cover", "Engine Cradle", "Engine Cylinder Head", "Engine Fuse Box", "Engine Mounts", "Engine Oil Pan", "Engine Wiring Harness", "Exhaust Assembly", "Exhaust Cross Pipe", "Exhaust Fluid Pump", "Exhaust Fluid Tank", "Exhaust Heat Shield", "Exhaust Lead Pipe", "Exhaust Manifold", "Exhaust Muffler", "Exhaust Pipe", "Exhaust Resonator", "Exhaust Tail Pipe", "Fan Blade", "Fan Clutch", "Fender", "Fender Extension/Flare", "Fender Inner Panel", "Fender Moulding", "Fender Skirt", "Fender/Wheelhouse Inner Liner", "Flex Plate", "Floor Mats", "Floor Pan", "Floor Shift Assembly", "Flywheel", "Fog Lamp", "Fog Lamp Bezel", "Fog Lamp Bracket", "Fog Lamp Rear", "Fog Lamp Switch", "Frame", "Frame Front Section Only", "Frame Horn", "Frame Upper & Lower Rails", "Front Axle Assembly (4WD w Housing)", "Front Axle Beam (2WD, incl I Beam Susp)", "Front Axle Shaft", "Front Bumper Assembly (includes cover)", "Front Bumper Cover", "Front Bumper Face Bar", "Front Bumper Guard", "Front Bumper Reinforcement", "Front Console", "Front Door", "Front Door Glass", "Front Door Handle, Inside", "Front Door Handle, Outside", "Front Door Hinge", "Front Door Mirror", "Front Door Mirror Glass", "Front Door Moulding", "Front Door Regulator", "Front Door Shell", "Front Door Switch", "Front Door Trim Panel", "Front Door Vent Glass", "Front Door Vent Glass Regulator", "Front Door Window Motor", "Front Drive Shaft", "Front End Assembly (Nose)", "Front Seat Belt Assembly", "Front Valance", "Front Window Regulator", "Fuel Cap", "Fuel Cell", "Fuel Cooler", "Fuel Distributor (& Misc. Injection)", "Fuel Filler Door", "Fuel Filler Neck", "Fuel Gauge", "Fuel Injector (& Misc. Injection)", "Fuel Injector Pump", "Fuel Line", "Fuel Pump", "Fuel Rail (& Misc. Injection)", "Fuel Tank", "Fuel Tank Sending Unit", "Fuse Box (Cabin)", "Fuse Box (Engine)", "Gas Cap", "Gas Tank", "Gate Interior Trim Panel", "Gate Window Regulator", "Gate/Lid", "Gauge (Misc)", "Generator", "Glass, Back", "Glass, Front Door", "Glass, Front Vent", "Glass, Quarter Window", "Glass, Rear Door", "Glass, Rear Vent", "Glass, Special (see also Sunroof/TTop)", "Glass, Windshield", "Glove Box", "GPS Screen (see also Radio or Heater/AC Control)", "Grille", "Harmonic Balancer", "Hatch/Trunklid", "Hatch/Trunklid Shock", "Head", "Header Panel", "Headlamp Ballast", "Headlamp Bulb", "Headlamp Motor", "Headlight Assembly", "Headlight Bracket", "Headlight Bulb", "Headlight Cover", "Headlight Door", "Headlight Motor", "Headlight Switch", "Heads Up Display", "Heater Assy", "Heater Core", "Heater Motor", "Heater/AC Control", "Hood", "Hood Hinge", "Hood Insulation Pad", "Hood Latch", "Hood Ornament", "Hood Scoop", "Hood Shock", "Hood Strut", "Hub", "Hub Cap/Wheel Cover", "Hub Lock", "Hybrid Converter/Inverter", "Idler Arm", "Ignition Module (see also Ignitor/Coil)", "Ignition Switch", "Ignitor/Coil", "Info Screen (see also Radio or Heater/AC Control)", "Inner Fender", "Inner Fender Liner", "Inner Panel (Door)", "Inner Panel (Quarter)", "Inner Pillar", "Instrument Cluster (see also Speedo)", "Intake Manifold", "Intercooler", "Interior Complete", "Interior Light", "Interior Trim Panel (Gate/Lid)", "Interior Trim Panel (Quarter)", "Interior Trim Panel, Door (Front)", "Interior Trim Panel, Door (Rear)", "Jack Assembly", "Keys/Latches and Locks", "Knee Assembly", "Latches", "Leaf Spring, Front", "Leaf Spring, Rear", "License Lamp", "Lid/Gate", "Lid Interior Trim Panel", "Lock Actuator", "Lockout Hub", "Luggage Rack", "Marker/Fog Light, Front", "Marker/Side Light, Rear", "Master Cylinder", "Mirror, Rear View", "Moulding (Back Door)", "Moulding (Fender)", "Moulding (Front Door)", "Moulding (Lid/Hatch/Gate)", "Moulding (Quarter Panel/Bed Side)", "Moulding (Rear Door)", "Moulding (Rocker)", "Moulding (Windshield)", "Oil Cooler", "Oil Filter Adapter", "Oil Pan, Engine", "Oil Pan, Transmission", "Oil Pump, Engine", "Overdrive Unit", "Owner's Manual", "Parcel Shelf", "Park/Fog Lamp Front", "Piston", "Piston Ring", "Pitman Arm", "Power Brake Booster", "Power Inverter (Hybrid)", "Power Steering Assy", "Power Steering Control Valve", "Power Steering Cooler", "Power Steering Motor", "Power Steering Pressure Cyl", "Power Steering Pressure Hose", "Power Steering Pump", "Power Steering Rack/Box/Gear", "Power Steering Reservoir", "Power Window Switch", "Pressure Plate", "Quarter Interior Trim Panel", "Quarter Moulding", "Quarter Panel", "Quarter Panel Extension", "Quarter Repair Panel", "Quarter Window", "Quarter Window Motor", "Quarter Window Regulator", "Rack & Pinion (Steering)", "Radiator", "Radiator Core Support", "Radiator Cover Baffle", "Radiator Fan Shroud", "Radiator Overflow Bottle", "Radio/CD (see also A/C Control or TV Screen)", "Radius Arm, Front", "Radius Rod, Front", "Rear Axle Assy (RWD)", "Rear Axle Beam (FWD)", "Rear Body Panel", "Rear Bumper Assembly (includes cover)", "Rear Bumper Cover", "Rear Bumper Face Bar", "Rear Bumper Guard", "Rear Bumper Reinforcement/Misc", "Rear Clip", "Rear Console", "Rear Crossmember", "Rear Door (side of vehicle)", "Rear Door Handle, Inside", "Rear Door Handle, Outside", "Rear Door Hinge", "Rear Door Moulding", "Rear Door Regulator", "Rear Door Shell", "Rear Door Switch", "Rear Door Trim Panel", "Rear Door Vent Glass", "Rear Door Vent Glass Regulator", "Rear Door Window Motor", "Rear Drive Shaft", "Rear Finish Panel", "Rear Gate/Lid", "Rear Gate Window Motor", "Rear Knuckle/Stub Axle", "Rear Lower Valance", "Rear Seat Belt Assembly", "Rear Suspension (see also Control Arms)", "Rear Suspension Locating Arm", "Rear Suspension Trailing Arm", "Rear Window Defogger", "Rear Window Washer Motor", "Rear Window Wiper Motor", "Rocker Arm", "Rocker Panel (see also Center Pillar)", "Roll Bar", "Roof", "Roof Panel (see also Sunroof)", "Roof Rack", "Running Boards", "Seat (see also Front & Rear)", "Seat Belt Motor", "Seat Belt Retractor", "Seat Belt Speaker", "Seat Belt Track (Electric)", "Seat Motor", "Seat Switch", "Seat Track, Front Only", "Sensor (Body, Misc)", "Sensor (Chassis, Misc)", "Sensor (Drivetrain, Misc)", "Sensor (Electrical)", "Sensor (Fuel Injection)", "Sensor (MISC)", "Shifter Assembly (Floor)", "Shifter Linkage", "Shifter Linkage Cable", "Shock Absorber", "Slave Cylinder", "Sliding Door", "Sliding Door Handle", "Sliding Door Motor", "Sliding Door Shell", "Sliding Door Track", "Sliding Door Track Roller", "Spare Tire Carrier", "Speaker", "Special Glass", "Speedometer (see also Instr. Cluster)", "Spindle", "Spoiler, Front", "Spoiler, Rear", "Spring Hanger", "Stabilizer Bar Only", "Starter", "Steering Column", "Steering Coupler", "Steering Knuckle (See Also Knee & Strut)", "Steering Pump", "Steering Rack/Box/Gear", "Steering Wheel", "Strut (see also Knee Assy)", "Strut Tower Brace", "Sun Roof / T-Top", "Sun Roof Motor", "Sunvisor", "Supercharger/Turbocharger", "Tachometer", "Tail Light", "Tailgate/Trunklid", "Tailgate Hinge", "Tailgate Lift Motor", "Thermostat Housing", "Third Brake Light", "Throttle Body/Throttle Valve Housing", "Throttle Cable", "Tie Rod", "Timing Belt/Chain", "Timing Cover", "Timing Gears", "Tire", "Tire Pressure Gauge", "Tire Pressure Monitor", "Tire Sensor", "Tonneau Cover", "Torque Convertor", "Torsion Bar", "Trailer Hitch/Tow Hook/Winch", "Trans OD Unit", "Transaxle Housing Only", "Transfer Case", "Transfer Case Adapter", "Transfer Case Core", "Transfer Case Electric Motor", "Transfer Case Switch", "Transmission", "Transmission Bellhousing", "Transmission Computer", "Transmission Core", "Transmission Crossmember", "Transmission Front Pump",
        "Transmission Mount",
        "Transmission Pan",
        "Transmission Torque Converter",
        "Transmission Valve Body",
        "Transmission Wiring Harness",
        "Trim Ring",
        "Trunk Lid Pull Down Motor",
        "Trunk Lid/Hatch",
        "Trunk Lid/Hatch Hinge",
        "Trunk Lid/Hatch Shock",
        "Trunk Lid/Tailgate Moulding",
        "TTop/Sunroof",
        "Turbo/Supercharger Core",
        "Turbocharger/Supercharger",
        "Turn Signal/Fog Lamp",
        "TV Screen (see also Radio or Heater/AC Control)",
        "Uniside",
        "Vacuum Pump",
        "Vacuum Storage Tank",
        "Valance, Front",
        "Valance, Rear",
        "Valve Cover",
        "Vapor Canister",
        "Voltage Regulator",
        "Washer Nozzle",
        "Water Pump",
        "Water Separator",
        "Weather Stripping",
        "Wheel (display w image)",
        "Wheel (display w/o image)",
        "Wheel Bearing",
        "Wheel Cover/Hubcap (display w image)",
        "Wheel Cover/Hubcap (display w/o image)",
        "Wheel Lug Nut",
        "Wheel Opening Moulding",
        "Wheelchair Lift",
        "Wheelchair Ramp",
        "Wheelhouse (Rear)",
        "Winch",
        "Window Motor",
        "Window Regulator (Front)",
        "Window Regulator (Rear)",
        "Window Shade",
        "Window Switch (Front Door)",
        "Window Switch (Rear Door)",
        "Window Washer Motor, Rear",
        "Windshield",
        "Windshield Frame",
        "Windshield Hinge",
        "Windshield Washer Motor (Front)",
        "Windshield Washer Reservoir",
        "Wiper Arm",
        "Wiper Linkage",
        "Wiper Motor, Front (Windshield)",
        "Wiper Motor, Rear",
        "Wiring Harness (Air Conditioning)",
        "Wiring Harness (Body)",
        "Wiring Harness (Dash)",
        "Wiring Harness (Engine)",
        "Wiring Harness (Lamp)",
        "Wiring Harness (Misc)",
        "Wiring Harness (Transmission)",
        "Yoke/U-Joint"]; // Common parts for all models



    const usStates = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
        'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
        'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'Yukon'
    ];

    const [showSubmit, setShowSubmit] = useState(false);

    const handleYearChange = (e) => {
        const selectedYear = e.target.value;
        setFormData({
            ...formData,
            year: selectedYear,
            makeModel: '',
            part: '',
        });
        setShowSubmit(false);
    };

    const handleMakeModelChange = (e) => {
        const selectedMakeModel = e.target.value;
        setFormData({
            ...formData,
            makeModel: selectedMakeModel,
            part: '',
        });
        setShowSubmit(false);
    };

    const handleChange = (name, value) => {
        let updatedValue = value;

        if (name === 'zipCode' && value.length > 5) {
            updatedValue = value.slice(0, 5); // Limit to 5 characters
        }

        setFormData({
            ...formData,
            [name]: updatedValue,
        });

        setShowSubmit(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or any necessary action here
        // This function will be called when the form is submitted
    };

    const isFormIncomplete = !(
        formData.year &&
        formData.makeModel &&
        formData.part &&
        formData.name &&
        formData.email &&
        formData.contact &&
        formData.zipCode.length === 5 &&
        formData.state
    );

    return (
        <form className="form-container right-aligned" onSubmit={handleSubmit}>
            <h2 style={{color:'white'}}>Get An Instant Free Quote!!!</h2>
            <div className="form-element">
                <div>
                    <label htmlFor="year">Year:</label>
                    <select name="year" id="year" value={formData.year} onChange={handleYearChange}>
                        <option value="">Select a Year</option>
                        {dummyYears.map((yearOption, index) => (
                            <option key={index} value={yearOption}>
                                {yearOption}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="makeModel">Make & Model:</label>
                    <select
                        name="makeModel"
                        id="makeModel"
                        value={formData.makeModel}
                        onChange={handleMakeModelChange}
                        disabled={!formData.year}
                    >
                        <option value="">Select a Make & Model</option>
                        {Object.keys(dummyData).map((brand, index) => (
                            dummyData[brand].models.map((model) => (
                                <option key={`${brand}-${model}`} value={`${brand}-${model}`}>
                                    {`${brand} - ${model}`}
                                </option>
                            ))
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="part">Part:</label>
                    <select
                        name="part"
                        id="part"
                        value={formData.part}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        disabled={!formData.makeModel}
                    >
                        <option value="">Select a Part</option>
                        {dummyParts.map((partOption, index) => (
                            <option key={index} value={partOption}>
                                {partOption}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="name" name="name" id="name" value={formData.name} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="contact">Contact:</label>
                    <div className="contact-input">
                        <PhoneInput
                            country="us"
                            inputProps={{
                                name: 'contact',
                                id: 'contact',
                                required: true,
                                autoFocus: true,
                                style: { width: '100%' }, // Adjust the width as needed
                            }}
                            value={formData.contact}
                            onChange={(value) => handleChange('contact', value)}
                        />

                    </div>

                </div>
            </div>
            <div className="form-element">
                <div>
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        maxLength={5}
                        pattern="[0-9]*"
                    />
                </div>
            </div>

            <div className="form-element">
                <div>
                    <label htmlFor="state">State:</label>
                    <select name="state" id="state" value={formData.state} onChange={(e) => handleChange(e.target.name, e.target.value)}>
                        <option value="">Select a State</option>
                        {usStates.map((stateOption, index) => (
                            <option key={index} value={stateOption}>
                                {stateOption}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea name="comments" id="comments" value={formData.comments} onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
            </div>


            <div className="form-element">
                <div className="captcha-section">
                    <div className="captcha-code">
                        <p>{captchaText}</p>
                    </div>
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleUserInput}
                        placeholder="Enter captcha here"
                        ref={captchaRef}
                    />
                    {isCorrect && <p>Captcha matched!</p>}
                </div>
                <div className="consent-section">
                    <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="consent">
                        I Consent to Contact, Send me SMS and 
                        <a href="/terms-condition" target="_blank" rel="noopener noreferrer">
                            <span> Terms & Conditions</span>
                        </a>
                    </label>
                </div>
            </div>
            <button className="form-element" type="submit" style={isFormIncomplete ? { display: 'none' } : {}}>
                Find My Part Now
            </button>
        </form>
    );
};

export default FormPage;
