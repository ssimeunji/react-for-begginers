import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <div>
            {/* <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>
                    {title}
                </Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul> */}

            <div className={style.movie}>
                <img src={coverImg} alt={title} className={style.movie__img} />
                <div>
                    <h2 className={style.movie__title}>
                        <Link to={`/movie/${id}`}>{title}</Link>
                    </h2>
                    <h3 className={style.movie__year}>{year}</h3>
                    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                    <ul className={style.movie__genres}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;