import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from "../SearchBar";
import { Categories } from "../Url"
function App() {

  let Category = Categories();

  return (
    <main className="main" id="top" >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container"><Link className="navbar-brand d-inline-flex align-self-start" to="/"><img className="d-inline-block" src="assets/img/gallery/logo.png" alt="logo" /><span className="text-1000 fs-0 fw-bold ms-2">Jassa</span></Link><button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 align-self-start" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                Category.map(categori => {
                  if (categori === "jewelery") {
                    return <li className="nav-item px-2"><Link className="nav-link fw-medium active" aria-current="page" key={categori.id} to={`/categories/jewelery`}>{categori}</Link></li>
                  } else if (categori === "electronics") {
                    return <li className="nav-item px-2"><Link className="nav-link fw-medium active" aria-current="page" key={categori.id} to={`/categories/electronics`}>{categori}</Link></li>
                  } else if (categori === "men's clothing") {
                    return <li className="nav-item px-2"><Link className="nav-link fw-medium active" aria-current="page" key={categori.id} to={`/categories/men's clothing`}>{categori}</Link></li>
                  } else if (categori === "women's clothing") {
                    return <li className="nav-item px-2"><Link className="nav-link fw-medium active" aria-current="page" key={categori.id} to={`/categories/women's clothing`}>{categori}</Link></li>
                  } else return null

                })
              }


            </ul>

          </div>
          <SearchBar />
        </div>
      </nav>

    </main>
  )

}



export default App;