import {Suspense, lazy} from "react";
import LoadingCentered from "./components/loading-centered/loading-centered.jsx";
import {Routes, useLocation, useNavigate, useParams, Route} from "react-router-dom";
import {ROUTES} from "./constants/routes.js";

const homePage = lazy(() => import( "./modules/home-page/home-page.jsx"))
const titlePage = lazy(() => import("./modules/title-page/title-page.jsx"))
const detailsPage = lazy(() => import("./modules/detail-page/detail-page.jsx"))

const withSuspense = Component => props => {
    const location = useLocation()
    const match = {params: useParams()}
    const navigate = useNavigate()
    return (
        <Suspense fallback={<LoadingCentered />}>
            <Component {...props} location={location} match={match} navigate={navigate} />
        </Suspense>
    )
}

const HomePageLazy = withSuspense(homePage)
const TitlePageLazy = withSuspense(titlePage)
const DetailsPageLazy = withSuspense(detailsPage)

export default function TopLevelRoutes() {
    return(
        <Routes>
            <Route
                path={`${ROUTES.HOMEPAGE}/*`}
                element={ <HomePageLazy /> } />
            <Route
                path={`${ROUTES.TITLE_PAGE}/*`}
                element={ <TitlePageLazy /> } />
            <Route
                path={`${ROUTES.DETAILS_PAGE}/*`}
                element={ <DetailsPageLazy /> } />
        </Routes>
    )
}
