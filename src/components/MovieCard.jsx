import React from 'react'

export const MovieCard = ({movie: 
    {title ,vote_average,poster_path, release_date , original_language,genre_ids}}) => {
  return (
    <div className='movie-card'>
        <p className='text-white'>{title}</p>
        <img
            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-image.png'}
            alt={title}
            />

        <div className='mt-4'>
            <h3 className='text-white'>{title}</h3>
            </div>

        <div className='content'>
            <div className='rating'>
                <img src="public\star.svg" alt="Star Icon" />
                <p>{vote_average? vote_average.toFixed(1) : "N/A"}</p>
            </div>
            <span>•</span>
            <p className='lang'>{original_language}</p>
            <span>•</span>
            <p className='year'>{new Date(release_date).getFullYear()}</p>

            </div>

        

    </div>
  )
}
