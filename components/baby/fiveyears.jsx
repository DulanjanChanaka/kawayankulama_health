import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Fiveyears = () => {
  const [babyData, setBabyData] = useState(null);
  const [filteredBabies, setFilteredBabies] = useState([]);
  const [loading, setLoading] = useState(true);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageInMilliseconds = today - birthDateObj;

    const ageDate = new Date(ageInMilliseconds);
    const year = ageDate.getUTCFullYear() - 1970;
    const month = ageDate.getUTCMonth();
    const day = ageDate.getUTCDate();

    return { year, month, day };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://astounding-cuchufli-3ecd73.netlify.app/api/babies');
        if (response.ok) {
          const data = await response.json();
          setBabyData(data);

          // Filter babies based on age (e.g., 5 years)
          const filteredBabiesData = data.filter((baby) => {
            const age = calculateAge(baby.birthday);
            const isWithinRange =
            (age.year === 4 && age.month === 11 && age.day >= 15) ||
            (age.year === 5 && age.month === 0 && age.day <= 20); 

          return isWithinRange;
          });
          setFilteredBabies(filteredBabiesData);
        } else {
          console.error('Failed to fetch baby data.');
        }
      } catch (error) {
        console.error('Error fetching baby data: ', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, []); // Run the effect only once on component mount

  return (
    <div>
      {loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          onClick={() => {}}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          {filteredBabies.length > 0 ? (
            <>
              <h2 className='text-center text-2xl text-purple-700'>අවුරුදු 5 කණ්ඩායම </h2>
              {filteredBabies.map((baby, index) => (
                <div key={index} className='p-5 '>
                  <div className=' bg-purple-300 py-3 px-2 rounded-lg leading-8 '>
                    <p className='font-semibold'>Name: <span className='font-normal text-blue-700'>{baby.name}</span></p>
                    <p className='font-semibold'>Mother: <span className='font-normal text-blue-700'>{baby.mother}</span></p>
                    <p className='font-semibold'>Address: <span className='font-normal text-blue-700'>{baby.address}</span></p>
                    <p className='font-semibold'>Birthdate: <span className='font-normal text-blue-700'>{baby.birthday}</span></p>
                    <p className='font-semibold'>Age: {calculateAge(baby.birthday).year} Y, {calculateAge(baby.birthday).month} M, {calculateAge(baby.birthday).day} D</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className='text-purple-700'>No babies found .</p>
          )}
        </>
      )}
    </div>
  );
};

export default Fiveyears;
