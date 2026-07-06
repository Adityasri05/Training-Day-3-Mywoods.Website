import Main from "../components/compound/Main";

const HomeDetail = () => {
    return (
        <>
            <section className="home-description">
                <div className="container">
                    <div className="home-title">
                        <img
                            className="home-logo"
                            src="https://images.stockcake.com/public/4/6/2/4629ce82-44b6-4571-86bf-31cbe2bc04ec_large/nature-reclaims-wood-stockcake.jpg"
                            alt="Mywoods logo"
                        />
                        <h1>Welcome to Mywoods</h1>
                    </div>
                    <p>
                        Mywoods is a curated travel marketplace designed for nature
                        enthusiasts and adventure seekers. Discover breathtaking forest
                        escapes, immersive camping sites, and guided excursions across
                        scenic woodlands. Each listing includes beautiful imagery,
                        honest descriptions, and practical details so you can choose the
                        perfect outdoor retreat.
                    </p>
                    <p>
                        Our platform connects you with trusted local hosts, sustainable
                        experiences, and tailored itineraries that suit beginner or
                        seasoned travelers. Whether you want a quiet weekend in the
                        woods, a family-friendly nature stay, or a guided hiking trip,
                        Mywoods helps you book safe, memorable, and eco-conscious
                        adventures in just a few clicks.
                    </p>
                </div>
            </section>
        </>
    );
};

export default HomeDetail;