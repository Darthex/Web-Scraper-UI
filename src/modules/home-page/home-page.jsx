import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchRecommendations} from "./home-page.reducer.js";
import {Link, useNavigate} from "react-router-dom";
import {fetchRecUrls} from "../detail-page/detail-page.reducer.js";
import "./home-page.css"

export default function HomePage() {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const recommendations = useSelector(state => state.recommendations)
    const {loading, title, error} = useSelector(state => state.titles)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // dispatch(fetchRecommendations())
    }, []);

    async function getDetails(search) {
        setIsLoaded(true)
        await dispatch(fetchTitle(search))
    }

    useEffect(() => {
        // This effect runs whenever the title is updated
        if (title?.url && isLoaded) {
            setIsLoaded(false)
            navigate(`/details?d=${title.url}`);
        }
    }, [title, navigate]);

    return (
        <>
            {recommendations?.data?.map((item) => {
                return (
                    <div key={item['_id']} onClick={() => getDetails(item.title)}>
                        <p>{item.title}</p>
                        <img src={item.image} alt=""/>
                    </div>
                )
            })}
            {<div className="welcome">Welcome</div>}
        </>
    )
}
