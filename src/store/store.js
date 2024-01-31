import {configureStore} from "@reduxjs/toolkit";
import titlePageReducer from "../modules/title-page/title-page.reducer.js";
import detailPageReducer from "../modules/detail-page/detail-page.reducer.js";
import homePageReducer from "../modules/home-page/home-page.reducer.js";

const store =configureStore({
    reducer: {
        recommendations: homePageReducer,
        titles: titlePageReducer,
        urls: detailPageReducer,
    }
})

export default store
