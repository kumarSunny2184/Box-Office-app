const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length}</p>

      <p>
        Episodes in total:{' '}
        <span>
          {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
        </span>
      </p>

      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Season {season.number}</p>
            <p>Episode: {season.episodeOrder}</p>

            <div>
              Aired : {season.premieredate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
