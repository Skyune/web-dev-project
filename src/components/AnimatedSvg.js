import headerImg from "../assets/img/laptop.svg";
import decorationImg from "../assets/img/decoration.svg";
import laptopshadow from "../assets/img/laptopshadow.svg";
import circle1 from "../assets/img/circle1.svg";
import circle2 from "../assets/img/circle2.svg";
import circle3 from "../assets/img/circle3.svg";
import circle1shadow from "../assets/img/circle1shadow.svg";
import circle2shadow from "../assets/img/circle2shadow.svg";
import circle3shadow from "../assets/img/circle3shadow.svg";

export const AnimatedSvg = () => {
    return (
        <div class = "AnimatedSvg" style={{ position: "relative" }}>
        {/*i wonder if this is a retarded way to do this*/}

<img src={decorationImg} class = "decoration" alt="" style={{ scale: "190%", position: "absolute", top: 0, left: 0, zIndex: 1 }} />
<img src={circle1} alt="Circle 1" class="circle1"  style={{ scale: "190%"}}/>
<img src={circle2} alt="Circle 2" class="circle2" style={{ scale: "190%"}}/>
<img src={circle3} alt="Circle 3" class="circle3" style={{ scale: "190%"}}/>
<img src={circle1shadow} class = "circle1shadow"style={{ scale: "190%"}}/>
<img src={circle2shadow} class = "circle2shadow"style={{ scale: "190%"}}/>
<img src={circle3shadow} class = "circle3shadow" style={{ scale: "190%"}}/>
<img src={laptopshadow} alt="Header Img" class = "laptopShadow" style={{ scale: "190%", position: "absolute", top: 0, left: "-15px", zIndex: 4 }} />

<img src={headerImg} alt="Header Img" class = "laptopImg" style={{ scale: "190%", position: "relative", zIndex: 5 }} />
</div>
    )
}