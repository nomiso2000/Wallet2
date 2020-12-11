import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import './style.css';
import 'react-datepicker/dist/react-datepicker.css';

function OverkayBlock(props) {
  const [date, setDate] = useState(new Date());

  let nameselect = date.toISOString();

  useEffect(() => {
    handleDateSelect();
  }, [date]);
  const handleDateSelect = () => {
    props.onAddContacts(nameselect);
  };

  const handleDateChange = date => {
    props.onAddContacts(nameselect);
    setDate(date);
  };
  return (
    <DatePicker
      // minDate={new Date()}
      className="calendar"
      selected={date}
      onSelect={handleDateSelect} //when day is clicked
      onChange={handleDateChange} //only when value has changed
    />
  );
}

export default OverkayBlock;
