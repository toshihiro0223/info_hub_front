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
        to: "/Inquiry"
    },
]

export default function Cards() {

    return (
        <div className="flex gap-6 overflow-x-auto p-6">
            {Contents.map((content, index) => (
                <div key={index} className="min-w-[250px] flex-shrink-0 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Card >
                        <Link to={content.to} className="block">
                            <img
                                src={content.image}
                                alt={`Slide ${index}`}
                               className="w-full h-40 object-cover"
                            />
                            <div className="p3">
                            <p className="text-sm text-gray-500">カテゴリー:{content.categoly}</p>
                            <h1 className="text-lg font-semibold">{content.title}</h1>
                            </div>
                        </Link>
                    </Card>
                </div>
            ))}

        </div>
    )


}