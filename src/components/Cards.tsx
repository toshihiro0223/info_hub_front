import { Card } from "./ui/card";
import { Link } from "react-router-dom";

import img1 from "../assets/images/サンプル1.jpg";
import img2 from "../assets/images/サンプル2.jpg";
import img3 from "../assets/images/サンプル3.jpg";
import img4 from "../assets/images/サンプル4.jpg";

const Contents: { image: string, categoly: string, title: string, to: string }[] = [
    {
        image: img1,
        categoly: "経済",
        title: "不動産価格の高騰について",
        to: "/"
    },
    {
        image: img2,
        categoly: "エンタメ",
        title: "高知マラソン",
        to: "/"
    },
    {
        image: img3,
        categoly: "エンタメ",
        title: "よさこい",
        to: "/"
    },
    {
        image: img4,
        categoly: "食品",
        title: "スーパー",
        to: "/"
    },
]

export default function Cards() {

    return (
        <div className="flex relative overflow-hidden w-full  min-w-2 p-4">
            {Contents.map((content, index) => (
                <div className="w-full h-full object-cover select-none rounded-lg">
                    <Card key={index}>
                        <Link to={content.to}>
                            <img
                                src={content.image}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover select-none rounded-lg"
                            />
                            <p>カテゴリー:{content.categoly}</p>
                            <h1>{content.title}</h1>
                        </Link>
                    </Card>
                </div>
            ))}

        </div>
    )


}