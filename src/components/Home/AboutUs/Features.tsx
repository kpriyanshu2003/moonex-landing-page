interface ContainerData {
  icon: JSX.Element;
  title: string;
  content: string;
}

function Features() {
  const data: ContainerData[] = [
    {
      icon: (
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 5.375V37.625"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.9652 10.75H17.7673C16.3814 10.75 15.0522 11.3163 14.0722 12.3243C13.0922 13.3323 12.5416 14.6995 12.5416 16.125C12.5416 17.5505 13.0922 18.9177 14.0722 19.9257C15.0522 20.9337 16.3814 21.5 17.7673 21.5H25.2326C26.6185 21.5 27.9477 22.0663 28.9277 23.0743C29.9077 24.0823 30.4583 25.4495 30.4583 26.875C30.4583 28.3005 29.9077 29.6677 28.9277 30.6757C27.9477 31.6837 26.6185 32.25 25.2326 32.25H12.5416"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Cheapest TXs",
      content:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6666 5H8.33329C7.41282 5 6.66663 5.74619 6.66663 6.66667V16.9414C6.66663 29.244 17.1235 33.9193 19.5163 34.8281C19.8333 34.9485 20.1666 34.9485 20.4836 34.8281C22.8764 33.9193 33.3333 29.244 33.3333 16.9414V6.66667C33.3333 5.74619 32.5871 5 31.6666 5Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.6667 13.3333L17.7778 23.3333L13.3334 18.3333"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "CerTIK",
      content:
        "We are Audited by Certik. CertiK is the leading security-focused ranking platform to ",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66663 6.66666L33.3333 33.3333"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.8241 14.9475L22.9029 12.0264C23.5345 10.4185 23.9556 8.70502 24.1326 6.91968C24.2374 5.86297 25.0881 5 26.15 5H28.0727C32.3203 5 35.8622 8.4968 34.8143 12.6131C34.0884 15.4645 32.9642 18.1568 31.5044 20.6273M21.3152 21.3146C19.474 23.1557 17.3232 24.6872 14.9475 25.8241L12.0264 22.9029C10.4185 23.5345 8.70501 23.9556 6.91968 24.1326C5.86297 24.2374 5 25.0881 5 26.15V28.0727C5 32.3203 8.49681 35.8622 12.6131 34.8143C18.0499 33.4302 22.9083 30.5981 26.7534 26.7528"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "No Contract Sells",
      content: "No contract sells to fund the marketing wallets",
    },
    {
      icon: (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4167 30.0833L33.25 30.0833"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.75 30.0833H9.5"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.4583 34.0417C15.6445 34.0417 17.4167 32.2695 17.4167 30.0833C17.4167 27.8972 15.6445 26.125 13.4583 26.125C11.2722 26.125 9.5 27.8972 9.5 30.0833C9.5 32.2695 11.2722 34.0417 13.4583 34.0417Z"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M30.0833 19H33.25"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.75 19H22.1667"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.125 22.9583C28.3111 22.9583 30.0834 21.1861 30.0834 19C30.0834 16.8139 28.3111 15.0417 26.125 15.0417C23.9389 15.0417 22.1667 16.8139 22.1667 19C22.1667 21.1861 23.9389 22.9583 26.125 22.9583Z"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5833 7.91666H33.25"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.75 7.91666H12.6667"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.625 11.875C18.8111 11.875 20.5834 10.1028 20.5834 7.91668C20.5834 5.73055 18.8111 3.95834 16.625 3.95834C14.4389 3.95834 12.6667 5.73055 12.6667 7.91668C12.6667 10.1028 14.4389 11.875 16.625 11.875Z"
            stroke="#F5F6F8"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "CrossDex Support",
      content:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];
  return (
    <div className="mt-10">
      <div className="font-fira text-4xl font-extrabold text-center">
        Our <span className="text-primary">Features</span>
      </div>
      <div className="grid grid-rows-4 md:grid-cols-4 grid-cols-1 md:grid-rows-1 gap-5 md:gap-10 mt-10">
        {data.map((i) => (
          <Container
            key={i.title}
            icon={i.icon}
            title={i.title}
            content={i.content}
          />
        ))}
      </div>
    </div>
  );
}

function Container({
  icon,
  title,
  content,
}: {
  icon: JSX.Element;
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-lg bg-white/5 p-4 border-white/20 border">
      <div className="rounded-full bg-white/10 w-fit p-3">{icon}</div>
      <div className="mt-10">
        <span className="font-raleway font-semibold pb-2">{title}</span>
        <br />
        <span className="text-white/70">{content}</span>
      </div>
    </div>
  );
}

export default Features;
