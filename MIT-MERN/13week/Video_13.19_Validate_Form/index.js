const FlightPlan = () => {
  const [values, handleChange] = useForm({
    type: '',
    aircraftIdent: '',
    airspeed: '',
    departure: '',
    departTime: '',
    altitude: '',
    destination: '',
    briefing: ''
  });

  const [errors, setError] = React.useState({
    typeError: '',
    aircraftIdentError: '',
    aircraftIdentErrorRegEx: /(^[A-Za-z][0-9])/,
    airspeedError: '',
    airspeedErrorRegEx: /^[1-9]\d+$/,
    departureError: '',
    departureErrorRegEx: /^[A-Za-z0-9]+$/,
    departTimeError: '',
    departTimeErrorRegEx: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    altitudeError: '',
    altitudeErrorRegEx: /^[1-9]\d+$/,
    destinationError: '',
    destinationErrorRegEx: /^[A-Za-z0-9]+$/,
  });

  const errorMessageRegEx = (value, error, regEx, test, message) => {
    const result = (!regEx.test(value));
    (result || test) ? errors[error] = message : errors[error] = '';
  };

  const validate = () => {

    (values.type == '') ?
      errors.typeError = 'A type must be selected' :
      errors.typeError = '';
    
    errorMessageRegEx(
      values.aircraftIdent, 
      'aircraftIdentError',
      errors.aircraftIdentErrorRegEx,
      (values.aircraftIdent.length > 6),
      'Invalid tail number'
    );

    errorMessageRegEx(
      values.airspeed, 
      'airspeedError',
      errors.airspeedErrorRegEx,
      (values.airspeed > 2000),
      'Invalid airspeed'
    );

    errorMessageRegEx(
      values.departure, 
      'departureError',
      errors.departureErrorRegEx,
      (values.departure.length > 4 || values.departure.length < 3),
      'Invalid departure airport'
    );

    errorMessageRegEx(
      values.departTime, 
      'departTimeError',
      errors.departTimeErrorRegEx,
      false,
      'Invalid time format'
    );

    if (values.altitude > 65000) { 
      errorMessageRegEx(
        values.altitude,
        'altitudeError',
        errors.altitudeErrorRegEx,
        true,
        'Heading to space?'
      );
    } else {
      errorMessageRegEx(
        values.altitude, 
        'altitudeError',
        errors.altitudeErrorRegEx,
        false,
        'Invalid altitude'
      );
    }

    errorMessageRegEx(
      values.destination,
      'destinationError',
      errors.destinationErrorRegEx,
      (values.destination.length > 4 || values.destination.length < 3),
      'Invalid destination'
    );

    setError({... errors});
    console.log(errors);

  }

  const handle = () => {
    console.log('values: ', values);
    validate();
  }

  const results = 
    <>
      <div>Type: {values.type}</div>
      <div>Aircraft ID: {values.aircraftIdent}</div>
      <div>Airspeed: {values.airspeed}</div>
      <div>Departure Airport: {values.departure}</div>
      <div>Departure Time: {values.departTime}</div>
      <div>Altitude: {values.altitude}</div>
      <div>Destination: {values.destination}</div>
      <div>Weather Briefing {(values.briefing) ? 'Yes' : 'No'}</div>
    </>

  return (
    <>
      <div>Type Of Flight</div>
      <select
        name="type"
        value={values.type}
        onChange={handleChange}
      >
        <option hidden>-- Chose Type --</option>
        <option>VFR</option>
        <option>IFR</option>
        <option>DVFR</option>
      </select>
      <div style={{color: 'red'}}>{errors.typeError}</div>

      <div>Aircraft Identification</div>
      <input 
        type="text"
        name="aircraftIdent"
        value={values.aircraftIdent}
        onChange={handleChange}
      />
      <div style={{color: 'red'}}>{errors.aircraftIdentError}</div>

      <div>Airspeed</div>
      <input 
        type="text"
        name="airspeed"
        value={values.airspeed}
        onChange={handleChange}
      />
      <div style={{color: 'red'}}>{errors.airspeedError}</div>


      <div>Departure Airport</div>
      <input 
        type="text"
        name="departure"
        value={values.departure}
        onChange={handleChange}
      />
      <div style={{color: 'red'}}>{errors.departureError}</div>


      <div>Departure Time (HH:MM)</div>
      <input 
        type="text"
        name="departTime"
        value={values.departTime}
        onChange={handleChange}
      />
      <div style={{color: 'red'}}>{errors.departTimeError}</div>


      <div>Altitude</div>
      <input 
        type="text"
        name="altitude"
        value={values.altitude}
        onChange={handleChange}
      />
      <div style={{color: 'red'}}>{errors.altitudeError}</div>

      <div>Destination Airport</div>
      <input 
        type="text"
        name="destination"
        value={values.destination}
        onChange={handleChange}
      />
      <div style={{color: 'red'}}>{errors.destinationError}</div>

      <div>Weather Briefing
        <input 
          type="checkbox"
          name="briefing"
          value={values.briefing}
          onChange={handleChange}
        />
      </div>

      <button onClick={handle}>Submit</button>
      <div>Results:</div>
      <div>{results}</div>
    </>
  )

}

ReactDOM.render(
  <FlightPlan />,
  document.getElementById('root')
);