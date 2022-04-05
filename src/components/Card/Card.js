import "./Card.css";

export default function Card({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
	return (
		<>
			<section className="card">
				<img src={imageUrl} className="card-image" />
				<div className="card-body">
					<div className="location">
						<span className="country">
							<i className="fa-solid fa-location-dot"></i>
							{location}
						</span>
						<a className="maps-link" href={googleMapsUrl}>
							view on Google Maps
						</a>
					</div>
					<h2 className="card-title">{title}</h2>
					<p className="card-date">
						<small>
							<span className="start-date">{startDate}</span> -{" "}
							<span className="end-date">{endDate}</span>
						</small>
					</p>
					<p className="card-description">{description}</p>
				</div>
			</section>
		</>
	);
}
