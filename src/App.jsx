import React from 'react';
import Mapping from './component/Mapping';
import data from './component/movie.json';
 

const App = () => {
  return (
    <div className="">
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.map((movie) => (
        <Mapping
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          img={movie.Poster}
        />
      ))}
    </div>
    <div className="">
    
    </div>

    </div>
     );
};

export default App;
