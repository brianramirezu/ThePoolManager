import React from "react"

import ApiCalendar from 'react-google-calendar-api';




  export default class Calendar extends React.Component {
      constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
      }

      handleItemClick(event, name) {
        if (name === 'sign-in') {
          ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
          ApiCalendar.handleSignoutClick();
        }
      }

      render(): ReactNode {
        return (
          <div>
              <button
                  onClick={(e) => this.handleItemClick(e, 'sign-in')}
              >
                sign-in
              </button>
              <button
                  onClick={(e) => this.handleItemClick(e, 'sign-out')}
              >
                sign-out
              </button>
            </div>
          );
      }
  }
