import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const SinglePlanet = (props) => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    const planets = store.planets
	const planetImages = store.planetImages
    return(
        <div className="container-fluid">
            <div className="row my-3">
                <h2>Planets<span className="text-muted"> / {planets[id]?.name}</span></h2>
            </div>
            <div className="row bg-secondary m-5 border border-secondary single-card">
                <div className="row">
                    <div className="col-4 p-0">
                        <img className="img-fluid img-cover single-image" src={planetImages[id]} alt="Card image cap" />
                    </div>
                    <div className="col-8 p-4 ">
                        <h1 className="single-header">{planets[id]?.name}</h1>
                        <p className="single-info-text mt-3 mb-0"><b>Population:&nbsp;&nbsp;</b><span className="text-muted">{planets[id]?.population}</span></p>
                        <p className="single-info-text my-0"><b>Diameter:&nbsp;&nbsp;</b><span className="text-muted">{planets[id]?.diameter}km</span></p>
                        <p className="single-info-text my-0"><b>Climate:&nbsp;&nbsp;</b><span className="text-muted">{planets[id]?.climate}</span></p>
                        <p className="single-info-text my-0"><b>Terrain:&nbsp;&nbsp;</b><span className="text-muted">{planets[id]?.terrain}</span></p>
                        <p className="single-info-text my-0"><b>Gravity:&nbsp;&nbsp;</b><span className="text-muted">{planets[id]?.gravity}</span></p>
                        <p className="single-info-text my-0"><b>Description:&nbsp;&nbsp;</b><span className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>

                    </div>
                </div>
            </div>
        </div>
    )
}