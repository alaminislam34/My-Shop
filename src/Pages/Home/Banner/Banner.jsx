import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Banner.css";

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <section className="flex items-center gap-4">
        <div className="truncate max-w-[220px] w-full px-4 border-r">
          <ul className="space-y-2">
            <li>
              <button>Women Fashion`s</button>
            </li>
            <li>
              <button>Men`s Fashion`s</button>
            </li>
            <li>
              <button>Electronics</button>
            </li>
            <li>
              <button>Home & Lifestyles</button>
            </li>
            <li>
              <button>Medicine</button>
            </li>
            <li>
              <button>Sports & Outdoor</button>
            </li>
            <li>
              <button>Baby`s & Toys</button>
            </li>
            <li>
              <button>Groceries & Pets</button>
            </li>
            <li>
              <button>Health & Beauty</button>
            </li>
          </ul>
        </div>
        <div ref={sliderRef} className="keen-slider m-6">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
      </section>
    </>
  );
};

export default Banner;
