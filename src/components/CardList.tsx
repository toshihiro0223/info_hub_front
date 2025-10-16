import { Card } from "./ui/card";
import { Link } from "react-router-dom";





const lists:{ title: string, company: string, place: string, wages: string, condition: string, description: string}[]  =[
    {
        title: "社内",
        company: "株式会社海援隊",
        place: "高知市",
        wages: "1,800円",
        condition: "週3以上",
        description: "営業アシスタント・会計補助などを行っていただきます"
    },
    {
        title: "ホールスタッフ",
        company: "JOYFUL",
        place: "高知市",
        wages: "1,018円",
        condition: "週1以上",
        description: "食事の配膳などを行っていただきます。"
    },
    {
        title: "営業",
        company: "株式会社海援隊",
        place: "高知市",
        wages: "1,500円",
        condition: "週4以上",
        description: "営業成績によってはインセンティブが付きます。"
    },
]

export default function CardList () {

    return(
        <div>
            {lists.map((list, index) => (
                <div key={index} >
                    <Card >
                        <h1>{list.title}</h1>
                        <p>企業：{list.company}</p>
                        <p>場所：{list.place}</p>
                        <p>賃金：{list.wages}</p>
                        <p>条件：{list.condition}</p>
                        <p>説明：{list.description}</p>
                    </Card>
                </div>
            ))}
        </div>
    )
}