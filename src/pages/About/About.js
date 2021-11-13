import { Article } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import about1 from "../../images/banner.png"
import about2 from "../../images/opp.jpeg"
import Foother from '../Shared/Foother/Foother';
import Navigation from '../Shared/Navigation/Navigation';
const About = () => {
    return (
        <>
        <Navigation></Navigation>
        <div>
            <h1 className="text-center">This is About US</h1>
            <br />
       <div>

            <h3>Bike Buying Guide</h3>
            <small> Last updated: Novaber 10, 2021</small>
           <Container sx={{}}>
            If you’ re in the market
            for a new bicycle, you’ re in very good company.Since the start of 2020 all bike sales have risen by more than 50 percent, and even
            if you’ re reading this guide in 2023, and perhaps sales have


                    Pros: <h3>Electric bikes are enabling</h3> more people to ride, making them especially inviting
                    if you live anywhere with hills imposing a serious challenge in getting from point A to point B.

                    Cons: <h3>E - bikes are relatively</h3> heavy, and they can be difficult to transport on a car 's roof rack. You need to beware buying online from a brand that just appeared overnight.
        <img className="size-cut" src={about1} alt="" />
                    Back - saving tip: If you’ re mounting an e - bike to a receiver rack on a car, don’ t lift the whole bike.Instead, first lift the bike’ s front wheel onto the bike tray, roll that forward, then lift the rear wheel; secure both using the engagement mechanism.That way you’ re never pulling up the entire bike.Unload by reversing this process, using your legs to lift and not your back.Want it to go even more smoothly ? Remove the battery from the bike first and stow it in your car.This is also a theft deterrent because an electric bike sans battery is a very heavy, slow machine that’ s essentially useless to a thief.And the battery itself could be worth about $500.

                    Types of <h3>Bikes Find the right fit</h3>
                    for you.

                    A comfort bike.PHOTO : PRIORITY Comfort Bikes These are
                    for leisurely, recreational riding on pavement and smooth dirt paths.They include high handlebars, some have shock absorbers in the seat or fork(or both), and they frequently have wider seats and meatier grips
                    for your hands.

                    Pros: Creature comforts include an upright riding position and a softer ride.But comfort bikes can be relatively heavy, so you want yours with gears that allow easier uphill pedaling.Comfort bikes often cost less than other types.
<img className="size-cut" src={about2} alt="" />
                    Cons: Because of weight, as well as the riding position, slow - speed maneuvering can be difficult, and comfort bikes might make
                    for hard pedaling on hilly terrain.And they can’ t compete on loose gravel or more challenging terrain with a mountain bike’ s rigid construction, suspension, and wide, knobby tires.

                    <h3>Shop Comfort bycycle Bikes on Amazon</h3>

                    A gravel bike.PHOTO: CANNONDALE Road Bikes and Gravel Bikes These bikes are
                    for riders who want to go fast or log serious mileage, including multiday touring.The term“ gravel bike” is sort of a catchall referring to a road bike - style frame, but with a more relaxed geometry, so the rider sits more upright, and with tires as fat as those found on mountain bikes.For this reason they’ re easier to ride on any road and a lot of trails, too.The stealth benefit of not being in a Tour de France crouch is comfort, as well as a broader range of where you can ride, has led to gravel bike sales eclipsing those of traditional, skinny - tired road bikes.Okay, you can’ t“ shred” super technical wooded trails the way a mountain biker might, but
                    if you live where a lot of bike paths aren’ t paved, a gravel bike performs better than a road bike with its less protective rubber.

                    Pros: Avid cyclists and tourers want the relatively light weight, aerodynamics, and performance characteristics these bikes offer.
                    </Container>
                 </div>
        </div>
        <Foother></Foother>
        </>
    );
};

export default About;