//   https://codesandbox.io/s/stoic-benz-1cmkf?file=/index.js:0-1591

import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';


const Basic = () => (

  <div>
    <h1>Flight Plan</h1>
    <Formik
      initialValues={{
        aircraftIdent: '',
        airspeed: '',
        departure: '',
        departTime: '',
        altitude: '',
        destination: '',
        briefing: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="aircraftIdent">Aircraft Identification</label><br />
        <Field id="aircraftIdent" name="aircraftIdent" /><br />
        <br />
        <label htmlFor="airspeed">Airspeed</label><br />
        <Field id="airspeed" name="airspeed" /><br />
        <br />
        <label htmlFor="departure">Departure Airport</label><br />
        <Field id="departure" name="departure" /><br />
        <br />
        <label htmlFor="departTime">Departure Time</label><br />
        <Field id="departTime" name="departTime" /><br />
        <br />
        <label htmlFor="altitude">Altitude</label><br />
        <Field id="altitude" name="altitude" /><br />
        <br />
        <label htmlFor="destination">Destination</label><br />
        <Field id="destination" name="destination" /><br />
        <br />
        <Field id="briefing" name="briefing" type="checkbox" />Weather Briefing<br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById('root'));
