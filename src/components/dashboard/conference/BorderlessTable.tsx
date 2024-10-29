import React from 'react';

const BorderlessTable = () => {
  return (
    <div>
      <table
        
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Activities</th>
            <th style={tableHeaderStyle}>Time</th>
            <th style={tableHeaderStyle}>Venue</th>
            <th style={tableHeaderStyle}>Facilitator</th>
            <th style={tableHeaderStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>Morning Yoga</td>
            <td style={tableCellStyle}>6:00 AM - 7:00 AM</td>
            <td style={tableCellStyle}>Central Park</td>
            <td style={tableCellStyle}>Sarah Johnson</td>
            <td style={tableCellStyle}>September 10, 2024</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Business Workshop</td>
            <td style={tableCellStyle}>10:00 AM - 12:00 PM</td>
            <td style={tableCellStyle}>Hall A</td>
            <td style={tableCellStyle}>John Doe</td>
            <td style={tableCellStyle}>September 11, 2024</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Lunch Networking</td>
            <td style={tableCellStyle}>12:30 PM - 2:00 PM</td>
            <td style={tableCellStyle}>Dining Room</td>
            <td style={tableCellStyle}>Emma Brown</td>
            <td style={tableCellStyle}>September 11, 2024</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Tech Seminar</td>
            <td style={tableCellStyle}>3:00 PM - 5:00 PM</td>
            <td style={tableCellStyle}>Conference Room B</td>
            <td style={tableCellStyle}>David Lee</td>
            <td style={tableCellStyle}>September 12, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  textAlign: 'left',
  paddingTop: '30px',
  color: 'black',
};

const tableCellStyle = {
  padding: '11px',

};

export default BorderlessTable;
