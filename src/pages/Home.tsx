import Header from './../components/Header';
import { ImageSlider } from '../components/ImageSlider'
import Cards from '@/components/Cards';

export default function Home() {

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center py-10">
                <ImageSlider />
            </div>
            <div className="flex flex-col items-center justify-center py-10">
                <p>TOPICS</p>
                <Cards />
            </div>
        </div>
    );
}