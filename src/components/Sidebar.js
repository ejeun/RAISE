import React, { Component } from 'react';
// import './Project.css';

const infoPlaceholder = `RAISE (Revolutionizing Asian American Immigrant Stories on the East Coast) is a pan-Asian undocumented youth-led group on the East Coast. We aim to create safe spaces in our communities while advocating for humane immigration policies.

Through political activism, leadership development, community education, and coalition building, we work to reclaim our dignity as pan-Asian undocumented peoples. RAISE organizes on the grassroots level to reimagine justice and demand liberation for immigrants in America.

UNDOCUASIANS@GMAIL.COM`;

const eventsPlaceholder = `
Thursday 8/10
Mental Health Workshop @ TRC
Tuesday 8/15
Writing Workshop with Bushra @ AAWW
Friday 8/18
General Meeting @ AALDEF 14th Fl`;

const Sidebar = ({selected}) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-container">
        <div className="Sidebar-X"> X </div>

        <p>
          {selected === 'info' ? infoPlaceholder : eventsPlaceholder}
        </p>

      </div>
    </div>
  );
}

export default Sidebar;
