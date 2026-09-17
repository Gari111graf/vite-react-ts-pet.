import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import "./MusicPage.scss";

const tracks = [
  { id: 1, name: "🎵 Track 1", price: 100 },
  { id: 2, name: "🎵 Track 2", price: 150 },
  { id: 3, name: "🎵 Track 3", price: 200 },
];
const MusicPage: React.FC = () => {
    const { addItem } = useCart();
    return (
        <div className="music-page">
            <h2>🎶 Музыкальные треки</h2>
            <ul>
                {tracks.map((track) => (
                    <li key={track.id} className="music-page__item">
                        <span>{track.name} — {track.price} грн</span>
                        <Button variant="primary" onClick={addItem}>
                            Add to Cart
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default MusicPage;