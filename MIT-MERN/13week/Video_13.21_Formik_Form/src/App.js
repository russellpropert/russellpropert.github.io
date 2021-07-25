
import './App.css';
import {useFormik} from 'formik';

function App() {

  const regEx = {
    aircraftIdentErrorRegEx: /(^[A-Za-z][0-9])/,
    airspeedErrorRegEx: /^[1-9]\d+$/,
    departureErrorRegEx: /^[A-Za-z0-9]+$/,
    departTimeErrorRegEx: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    altitudeErrorRegEx: /^[1-9]\d+$/,
    destinationErrorRegEx: /^[A-Za-z0-9]+$/,
  };

  const formik = useFormik({
    initialValues: {
      type: '',
      aircraftIdent: '',
      airspeed: '',
      departure: '',
      departTime: '',
      altitude: '',
      destination: '',
      briefing: ''
    },
    onSubmit: values => {
      console.log('form values: ', values)
    },
    validate: values => {
      let errors = {};
      if (values.type === '') errors.type = 'A type must be selected.';
      if (!regEx.aircraftIdentErrorRegEx.test(values.aircraftIdent) || values.aircraftIdent.length > 6) errors.aircraftIdent = 'Invalid tail number';
      if (!regEx.airspeedErrorRegEx.test(values.airspeed) || values.airspeed > 2000) errors.airspeed = 'Invalid airspeed';
      if (!regEx.departureErrorRegEx.test(values.departure) ||values.departure.length > 4 || values.departure.length < 3) errors.departure = 'Invalid departure airport';
      if (!regEx.departTimeErrorRegEx.test(values.departTime)) errors.departTime = 'Invalid time format';
      if (!regEx.altitudeErrorRegEx.test(values.altitude)) {errors.altitude = 'Invalid altitude';}
      if (regEx.altitudeErrorRegEx.test(values.altitude) && values.altitude > 60000) {errors.altitude = 'Heading to space?';} 
      if (!regEx.destinationErrorRegEx.test(values.destination) || values.destination.length > 4 || values.destination.length < 3) errors.destination = 'Invalid destination';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Type Of Flight</div>
        <select
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
        >
          <option hidden>-- Chose Type --</option>
          <option>VFR</option>
          <option>IFR</option>
          <option>DVFR</option>
        </select>
        {formik.errors.type ? <div style={{color: 'red'}}>{formik.errors.type}</div> : null}

        <div>Aircraft Identification</div>
        <input 
          type="text"
          name="aircraftIdent"
          value={formik.values.aircraftIdent}
          onChange={formik.handleChange}
        />
        {formik.errors.aircraftIdent ? <div style={{color: 'red'}}>{formik.errors.aircraftIdent}</div> : null}

        <div>Airspeed</div>
        <input 
          type="text"
          name="airspeed"
          value={formik.values.airspeed}
          onChange={formik.handleChange}
        />
        {formik.errors.airspeed ? <div style={{color: 'red'}}>{formik.errors.airspeed}</div> : null}

        <div>Departure Airport</div>
        <input 
          type="text"
          name="departure"
          value={formik.values.departure}
          onChange={formik.handleChange}
        />
        {formik.errors.departure ? <div style={{color: 'red'}}>{formik.errors.departure}</div> : null}

        <div>Departure Time (HH:MM)</div>
        <input 
          type="text"
          name="departTime"
          value={formik.values.departTime}
          onChange={formik.handleChange}
        />
        {formik.errors.departTime ?<div style={{color: 'red'}}>{formik.errors.departTime}</div> : null}

        <div>Altitude</div>
        <input 
          type="text"
          name="altitude"
          value={formik.values.altitude}
          onChange={formik.handleChange}
        />
        {formik.errors.altitude ? <div style={{color: 'red'}}>{formik.errors.altitude}</div> : null}

        <div>Destination Airport</div>
        <input 
          type="text"
          name="destination"
          value={formik.values.destination}
          onChange={formik.handleChange}
        />
        {formik.errors.destination ? <div style={{color: 'red'}}>{formik.errors.destination}</div> : null}

        <div>Weather Briefing
          <input 
            type="checkbox"
            name="briefing"
            value={formik.values.briefing}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
