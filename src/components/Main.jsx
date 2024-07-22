import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Select from 'react-select';

function Main({ setSelectedParkName }) {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    fetch('https://developer.nps.gov/api/v1/parks?api_key=rQFVeKbyGrH0GHgz3zLuq0WUDjincXRNQ1feSooG')
      .then(response => response.json())
      .then(data => setParks(data.data))
      .catch(error => console.error("Cannot fetch parks: ", error));
      console.log("parks fetched",parks)
  }, []);
  

  useEffect(() => {
    const results = parks.filter(park =>
      park.fullName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredParks(results);
  }, [search, parks]);

  const handleSearchChange = (inputValue) => {
    setSearch(inputValue);
    setSelectedPark(selectedPark);
  };

  const handleParkChange = (selectedOption) => {
    setSelectedPark(selectedOption);
    setSelectedParkName(selectedOption.label);
  };

  const options = filteredParks.map(park => ({
    value: park.id,
    label: park.fullName,
    latitude: park.latitude,
    longitude: park.longitude
  }));

  const queryParams = selectedPark ? new URLSearchParams({
    parkName: selectedPark.label,
    latitude: selectedPark.latitude,
    longitude: selectedPark.longitude

  }).toString() : '';

  console.log("Selected park: ", selectedPark)
  console.log(queryParams)

  return (
    <div>
      <h1>National Park List</h1>
      <h2>Search by name or Select from list</h2>
      <Select
        options={options}
        onChange={handleParkChange}
        onInputChange={handleSearchChange}
        value={selectedPark}
        placeholder="Select a park or type to search"
        className='mb-3'
      />
      
      <Link
        to={`/park-details?${queryParams}`}
        className="btn btn-primary"
        style={{ textDecoration: 'none' }}
      >
        Submit
      </Link>
    </div>
  );
}

export default Main;
