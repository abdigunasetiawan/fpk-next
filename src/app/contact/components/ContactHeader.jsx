const contactDetails = [
  {
    icon: (
      <svg
        className="w-12 md:shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 54 54"
      >
        <circle cx="27" cy="27" r="27" fill="#FF7E3E" />
        <path
          fill="#fff"
          d="m31.356 30.204-1.874 2.344a19.774 19.774 0 0 1-7.03-7.029l2.343-1.874a1.591 1.591 0 0 0 .46-1.89l-2.136-4.808a1.593 1.593 0 0 0-1.856-.895l-4.066 1.053a1.601 1.601 0 0 0-1.182 1.77 23.628 23.628 0 0 0 20.11 20.11 1.602 1.602 0 0 0 1.77-1.182l1.054-4.066a1.594 1.594 0 0 0-.895-1.857l-4.808-2.133a1.592 1.592 0 0 0-1.89.457Z"
        />
      </svg>
    ),
    title: "Nomor Telepon",
    value: "+62822 3321 1131",
  },
  {
    icon: (
      <svg
        className="w-12 md:shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 54 54"
      >
        <circle cx="27" cy="27" r="27" fill="#FF7E3E" />
        <path
          fill="#fff"
          d="M36.5 17h-18c-1.38 0-2.5 1.123-2.5 2.51v2.006a.5.5 0 0 0 .26.44l11 6.023c.15.081.33.081.48 0l11-6.022a.502.502 0 0 0 .26-.44v-2.008A2.505 2.505 0 0 0 36.5 17Z"
        />
        <path
          fill="#fff"
          d="M28.218 29.235c-.447.24-.987.24-1.434 0L16.011 23.44l-.012.008v10.406c0 1.362 1.12 2.466 2.5 2.466h18c1.38 0 2.5-1.104 2.5-2.466V23.448l-.011-.007-10.77 5.794Z"
        />
      </svg>
    ),
    title: "Email",
    value: "fpkjaya1234@gmail.com",
  },
  {
    icon: (
      <svg
        className="w-12 md:shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 54 54"
      >
        <circle cx="27" cy="27" r="27" fill="#FF7E3E" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M19 23.811c0-5.202 4.068-8.311 8-8.311 3.932 0 8 3.109 8 8.311 0 5.517-7.354 13.22-7.667 13.546a.46.46 0 0 1-.666 0C26.354 37.032 19 29.328 19 23.81Zm5.177 0c0 1.618 1.266 2.933 2.823 2.933s2.823-1.315 2.823-2.933c0-1.618-1.266-2.933-2.823-2.933s-2.823 1.315-2.823 2.933Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Alamat",
    value: "Jl. Veteran No. 4A-9A Binjai, Binjai 20714",
  },
];

const ContactHeader = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 xl:px-16">
      <div className="pt-16 text-center md:mx-auto md:max-w-md">
        <h1 className="text-3xl font-bold text-pretty">
          Yuk, Ngobrol dengan Kami!
        </h1>
        <p className="mt-4 text-black/70">
          Punya pertanyaan, ide keren, atau sekadar mau say Hi? Kami senang
          banget mendengarnya dari kamu! Bisa hubungi kami lewat cara-cara di
          bawah ini ya!
        </p>
      </div>
      <div className="mx-auto mt-12 flex flex-col gap-4 md:flex-row md:justify-between lg:justify-between xl:justify-evenly">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 md:w-1/3 md:items-start lg:w-[240px] xl:w-max"
          >
            {item.icon}
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-black/70">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHeader;
