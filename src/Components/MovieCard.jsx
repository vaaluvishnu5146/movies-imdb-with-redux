export default function MovieCard({ data = {}, onClick = () => {} }) {
  return (
    <div onClick={() => onClick(data.imdbID)} className="movieCard">
    <img className="poster" src={data.Poster} />
    <h4>{data.Title}</h4>
    </div>
  )
}

MovieCard.propTypes = {
    data: Object,
    onClick: Function
}