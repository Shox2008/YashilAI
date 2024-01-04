import React from "react";
import { Block, Anchor } from "./style";

export default function Navbar({ open }) {
  console.log(window.location);
  return (
    <Block x={open ? "0%" : "-100%"}>
      <div>
        <Anchor href="#">
          <svg
            width="100"
            height="37"
            viewBox="0 0 97 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0113 31.2216C20.1761 31.2216 19.4346 31.0824 18.7869 30.804C18.1448 30.5199 17.6363 30.0937 17.2613 29.5256C16.892 28.9517 16.7073 28.233 16.7073 27.3693C16.7073 26.642 16.8352 26.0284 17.0908 25.5284C17.3465 25.0284 17.6988 24.6222 18.1477 24.3097C18.5965 23.9972 19.1136 23.7614 19.6988 23.6023C20.284 23.4375 20.909 23.3267 21.5738 23.2699C22.3181 23.2017 22.9176 23.1307 23.3721 23.0568C23.8266 22.9773 24.1562 22.8665 24.3607 22.7244C24.571 22.5767 24.6761 22.3693 24.6761 22.1023V22.0597C24.6761 21.6222 24.5255 21.2841 24.2244 21.0455C23.9232 20.8068 23.517 20.6875 23.0056 20.6875C22.4545 20.6875 22.0113 20.8068 21.6761 21.0455C21.3408 21.2841 21.1278 21.6136 21.0369 22.0341L17.1931 21.8977C17.3068 21.1023 17.5994 20.392 18.071 19.767C18.5482 19.1364 19.2016 18.642 20.0312 18.2841C20.8664 17.9205 21.8693 17.7386 23.0397 17.7386C23.8749 17.7386 24.6448 17.8381 25.3494 18.0369C26.0539 18.2301 26.6676 18.5142 27.1903 18.8892C27.713 19.2585 28.1164 19.7131 28.4005 20.2528C28.6903 20.7926 28.8352 21.4091 28.8352 22.1023V31H24.9147V29.1761H24.8124C24.5795 29.6193 24.2812 29.9943 23.9176 30.3011C23.5596 30.608 23.1363 30.8381 22.6477 30.9915C22.1647 31.1449 21.6193 31.2216 21.0113 31.2216ZM22.2982 28.4943C22.7471 28.4943 23.1505 28.4034 23.5085 28.2216C23.8721 28.0398 24.1619 27.7898 24.3778 27.4716C24.5937 27.1477 24.7016 26.7727 24.7016 26.3466V25.1023C24.5823 25.1648 24.4374 25.2216 24.267 25.2727C24.1022 25.3239 23.9204 25.3722 23.7215 25.4176C23.5227 25.4631 23.3181 25.5028 23.1079 25.5369C22.8977 25.571 22.696 25.6023 22.5028 25.6307C22.1107 25.6932 21.7755 25.7898 21.4971 25.9205C21.2244 26.0511 21.0141 26.2216 20.8664 26.4318C20.7244 26.6364 20.6533 26.8807 20.6533 27.1648C20.6533 27.5966 20.8068 27.9261 21.1136 28.1534C21.4261 28.3807 21.821 28.4943 22.2982 28.4943ZM42.5724 21.9062L38.7457 22.0085C38.706 21.7358 38.598 21.4943 38.4219 21.2841C38.2457 21.0682 38.0156 20.9006 37.7315 20.7812C37.4531 20.6562 37.1293 20.5938 36.7599 20.5938C36.277 20.5938 35.8651 20.6903 35.5241 20.8835C35.1889 21.0767 35.0241 21.3381 35.0298 21.6676C35.0241 21.9233 35.1264 22.1449 35.3366 22.3324C35.5526 22.5199 35.9361 22.6705 36.4872 22.7841L39.0099 23.2614C40.3168 23.5114 41.2883 23.9261 41.9247 24.5057C42.5668 25.0852 42.8906 25.8523 42.8963 26.8068C42.8906 27.7045 42.6236 28.4858 42.0952 29.1506C41.5724 29.8153 40.8565 30.3324 39.9474 30.7017C39.0383 31.0653 37.9986 31.2472 36.8281 31.2472C34.9588 31.2472 33.4844 30.8636 32.4048 30.0966C31.331 29.3239 30.7173 28.2898 30.5639 26.9943L34.6804 26.892C34.7713 27.3693 35.0071 27.733 35.3878 27.983C35.7685 28.233 36.2543 28.358 36.8452 28.358C37.3793 28.358 37.8139 28.2585 38.1491 28.0597C38.4844 27.8608 38.6548 27.5966 38.6605 27.267C38.6548 26.9716 38.5241 26.7358 38.2685 26.5597C38.0128 26.3778 37.6122 26.2358 37.0668 26.1335L34.7827 25.6989C33.4702 25.4602 32.4929 25.0199 31.8508 24.3778C31.2088 23.7301 30.8906 22.9062 30.8963 21.9062C30.8906 21.0312 31.1236 20.2841 31.5952 19.6648C32.0668 19.0398 32.7372 18.5625 33.6065 18.233C34.4758 17.9034 35.5014 17.7386 36.6832 17.7386C38.456 17.7386 39.8537 18.1108 40.8764 18.8551C41.8991 19.5937 42.4645 20.6108 42.5724 21.9062ZM48.8758 23.5341V31H44.7081V13.5455H48.7394V20.3125H48.8843C49.1797 19.5057 49.6627 18.875 50.3331 18.4205C51.0093 17.9659 51.836 17.7386 52.8133 17.7386C53.7337 17.7386 54.5349 17.9432 55.2167 18.3523C55.8985 18.7557 56.4269 19.3267 56.8019 20.0653C57.1826 20.804 57.3701 21.6676 57.3644 22.6562V31H53.1968V23.4744C53.2025 22.7472 53.0207 22.179 52.6513 21.7699C52.282 21.3608 51.7621 21.1562 51.0917 21.1562C50.6542 21.1562 50.2678 21.2528 49.9326 21.446C49.603 21.6335 49.3445 21.9034 49.157 22.2557C48.9752 22.608 48.8814 23.0341 48.8758 23.5341ZM59.726 31V17.9091H63.8936V31H59.726ZM61.814 16.3835C61.2288 16.3835 60.726 16.1903 60.3055 15.804C59.8851 15.4119 59.6748 14.9403 59.6748 14.3892C59.6748 13.8437 59.8851 13.3778 60.3055 12.9915C60.726 12.5994 61.2288 12.4034 61.814 12.4034C62.4049 12.4034 62.9078 12.5994 63.3226 12.9915C63.743 13.3778 63.9532 13.8437 63.9532 14.3892C63.9532 14.9403 63.743 15.4119 63.3226 15.804C62.9078 16.1903 62.4049 16.3835 61.814 16.3835ZM70.4739 13.5455V31H66.3063V13.5455H70.4739ZM76.6622 31H72.1281L78.0173 13.5455H83.6337L89.5229 31H84.9889L80.8894 17.9432H80.7531L76.6622 31ZM76.057 24.1307H85.5343V27.3352H76.057V24.1307ZM95.381 13.5455V31H91.1622V13.5455H95.381Z"
              fill="white"
            />
            <path
              d="M22.9766 1.25975C20.0559 3.01612 18.9689 3.90037 17.2876 5.90506C15.652 7.85524 14.5446 9.7388 13.671 12.0887C12.7465 14.5658 12.3147 16.9763 12.2538 20.0348L12.2233 21.5671L11.8322 20.6707C10.4963 17.5819 8.59655 15.0261 6.19395 13.088C5.29996 12.3673 4.85297 12.0705 2.83133 10.8653C0.779221 9.6419 0.697949 9.61162 0.347465 9.89021C-0.00809946 10.1688 -0.0588943 10.5261 0.0528544 11.9312C0.413498 16.6068 2.25735 20.8343 5.1171 23.5476C6.10252 24.4803 6.78317 24.9648 8.99275 26.2911C10.7198 27.3207 11.1668 27.6175 11.3903 27.8598C11.9033 28.417 12.1573 29.0468 12.2335 29.9371C12.2843 30.5246 12.3706 30.7184 12.6601 30.9001C13.0411 31.1303 13.5033 30.9486 13.6811 30.5004C13.7522 30.3126 13.7624 29.7736 13.7624 25.1525C13.7624 19.5503 13.7573 19.7078 14.057 18.9689C14.1332 18.7751 14.3313 18.4601 14.5091 18.2481C14.7986 17.8969 14.9358 17.806 16.6679 16.7764C18.7911 15.5046 19.2889 15.1836 20.0254 14.5779C23.5709 11.6769 25.7601 6.88621 25.9836 1.52623C26.0141 0.811567 26.009 0.73889 25.9074 0.502687C25.7855 0.205921 25.496 0 25.2319 0C25.1201 0.00605774 24.3988 0.405785 22.9766 1.25975ZM24.348 3.02823C23.8147 7.36467 21.7575 11.1318 18.6285 13.4817C17.8971 14.0328 14.1687 16.2616 14.1687 16.1465C14.1687 16.0072 14.5091 14.6264 14.7123 13.9602C15.1135 12.6217 15.7535 11.1136 16.4494 9.8781C16.9777 8.94541 17.5618 8.11567 18.3796 7.14058C19.7968 5.45082 20.8229 4.59081 22.9817 3.28866C23.7639 2.81626 24.409 2.4347 24.4141 2.44076C24.4141 2.44681 24.3887 2.7133 24.348 3.02823ZM2.78562 12.8639C3.42055 13.2455 4.14692 13.6997 4.39582 13.8754C8.02257 16.413 10.6283 20.4709 11.7052 25.2555C11.7763 25.5704 11.8322 25.8611 11.8322 25.8914C11.8322 25.9762 7.79399 23.5476 7.31652 23.1781C5.82823 22.0153 4.44153 20.3861 3.52214 18.7145C2.7653 17.3336 2.2218 15.8377 1.88147 14.2024C1.74432 13.5544 1.55638 12.1735 1.6021 12.1735C1.61226 12.1735 2.1456 12.4824 2.78562 12.8639Z"
              fill="white"
            />
          </svg>
        </Anchor>
        <Anchor href="#about" className="link">
          About
        </Anchor>
        <Anchor href="#support" className="link">
          Support
        </Anchor>
        <p>
          <img src={require("../../Assets/Icon.png")} />
          EN
        </p>
      </div>
      <img src={require("../../Assets/User.png")} className="user" />
    </Block>
  );
}
