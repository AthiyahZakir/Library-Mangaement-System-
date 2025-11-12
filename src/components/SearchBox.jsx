function SearchBox({ searchTerm, setSearchTerm }) {
    return (
        <>
            <input 
            type="text"
            placeholder="Search books .."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </>
    )
}

export default SearchBox