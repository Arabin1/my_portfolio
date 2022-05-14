import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background.background};
  }

  .font {
    font-family: ${({ theme }) => theme.font};
  }

  .background {
    background-color: ${({ theme }) => theme.colors.background.background};
  }
  
  .nav-background {
    background-color: ${({ theme }) => theme.colors.background.nav_background};
  }

  .background-1 {
    background-color: ${({ theme }) => theme.colors.background.background_1};
  }

  .box-background {
    background-color: ${({ theme }) => theme.colors.background.box_background};
  }

  .toggler {
    background-color: ${({ theme }) => theme.colors.toggler_color};
  }

  .nav-text {
    color: ${({ theme }) => theme.colors.nav.nav_text};
    font-style: normal;
    font-weight: normal;
    margin: 3px;
    transition: 0.4s;
  }

  .nav-text:hover {
    color: ${({ theme }) => theme.colors.nav.nav_text_hover};
  }

  .icon {
    color: ${({ theme }) => theme.colors.icon};
    margin: 3px;
    transition: .5s;
  }

  .icon:hover {
    transform: scale(1.5);
    color: ${({ theme }) => theme.colors.icon_hover};
  }
  
  .introduce {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.opacity};
  }

  .content {
    position: relative;
  }

  .content h2 {
    color: ${({ theme }) => theme.colors.icon_hover};
    font-size: 5em;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
  }

  .content h2:nth-child(2) {
    color: ${({ theme }) => theme.colors.button.resume_button_hover};
    animation: animate 4s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
            0% 45%,
            16% 44%,
            33% 50%,
            54% 60%,
            70% 61%,
            84% 59%,
            100% 52%,
            100% 100%,
            0% 100%
    );
  }

  50% {
    clip-path: polygon(
            0% 60%,
            15% 65%,
            34% 66%,
            51% 62%,
            67% 50%,
            84% 45%,
            100% 46%,
            100% 100%,
            0% 100%
      );
    }
  }

  .resume-button {
    background-color:${({ theme }) => theme.colors.button.resume_button};
    color: ${({ theme }) => theme.colors.button.resume_button_text};
    transition: 0.5s;
    padding: 10px 30px;
    border-radius: 7px;
    border: none;
    position: relative;
    font-weight: bold;
    overflow: hidden;
  }
  
  .resume-button::after {
    content: 'MY RESUME';
    position: absolute;
    padding: 10px 30px;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.button.resume_button_hover};
    color: ${({ theme }) => theme.colors.button.resume_button_hover_text};
    display: block;
    width: 100%;
    height: 100%;
    transition: .2s transform ease-out;
    transform: translate(-100%, 0);
    will-change: transform;
    z-index: 0;
  }
  
  .resume-button:hover::after{
    transform: translate(0, 0);
  }

  .link {
    color: ${({ theme }) => theme.colors.button.button_text};
    background: ${({ theme }) => theme.colors.button.button};
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 15px;
    transition: 0.5s;
    border: none;
  }

  .link:hover {
    background: ${({ theme }) => theme.colors.button.button_hover};
    color: ${({ theme }) => theme.colors.button.button_text};
    cursor: pointer;
  }

  .title-text-color {
    color: ${({ theme }) => theme.colors.title_text};
  }
  
  .title-text-size {
    font-size: 45px;
  }

  .des-text-color {
    color: ${({ theme }) => theme.colors.des_text};
  }

  .divider {
    height: 10px;
    border-radius: 50px;
    width: 100px;
    background-color: ${({ theme }) => theme.colors.background.background_1};
    margin: 30px 0px 0px 0px;
  }

  .divider1 {
    height: 7px;
    border-radius: 50px;
    margin-bottom: 8px;
    width: 80px;
    background-color: ${({ theme }) => theme.colors.background.background_1};
  }

  .title {
    margin: 20px 0px 0px 0px;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 20px 10px;
    border: 1px solid ${({ theme }) => theme.colors.background.background_1};
  }

  .skill-container {
    width: 280px;
    background-color: ${({ theme }) => theme.colors.background.background_1};
    padding: 10px;
    margin: 20px 10px;
    border-radius: 30px;
  }

  .icon-skill {
    color: ${({ theme }) => theme.colors.icon};
    font-size: 40px;
    margin-right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .education-text {
    color: ${({ theme }) => theme.colors.education_text};
  }

  .icon-right-arrow {
    color: ${({ theme }) => theme.colors.icon};
    font-size: 90px;
    margin-left: -5px;
  }

  .education-time {
    background-color: ${({ theme }) => theme.colors.background.background_1};
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 180px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    height: 180px;
  }

  .my-toast {
    width: 340px;
    height: 80px;
    margin-top: -20px;
    margin-left: -170px;
    border-radius: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5;
    padding: 15px;
    text-align: center;
    color: #FFF;
  }

  @media only screen and (max-width: 767px) {
    .icon-right-arrow {
      transform: rotate(90deg);
    }
  }

`;
