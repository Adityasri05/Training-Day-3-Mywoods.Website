import Card from "../molecule/card";
import CardData from "../../sampleData/cardData";

const Main = () => {
    return (
        <main>
            <section className="cardsSection">
                <div className="cards-grid container">
                    {CardData.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Main;