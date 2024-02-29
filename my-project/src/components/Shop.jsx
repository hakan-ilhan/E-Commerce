import React, { useEffect } from "react";
import ShopCards from "./ShopCards";
import ProductList from "../layout/ProductList";

import Brands from "../layout/Brands";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/globalAction";

function Shop() {
  const data = [
    {
      images:
        "https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ocTlAqMY4gKJiOs60IJt0mbZm6gaRY0oPmzufaihvUebPGFq4XnVhNzsyM18xgDkc95UZsYh-zCZ3jyLfXcJWZhDMow8-tqsD9A98hGqpgf756bQTMxBwqTa1JEfXa0tMaRINWBVM2MjJesfDy2AXxNxNy05dmtiaN~7r1~EB7jgurB9jH-xZQ-BHcT07zJwzLb-ZjwGE-9~MlaGg1gkXMYdcREWL~SsgQmzcn47PpcqqIQLqfFtXW1flUkcQNe4AShRP3gfvdVSnI4JSqR6X7hYlUfiqKHkuIdir7LgIe2WHW1TFtIeiHov5V9bp3FhPvNdIvO23WwotvT9UMCXjg__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ryz3MsjCph2z2LebjV27GGStbrUJDr6oJqnhlW5SXBjSckLYLc0IHc4eBFv8-0oTDpFNzpSO4ULKGIxCbC35AlXAOZWeXU4SvFjs~YnRsoEfxqnZnFC47njnJe~iPL5uI~UiUkgSJnP9xxRGi1Mw9bOMmmSWu6wdVees1Ug2YBtb4I1gzwe7EIwxyA9VBzz5FTWW8PpwMcfARDLPJ6Idf1pTR7g6sVJYYho-BHpXmBTtK-Ah1tQGRfRXXrBMg~ITjkNq1qZOzdPyejijoXH7aPSNdYHPRkaP1vg9mglm0~LWG0My4oC-KvMoJI1gFFvCxw7n7l9~2SCJawmsTRRdbQ__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JjaEgDIevDDv1H~YYILMUUXEvI4gSyHZdhFmf89t8IaTyyvSwfBkYwN7QbVA-USvy789g-62UbrajZi4J9PgSo1vjthxgy2~75N6PEOHRS821RqHQrKm77quR63AGdoZICParE1hJADzACjqXG84gCQWUTzZydvxXgAZiyrmaOyxTbxNDoMdvhEzL4ZYRsd1x2DGkByv6qSJF54uDrlyZBo5SNnjfejvkgnFi5Olub1FucNKWSENbexSwRSdfy9j4hVtJPNP6yaPHex~fxgFI6u3bisn1V7RTXYuh~4bHoKHtgqLmyDD7SK7byIAmuTCXlC6S6g5sKrN9nBd~HCnYw__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPGiofGjeTmDEoEzymQw4Z0jpcouEnhtjlYBFb~PTY1-eNftL4CNyihS4JiaaV-hCZgrXO0eB9Ysyc0mlqm04ppIkX7JOqWV4Or2NrS885ZfFRKistjdLcBMMW1c-NIb6TdRNvPhjiMZtgjJigQYSvL5NnRXsfHvoRfOKmUBukabi~~ZzN6ojyDNG4cl7E8vSqWA0feHs43Qycjv3fTTBtBoblXllXKLKIIGqRaNrxb7q18426l2lz~yVa6OMcdRR7LA4H22Fz35aR0WCQunAO09WHlaqBKHxEUGmJpg6eYXzfq41PuQktpFAK54nkx-qwFPJ2L9MBRZRmMyWe6phA__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/192d/37cf/726d1f63d6a96c19556e7a721f4f64da?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a399Inw8PwWle~w7WXSU0KP~JMrQZTHlD~qvuXp4nth6Zxz3IrEvw8yRyy4izeWbA6rZda8j24jBgnvNp5cZUvQCAkwA-5D8KHyeVs-Wq9o3-YWkOs1OA1mLxxUYXR2tiB2SGgYi-9Y57trHH3E0Ea17QASi~ltu07DtAIHJVdFp7D~QyJb7erygb~jJlM0CTRKnDdGxSZAgNlwdJo~vclq89Rvix867dV8SzpOoVsamVAP3d2lOiMzuPwPCjvOaVlkT7DfFNeK7oZ-AZnMNJksmLUXb347kRqZnxu7bOMp4AiJ4RmJdfv2R99Cs9lL2pmSSe1mAT-hd4u7FK15t1g__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/8696/d051/d5b4e9d2b71de14231ff0f1540509e72?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8iKhuUP7YZWuw2AD6mCD10JApVFPKSERYPtuWnS~mVIN43vLI-Rq~JKsEezHTj1bJ5K8aED1HKHBFupNF7PWmZ2hwW67qm0mUoFFpcoQCBJ8auMNUkDzW8jeItPhgz5INeFa9928SyY~7CUJcIOTXlF8H2Y5OGvgdyk2P5OuBloryOnY-0jjEw9vwOV~ppwbcRWYnLZKj3fWc9PT7YRGNiXLFuFHIZwpTZ3kDER6zw1Hs09S6M8jmP7T5Lg3j1h0Gds5gILM1fpTf7pmQmRFLyJIT0-mawbs3yiqMZ7ZP0uvm5Ih5s6i8rRFWcr09ksIWq3WUdUEuBHQDuo-Chckw__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/e93a/ae2e/1138e5741f6879c9d8b83f0b79f972ce?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZU5de0YXBKWyaQqjHLwJeWChgFCF3kUcOWxx0iej4fjJ-U6tzFTRUtWM93JEUDU1WnRNhnRB2EPmRBOWz6B6XNmq75rgzQMuoVyP2W~~aaIEvKdXpXDXQtzuAMw0PkE5wBFYhrWT4IEVJ6ohDbDU~kmI6EjJ-w3AGhHNXRoQW64WWYwjFOuADaHEzgtfCI~bs2Unl2d7m3qGJZVaKvX~2KugYv4baXH9NVPqg0zjD87OW2Ds~xvWwjm5qxyOFjeQ4qEFjLfOjYFpdHSapwj8BafVtTx46-4UtPoVO91pwzIy7cTNk2~MvsniuPtRXhY-DvQUoAIBVZoTB8uYoO4CKg__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/a014/4955/2eeaef7ecedd3954687aefbdb6236bb6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6RLYPG3hpW~KDdRuIEi63zKQ2-Jr74ZPNuDPlBDGo94yULIV3-KV~mOZHtY3ZAoOh24BpUtEc5fWPynky73NqVAa30OQ14oNp8Au0hKviR726OE9QRwyrhDaWABR5fV0gPIDHOQbIFuEfUS4xXlk1WZSJ5yuuxDapMlBFjHyLoZXndxAuM5erzJGMNr00o6DlQgDWUWojNbmM05Q43bstUY5vk4CUyXOS43hK6xNkJtybAT4V~V6ZmFI1zTStczph3DPzJVsNDaVJ3Sir~WQGFt98GEXCQMhK6zsmjgHFFXUYiCWqz6tQofnxB4Jp3Tj685XXITfFxnv211bQ4Nyg__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/26f0/6d36/b8be071a9cfb336e8edfa8e534284b19?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HO4ULyKFCxgQzBrM4MP3~Vy286oGU5frEjejSwbz0nEU-siBv3CAmhbaUjo5MUx2v5iA0nzSNE5enlWeNG0bo2FF-4vEOluWHT25EXqkPbViWUrS2ESK0OogEE7XFyYxUo~SOxWCFiQFsxENBtGUrkKkU2qd9LeVTkQbW18LaY14a-A3dX8X0Zjaaxhix16Mi0AZ0NZvXRtyLw80hXoyjpY1xgOoh8GLfb2Wq-gcObWide85QgJsjm1D969TUpE9OGvRxGjwhKhZlgitSDwOzUIXvSaF6dZoJkQUhYMvj2aQUBYnIMgd4G1LiaQLn8oCz-N3o9c5bwbCn3Hsq3KMZA__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/6722/d236/f78733bd50e39ff93410c2469644d50e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJJrfg~inrqI3e57Y2AbyWxwhGfvGN0Bp6Y-q-S96wDvezGaC28EV3X8~Bujozc1WLuwAkBhuTNOmzxm2OYFB3ycg-oi0YLT5oTDsUE-IMKK7qjhfyKqPqTm6Ji39BRQNVv5lSAYiY6LDC7FDvmi8uReL-r~yKccwO5x3w11UHksQEJ3YTlpThzpZgI0Uh9cOJp1GYgLDoWhpgrUZm0XrCMx5GHpCHWhik1Rka~Y8MX7QfBka8oDaL50lpcoW9DatUx0z9k54pOozC-n-HXzwywI73S0siWu0NY9UKTxvo5RO0OsNz4EI8oOqIwovG2Rc-KMUjYGWTdgX97bni-26Q__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/605b/8375/2e220c164e230e86bf1054bccbd5ccab?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYesbnFPqDnZGBJpb-OVHI2A6vJdRw41poOTYnlbPnQLJepGyfDDl7lYtXiB6NKaxhAE3AW-pRrh~3JtmZgSnnYFeLptcdWdUc1bqYYU8gmyfBnz8D6qUizguZvEiotm8GUbZ1mznTMQmTjsIhqgZl8Mxjnv-KYgas-aETFQXCAzHRYGP8ou7A3WACE0ccdYmBapcUS~H63Y79xhRmEGILR8tubnkK8fydhioV~f45~EEZafytOtHatU4W9hJADyy12NCwWVKRatDV~NS7aks27DOwb9UbOMXGQeRKBj0VL0-DY4g5D27Ye4itDEbaJyqU91YzeUC~gJEOD05i-HCw__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/ab7b/991d/7f3b413395097d70baef867596099727?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I1Dt9n~6Zfw2qyCEj1Yohe1V7fS6vV7AC8EXpzN7Vja7NkLnKUdVCXp~OHKBJc231fifetpFOsEF~WtbKBbgF2Q5J2lq1Yc1ezdTHF-feRwR3QIy7VeKXHD85KjvDgn9hejWZIzPBMDDOE1rFqq5g3liq3Xa4WDRy~czN9~Of~iOIJTTrC5Cew-8Vvn6xPD6X3xJh0jbxzyVFAyTheCQCpVTFGsWGWx0CfqJK6OZURR962pfVsHtuoc3VKq8XVxHRaSirduq3FY8g80g0Wd68lQcg2qrYHFYBh3OgqbyRPiqGCylcSwYd5uexmrQypmK2mbzdpeI30d4f9dTqJqBkw__",
      h5: "Graphic Design",
      a: "English Department",
      price: "$16.48",
      price1: "$6.48",
      colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <ShopCards />
      <div className="max-w-[1052px]  m-auto py-12">
        <ProductList data={data} />
      </div>
      <Brands />
    </div>
  );
}

export default Shop;
