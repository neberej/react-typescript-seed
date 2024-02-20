
import  React from "react";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class Header extends React.Component {
  
  today: number =  new Date().getDay();

  render() {
    return (
      <div className="text-sky-500 hover:text-sky-600">
        Today is: {days[this.today]}
      </div>
    );
  }
}

export default Header;
