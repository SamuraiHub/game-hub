import React from 'react'
import useData from '../hooks/useData';
import useGenres from '../hooks/useGenres';

const GenereList = () => {
    const {data} = useGenres(); 

  return (
    <ul>
        {data.map(genre => <li key = {genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenereList