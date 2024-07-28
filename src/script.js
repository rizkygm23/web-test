//NAVBAR FIXED
window.onscroll = function (){
    const header = document.querySelector('#nav-head');
    const btn = document.querySelector('#cta');
    const btns = document.getElementById('cta');
    const fixednav = header.offsetTop;
    const textCta = document.getElementById('text-cta');
    const scrollUpicon = document.getElementById('scroll-up-icon')
    
    if(window.scrollY > fixednav){
        header.classList.add('navbar-fixed');
        btn.classList.add('btn-fixed');
        scrollUpicon.classList.remove('hidden');
        
        textCta.classList.add('hidden');
        btns.classList.remove('rounded-xl');
        btns.classList.add('rounded-full');
    }else {
        header.classList.remove('navbar-fixed');
        btn.classList.remove('ntn-fixed');
        btn.classList.remove('bg-slate-600');
        scrollUpicon.classList.add('hidden');
        textCta.classList.remove('hidden');
    }
};

const circles = document.querySelectorAll('.circle');

        circles.forEach(circle => {
            circle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            circle.style.animationDelay = `${Math.random() * 5}s`;
            circle.style.left = `${Math.random() * 100}vw`;
            circle.style.top = `${Math.random() * 100}vh`;

            setInterval(() => {
                circle.style.left = `${Math.random() * 100}vw`;
                circle.style.top = `${Math.random() * 100}vh`;
            }, parseFloat(circle.style.animationDuration) * 1000);
        });
// BURGER
// document.addEventListener('DOMContentLoaded', function() {
//     const burger = document.querySelector('#burger');
//     burger.addEventListener('click', function() {
//         const navMenu = document.querySelector('#nav-menu');
//         burger.classList.toggle('burger-active');
//         navMenu.classList.toggle('hidden');
//     });
// });

const burger = document.querySelector('#burger');
const NavMenu = document.querySelector('#nav-menu');
burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    NavMenu.classList.toggle('hidden');
});


const cardData = [
    {
        type: "uiux",
        title: "InvestaSync",
        description: "InvestaSync is an application used to monitor all investment portfolios from various sectors by connecting APIs from the brokers or exchanges you use. With InvestaSync, you can manage and track the performance of your investments in real-time on a single, user-friendly platform.",
        imageUrl: "./img/ui01.png",
        buttonImageUrl: "./img/next.png"
      },
      {
        type: "uiux",
        title: "Zkrow",
        description: "Zkrow is a borrowing and lending project in the crypto world. With Zkrow, users can borrow crypto assets with collateral or offer their assets to be lent out and earn interest. The platform utilizes the latest technology to ensure security and efficiency in every transaction, making it a reliable and transparent solution for users looking to optimize their crypto assets.",
        imageUrl: "./img/ui02.png",
        buttonImageUrl: "./img/next.png"
      },
      {
        type: "uiux",
        title: "Drop Wallet",
        description: "Drop Wallet is a crypto wallet with a unique feature that allows users to monitor and provide statistics on their wallet, especially those based on EVM (Ethereum Virtual Machine). In addition to basic wallet functions, Drop Wallet offers in-depth analysis and statistical reports on your crypto asset activities and values.",
        imageUrl: "./img/ui03.png",
        buttonImageUrl: "./img/next.png"
      },
      {
        type: "uiux",
        title: "Hinkal Protocol",
        description: "Hinkal is a project that uses Account Abstraction (AA) to enhance security and ease of use in blockchain transactions. By leveraging AA technology, Hinkal allows users to have more flexible control over their accounts, including private key management and transaction permissions.",
        imageUrl: "./img/ui04.png",
        buttonImageUrl: "./img/next.png"
      },
      {
        type: "uiux",
        title: "NFT Marketplace",
        description: "NFT Marketplace is a digital platform that enables users to buy, sell, and trade Non-Fungible Tokens (NFTs). The marketplace offers various features such as auctions, direct offers, and integration with multiple blockchains.",
        imageUrl: "./img/ui05.png",
        buttonImageUrl: "./img/next.png"
      },
    {
      type: "node",
      title: "Avail",
      description: "Avail is a Web3 infrastructure layer that allows modular execution layers to scale and interoperate in a trust minimized way.",
      imageUrl: "./img/Avail.png",
      buttonImageUrl: "./img/next.png"
    },
    {
      type: "node",
      title: "Aleo",
      description: "True ZK should provide all three. Aleo is the first place that brings all the power of ZK under one roof.",
      imageUrl: "./img/aleo.png",
      buttonImageUrl: "./img/next.png"
    },
    {
      type: "node",
      title: "Bevm",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nisi non providens aperiam quidem fugit dolorem dignissimos sapiente ullam, eius hic totam a porro laboriosam autem.",
      imageUrl: "./img/bevm.png",
      buttonImageUrl: "./img/next.png"
    },
    {
      type: "node",
      title: "Rivalz",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nisi non providens aperiam quidem fugit dolorem dignissimos sapiente ullam, eius hic totam a porro laboriosam autem.",
      imageUrl: "./img/rivalz.png",
      buttonImageUrl: "./img/next.png"
    },
    {
      type: "node",
      title: "Sonaric",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nisi non providens aperiam quidem fugit dolorem dignissimos sapiente ullam, eius hic totam a porro laboriosam autem.",
      imageUrl: "./img/sonaric.png",
      buttonImageUrl: "./img/next.png"
    }
  ];
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const uiuxContainer = document.getElementById("card-UIUX");
    const nodeContainer = document.getElementById("card-node");
  
    cardData.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.className = "relative card mt-10 rounded-3xl delay-100 duration-300 overflow-hidden bg-sky-100 max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200 transition-transform ease-in-out";
  
      cardElement.innerHTML = `
        <div class="relative w-full h-64">
        <img class="absolute inset-0 w-full h-full object-cover" src="${card.imageUrl}" alt="img">
        </div>
        <div class="p-6">
          <div class="grid grid-cols-2">
            <h1 class="text-2xl font-sans font-semibold text-slate-600 mt-auto mb-auto">${card.title}</h1>
            <button class="bg-slate-300/60 rounded-full w-16 h-16 ml-auto hover:bg-slate-200 hover:-rotate-45 hover:transition-transform ease-in-out">
              <img class="max-w-6 mx-auto" src="${card.buttonImageUrl}" alt="">
            </button>
          </div>
          <h2 class="mt-3 line-clamp-3 min-h-line font-sans font-medium text-slate-500 text-justify text-xl">${card.description}</h2>
        </div>
      `;
  
      if (card.type === "uiux") {
        uiuxContainer.appendChild(cardElement);
      } else if (card.type === "node") {
        nodeContainer.appendChild(cardElement);
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const a = document.getElementById("cta");

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll halus ke atas
      }
    
      window.addEventListener("scroll", handleScroll);
      a.addEventListener('click',scrollToTop)
  
    function handleScroll() {
      if (window.scrollY > 100) { // Atur nilai scroll yang sesuai dengan kebutuhan

      } else {

      }
    }
  

  
    
  });
  