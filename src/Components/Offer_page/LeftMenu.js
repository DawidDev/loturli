import React, { useState } from "react";

import styled from "styled-components";
import { Checkbox, FormControlLabel } from "@mui/material";

const LeftMenuContainer = styled.div`
  width: 30%;
  overflow: auto;

  .rwd_box {
    background-color: ${props => props.rwdFilters ? '#F5EDE6' : 'transparent'};
    transition: 0.45s;
  }

  .rwd_btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: none;
    width: 95%;
    font-size: 1.5rem;
    border: none;
    border-radius: 10px;
    background-color: ${props => props.rwdFilters ? '#426F74' : '#fff'};
    color: ${props => props.rwdFilters ? '#fff' : '#3C3C3C'};
    padding: 10px 20px;
    margin-top: 20px;
    transition: 0.25s;
  }

  .inputs_box {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    margin: 10px 10px;
  }

  label {
    margin: 0;

    span {
      font-size: 0.75rem;
      padding: 5px;
    }
  }

  @media (max-width: 768px) {
    .rwd_btn {
      display: block;
    }

    .rwd_box {
      padding-left: 30px;
      padding-top: 130px;
      padding-bottom: 30px;
      width: 100%;
      position: absolute;

      top: ${props => props.rwdFilters ? '0' : '-200%'};
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    label span {
      font-size: 1rem;
    }
  }
`;

const LeftMenu = () => {
  const [Food, setFood] = useState({
    allInclusive: false,
    HB: false,
    BB: false,
    own: false,
    FB: false,
    ZO: false,
  });
  const [Standard, setStandard] = useState({
    stars_5: false,
    stars_4: false,
    stars_3: false,
    stars_2: false,
  });
  const [Amenities, setAmenities] = useState({
    closeToBeach: false,
    swimmingpool: false,
    aquapark: false,
    bicycleRoutes: false,
    closeCentrum: false,
    balcony: false,
  });
  const [Drive, setDrive] = useState({
    any: false,
    plane: false,
    bus: false,
    ownTransport: false,
  });
  const [DepartureFrom, setDepartureFrom] = useState({
    any: false,
    Poznan: false,
    Warszawa: false,
    Wroclaw: false,
    Rzeszow: false,
    Bydgoszcz: false,
    Krakow: false,
  });

  const [oepnRwdFilters, setOpenRwdFilters] = useState(false)
  const handleRwdFilters = () => setOpenRwdFilters(prevValue => !prevValue)

  // Obsługa zaznaczania boxów checkbox
  const handleSelect = (e) => {
    const name = e.target.name;
    const category = e.target.value;

    console.log(
      "1. Nazwa właściwości: " + name + " | nazwa kategorii: " + category
    );

    // Edycja wybranych kategorii i ich właściwości w state
    if (category === "Food") {
      switch (name) {
        case "allInclusive":
          setFood((prevState) => ({
            ...prevState,
            [name]: !prevState.allInclusive,
          }));
          break;
        case "HB":
          setFood((prevState) => ({
            ...prevState,
            [name]: !prevState.HB,
          }));
          break;
        case "BB":
          setFood((prevState) => ({
            ...prevState,
            [name]: !prevState.BB,
          }));
          break;
        case "own":
          setFood((prevState) => ({
            ...prevState,
            [name]: !prevState.own,
          }));
          break;
        case "FB":
          setFood((prevState) => ({
            ...prevState,
            [name]: !prevState.FB,
          }));
          break;
        case "ZO":
          setFood((prevState) => ({
            ...prevState,
            [name]: !prevState.ZO,
          }));
          break;

        default:
          break;
      }
    } else if (category === "Standard") {
      switch (name) {
        case "stars_5":
          setStandard((prevState) => ({
            ...prevState,
            [name]: !prevState.stars_5,
          }));
          break;
        case "stars_4":
          setStandard((prevState) => ({
            ...prevState,
            [name]: !prevState.stars_4,
          }));
          break;
        case "stars_3":
          setStandard((prevState) => ({
            ...prevState,
            [name]: !prevState.stars_3,
          }));
          break;
        case "stars_2":
          setStandard((prevState) => ({
            ...prevState,
            [name]: !prevState.stars_2,
          }));
          break;

        default:
          break;
      }
    } else if (category === "Amenities") {
      switch (name) {
        case "closeToBeach":
          setAmenities((prevState) => ({
            ...prevState,
            [name]: !prevState.closeToBeach,
          }));
          break;
        case "swimmingpool":
          setAmenities((prevState) => ({
            ...prevState,
            [name]: !prevState.swimmingpool,
          }));
          break;
        case "aquapark":
          setAmenities((prevState) => ({
            ...prevState,
            [name]: !prevState.aquapark,
          }));
          break;
        case "bicycleRoutes":
          setAmenities((prevState) => ({
            ...prevState,
            [name]: !prevState.bicycleRoutes,
          }));
          break;
        case "closeCentrum":
          setAmenities((prevState) => ({
            ...prevState,
            [name]: !prevState.closeCentrum,
          }));
          break;
        case "balcony":
          setAmenities((prevState) => ({
            ...prevState,
            [name]: !prevState.balcony,
          }));
          break;

        default:
          break;
      }
    } else if (category === "Drive") {
      switch (name) {
        case "any":
          setDrive((prevState) => ({
            ...prevState,
            [name]: !prevState.any,
          }));
          break;
        case "plane":
          setDrive((prevState) => ({
            ...prevState,
            [name]: !prevState.plane,
          }));
          break;
        case "bus":
          setDrive((prevState) => ({
            ...prevState,
            [name]: !prevState.bus,
          }));
          break;
        case "ownTransport":
          setDrive((prevState) => ({
            ...prevState,
            [name]: !prevState.ownTransport,
          }));
          break;

        default:
          break;
      }
    } else if (category === "DepartureFrom") {
      switch (name) {
        case "any":
          setDepartureFrom((prevState) => ({
            ...prevState,
            [name]: !prevState.any,
          }));
          break;
        case "Poznan":
          setDepartureFrom((prevState) => ({
            ...prevState,
            [name]: !prevState.Poznan,
          }));
          break;
        case "Warszawa":
          setDepartureFrom((prevState) => ({
            ...prevState,
            [name]: !prevState.Warszawa,
          }));
          break;
        case "Wroclaw":
          setDepartureFrom((prevState) => ({
            ...prevState,
            [name]: !prevState.Wroclaw,
          }));
          break;
        case "Rzeszow":
          setDepartureFrom((prevState) => ({
            ...prevState,
            [name]: !prevState.Rzeszow,
          }));
          break;
        case "Bydgoszcz":
          setDepartureFrom((prevState) => ({
            ...prevState,
            [name]: !prevState.Bydgoszcz,
          }));
          break;
        case "Krakow":
          setDepartureFrom((prevState) => ({
            ...prevState,
            [name]: !prevState.Krakow,
          }));
          break;

        default:
          break;
      }
    }
  };

  //console.log(oepnRwdFilters);

  // Tworzenie label i input na podstawie przesłanych danych do funkcji. Funkcja przesyła dane do 'handleSelect' kóra na podstawie nich edytuje state
  const CreateCheckboxLabel = (
    nameLabel,
    valueFromState,
    nameInState,
    category
  ) => (
    <FormControlLabel
      className="box_label"
      value={category}
      control={
        <Checkbox
          checked={valueFromState}
          name={nameInState}
          inputProps={{ "aria-label": "controlled" }}
          onChange={handleSelect.bind(this)}
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 18 },
            color: "#426F74",
            "&.Mui-checked": {
              color: "#426F74",
            },
          }}
        />
      }
      label={nameLabel}
      labelPlacement="end"
    />
  );

  const filtersButton = !oepnRwdFilters ? <button className="rwd_btn" onClick={handleRwdFilters}>Filtrowanie</button> : <button className="rwd_btn" onClick={handleRwdFilters}>Zastosuj filtry</button>

  return (
    <LeftMenuContainer rwdFilters = {oepnRwdFilters}>
      {filtersButton}
      <div className="rwd_box">
        <div className="inputs_box">
          <h3>Wyżywienie</h3>
          {CreateCheckboxLabel(
            "All inclusive",
            Food.allInclusive,
            "allInclusive",
            "Food"
          )}
          {CreateCheckboxLabel(
            "Śniadania i obiadokolacje (HB)",
            Food.HB,
            "HB",
            "Food"
          )}
          {CreateCheckboxLabel("Śniadania (BB)", Food.BB, "BB", "Food")}
          {CreateCheckboxLabel("Własne", Food.own, "own", "Food")}
          {CreateCheckboxLabel("Trzy posiłki (FB)", Food.FB, "FB", "Food")}
          {CreateCheckboxLabel("Według programu (ZO)", Food.ZO, "ZO", "Food")}
        </div>
        <div className="inputs_box">
          <h3>Standard</h3>
          {CreateCheckboxLabel(
            "5 gwiazdek",
            Standard.stars_5,
            "stars_5",
            "Standard"
          )}
          {CreateCheckboxLabel(
            "4 gwiazdek",
            Standard.stars_4,
            "stars_4",
            "Standard"
          )}
          {CreateCheckboxLabel(
            "3 gwiazdek",
            Standard.stars_3,
            "stars_3",
            "Standard"
          )}
          {CreateCheckboxLabel(
            "2 gwiazdek",
            Standard.stars_2,
            "stars_2",
            "Standard"
          )}
        </div>
        <div className="inputs_box">
          <h3>Udogodnienia</h3>
          {CreateCheckboxLabel(
            "Blisko plaży",
            Amenities.closeToBeach,
            "closeToBeach",
            "Amenities"
          )}
          {CreateCheckboxLabel(
            "Basen",
            Amenities.swimmingpool,
            "swimmingpool",
            "Amenities"
          )}
          {CreateCheckboxLabel(
            "Aquapark w pobliżu",
            Amenities.aquapark,
            "aquapark",
            "Amenities"
          )}
          {CreateCheckboxLabel(
            "Trasy rowerowe",
            Amenities.bicycleRoutes,
            "bicycleRoutes",
            "Amenities"
          )}
          {CreateCheckboxLabel(
            "Blisko centrum",
            Amenities.closeCentrum,
            "closeCentrum",
            "Amenities"
          )}
          {CreateCheckboxLabel(
            "Balkon",
            Amenities.balcony,
            "balcony",
            "Amenities"
          )}
        </div>
        <div className="inputs_box">
          <h3>Typ dojazdu:</h3>
          {CreateCheckboxLabel("Dowolny", Drive.any, "any", "Drive")}
          {CreateCheckboxLabel("Samolot", Drive.plane, "plane", "Drive")}
          {CreateCheckboxLabel("Autokar", Drive.bus, "bus", "Drive")}
          {CreateCheckboxLabel(
            "Dojazd własny",
            Drive.ownTransport,
            "ownTransport",
            "Drive"
          )}
        </div>
        <div className="inputs_box">
          <h3>Wyjazd z:</h3>
          {CreateCheckboxLabel(
            "Dowolny",
            DepartureFrom.any,
            "any",
            "DepartureFrom"
          )}
          {CreateCheckboxLabel(
            "Poznań",
            DepartureFrom.Poznan,
            "Poznan",
            "DepartureFrom"
          )}
          {CreateCheckboxLabel(
            "Warszawa",
            DepartureFrom.Warszawa,
            "Warszawa",
            "DepartureFrom"
          )}
          {CreateCheckboxLabel(
            "Wrocław",
            DepartureFrom.Wroclaw,
            "Wroclaw",
            "DepartureFrom"
          )}
          {CreateCheckboxLabel(
            "Rzeszów",
            DepartureFrom.Rzeszow,
            "Rzeszow",
            "DepartureFrom"
          )}
          {CreateCheckboxLabel(
            "Bydgoszcz",
            DepartureFrom.Bydgoszcz,
            "Bydgoszcz",
            "DepartureFrom"
          )}
          {CreateCheckboxLabel(
            "Kraków",
            DepartureFrom.Krakow,
            "Krakow",
            "DepartureFrom"
          )}
        </div>
      </div>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
