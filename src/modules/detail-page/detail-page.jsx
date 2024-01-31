import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchUrls} from "./detail-page.reducer.js";
import {decrypt} from "../../utils/encryptor.js";
import LoadingCentered from "../../components/loading-centered/loading-centered.jsx";
import queryString from "query-string";
import "./detail-page.css"
import BubbleButton from "../../components/bubble-button/bubble-button.jsx";

export default function DetailPage() {

    const dispatch = useDispatch()
    const {loading, urlData, error} = useSelector(state => state.urls)
    const urls = urlData[0]
    const comingSoon = urlData[1]?.isExpandable

    const query = queryString.parse(location.search)

    useEffect(() => {
        dispatch(fetchUrls(query.d))
    }, []);

    if (comingSoon) {
        return (
            <h2 className="coming-soon">Coming Soon</h2>
        )
    }

    return (
        <>
            {loading && <LoadingCentered/>}
            {!loading && error ?
                <div>Error: {error}</div>
                :
                null
            }
            {!loading && !comingSoon &&
                <div className="details-container">
                    <section className="description">
                        Synopsis Soon...
                    </section>
                    <p>To access the Private Drive just open Google Group and join the Google Group, ignore the
                        rest.</p>
                    <section className="footer">
                        {
                            urls?.map((item) => (
                                <BubbleButton
                                    content={item['url_titles']}
                                    url={decrypt(item.url, 3)}
                                />
                            ))
                        }
                    </section>
                </div>
            }
        </>
    )
}
