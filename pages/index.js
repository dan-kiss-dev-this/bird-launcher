import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import gameLevel from '../data/levels/level_1.json';

import Bird from "@/components/Bird";
import Block from "@/components/Block";

const Wrapper = styled.div`
  position: relative;
  height: 405px;
  width: 720px;
  margin: 60px auto;
  background: url("/images/background1.jpeg");
  background-size: contain;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.45) 1px 1px 6px;
  cursor: pointer;
  overflow: hidden;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  & .flying-bird {
    animation: launchBird 2s 1 linear;
  }

  & .overlay {
    z-index: 10;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes launchBird {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(
        ${(props) => props.birdTargetX}px,
        -${(props) => props.birdTargetY}px
      );
    }
  }

  @media (max-width: 720px) {
    width: 100vw;
    height: 56.25vw;
    border-radius: 0;
  }
`;

const birdx = 50;
const birdy = 50;

export default function Home() {
  const [isBirdFlying, setIsBirdFlying] = useState(false);
  const [birdTargetX, setBirdTargetX] = useState(null);
  const [birdTargetY, setBirdTargetY] = useState(null);

  const onLaunch = (e) => {
    const leftOffset = (window.innerWidth - e.target.clientWidth) / 2;
    const topOffset = 60;

    const xclick = e.pageX - leftOffset;
    const yclick = Math.abs(e.pageY - topOffset - e.target.clientHeight);

    const slope = (yclick - birdy) / (xclick - birdx);
    const angle = Math.atan(slope);

    const xtarget = 2400 * Math.cos(angle);
    const ytarget = 1800 * Math.sin(angle);

    setBirdTargetX(xtarget);
    setBirdTargetY(ytarget);

    if (xclick > 0 && yclick > 0) {
      setIsBirdFlying(true);
    }

    if (!isBirdFlying) {
      setTimeout(() => {
        setIsBirdFlying(false);
      }, 2000);
    }
  };

  return (
    <>
      <Head>
        <title>Bird Launcher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper
        onClick={onLaunch}
        id="background"
        birdTargetX={birdTargetX}
        birdTargetY={birdTargetY}
      >
        <div className="overlay" />
        <Bird x={birdx} y={birdy} isBirdFlying={isBirdFlying}></Bird>
        {gameLevel.map((rock, index) => <Block cordX={rock.cordX} cordY={rock.cordY} key={rock.id} />)}

      </Wrapper>
    </>
  );
}
