const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

/*const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./Image/air.png",
        },
        {
          code: "darkblue",
          img: "./Image/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./Image/jordan.png",
        },
        {
          code: "green",
          img: "./Image/jorden2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./Image/blazer.png",
        },
        {
          code: "green",
          img: "./Image/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./Image/crater.png",
        },
        {
          code: "lightgray",
          img: "./Image/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./Image/hippie.png",
        },
        {
          code: "black",
          img: "./Image/hippie2.png",
        },
      ],
    },
  ];

*/

  menuItems.forEach((item,index) => {
    item.addEventListener("click" ,()=> {
        // for changing current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        

    });
  });