import { useEffect, useCallback } from "react";

interface SliderProps {
  children: JSX.Element[] | JSX.Element;
  setObserver: any;
  observer: IntersectionObserver | null;
  setIsVisible: (isVisible: string) => void;
}

const Slider = ({ children, observer, setObserver, setIsVisible }: SliderProps) => {
    const callback = useCallback((entries: IntersectionObserverEntry[]) => {
      const entry = entries.find((entry) => entry.isIntersecting);
      if (entry) {
        setIsVisible(entry.target.classList[0].toString());
      } else {
        setIsVisible("");
      }
    }, [setIsVisible]);
    useEffect(() => {
      if (!observer) {
        let options = {
          root: document.querySelector("#slide-container"),
          rootMargin: "0px",
          threshold: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4],
        };

        setObserver( new IntersectionObserver(callback, options));
      }
    }, [setObserver, callback, observer]);

    return (
      <div
        tabIndex={0}
        id="slide-container"
        className="h-[calc(100vh-146px)] top-[48px] relative overflow-y-auto snap-mandatory snap-y"
      >
        {children}
      </div>
    );
};

export default Slider;
