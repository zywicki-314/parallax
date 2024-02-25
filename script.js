"use strict";

window.onload = function () {
  const parallax = document.querySelector(".parallax");

  if (parallax) {
    const content = document.querySelector(".parallax-container");
    const sun = document.querySelector(".parallax-img-sun");
    const cloudsBack = document.querySelector(".parallax-img-clouds-back");
    const cloudsFront = document.querySelector(".parallax-img-clouds-front");
    const mountainsBack = document.querySelector(
      ".parallax-img-mountains-back"
    );
    const mountainsideR = document.querySelector(
      ".parallax-img-mountainside-right"
    );
    const mountainsideL = document.querySelector(
      ".parallax-img-mountainside-left"
    );
    const forestBack = document.querySelector(".parallax-img-forest-back");

    const rockLedge = document.querySelector(".parallax-img-rockLedge");
    const forestFront = document.querySelector(".parallax-img-forest-front");
    const firstFrontCoating = document.querySelector(
      ".parallax-img-forest-firstFrontCoating"
    );

    //
    const ForSun = 5;
    const ForCloudsBack = 70;
    const ForCloudsFront = 55;
    const ForMountainsBack = 20;
    const ForMountainsideR = 25;
    const ForMountainsideL = 15;
    const ForForestBack = 20;
    const ForRockLedge = 50;
    const ForForestFront = 15;
    const ForFirstFrontCoating = 220;

    //
    const speed = 0.25;

    //
    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;

      //

      sun.style.cssText = `transform: translate(${positionX / ForSun})%,${
        positionY / ForSun
      }%;`;
      cloudsBack.style.cssText = `transform: translate(${
        positionX / ForCloudsBack
      }%,${positionY / ForCloudsBack}%);`;
      cloudsFront.style.cssText = `transform: translate(${
        positionX / ForCloudsFront
      }%,${positionY / ForCloudsFront}%);`;
      mountainsBack.style.cssText = `transform: translate(${
        positionX / ForMountainsBack
      }%,${positionY / ForMountainsBack}%);`;
      mountainsideR.style.cssText = `transform: translate(${
        positionX / ForMountainsideR
      }%,${positionY / ForMountainsideR}%);`;
      mountainsideL.style.cssText = `transform: translate(${
        positionX / ForMountainsideL
      }%,${positionY / ForMountainsideL}%);`;
      forestBack.style.cssText = `transform: translate(${
        positionX / ForForestBack
      }%,${positionY / ForForestBack}%);`;
      rockLedge.style.cssText = `transform: translate(${
        positionX / ForRockLedge
      }%,${positionY / ForRockLedge}%);`;
      forestFront.style.cssText = `transform: translate(${
        positionX / ForForestFront
      }%,${positionY / ForForestFront}%);`;
      firstFrontCoating.style.cssText = `transform: translate(${
        positionX / ForFirstFrontCoating
      }%,${positionY / ForFirstFrontCoating}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      //

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // %

      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });

    //

    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }
    const callback = function (entries, observer) {
      const scrollTopProcent =
        (window.pageYOffset / parallax.offsetHeight) * 100;
      setParallaxItemsStyle(scrollTopProcent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets,
    });

    observer.observe(document.querySelector(".content"));

    function setParallaxItemsStyle(scrollTopProcent) {
      content.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 22
      }%);`;
      sun.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 20
      }%);`;
      cloudsBack.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 18
      }%);`;
      cloudsFront.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 16
      }%);`;
      mountainsBack.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 14
      }%);`;
      mountainsideR.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 4
      }%);`;
      mountainsideL.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 4
      }%);`;
      forestBack.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 2
      }%);`;
      rockLedge.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 6
      }%);`;
      forestFront.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 3
      }%);`;
      firstFrontCoating.parentElement.style.cssText = `transform: translate(0%, -${
        scrollTopProcent / 8
      }%);`;
    }
  }
};
