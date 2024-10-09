import './imageslider.css'
export const Imagslider = () => {
    return (
        <>
            <div class="banner">
                <div class="slider" style={{ "--quantity": 7 }}>
                    <div class="item" style={{ "--position": 1 }} ><img src="camping.jpg" /></div>
                    <div class="item" style={{ "--position": 2 }}><img src="restaurant.jpg" /></div>
                    <div class="item" style={{ "--position": 3 }}><img src="anniversary.jpg" /></div>
                    <div class="item" style={{ "--position": 4 }}><img src="birthday.jpg" /></div>
                    <div class="item" style={{ "--position": 5 }}><img src="gamenight.jpg" /></div>
                    <div class="item" style={{ "--position": 6 }}><img src="Iam.jpg" /></div>
                    <div class="item" style={{ "--position": 7 }}><img src="Party.jpg" /></div>
                </div>
                <div class="content">
                    
                    <div class="model">

                    </div>
                </div>

            </div>
        </>
    )
}