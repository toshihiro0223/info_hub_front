import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../store/store";

export default function CardList () {
    const works = useSelector((state: RootState) => state.works);

    return(
        <div>
            {works.map((work, index) => (
                <div key={index} >
                    <Card >
                        <h1>{work.title}</h1>
                        <p>企業：{work.company}</p>
                        <p>場所：{work.place}</p>
                        <p>賃金：{work.wage}</p>
                        <p>条件：{work.condition}</p>
                        <p>説明：{work.description}</p>
                    </Card>
                </div>
            ))}
        </div>
    )
}