export default function SearchMovie({ onSearch = () => {}, onSelect = () => {}, onClick = () => {}, onPage = () => {}  }) {
  return (
    <div>
            <input placeholder="Enter movie title or keywords" onChange={onSearch} />
            <select onChange={onSelect}>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </select>
            <select onChange={onPage}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <button onClick={onClick}>Search</button>
    </div>
  )
}

SearchMovie.propTypes = {
    onSearch: Function,
    onSelect: Function,
    onClick: Function,
    onPage: Function
};