import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate ,NavLink  } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';

const Navbarsick = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Chemical Engineering', value: 'option1', route: '/Chemical' },
    { label: 'Civil Engineering', value: 'option2', route: '/Civil' },
    { label: 'Computer Science Engineering', value: 'option3', route: '/Computer' },
    { label: 'Electrical Engineering', value: 'option4', route: '/Electronics' },
    { label: 'Electronics Engineering', value: 'option5', route: '/Electrical' },
    { label: 'Mechanical Engineering', value: 'option6', route: '/Mechanical' },
    // Add more options as needed
  ];

  const handleOptionSelect = (option) => {
    if (option) {
      setSelectedOption(null);
      navigate(option.route);
    }
  };
  const textFieldStyles = {
    background: 'white',
    borderRadius: '10px', // Adjust the radius for rounding corners
    border : 'none',
    width:'300px',
    
  };
  return (
    <>
     
        <Navbar expand="lg">
      <div className="container-fluid">
        <Navbar.Brand>
          <img src="./logo.png" className="img-name d-inline-block align-top" alt="" />
          Book Master
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto mb-2 mb-lg-0">
           
             
                <NavLink exact activeClassName="menu_active" className="nav-link" to="./">
                  Home
                </NavLink>
                <NavLink exact activeClassName="menu_active" className="nav-link" to="./services">
                  Services
                </NavLink>
                <NavLink exact activeClassName="menu_active" className="nav-link" to="./contact">
                  Contact
                </NavLink>
             
          
          </Nav>
          <Autocomplete
            value={selectedOption}
            onChange={(_, newValue) => handleOptionSelect(newValue)}
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search..."
                style={{
                  ...textFieldStyles,
                  borderBottom: 'none', // Remove the underline
                }}
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
              />
            )}
          />
        </Navbar.Collapse>
      </div>
    </Navbar> 
           
       
    </>
  );
};

export default Navbarsick;
