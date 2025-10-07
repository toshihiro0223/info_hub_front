import Header from './../components/Header';
import { ImageSlider } from '../components/ImageSlider'

export default function Home() {

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center py-10">
                <ImageSlider />
            </div>
        </div>
    );
}