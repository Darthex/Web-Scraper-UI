import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchTitle} from "./title-page.reducer.js";
import queryString from 'query-string'
import {Link} from "react-router-dom";
import LoadingCentered from "../../components/loading-centered/loading-centered.jsx";
import {decrypt} from "../../utils/encryptor.js";
import "./title-page.css"
import FireIcon from "../../components/fire-icon/fire-icon.jsx";
import ImageLoader from "../../components/image-loader/image-loader.jsx";

export default function TitlePage() {

    const dispatch = useDispatch()
    const ref = useRef()
    const {loading, titleData, error} = useSelector(state => state.titles)
    const [width, setWidth] = useState(0)

    const query = useMemo(() =>
            queryString.parse(location.search)
        , [location.search]
    )

    useEffect(() => {
        dispatch(fetchTitle(query.s))
    }, [query]);

    useLayoutEffect(() => {
        setWidth(ref?.current?.offsetWidth)
    }, []);

    // console.log()

    return (
        <>
            {loading && <LoadingCentered/>}
            {!loading && error ?
                <div>Error: {error}</div>
                :
                null
            }
            {!loading && !error ?
                titleData?.url ?
                    <div className="title-container">
                        <div className="description-box">
                            <section className="section" ref={ref}>
                                <ImageLoader src={decrypt(titleData?.thumbnail, 3)} alt=" " height={220} width={width}/>
                            </section>
                            <section className="section title-section">
                                <Link to={`/details?d=${titleData?.url}`} className="link">
                                    <h1 className="title">{titleData['main-title']}</h1>
                                </Link>
                                <FireIcon metaCount={titleData?.metaCount}/>
                            </section>
                        </div>
                    </div>
                    :
                    <h2 className="title">No Results Found</h2>
                :
                null
            }
        </>
    )
}
