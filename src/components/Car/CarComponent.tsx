import type {ICar} from "../../models/ICar.tsx";
import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.ts";
import './car.css'

export const CarComponent = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars)
        })
    }, []);
    return (
        <>
            {
                cars.map((car: ICar) => (
                    <div key={car.id} id="car">
                        {car.id} - {car.brand}
                        <p>{car.price} usd; {car.year} year</p>
                    </div>
                ))
            }
        </>
    );
};