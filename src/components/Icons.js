// here I have used https://react-svgr.com/playground/ to convert svg to react component
// Here are all the svg Icons that I hae used in this project as a react component

export const NailIcon = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  fill= "#ffdd40"
  style={{
    enableBackground: "new 0 0 58.04 122.88",
  }}
  viewBox="0 0 58.04 122.88"
  {...props}
>
  <path d="M4.04 122.88H0V46.75c0-4.96.01.31.01-1.46-.02-9.94-.03-17.92 7.16-26.72.13-.16.27-.29.43-.4v-2.86c0-7.46 5.64-12.17 12.88-14.19C23.18.37 26.12-.01 29.06 0c2.95.01 5.89.39 8.61 1.15 7.38 2.07 13.17 6.88 13.17 14.45v2.93c.05.05.1.1.14.15 7.16 8.61 7.12 16.3 7.06 25.91v78.29H54V47.04c0-.68.01-.92.02-2.46.04-7.1.07-13.05-3.18-19.02V26c0 15.53-5.49 25.4-12.53 29.77-2.84 1.76-5.94 2.64-9.05 2.64-3.11 0-6.2-.88-9.04-2.62-7.09-4.34-12.63-14.08-12.63-28.96v-1.81C4 31.35 4.01 37.7 4.03 45.29c0 2.74.01-2.51.01 1.46v76.13zM47.29 26V15.6c0-5.69-4.65-9.39-10.59-11.06-2.42-.68-5.04-1.02-7.65-1.03-2.62-.01-5.23.33-7.64 1-5.79 1.61-10.29 5.22-10.29 10.79v11.52c0 13.5 4.79 22.19 10.92 25.95 2.29 1.4 4.75 2.11 7.2 2.11s4.91-.7 7.18-2.11C42.53 48.99 47.29 40.15 47.29 26zM17.48 96.71a1.764 1.764 0 0 1-1.11-2.23c.31-.92 1.31-1.42 2.23-1.11 4.7 1.58 7.59 2.28 10.4 2.24 2.8-.04 5.74-.84 10.49-2.26.93-.28 1.92.25 2.19 1.19.28.93-.25 1.92-1.19 2.19-5.03 1.5-8.17 2.35-11.46 2.4-3.27.05-6.47-.71-11.55-2.42zm-3.69-10.24a1.764 1.764 0 0 1-1.11-2.23c.31-.92 1.31-1.42 2.23-1.11 4.7 1.58 9.4 2.28 14.1 2.24 4.71-.05 9.43-.84 14.18-2.26.93-.28 1.92.25 2.19 1.19s-.25 1.92-1.19 2.19c-5.03 1.5-10.09 2.35-15.16 2.4a45.94 45.94 0 0 1-15.24-2.42z" />
</svg>
  );
  
  export const HamburgetMenuOpen = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill= "#bd8abf"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 17h18M3 12h18M3 7h18"
      />
    </svg>
  );
  
  export const HamburgetMenuClose = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill= "#fff"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <path
          fill="currentColor"
          d="m12 14.121 5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"
        />
      </g>
    </svg>
  );
  

  export const ShoppingIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 122.88 111.85"
    fill= "#000"
    {...props}
  >
    
    <path d="M4.06 8.22A4.15 4.15 0 0 1 0 4.06 4.13 4.13 0 0 1 4.06 0h6A19.12 19.12 0 0 1 20 2.6c5.44 3.45 6.41 8.38 7.8 13.94h91a4.07 4.07 0 0 1 4.06 4.06 5 5 0 0 1-.21 1.25l-10.59 42.76a4 4 0 0 1-4 3.13H41.51c1.46 5.41 2.92 8.32 4.89 9.67C48.8 79 53 79.08 59.93 79h47.13a4.06 4.06 0 0 1 0 8.12H60c-8.63.1-13.94-.11-18.2-2.91s-6.66-7.91-8.95-17L18.94 14.46c0-.1 0-.1-.11-.21a7.26 7.26 0 0 0-3.12-4.68A10.65 10.65 0 0 0 10 8.22H4.06Zm80.32 25a2.89 2.89 0 0 1 5.66 0v15.71a2.89 2.89 0 0 1-5.66 0V33.24Zm-16.95 0a2.89 2.89 0 0 1 5.67 0v15.71a2.89 2.89 0 0 1-5.67 0V33.24Zm-16.94 0a2.89 2.89 0 0 1 5.66 0v15.71a2.89 2.89 0 0 1-5.66 0V33.24Zm41.72-8.58H30.07l9.26 34.86H105l8.64-34.86Zm2.68 67.21a10 10 0 1 1-10 10 10 10 0 0 1 10-10Zm-43.8 0a10 10 0 1 1-10 10 10 10 0 0 1 10-10Z" />
  </svg>
  );
  